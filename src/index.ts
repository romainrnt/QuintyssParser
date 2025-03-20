import fs from "fs";
import path from "path";
import { glob } from "glob";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

import { WidgetData, PageData, SUPPORTED_LANGUAGES } from "./types";
import { processHtmlFile, processReactFile, slugify, translatableTexts } from "./processors";
import { translateTexts } from "./translators";
import { generateTemplateJson, generateDatabaseQueries } from "./sqlGenerator";

dotenv.config();

// Variables pour stocker les résultats incrémentaux
let widgetCollection: WidgetData[] = [];
let pageResults: Record<string, PageData> = {};
let existingTranslations: Record<string, Record<string, string>> = {};

async function loadExistingData(outputDir: string, translationsOutputPath: string) {
  console.log("📥 Chargement des données existantes...");

  // Charger les traductions existantes si elles existent
  for (const lang of SUPPORTED_LANGUAGES) {
    const translationFilePath = path.join(translationsOutputPath, `translations_${lang}.json`);
    if (fs.existsSync(translationFilePath)) {
      try {
        const content = fs.readFileSync(translationFilePath, 'utf8');
        existingTranslations[lang] = JSON.parse(content);
        console.log(`   ✅ Traductions ${lang.toUpperCase()} chargées`);
      } catch (err) {
        console.error(`   ❌ Erreur lors du chargement des traductions ${lang.toUpperCase()}:`, err);
        existingTranslations[lang] = {};
      }
    } else {
      existingTranslations[lang] = {};
    }
  }

  // Charger le template structure si existant
  const jsonOutputFilePath = path.join(outputDir, "template-structure.json");
  if (fs.existsSync(jsonOutputFilePath)) {
    try {
      const content = fs.readFileSync(jsonOutputFilePath, 'utf8');
      const templateData = JSON.parse(content);

      // Récupérer les pages et widgets existants
      if (templateData.structure) {
        templateData.structure.forEach((page: PageData) => {
          pageResults[page.slug] = page;
          if (page.widgets) {
            widgetCollection.push(...page.widgets);
          }
        });
      }

      console.log(`   ✅ Structure du template chargée (${Object.keys(pageResults).length} pages, ${widgetCollection.length} widgets)`);
    } catch (err) {
      console.error(`   ❌ Erreur lors du chargement de la structure du template:`, err);
    }
  }
}

