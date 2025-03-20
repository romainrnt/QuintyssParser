module.exports = {
  semi: true, // Ajout de points-virgules pour plus de clarté
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100, // Réduit légèrement pour améliorer la lisibilité
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'auto',
  bracketSpacing: true, // Espace entre accolades
  arrowParens: 'always', // Parenthèses pour les fonctions fléchées même avec un seul paramètre
  jsxSingleQuote: false, // Utilise des doubles guillemets dans JSX
  quoteProps: 'as-needed', // Guillemets sur les propriétés seulement si nécessaire
  htmlWhitespaceSensitivity: 'strict', // Stricte sur les espaces dans HTML/JSX
  proseWrap: 'preserve', // Ne pas reformater automatiquement les textes longs
  embeddedLanguageFormatting: 'auto', // Format automatique des langages inclus
  insertPragma: false, // Ne pas insérer de pragma en haut des fichiers
  requirePragma: false, // Ne pas exiger de pragma pour formater les fichiers
  rangeStart: 0, // Commencer le formatage au début du fichier
  rangeEnd: Infinity, // Formater jusqu'à la fin du fichier
  singleAttributePerLine: false, // Ne pas forcer un attribut par ligne en JSX
}
