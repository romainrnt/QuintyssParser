import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";
import * as babel from "@babel/core";
import * as babelParser from "@babel/parser";
import traverse from "@babel/traverse";
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

    const ast = babelParser.parse(fileContent, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });

    traverse(ast, {
      JSXElement(path) {
        const element = path.node;
        const jsxName = element.openingElement.name;

        if (jsxName.type !== 'JSXIdentifier') {
          return;
        }

        const componentName = jsxName.name;
        let widgetType;

        if (componentName.toLowerCase() in reactComponentToWidgetTypeMap) {
          widgetType = reactComponentToWidgetTypeMap[componentName.toLowerCase()];
        } else if (componentName.includes('Container') || componentName.includes('Section') || componentName.includes('Layout')) {
          widgetType = 'WidgetContainer';
        } else if (componentName.includes('Button') || componentName.includes('Link')) {
          widgetType = 'WidgetAction';
        } else if (componentName.includes('Image') || componentName.includes('Media')) {
          widgetType = 'WidgetMedia';
        } else if (componentName.includes('Text') || componentName.includes('Title') || componentName.includes('Heading')) {
          widgetType = 'WidgetText';
        } else if (componentName.includes('Input') || componentName.includes('Field')) {
          widgetType = 'WidgetInput';
        } else if (componentName.includes('Form')) {
          widgetType = 'WidgetForm';
        } else if (componentName.includes('List')) {
          widgetType = 'WidgetList';
        } else if (componentName.includes('Nav')) {
          widgetType = 'WidgetNavigation';
        } else {
          widgetType = 'WidgetContainer';
        }

        const uniqueId = generateUniqueId(widgetType.toLowerCase().replace("widget", ""));

        const props: Record<string, any> = {};

        element.openingElement.attributes.forEach(attr => {
          if (attr.type === 'JSXAttribute') {
            const attrName = attr.name.name.toString();
            let attrValue: any = '';

            if (attr.value === null) {
              attrValue = 'true';
            } else if (attr.value && attr.value.type === 'StringLiteral') {
              attrValue = attr.value.value;
            } else if (attr.value && attr.value.type === 'JSXExpressionContainer') {
              if (attr.value.expression.type === 'StringLiteral') {
                attrValue = attr.value.expression.value;
              } else if (attr.value.expression.type === 'BooleanLiteral') {
                attrValue = attr.value.expression.value.toString();
              } else if (attr.value.expression.type === 'NumericLiteral') {
                attrValue = attr.value.expression.value.toString();
              } else if (attr.value.expression.type === 'MemberExpression') {
                attrValue = `expression`;
              } else {
                attrValue = `expression`;
              }
            }
            if (attrName === 'className' || attrName === 'class') {
              props.className = attrValue;
            } else if (attrName === 'id') {
              props.id = attrValue;
            } else if (attrName === 'style') {
            } else if (attrName === 'children') {
            } else {
              props[attrName] = attrValue;
            }
          }
        });
        switch (widgetType) {
          case 'WidgetText':
            props.tag = componentName.toLowerCase() === 'span' ? 'span' :
                       (componentName.match(/h[1-6]/i) ? componentName.toLowerCase() : 'p');
            props.type = componentName.toLowerCase() === 'span' ? 'inline' : 'heading';
            let textContent = '';
            if (element.children && element.children.length === 1 && element.children[0].type === 'JSXText') {
              textContent = element.children[0].value.trim();
            }

            if (textContent) {
              props.text = textContent;
              translatableTexts[`text_${uniqueId}`] = textContent;
            } else {
              props.text = `[${componentName} Content]`;
            }
            break;

          case 'WidgetAction':
            props.tag = componentName.toLowerCase() === 'a' ? 'a' : 'button';
            props.href = props.href || props.to || '#';
            props.target = props.target || '_self';

            let actionText = '';
            if (element.children && element.children.length === 1 && element.children[0].type === 'JSXText') {
              actionText = element.children[0].value.trim();
            }

            if (actionText) {
              props.text = actionText;
              translatableTexts[`action_${uniqueId}`] = actionText;
            } else {
              props.text = `[${componentName}]`;
            }
            break;

          case 'WidgetMedia':
            props.tag = 'img';
            props.src = props.src || props.source || '';
            props.alt = props.alt || '';
            if (props.alt) {
              translatableTexts[`media_alt_${uniqueId}`] = props.alt;
            }
            break;

          case 'WidgetContainer':
            props.tag = componentName.toLowerCase() in tagToWidgetTypeMap ?
                       componentName.toLowerCase() : 'div';
            break;

          case 'WidgetInput':
            props.tag = 'input';
            props.type = props.type || 'text';
            props.placeholder = props.placeholder || '';
            if (props.placeholder) {
              translatableTexts[`input_placeholder_${uniqueId}`] = props.placeholder;
            }
            props.name = props.name || '';
            props.required = props.required || 'false';
            break;

          case 'WidgetForm':
            props.tag = 'form';
            props.action = props.action || props.onSubmit ? 'submit' : '';
            props.method = props.method || 'post';
            break;

          case 'WidgetList':
            props.tag = componentName.toLowerCase() === 'ol' ? 'ol' : 'ul';
            props.type = componentName.toLowerCase() === 'ol' ? 'ordered' : 'unordered';
            break;

          case 'WidgetNavigation':
            props.tag = 'nav';
            break;
        }

        const jsonType = widgetTypeToJsonType[widgetType as keyof typeof widgetTypeToJsonType] || widgetType;
        const widgetData: WidgetData = {
          id: uniqueId,
          type: jsonType,
          props: props
        };

        pageWidgetCollection.push(widgetData);
        stats[widgetType] = (stats[widgetType] || 0) + 1;
      }
    });

    const outputFilePath = path.join(outputDir, `${pageSlug}.jsx`);
    fs.writeFileSync(outputFilePath, fileContent);
    console.log(`React traité : ${Object.entries(stats).map(([type, count]) => `${type}=${count}`).join(', ')}`);
    return pageWidgetCollection;
  } catch (error) {
    console.error(`❌ Erreur lors du traitement du fichier React ${filePath}:`, error);
    return [];
  }
}
