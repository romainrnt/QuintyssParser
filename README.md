# Quintyss Parser

Un outil de conversion automatique de fichiers HTML, TSX et JSX en templates pour le système Quintyss, avec support multilingue.

## 📋 Aperçu

Ce parseur analyse les fichiers HTML et React (TSX/JSX) pour les transformer en widgets compatibles avec le système Quintyss. Il extrait automatiquement les textes pour la traduction, génère une structure JSON et prépare des requêtes SQL pour l'intégration en base de données.

### Fonctionnalités principales

- ✅ Analyse multi-formats : HTML, TSX et JSX
- ✅ Transformation automatique en widgets Quintyss
- ✅ Support multilingue avec DeepL (6 langues)
- ✅ Génération de requêtes SQL pour PostgreSQL
- ✅ Conservation de la hiérarchie des éléments
- ✅ Détection intelligente des types de widgets

## 🚀 Installation

### Prérequis

- Node.js 16+
- npm ou yarn

### Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/votre-nom/QuintyssParser.git
cd QuintyssParser
```

2. Installez les dépendances :

```bash
npm install
```

3. Configuration de DeepL (optionnel) :

Créez un fichier `.env` à la racine du projet avec votre clé API DeepL :

```
DEEPL_API_KEY=votre_clé_api_deepl
```

> Note : L'outil fonctionne sans clé DeepL, mais ne générera pas de traductions.

## 💻 Utilisation

### Commande de base

```bash
npx tsx src/index.ts [chemin_vers_fichier_ou_dossier]
```

### Exemples

Analyser un fichier spécifique :

```bash
npx tsx src/index.ts chemin/vers/page.html
```

Analyser tous les fichiers d'un dossier :

```bash
npx tsx src/index.ts chemin/vers/mon/projet
```

Utiliser le dossier courant :

```bash
npx tsx src/index.ts
```

### Résultats

Les fichiers de sortie sont générés dans un dossier `parsed/` créé à côté du fichier/dossier d'entrée :

```
📁 parsed/
   ├── 📄 template-structure.json    # Structure JSON du template
   ├── 📄 db-queries.sql             # Requêtes SQL pour PostgreSQL
   ├── 📄 [fichiers convertis]       # Copies des fichiers traités
   └── 📁 translations/              # Fichiers de traduction par langue
       ├── 📄 translations_fr.json
       ├── 📄 translations_en.json
       └── 📄 [autres langues].json
```

## 🔍 Structure du projet

Le projet est organisé de manière modulaire pour faciliter la maintenance :

- `src/index.ts` - Point d'entrée principal et coordination
- `src/types.ts` - Définition des types et constantes
- `src/processors.ts` - Traitement des fichiers HTML et React
- `src/translators.ts` - Gestion des traductions avec DeepL
- `src/sqlGenerator.ts` - Génération des requêtes SQL

## 🧩 Types de widgets supportés

Le parseur convertit automatiquement les éléments HTML et composants React en widgets Quintyss :

| Type d'élément         | Widget Quintyss   |
| ---------------------- | ----------------- |
| h1, h2, h3, h4, h5, h6 | WidgetText        |
| p, span, label         | WidgetText/Editor |
| div, section, article  | WidgetContainer   |
| button, a              | WidgetAction      |
| img, video, audio      | WidgetMedia       |
| ul, ol, li             | WidgetList        |
| form                   | WidgetForm        |
| input, textarea        | WidgetInput       |
| nav                    | WidgetNavigation  |

Les composants React sont analysés par leur nom pour déterminer le type de widget correspondant.

## 🌍 Langues supportées

Le parseur génère des traductions pour les langues suivantes :

- 🇫🇷 Français (fr)
- 🇬🇧 Anglais (en) - Langue source par défaut
- 🇩🇪 Allemand (de)
- 🇪🇸 Espagnol (es)
- 🇮🇹 Italien (it)
- 🇵🇹 Portugais (pt)

## 🛠️ Dépannage

### Erreur de types TypeScript

Si vous rencontrez des erreurs de type avec Cheerio, assurez-vous d'avoir installé `domhandler` :

```bash
npm install domhandler --save
```

### Erreur d'API DeepL

Si les traductions échouent :

1. Vérifiez que votre clé API DeepL est valide
2. Assurez-vous que le fichier `.env` existe et est correctement formaté
3. Vérifiez votre quota d'utilisation DeepL

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Forker le dépôt
2. Créer une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Commiter vos changements (`git commit -m 'Ajout de ma fonctionnalité'`)
4. Pousser vers la branche (`git push origin feature/ma-fonctionnalite`)
5. Ouvrir une Pull Request
