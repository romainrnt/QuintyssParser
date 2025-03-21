import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";
import * as babelParser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import * as t from "@babel/types";
import { v4 as uuidv4 } from "uuid";
import type { Element } from 'domhandler';
import {
  tagToWidgetTypeMap,
  reactComponentToWidgetTypeMap,
  widgetTypeToJsonType,
  ignoredTags,
  innerContainerTags,
  WidgetData
} from "./types";

export const translatableTexts: Record<string, string> = {};

export const generateUniqueId = (prefix: string) => `${prefix}-${uuidv4().substring(0, 8)}`;

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// Crée un identifiant plus descriptif pour le modelId
export function createModelId(section: string | null, componentType: string, context: string = ""): string {
  const sectionPrefix = section ? section.replace("Section", "").toLowerCase() : "global";
  const contextPart = context ? `-${context.toLowerCase()}` : "";
  const uniquePart = `-${uuidv4().substring(0, 6)}`;

  return `${sectionPrefix}${contextPart}-${componentType}${uniquePart}`;
}

// Fonction pour extraire le nom de section à partir d'un commentaire
export function extractSectionFromComment(comment: string): string | null {
  // Rechercher les motifs comme "// SectionName" ou "/* SectionName */"
  const sectionMatch = comment.match(/\/\/\s*([A-Za-z0-9]+Section)|\/\*\s*([A-Za-z0-9]+Section)/);
  if (sectionMatch) {
    return sectionMatch[1] || sectionMatch[2];
  }
  return null;
}

export async function processHtmlFile(
  filePath: string,
  pageSlug: string,
  outputDir: string
): Promise<{ widgets: WidgetData[], section: string | null }> {
  const pageWidgetCollection: WidgetData[] = [];
  const stats: Record<string, number> = {};

  const data = fs.readFileSync(filePath, "utf8");
  const $ = cheerio.load(data);

  processBodyContent($, pageWidgetCollection, stats);

  const outputFilePath = path.join(outputDir, `${pageSlug}.html`);
  fs.writeFileSync(outputFilePath, $.html());

  console.log(`   HTML traité : ${Object.entries(stats).map(([type, count]) => `${type}=${count}`).join(', ')}`);

  // Pour les fichiers HTML, on n'a pas de commentaire de section facilement détectable
  return { widgets: pageWidgetCollection, section: null };
}

function processBodyContent(
  $: cheerio.CheerioAPI,
  pageWidgetCollection: WidgetData[],
  stats: Record<string, number> = {}
): void {
  function processNodeRecursively(
    node: Element,
    insideContainer: boolean = false,
    insideList: boolean = false
  ): void {
    const tag = node.tagName.toLowerCase();
    const isContainerTag = innerContainerTags.includes(tag);
    const isListTag = tag === 'ul' || tag === 'ol';

    const nextInsideContainer = insideContainer || isContainerTag;
    const nextInsideList = insideList || isListTag;

    const children = $(node).children().toArray();
    for (const child of children) {
      processNodeRecursively(child as Element, nextInsideContainer, nextInsideList);
    }

    if (!ignoredTags.includes(tag)) {
      transformElementToWidget($, node, pageWidgetCollection, stats, insideContainer, insideList);
    }
  }

  $('body').children().each((_, element) => {
    if (!ignoredTags.includes(element.tagName.toLowerCase())) {
      processNodeRecursively(element as Element);
    }
  });
}

