import * as deepl from "deepl-node";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "./types";

export async function translateTexts(
  texts: Record<string, string>,
  apiKey: string
): Promise<Record<string, Record<string, string>>> {
  const translations: Record<string, Record<string, string>> = {};

  for (const lang of SUPPORTED_LANGUAGES) {
    translations[lang] = {};

    if (lang === DEFAULT_LANGUAGE) {
      translations[lang] = { ...texts };
      continue;
    }
  }

  if (!apiKey) {
    console.error('❌ Erreur: Clé API DeepL non configurée dans les variables d\'environnement');
    console.log('⚠️ Les traductions ne seront pas générées. Définissez DEEPL_API_KEY dans le fichier .env');
    return translations;
  }

  const translator = new deepl.Translator(apiKey);

  for (const lang of SUPPORTED_LANGUAGES) {
    if (lang === DEFAULT_LANGUAGE) continue;

    console.log(`🔄 Traduction vers ${lang} avec DeepL...`);

    const textValues = Object.values(texts);
    const batchSize = 50;

    try {
      for (let i = 0; i < textValues.length; i += batchSize) {
        const batch = textValues.slice(i, i + batchSize);

        console.log(`   Traduction du lot ${Math.floor(i / batchSize) + 1}/${Math.ceil(textValues.length / batchSize)}...`);

        const targetLang = convertLanguageCodeForDeepL(lang) as deepl.TargetLanguageCode;

        const translatedTexts = await translator.translateText(
          batch,
          DEFAULT_LANGUAGE,
          targetLang
        );

        const keys = Object.keys(texts).slice(i, i + batchSize);
        for (let j = 0; j < keys.length; j++) {
          if (translatedTexts[j]) {
            translations[lang][keys[j]] = translatedTexts[j].text;
          } else {
            translations[lang][keys[j]] = texts[keys[j]];
          }
        }
        if (i + batchSize < textValues.length) {
          await new Promise(resolve => setTimeout(resolve, 200));
        }
      }
    } catch (error) {
      console.error(`⚠️ Erreur lors de la traduction vers ${lang} avec DeepL:`, error);
      console.log(`⚠️ Utilisation des textes originaux pour la langue ${lang}`);
      translations[lang] = { ...texts };
    }
  }

  return translations;
}

function convertLanguageCodeForDeepL(langCode: string): string {
  const langMappings: Record<string, string> = {
    'en': 'EN-US',
    'pt': 'PT-BR',
    'de': 'DE',
    'es': 'ES',
    'it': 'IT',
    'fr': 'FR'
  };

  return langMappings[langCode] || langCode.toUpperCase();
}
