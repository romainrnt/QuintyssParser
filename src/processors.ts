import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";
import * as babel from "@babel/core";
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

export async function processHtmlFile(
  filePath: string,
  pageSlug: string,
  outputDir: string
): Promise<WidgetData[]> {
  const pageWidgetCollection: WidgetData[] = [];
  const stats: Record<string, number> = {};

  const data = fs.readFileSync(filePath, "utf8");
  const $ = cheerio.load(data);

  processBodyContent($, pageWidgetCollection, stats);

  const outputFilePath = path.join(outputDir, `${pageSlug}.html`);
  fs.writeFileSync(outputFilePath, $.html());

  console.log(`   HTML traité : ${Object.entries(stats).map(([type, count]) => `${type}=${count}`).join(', ')}`);

  return pageWidgetCollection;
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
): Promise<WidgetData[]> {
  const pageWidgetCollection: WidgetData[] = [];
  const stats: Record<string, number> = {};

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Parse the file
    const ast = babelParser.parse(fileContent, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });

    // Track import changes
    let hasImageImport = false;
    let imageImportName = "Image";
    let needsWidgetMediaImport = false;

    // First pass - analyze imports
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

      // Check if we have Image components
      JSXElement(path) {
        const elementName = path.node.openingElement.name;
        if (elementName.type === "JSXIdentifier" && elementName.name === imageImportName) {
          needsWidgetMediaImport = true;
        }
      }
    });

    // Second pass - transform Image components
    traverse(ast, {
      JSXElement(path) {
        const element = path.node;
        const elementName = element.openingElement.name;

        if (elementName.type === "JSXIdentifier" && elementName.name === imageImportName) {
          // Generate a media ID for this element
          const mediaId = generateUniqueId('media');

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

          // Build new attributes array
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

          // Add global attribute for logos/static images
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

          // Create the WidgetMedia element
          const widgetElement = t.jsxElement(
            t.jsxOpeningElement(
              t.jsxIdentifier("WidgetMedia"),
              newAttributes,
              element.openingElement.selfClosing
            ),
            element.closingElement ?
              t.jsxClosingElement(t.jsxIdentifier("WidgetMedia")) :
              null,
            [],
            element.openingElement.selfClosing
          );

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

    // Third pass - update imports
    traverse(ast, {
      Program(path) {
        // Add WidgetMedia import if needed
        if (needsWidgetMediaImport) {
          const widgetImport = t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier("WidgetMedia"))],
            t.stringLiteral("@Widget/Media")
          );

          // Add it to the top
          path.node.body.unshift(widgetImport);
        }
      },

      // Remove Image import
      ImportDeclaration(path) {
        const comments = path.node.leadingComments || [];
        if (comments.some(comment => comment.value.includes("REMOVE_IMPORT"))) {
          path.remove();
        }
      }
    });

    // Generate the modified code
    const output = generate(ast, {
      retainLines: false,
      concise: false,
      jsescOption: {
        quotes: "single"
      }
    });

    // Write to TSX file (not JSX)
    const outputFilePath = path.join(outputDir, `${pageSlug}.tsx`);
    fs.writeFileSync(outputFilePath, output.code);

    console.log(`   React traité : ${Object.entries(stats).map(([type, count]) => `${type}=${count}`).join(', ')}`);

    return pageWidgetCollection;
  } catch (error) {
    console.error(`❌ Erreur lors du traitement du fichier React ${filePath}:`, error);
    return [];
  }
}