async function processAllFiles() {
  console.log("🚀 Début du traitement des fichiers...");

  try {
    const args = process.argv.slice(2);
    const projectDir = args[0] || process.cwd();

    console.log(`🔍 Analyse du répertoire/fichier: ${projectDir}`);

    let inputFile: string | null = null;
    let inputDir: string | null = null;

    if (fs.existsSync(projectDir)) {
      const stats = fs.statSync(projectDir);
      if (!stats.isDirectory()) {
        inputFile = path.basename(projectDir);
        inputDir = path.dirname(path.resolve(projectDir));
        console.log(`📄 Fichier à analyser: ${inputFile}`);
      } else {
        inputDir = path.resolve(projectDir);
      }
    } else {
      inputDir = path.resolve(projectDir);
    }

    const outputDir = path.join(process.cwd(), "parsed");
    const jsonOutputFilePath = path.join(outputDir, "template-structure.json");
    const sqlOutputFilePath = path.join(outputDir, "db-queries.sql");
    const translationsOutputPath = path.join(outputDir, "translations");

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    if (!fs.existsSync(translationsOutputPath)) {
      fs.mkdirSync(translationsOutputPath, { recursive: true });
    }

    // Charger les données existantes
    await loadExistingData(outputDir, translationsOutputPath);

    let allFiles: string[] = [];

    if (inputFile) {
      const fullPath = path.join(inputDir, inputFile);
      if (fs.existsSync(fullPath)) {
        allFiles = [fullPath];
      }
    } else {
      const htmlFiles = glob.sync(path.join(inputDir, "**/*.html"));
      const tsxFiles = glob.sync(path.join(inputDir, "**/*.tsx"));
      const jsxFiles = glob.sync(path.join(inputDir, "**/*.jsx"));
      allFiles = [...htmlFiles, ...tsxFiles, ...jsxFiles];
    }

    if (allFiles.length === 0) {
      console.error(`❌ Aucun fichier HTML/TSX/JSX trouvé dans: ${inputDir}`);
      console.log("ℹ️ Assurez-vous de spécifier un répertoire contenant des fichiers HTML, TSX ou JSX");
      console.log("ℹ️ Exemple d'utilisation: npx tsx index.ts /chemin/vers/fichier.tsx");
      return;
    }

    // Traiter chaque fichier
    for (const filePath of allFiles) {
      const relativePath = path.relative(process.cwd(), filePath);
      const fileExtension = path.extname(filePath).toLowerCase();
      const fileName = path.basename(filePath, fileExtension);
      const pageSlug = slugify(fileName);

      console.log(`\n🔍 Traitement de ${relativePath}...`);

      // Vérifier si le fichier a déjà été traité
      if (pageResults[pageSlug]) {
        console.log(`⚠️ La page ${pageSlug} existe déjà dans les résultats. Mise à jour...`);
        // Supprimer les widgets existants pour cette page
        widgetCollection = widgetCollection.filter(widget =>
          !pageResults[pageSlug].widgets.some(w => w.id === widget.id)
        );
      }

      let pageWidgets: WidgetData[] = [];
      if (fileExtension === '.html') {
        pageWidgets = await processHtmlFile(filePath, pageSlug, outputDir);
      } else if (fileExtension === '.tsx' || fileExtension === '.jsx') {
        pageWidgets = await processReactFile(filePath, pageSlug, outputDir);
      }

      // Mettre à jour ou créer la page
      pageResults[pageSlug] = {
        name: fileName,
        slug: pageSlug,
        layout: "default",
        widgets: pageWidgets
      };

      console.log(`✅ ${relativePath} traité avec ${pageWidgets.length} widgets`);

      // Ajouter les widgets à la collection
      widgetCollection.push(...pageWidgets);
    }

    // Fusionner les nouvelles traductions avec les traductions existantes
    console.log(`\n🔤 Textes extraits: ${Object.keys(translatableTexts).length}`);
    console.log("🌍 Traitement des traductions...");

    const newTranslations = await translateTexts(translatableTexts, process.env.DEEPL_API_KEY || "");

    // Fusionner avec les traductions existantes
    const mergedTranslations: Record<string, Record<string, string>> = {};
    for (const lang of SUPPORTED_LANGUAGES) {
      mergedTranslations[lang] = {
        ...existingTranslations[lang],
        ...newTranslations[lang]
      };
      console.log(`   ✅ Traductions ${lang.toUpperCase()} fusionnées`);
    }

    // Générer la structure du template et le SQL
    const templateStructure = generateTemplateJson(pageResults);
    const sql = generateDatabaseQueries(templateStructure, mergedTranslations);

    console.log("\n📝 Génération des fichiers de sortie...");

    // Écrire les fichiers de sortie
    fs.writeFileSync(jsonOutputFilePath, JSON.stringify(templateStructure, null, 2));
    console.log(`✅ Structure JSON mise à jour ! Fichier : ${jsonOutputFilePath}`);

    for (const lang of SUPPORTED_LANGUAGES) {
      fs.writeFileSync(
        path.join(translationsOutputPath, `translations_${lang}.json`),
        JSON.stringify(mergedTranslations[lang], null, 2)
      );
      console.log(`✅ Traductions ${lang.toUpperCase()} mises à jour !`);
    }

    fs.writeFileSync(sqlOutputFilePath, sql);
    console.log(`✅ Requêtes SQL mises à jour ! Fichier : ${sqlOutputFilePath}`);

    console.log("\n🎉 Processus terminé avec succès !");

    console.log("\n📊 Résumé du traitement :");
    console.log(`   - Fichiers traités : ${allFiles.length}`);
    console.log(`   - Pages au total : ${Object.keys(pageResults).length}`);
    console.log(`   - Widgets au total : ${widgetCollection.length}`);
    console.log(`   - Textes traduits au total : ${Object.keys(mergedTranslations[SUPPORTED_LANGUAGES[0]]).length}`);
    console.log(`   - Langues supportées : ${SUPPORTED_LANGUAGES.join(', ')}`);

  } catch (err) {
    console.error("❌ Erreur lors du traitement des fichiers:", err);
  }
}

if (require.main === module) {
  processAllFiles();
}

export { processAllFiles };