function transformElementToWidget(
  $: cheerio.CheerioAPI,
  element: Element,
  pageWidgetCollection: WidgetData[],
  stats: Record<string, number> = {},
  insideContainer: boolean = false,
  insideList: boolean = false
): void {
  const tag = element.tagName.toLowerCase();
  if (ignoredTags.includes(tag)) {
    return;
  }

  if (tag === 'li' && $(element).children().length === 0) {
    const text = $(element).text().trim();
    if (text) {
      const textWidgetId = generateUniqueId('text');
      $(element).html(`<WidgetText modelId="${textWidgetId}" tag="span" type="inline">${text}</WidgetText>`);

      translatableTexts[`text_${textWidgetId}`] = text;
    }
  }

  if (insideContainer && innerContainerTags.includes(tag)) {
    const className = $(element).attr("class") || "";
    const innerHtml = $(element).html() || "";

    if (className) {
      $(element).replaceWith(`<span class="${className}">${innerHtml}</span>`);
    } else {
      $(element).replaceWith(innerHtml);
    }
    return;
  }

  if (insideList && tag === 'li') {
    const className = $(element).attr("class") || "";
    const innerHtml = $(element).html() || "";

    if (className) {
      $(element).replaceWith(`<span class="${className}">${innerHtml}</span>`);
    } else {
      $(element).replaceWith(innerHtml);
    }
    return;
  }

  if (tag in tagToWidgetTypeMap) {
    const widgetType = tagToWidgetTypeMap[tag as keyof typeof tagToWidgetTypeMap];
    const uniqueId = generateUniqueId(widgetType.toLowerCase().replace("widget", ""));
    const options = getWidgetOptions(tag, element, $);

    let attributes = ` modelId="${uniqueId}"`;
    for (const [key, value] of Object.entries(options)) {
      attributes += ` ${key}="${value}"`;
    }

    const innerHtml = $(element).html() || "";
    $(element).replaceWith(`<${widgetType}${attributes}>${innerHtml}</${widgetType}>`);

    const jsonType = widgetTypeToJsonType[widgetType as keyof typeof widgetTypeToJsonType] || widgetType;
    const widgetProps = { ...options };

    if (tag === "p" || ["h1", "h2", "h3", "h4", "h5", "h6", "label", "span"].includes(tag)) {
      const text = $(element).text().trim();
      if (text) {
        widgetProps.text = text;
        translatableTexts[`text_${uniqueId}`] = text;
      }
    } else if (tag === "a" || tag === "button") {
      const text = $(element).text().trim();
      if (text) {
        widgetProps.text = text;
        translatableTexts[`action_${uniqueId}`] = text;
      }
    } else if (tag === "img" && widgetProps.alt) {
      translatableTexts[`media_alt_${uniqueId}`] = widgetProps.alt;
    } else if ((tag === "input" || tag === "textarea") && widgetProps.placeholder) {
      translatableTexts[`input_placeholder_${uniqueId}`] = widgetProps.placeholder;
    }

    const widgetData: WidgetData = {
      id: uniqueId,
      type: jsonType,
      props: widgetProps
    };

    pageWidgetCollection.push(widgetData);

    stats[widgetType] = (stats[widgetType] || 0) + 1;
  }
}

function getWidgetOptions(
  tag: string,
  element: Element,
  $: cheerio.CheerioAPI
): Record<string, string> {
  const options: Record<string, string> = {};
  options.tag = tag;

  if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) {
    options.size = {
      "h1": "3xl",
      "h2": "2xl",
      "h3": "xl",
      "h4": "lg",
      "h5": "base",
      "h6": "sm"
    }[tag] || "base";
    options.weight = "bold";
    options.type = "heading";
  } else if (tag === "p") {
    options.type = "paragraph";
  } else if (tag === "span" || tag === "label") {
    options.type = "inline";
  } else if (tag === "a") {
    options.href = $(element).attr("href") || "#";
    options.target = $(element).attr("target") || "_self";
  } else if (tag === "img") {
    options.src = $(element).attr("src") || "";
    options.alt = $(element).attr("alt") || "";
    options.width = $(element).attr("width") || "auto";
    options.height = $(element).attr("height") || "auto";
  } else if (tag === "video" || tag === "audio") {
    options.src = $(element).attr("src") || "";
    options.controls = $(element).attr("controls") !== undefined ? "true" : "false";
    options.autoplay = $(element).attr("autoplay") !== undefined ? "true" : "false";
  } else if (tag === "button") {
    options.type = $(element).attr("type") || "button";
    options.variant = "primary";
  } else if (tag === "input") {
    options.type = $(element).attr("type") || "text";
    options.placeholder = $(element).attr("placeholder") || "";
    options.name = $(element).attr("name") || "";
    if ($(element).attr("required")) {
      options.required = "true";
    }
    if ($(element).attr("id")) {
      options.id = $(element).attr("id") || "";
    }
  } else if (tag === "li") {
    options.type = "item";
  } else if (tag === "ul") {
    options.type = "unordered";
  } else if (tag === "ol") {
    options.type = "ordered";
  } else if (tag === "textarea") {
    options.name = $(element).attr("name") || "";
    options.placeholder = $(element).attr("placeholder") || "";
    if ($(element).attr("required")) {
      options.required = "true";
    }
  } else if (tag === "blockquote") {
    options.type = "quote";
  }

  if ($(element).attr("class")) {
    options.className = $(element).attr("class") || "";
  }

  if ($(element).attr("id") && tag !== "input") {
    options.id = $(element).attr("id") || "";
  }

  return options;
}

