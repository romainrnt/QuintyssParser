import { v4 as uuidv4 } from "uuid";
import { SUPPORTED_LANGUAGES, TemplateStructure } from "./types";

export function generateDatabaseQueries(
  templateStructure: TemplateStructure,
  translations: Record<string, Record<string, string>>
): string {
  const modelId = uuidv4();
  const templateId = uuidv4();

  let sql = `-- Requêtes SQL pour insérer le template multilingue "${templateStructure.name}" dans la base de données Quintyss\n`;
  sql += `-- Générées le ${new Date().toLocaleString()}\n\n`;

  sql += `-- 1. Insertion du modèle\n`;
  sql += `INSERT INTO models_table (\n`;
  sql += `  identifier,\n`;
  sql += `  name,\n`;
  sql += `  slug,\n`;
  sql += `  category,\n`;
  sql += `  description,\n`;
  sql += `  requirement_level\n`;
  sql += `) VALUES (\n`;
  sql += `  '${modelId}', -- identifier\n`;
  sql += `  '${templateStructure.name.replace(/'/g, "''")}', -- name\n`;
  sql += `  '${slugify(templateStructure.name)}', -- slug\n`;
  sql += `  'converted', -- category\n`;
  sql += `  'Template converti avec support multilingue (${SUPPORTED_LANGUAGES.join(", ")})', -- description\n`;
  sql += `  'Starter' -- requirement_level\n`;
  sql += `);\n\n`;

  sql += `-- 2. Insertion du template avec traductions\n`;
  sql += `INSERT INTO site_content_templates_table (\n`;
  sql += `  identifier,\n`;
  sql += `  model_identifier,\n`;
  sql += `  content,\n`;
  sql += `  version,\n`;
  sql += `  tags,\n`;
  sql += `  required_subscription\n`;
  sql += `) VALUES (\n`;
  sql += `  '${templateId}', -- identifier\n`;
  sql += `  '${modelId}', -- model_identifier\n`;
  sql += `  jsonb_build_object(\n`;
  sql += `    'id', '${templateId}',\n`;
  sql += `    'name', '${templateStructure.name.replace(/'/g, "''")}',\n`;
  sql += `    'structure', jsonb_build_array(\n`;

  templateStructure.structure.forEach((page, pageIndex) => {
    const pageId = `page-${pageIndex + 1}`;

    sql += `      jsonb_build_object(\n`;
    sql += `        'id', '${pageId}',\n`;
    sql += `        'name', jsonb_build_object(\n`;

    for (const lang of SUPPORTED_LANGUAGES) {
      const pageName = {
        'fr': 'Accueil',
        'en': 'Home',
        'de': 'Startseite',
        'es': 'Inicio',
        'it': 'Home',
        'pt': 'Início'
      }[lang] || page.name;

      sql += `          '${lang}', '${pageName.replace(/'/g, "''")}',\n`;
    }

    sql += `        ),\n`;
    sql += `        'slug', '${page.slug}',\n`;
    sql += `        'layout', '${page.layout}',\n`;

    sql += `        'widgets', jsonb_build_array(\n`;

    page.widgets.forEach((widget, widgetIndex) => {
      sql += `          jsonb_build_object(\n`;
      sql += `            'id', '${widget.id}',\n`;
      sql += `            'type', '${widget.type}',\n`;
      sql += `            'props', jsonb_build_object(\n`;

      for (const [key, value] of Object.entries(widget.props)) {
        if (typeof value === 'object') {
          sql += `              '${key}', jsonb_build_object(\n`;
          for (const [subKey, subValue] of Object.entries(value as Record<string, any>)) {
            sql += `                '${subKey}', '${String(subValue).replace(/'/g, "''")}',\n`;
          }
          sql += `              ),\n`;
        } else {
          sql += `              '${key}', '${String(value).replace(/'/g, "''")}',\n`;
        }
      }

      sql += `            )\n`;
      sql += `          )${widgetIndex < page.widgets.length - 1 ? ',' : ''}\n`;
    });

    sql += `        )\n`;
    sql += `      )${pageIndex < templateStructure.structure.length - 1 ? ',' : ''}\n`;
  });

  sql += `    ),\n`;

  sql += `    'style', jsonb_build_object(\n`;
  sql += `      'theme', '${templateStructure.style.theme}',\n`;
  sql += `      'colors', jsonb_build_object(\n`;
  for (const [colorName, colorValue] of Object.entries(templateStructure.style.colors)) {
    sql += `        '${colorName}', '${colorValue}',\n`;
  }
  sql += `      ),\n`;
  sql += `      'typography', jsonb_build_object(\n`;
  for (const [typeName, typeValue] of Object.entries(templateStructure.style.typography)) {
    sql += `        '${typeName}', '${typeValue}',\n`;
  }
  sql += `      )\n`;
  sql += `    ),\n`;

  sql += `    'translations', jsonb_build_object(\n`;
  for (const lang of SUPPORTED_LANGUAGES) {
    sql += `      '${lang}', jsonb_build_object(\n`;

    const langTranslations = translations[lang];
    if (langTranslations) {
      const keys = Object.keys(langTranslations);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = langTranslations[key];
        sql += `        '${key}', '${value.replace(/'/g, "''")}',\n`;
      }
    }

    sql += `      ),\n`;
  }

  sql += `    ),\n`;
  sql += `    'createdAt', CURRENT_TIMESTAMP,\n`;
  sql += `    'updatedAt', CURRENT_TIMESTAMP\n`;
  sql += `  ),\n`;
  sql += `  '1.0', -- version\n`;
  sql += `  jsonb_build_array('converted', 'html', 'multilingual'), -- tags\n`;
  sql += `  'Starter' -- required_subscription\n`;
  sql += `);\n\n`;

  sql += `-- 3. Mettre à jour la référence du template dans le modèle\n`;
  sql += `UPDATE models_table \n`;
  sql += `SET site_content_template_identifier = '${templateId}' \n`;
  sql += `WHERE identifier = '${modelId}';\n\n`;

  sql += `-- 4. Créer les pages\n`;
  sql += `DO $\n`;
  sql += `DECLARE\n`;
  sql += `  page_id UUID;\n`;
  sql += `BEGIN\n`;

  templateStructure.structure.forEach((page, index) => {
    const pageUuid = uuidv4();
    const isHomepage = index === 0;

    sql += `  -- Page: ${page.name} (${page.slug})\n`;
    sql += `  INSERT INTO pages_table (\n`;
    sql += `    identifier,\n`;
    sql += `    model_identifier,\n`;
    sql += `    name,\n`;
    sql += `    slug,\n`;
    sql += `    description,\n`;
    sql += `    is_homepage,\n`;
    sql += `    order_index\n`;
    sql += `  ) VALUES (\n`;
    sql += `    '${pageUuid}', -- identifier\n`;
    sql += `    '${modelId}', -- model_identifier\n`;
    sql += `    '${page.name.replace(/'/g, "''")}', -- name\n`;
    sql += `    '${page.slug}', -- slug\n`;
    sql += `    'Page ${page.name} du template', -- description\n`;
    sql += `    ${isHomepage}, -- is_homepage\n`;
    sql += `    ${index} -- order_index\n`;
    sql += `  );\n\n`;
    sql += `  -- Associer la page au modèle\n`;
    sql += `  INSERT INTO model_pages_table (\n`;
    sql += `    identifier,\n`;
    sql += `    model_identifier,\n`;
    sql += `    page_identifier\n`;
    sql += `  ) VALUES (\n`;
    sql += `    '${uuidv4()}', -- identifier\n`;
    sql += `    '${modelId}', -- model_identifier\n`;
    sql += `    '${pageUuid}' -- page_identifier\n`;
    sql += `  );\n\n`;
  });

  sql += `END $;\n\n`;

  sql += `-- 5. Insérer et associer les widgets\n`;
  sql += `DO $\n`;
  sql += `DECLARE\n`;
  sql += `  widget_id UUID;\n`;
  sql += `BEGIN\n`;

  let widgetCounter = 0;
  templateStructure.structure.forEach((page) => {
    page.widgets.forEach((widget) => {
      const widgetUuid = uuidv4();

      sql += `  -- Widget: ${widget.id} (Type: ${widget.type}) - Page: ${page.slug}\n`;
      sql += `  INSERT INTO widgets_table (\n`;
      sql += `    identifier,\n`;
      sql += `    model_identifier,\n`;
      sql += `    name,\n`;
      sql += `    description,\n`;
      sql += `    widget_type,\n`;
      sql += `    default_props,\n`;
      sql += `    version,\n`;
      sql += `    requirement_level\n`;
      sql += `  ) VALUES (\n`;
      sql += `    '${widgetUuid}', -- identifier\n`;
      sql += `    '${modelId}', -- model_identifier\n`;
      sql += `    'Widget ${widget.id}', -- name\n`;
      sql += `    'Widget généré automatiquement pour ${page.name}', -- description\n`;
      sql += `    '${widget.type}', -- widget_type\n`;

      sql += `    jsonb_build_object(\n`;
      for (const [key, value] of Object.entries(widget.props)) {
        if (typeof value === 'object') {
          sql += `      '${key}', jsonb_build_object(\n`;
          for (const [subKey, subValue] of Object.entries(value as Record<string, any>)) {
            sql += `        '${subKey}', '${String(subValue).replace(/'/g, "''")}',\n`;
          }
          sql += `      ),\n`;
        } else if (typeof value === 'string' &&
                  (key === 'text' || key === 'alt' || key === 'placeholder')) {
          const textKey = key === 'text'
            ? (widget.type === 'ActionWidget' ? `action_${widget.id}` : `text_${widget.id}`)
            : key === 'alt'
              ? `media_alt_${widget.id}`
              : `input_placeholder_${widget.id}`;

          sql += `      '${key}', '${textKey}',\n`;
        } else {
          sql += `      '${key}', '${String(value).replace(/'/g, "''")}',\n`;
        }
      }
      sql += `    ), -- default_props\n`;

      sql += `    '1.0', -- version\n`;
      sql += `    'Starter' -- requirement_level\n`;
      sql += `  ) RETURNING identifier INTO widget_id;\n`;

      sql += `  \n`;
      sql += `  -- Associer le widget au modèle\n`;
      sql += `  INSERT INTO model_widgets_table (\n`;
      sql += `    identifier,\n`;
      sql += `    model_identifier,\n`;
      sql += `    widget_identifier\n`;
      sql += `  ) VALUES (\n`;
      sql += `    '${uuidv4()}', -- identifier\n`;
      sql += `    '${modelId}', -- model_identifier\n`;
      sql += `    widget_id -- widget_identifier\n`;
      sql += `  );\n\n`;

      widgetCounter++;
    });
  });

  sql += `END $;\n\n`;

  sql += `-- 6. Créer un site de test avec le template (à exécuter séparément si nécessaire)\n`;
  sql += `/*\n`;
  sql += `DO $\n`;
  sql += `DECLARE\n`;
  sql += `  content_id UUID;\n`;
  sql += `BEGIN\n`;
  sql += `  -- Créer une entrée de contenu pour le site de test\n`;
  sql += `  INSERT INTO site_contents_table (\n`;
  sql += `    identifier,\n`;
  sql += `    model_identifier,\n`;
  sql += `    content\n`;
  sql += `  ) SELECT \n`;
  sql += `    gen_random_uuid() AS identifier,\n`;
  sql += `    '${modelId}' AS model_identifier,\n`;
  sql += `    content AS content\n`;
  sql += `  FROM \n`;
  sql += `    site_content_templates_table \n`;
  sql += `  WHERE \n`;
  sql += `    identifier = '${templateId}'\n`;
  sql += `  RETURNING identifier INTO content_id;\n\n`;

  sql += `  -- Créer le site de test\n`;
  sql += `  INSERT INTO sites_table (\n`;
  sql += `    identifier,\n`;
  sql += `    content_identifier,\n`;
  sql += `    name,\n`;
  sql += `    domain,\n`;
  sql += `    flag_deactivated\n`;
  sql += `  ) VALUES (\n`;
  sql += `    gen_random_uuid(), -- identifier\n`;
  sql += `    content_id, -- content_identifier\n`;
  sql += `    'Site test - ${templateStructure.name}', -- name\n`;
  sql += `    '${slugify(templateStructure.name)}-test.quintyss.com', -- domain\n`;
  sql += `    FALSE -- flag_deactivated\n`;
  sql += `  );\n`;
  sql += `END $;\n`;
  sql += `*/\n\n`;

  sql += `-- 7. Fonction pour mettre à jour les traductions (pour une utilisation future)\n`;
  sql += `CREATE OR REPLACE FUNCTION update_template_translations(\n`;
  sql += `  template_id UUID,\n`;
  sql += `  lang_code TEXT,\n`;
  sql += `  translations JSONB\n`;
  sql += `) RETURNS VOID AS $\n`;
  sql += `BEGIN\n`;
  sql += `  UPDATE site_content_templates_table\n`;
  sql += `  SET content = jsonb_set(\n`;
  sql += `    content,\n`;
  sql += `    ARRAY['translations', lang_code],\n`;
  sql += `    translations,\n`;
  sql += `    true\n`;
  sql += `  )\n`;
  sql += `  WHERE identifier = template_id;\n`;
  sql += `END;\n`;
  sql += `$ LANGUAGE plpgsql;\n\n`;

  return sql;
}

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function generateTemplateJson(pageResults: Record<string, any>): TemplateStructure {
  const pagesCount = Object.keys(pageResults).length;
  const title = pagesCount === 1 ?
                `Template - ${Object.values(pageResults)[0].name}` :
                `Template Multi-pages - ${new Date().toLocaleDateString()}`;

  const templateStructure: TemplateStructure = {
    name: title,
    structure: Object.values(pageResults),
    style: {
      theme: "light",
      colors: {
        primary: "#0D6EFD",
        secondary: "#6C757D"
      },
      typography: {
        fontFamily: "Roboto"
      }
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  return templateStructure;
}
