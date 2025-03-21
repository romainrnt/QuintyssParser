export interface WidgetData {
  id: string;
  type: string;
  props: Record<string, any>;
}

export interface PageData {
  name: string;
  slug: string;
  layout: string;
  widgets: WidgetData[];
  section?: string | null;
}

export interface TemplateStructure {
  name: string;
  structure: PageData[];
  style: {
    theme: string;
    colors: Record<string, string>;
    typography: Record<string, string>;
  };
  createdAt: string;
  updatedAt: string;
}

export interface SectionGroup {
  section: string;
  pages: PageData[];
}

export const SUPPORTED_LANGUAGES = ["fr", "en", "de", "es", "it", "pt"];
export const DEFAULT_LANGUAGE = "en";

export const tagToWidgetTypeMap: Record<string, string> = {
  "h1": "WidgetText",
  "h2": "WidgetText",
  "h3": "WidgetText",
  "h4": "WidgetText",
  "h5": "WidgetText",
  "h6": "WidgetText",
  "p": "WidgetText",
  "div": "WidgetContainer",
  "section": "WidgetContainer",
  "article": "WidgetContainer",
  "header": "WidgetContainer",
  "footer": "WidgetContainer",
  "nav": "WidgetNavigation",
  "button": "WidgetButton",
  "a": "WidgetAction",
  "img": "WidgetMedia",
  "form": "WidgetForm",
  "input": "WidgetInput",
  "textarea": "WidgetEditor",
  "ul": "WidgetList",
  "ol": "WidgetList",
  "li": "WidgetList",
  "label": "WidgetText",
  "span": "WidgetText",
  "main": "WidgetContainer",
  "aside": "WidgetContainer",
  "figure": "WidgetContainer",
  "figcaption": "WidgetText",
  "blockquote": "WidgetEditor",
  "video": "WidgetMedia",
  "audio": "WidgetMedia"
};

export const reactComponentToWidgetTypeMap: Record<string, string> = {
  "div": "WidgetContainer",
  "section": "WidgetContainer",
  "h1": "WidgetText",
  "h2": "WidgetText",
  "h3": "WidgetText",
  "h4": "WidgetText",
  "h5": "WidgetText",
  "h6": "WidgetText",
  "p": "WidgetText",
  "span": "WidgetText",
  "button": "WidgetButton",
  "a": "WidgetAction",
  "img": "WidgetMedia",
  "ul": "WidgetList",
  "ol": "WidgetList",
  "li": "WidgetList",
  // Composants React courants
  "Header": "WidgetContainer",
  "Footer": "WidgetContainer",
  "Container": "WidgetContainer",
  "Card": "WidgetContainer",
  "Button": "WidgetButton",
  "Link": "WidgetAction",
  "Image": "WidgetMedia",
  "Text": "WidgetText",
  "Heading": "WidgetText",
  "Paragraph": "WidgetText",
  "Input": "WidgetInput",
  "Form": "WidgetForm",
  "List": "WidgetList",
  "ListItem": "WidgetList",
  "Nav": "WidgetNavigation",
  "Navigation": "WidgetNavigation"
};

export const widgetTypeToJsonType: Record<string, string> = {
  "WidgetText": "TextWidget",
  "WidgetEditor": "EditorWidget",
  "WidgetContainer": "ContainerWidget",
  "WidgetNavigation": "NavigationWidget",
  "WidgetAction": "ActionWidget",
  "WidgetButton": "ButtonWidget",
  "WidgetMedia": "MediaWidget",
  "WidgetForm": "FormWidget",
  "WidgetInput": "InputWidget",
  "WidgetList": "ListWidget",
  "WidgetSlider": "SliderWidget"
};

export const ignoredTags = ['script', 'style', 'link', 'meta', 'title', 'head', 'html', 'body'];

export const innerContainerTags = ['div', 'section', 'article', 'header', 'footer', 'main', 'aside'];