export async function processReactFile(
  filePath: string,
  pageSlug: string,
  outputDir: string
): Promise<{ widgets: WidgetData[], section: string | null }> {
  const pageWidgetCollection: WidgetData[] = [];
  const stats: Record<string, number> = {};
  let sectionName: string | null = null;

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Rechercher les commentaires de section dans le fichier source
    const sectionCommentRegex = /\/\/\s*([A-Za-z0-9]+Section)|\/\*\s*([A-Za-z0-9]+Section)/;
    const sectionMatch = fileContent.match(sectionCommentRegex);
    if (sectionMatch) {
      sectionName = sectionMatch[1] || sectionMatch[2];
      console.log(`   🔍 Section détectée : ${sectionName}`);
    }

    // Parse the file
    const ast = babelParser.parse(fileContent, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });

    // Track import changes
    let hasImageImport = false;
    let imageImportName = "Image";
    let needsWidgetMediaImport = false;
    let needsWidgetButtonImport = false;
    let needsWidgetTextImport = false;

    // Set to track transformed elements to prevent recursion
    const transformedPaths = new Set();

    // Also check comments in the AST
    if (!sectionName) {
      traverse(ast, {
        Program(path) {
          const comments = path.node.body[0]?.leadingComments || [];
          for (const comment of comments) {
            const extracted = extractSectionFromComment(comment.value);
            if (extracted) {
              sectionName = extracted;
              console.log(`   🔍 Section détectée dans les commentaires AST : ${sectionName}`);
              break;
            }
          }
        },

        // Check comments before component declarations
        FunctionDeclaration(path) {
          const comments = path.node.leadingComments || [];
          for (const comment of comments) {
            const extracted = extractSectionFromComment(comment.value);
            if (extracted) {
              sectionName = extracted;
              console.log(`   🔍 Section détectée avant déclaration de fonction : ${sectionName}`);
              break;
            }
          }
        },

        VariableDeclaration(path) {
          const comments = path.node.leadingComments || [];
          for (const comment of comments) {
            const extracted = extractSectionFromComment(comment.value);
            if (extracted) {
              sectionName = extracted;
              console.log(`   🔍 Section détectée avant déclaration de variable : ${sectionName}`);
              break;
            }
          }
        }
      });
    }

    // First pass - analyze imports and detect components
    traverse(ast, {
      ImportDeclaration(path) {
        const importPath = path.node.source.value;

        // Check for Next.js Image import
        if (importPath === "next/image") {
          hasImageImport = true;

          // Get the actual import name (could be different from "Image")
          path.node.specifiers.forEach(specifier => {
            if (specifier.type === "ImportDefaultSpecifier") {
              imageImportName = specifier.local.name;
            }
          });

          // Mark this import for removal
          path.addComment("leading", "REMOVE_IMPORT");
        }
      },

      // Check if we have components that need to be transformed
      JSXElement(path) {
        const elementName = path.node.openingElement.name;
        if (elementName.type === "JSXIdentifier") {
          // Check for Image components
          if (elementName.name === imageImportName) {
            needsWidgetMediaImport = true;
          }

          // Check for Button components - limit to direct buttons, not transformed ones
          if ((elementName.name === "button" ||
               elementName.name === "Button") &&
              !elementName.name.startsWith('Widget')) {
            needsWidgetButtonImport = true;
          }

          // Check for basic text components - limit to actual HTML elements
          if (["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"].includes(elementName.name.toLowerCase()) &&
              !elementName.name.startsWith('Widget')) {
            needsWidgetTextImport = true;
          }
        }
      }
    });

    // Transform Image components first
    traverse(ast, {
      JSXElement(path) {
        // Skip if this path has already been transformed
        if (transformedPaths.has(path.node)) {
          return;
        }

        const element = path.node;
        const elementName = element.openingElement.name;

        if (elementName.type === "JSXIdentifier" && elementName.name === imageImportName) {
          // Generate a media ID for this element
          const mediaId = createModelId(sectionName, "media");

          // Extract alt text if present
          let altText = "";
          element.openingElement.attributes.forEach(attr => {
            if (attr.type === "JSXAttribute" &&
                attr.name.name === "alt" &&
                attr.value && attr.value.type === "StringLiteral") {
              altText = attr.value.value;
            }
          });

          // Add alt text to translations if available
          if (altText) {
            const translationKey = `media_alt_${mediaId}`;
            translatableTexts[translationKey] = altText;
          }

          const newAttributes = [];

          // Add modelId attribute
          newAttributes.push(
            t.jsxAttribute(
              t.jsxIdentifier("modelId"),
              t.stringLiteral(mediaId)
            )
          );

          // Add alt attribute with translation key
          if (altText) {
            newAttributes.push(
              t.jsxAttribute(
                t.jsxIdentifier("alt"),
                t.stringLiteral(`media_alt_${mediaId}`)
              )
            );
          }

          // Add global attribute
          newAttributes.push(
            t.jsxAttribute(
              t.jsxIdentifier("global"),
              null
            )
          );

          // Copy className and other attributes
          element.openingElement.attributes.forEach(attr => {
            if (attr.type === "JSXAttribute") {
              const name = attr.name.name;
              // Include className but skip src and alt
              if (name === "className") {
                newAttributes.push(attr);
              }
            }
          });

          // Create the WidgetMedia element - self-closing!
          const widgetElement = t.jsxElement(
            t.jsxOpeningElement(
              t.jsxIdentifier("WidgetMedia"),
              newAttributes,
              true // Self-closing
            ),
            null, // No closing element for self-closing
            [], // No children
            true // Self-closing
          );

          // Mark this element as transformed
          transformedPaths.add(widgetElement);

          // Replace original Image with WidgetMedia
          path.replaceWith(widgetElement);

          // Add widget to collection
          const widgetData: WidgetData = {
            id: mediaId,
            type: "MediaWidget",
            props: {
              tag: "img",
              alt: altText
            }
          };

          // Add className if available
          element.openingElement.attributes.forEach(attr => {
            if (attr.type === "JSXAttribute" && attr.name.name === "className") {
              if (attr.value && attr.value.type === "StringLiteral") {
                widgetData.props.className = attr.value.value;
              }
            }
          });

          pageWidgetCollection.push(widgetData);
          stats["WidgetMedia"] = (stats["WidgetMedia"] || 0) + 1;
        }
      }
    });

    // Transform Button components
    traverse(ast, {
      JSXElement(path) {
        // Skip if this path has already been transformed
        if (transformedPaths.has(path.node)) {
          return;
        }

        const element = path.node;
        const elementName = element.openingElement.name;

        if (elementName.type === "JSXIdentifier" &&
            (elementName.name === "button" || elementName.name === "Button") &&
            !elementName.name.startsWith('Widget')) {

          // Extract text content
          let buttonText = "";
          let contextName = "";

          // Try to determine context from closest component or button text
          path.find((p) => {
            if (p.isClassDeclaration() || p.isFunctionDeclaration()) {
              if (p.node.id && p.node.id.name) {
                contextName = p.node.id.name;
                return true;
              }
            }
            return false;
          });

          // Check for direct text content
          path.traverse({
            JSXText(textPath) {
              const text = textPath.node.value.trim();
              if (text) {
                buttonText = text;
                if (!contextName) contextName = text.substring(0, 15); // Use text as context if no other context
              }
            }
          }, { skipAlreadyVisited: true });

          // Generate a descriptive button ID
          const buttonId = createModelId(sectionName, "button", contextName);

          // Add button text to translations
          if (buttonText) {
            const translationKey = `button_${buttonId}`;
            translatableTexts[translationKey] = buttonText;
          }

          // Build new attributes
          const newAttributes = [];

          // Add modelId
          newAttributes.push(
            t.jsxAttribute(
              t.jsxIdentifier("modelId"),
              t.stringLiteral(buttonId)
            )
          );

          // Add global attribute
          newAttributes.push(
            t.jsxAttribute(
              t.jsxIdentifier("global"),
              null
            )
          );

          // Copy existing attributes like className and onClick
          element.openingElement.attributes.forEach(attr => {
            if (attr.type === "JSXAttribute") {
              const name = attr.name.name;
              if (name === "className" || name === "onClick" || name === "style") {
                newAttributes.push(attr);
              }
            }
          });

          // Create WidgetButton element - self-closing!
          const widgetElement = t.jsxElement(
            t.jsxOpeningElement(
              t.jsxIdentifier("WidgetButton"),
              newAttributes,
              true // Self-closing
            ),
            null, // No closing tag
            [], // No children
            true // Self-closing
          );

          // Mark as transformed
          transformedPaths.add(widgetElement);

          // Replace original button
          path.replaceWith(widgetElement);

          // Add to widget collection
          const widgetData: WidgetData = {
            id: buttonId,
            type: "ButtonWidget",
            props: {
              tag: "button",
              text: buttonText
            }
          };

          // Add className if available
          element.openingElement.attributes.forEach(attr => {
            if (attr.type === "JSXAttribute" && attr.name.name === "className") {
              if (attr.value && attr.value.type === "StringLiteral") {
                widgetData.props.className = attr.value.value;
              }
            }
          });

          pageWidgetCollection.push(widgetData);
          stats["WidgetButton"] = (stats["WidgetButton"] || 0) + 1;
        }
      }
    });

    // Transform Text components (paragraphs, spans, headings)
    traverse(ast, {
      JSXElement(path) {
        // Skip if this path has already been transformed
        if (transformedPaths.has(path.node)) {
          return;
        }

        const element = path.node;
        const elementName = element.openingElement.name;

        if (elementName.type === "JSXIdentifier" &&
            ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"].includes(elementName.name.toLowerCase()) &&
            !elementName.name.startsWith('Widget')) {

          // Extract text content
          let textContent = "";
          let contextName = "";

          // Try to determine context from parent components or container
          path.find((p) => {
            if (p.isClassDeclaration() || p.isFunctionDeclaration()) {
              if (p.node.id && p.node.id.name) {
                contextName = p.node.id.name;
                return true;
              }
            }
            return false;
          });

          // Look for direct text content
          path.traverse({
            JSXText(textPath) {
              const text = textPath.node.value.trim();
              if (text) {
                textContent = text;
                if (!contextName) contextName = text.substring(0, 10); // Use text as context if no other context
              }
            }
          }, { skipAlreadyVisited: true });

          // Only add to translations if we found actual text
          if (textContent) {
            // Determine text type based on element
            let textType = "editor"; // Default to editor for all text
            if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(elementName.name.toLowerCase())) {
              contextName = contextName || "heading"; // Use heading as context if none
            } else if (elementName.name.toLowerCase() === "p") {
              contextName = contextName || "paragraph"; // Use paragraph as context if none
            } else if (elementName.name.toLowerCase() === "span") {
              contextName = contextName || "inline"; // Use inline as context if none
            }

            // Create a descriptive ID
            const textId = createModelId(sectionName, "text", contextName);

            // Add text to translations
            const translationKey = `text_${textId}`;
            translatableTexts[translationKey] = textContent;

            // Build attributes
            const newAttributes = [];

            // Add modelId
            newAttributes.push(
              t.jsxAttribute(
                t.jsxIdentifier("modelId"),
                t.stringLiteral(textId)
              )
            );

            // Add type
            newAttributes.push(
              t.jsxAttribute(
                t.jsxIdentifier("type"),
                t.stringLiteral(textType)
              )
            );

            // Add global attribute
            newAttributes.push(
              t.jsxAttribute(
                t.jsxIdentifier("global"),
                null
              )
            );

            // Copy className and style
            element.openingElement.attributes.forEach(attr => {
              if (attr.type === "JSXAttribute") {
                const name = attr.name.name;
                if (name === "className" || name === "style") {
                  newAttributes.push(attr);
                }
              }
            });

            // Create WidgetText element - self-closing!
            const widgetElement = t.jsxElement(
              t.jsxOpeningElement(
                t.jsxIdentifier("WidgetText"),
                newAttributes,
                true // Self-closing
              ),
              null, // No closing tag
              [], // No children
              true // Self-closing
            );

            transformedPaths.add(widgetElement);

            path.replaceWith(widgetElement);

            const widgetData: WidgetData = {
              id: textId,
              type: "TextWidget",
              props: {
                tag: elementName.name.toLowerCase(),
                type: textType,
                text: textContent
              }
            };

            element.openingElement.attributes.forEach(attr => {
              if (attr.type === "JSXAttribute" && attr.name.name === "className") {
                if (attr.value && attr.value.type === "StringLiteral") {
                  widgetData.props.className = attr.value.value;
                }
              }
            });

            pageWidgetCollection.push(widgetData);
            stats["WidgetText"] = (stats["WidgetText"] || 0) + 1;
          }
        }
      }
    });

    traverse(ast, {
      Program(path) {
        // Add needed imports
        const newImports = [];

        if (needsWidgetMediaImport) {
          newImports.push(
            t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier("WidgetMedia"))],
              t.stringLiteral("@Widget/Media")
            )
          );
        }

        if (needsWidgetButtonImport) {
          newImports.push(
            t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier("WidgetButton"))],
              t.stringLiteral("@Widget/Button")
            )
          );
        }

        if (needsWidgetTextImport) {
          newImports.push(
            t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier("WidgetText"))],
              t.stringLiteral("@Widget/Text")
            )
          );
        }

        for (let i = newImports.length - 1; i >= 0; i--) {
          path.node.body.unshift(newImports[i]);
        }
      },

      // Remove marked imports
      ImportDeclaration(path) {
        const comments = path.node.leadingComments || [];
        if (comments.some(comment => comment.value.includes("REMOVE_IMPORT"))) {
          path.remove();
        }
      }
    });

    const output = generate(ast, {
      retainLines: false,
      concise: false,
      jsescOption: {
        quotes: "single"
      }
    });

    const outputFilePath = path.join(outputDir, `${pageSlug}.tsx`);
    fs.writeFileSync(outputFilePath, output.code);

    if (!sectionName && pageSlug.toLowerCase().includes('footer')) {
      sectionName = 'FooterSection';
      console.log(`   ℹ️ Section déduite du nom de fichier : ${sectionName}`);
    } else if (!sectionName && pageSlug.toLowerCase().includes('header')) {
      sectionName = 'HeaderSection';
      console.log(`   ℹ️ Section déduite du nom de fichier : ${sectionName}`);
    }

    console.log(`   React traité : ${Object.entries(stats).map(([type, count]) => `${type}=${count}`).join(', ')}`);

    return { widgets: pageWidgetCollection, section: sectionName };
  } catch (error) {
    console.error(`❌ Erreur lors du traitement du fichier React ${filePath}:`, error);
    return { widgets: [], section: null };
  }
}
