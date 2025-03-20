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

const widgetCollection: WidgetData[] = [];
const pageResults: Record<string, PageData> = {};

async function processAllFiles() {
  console.log("🚀 Début du traitement des fichiers...");

  try {
    const args = process.argv.slice(2);
    const projectDir = args[0] || process.cwd();

    console.log(`🔍 Analyse du répertoire: ${projectDir}`);

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

    const outputDir = path.join(inputDir, "parsed");
    const jsonOutputFilePath = path.join(outputDir, "template-structure.json");
    const sqlOutputFilePath = path.join(outputDir, "db-queries.sql");
    const translationsOutputPath = path.join(outputDir, "translations");

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    if (!fs.existsSync(translationsOutputPath)) {
      fs.mkdirSync(translationsOutputPath, { recursive: true });
    }

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
      console.log("ℹ️ Exemple d'utilisation: npx tsx parser-deep.ts /chemin/vers/projet");
      return;
    }

    for (const filePath of allFiles) {
      const relativePath = path.relative(inputDir, filePath);
      const fileExtension = path.extname(filePath).toLowerCase();
      const pageName = path.basename(filePath, fileExtension);
      const pageSlug = slugify(pageName);

      console.log(`\n🔍 Traitement de ${relativePath}...`);

      let pageWidgets: WidgetData[] = [];
      if (fileExtension === '.html') {
        pageWidgets = await processHtmlFile(filePath, pageSlug, outputDir);
      } else if (fileExtension === '.tsx' || fileExtension === '.jsx') {
        pageWidgets = await processReactFile(filePath, pageSlug, outputDir);
      }

      pageResults[pageSlug] = {
        name: pageName,
        slug: pageSlug,
        layout: "default",
        widgets: pageWidgets
      };

      console.log(`✅ ${relativePath} traité avec ${pageWidgets.length} widgets`);

      widgetCollection.push(...pageWidgets);
    }

    console.log(`\n🔤 Textes extraits: ${Object.keys(translatableTexts).length}`);

    console.log("🌍 Traduction des textes...");
    const translations = await translateTexts(translatableTexts, process.env.DEEPL_API_KEY || "");

    const templateStructure = generateTemplateJson(pageResults);

    const sql = generateDatabaseQueries(templateStructure, translations);

    console.log("\n📝 Génération des fichiers de sortie...");

    fs.writeFileSync(jsonOutputFilePath, JSON.stringify(templateStructure, null, 2));
    console.log(`✅ Structure JSON générée ! Fichier créé : ${jsonOutputFilePath}`);

    for (const lang of SUPPORTED_LANGUAGES) {
      fs.writeFileSync(
        path.join(translationsOutputPath, `translations_${lang}.json`),
        JSON.stringify(translations[lang], null, 2)
      );
      console.log(`✅ Traductions ${lang.toUpperCase()} générées !`);
    }

    fs.writeFileSync(sqlOutputFilePath, sql);
    console.log(`✅ Requêtes SQL générées ! Fichier créé : ${sqlOutputFilePath}`);

    console.log("\n🎉 Processus terminé avec succès !");

    console.log("\n📊 Résumé du traitement :");
    console.log(`   - Fichiers traités : ${allFiles.length}`);
    console.log(`   - Pages générées : ${Object.keys(pageResults).length}`);
    console.log(`   - Widgets créés : ${widgetCollection.length}`);
    console.log(`   - Textes traduits : ${Object.keys(translatableTexts).length}`);
    console.log(`   - Langues supportées : ${SUPPORTED_LANGUAGES.join(', ')}`);

  } catch (err) {
    console.error("❌ Erreur lors du traitement des fichiers:", err);
  }
}

if (require.main === module) {
  processAllFiles();
}

export { processAllFiles };
