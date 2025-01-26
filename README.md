# Application de Restaurants

Cette application permet aux utilisateurs de rechercher des restaurants, de consulter leurs détails, et d'ajouter des plats à leur panier. Elle est construite avec React et utilise des animations pour une expérience utilisateur fluide.

## Langage et Technologies

- **Langage principal** : JavaScript (ES6+)
- **Framework** : React (version 18.2.0)
- **Gestion d'état** : Contexte React (Context API)
- **Animations** : react-spring (version 9.7.2)
- **Icônes** : react-icons (version 4.8.0)

## Plateformes supportées

Cette application est conçue pour fonctionner sur les plateformes suivantes :

- **Web** : Compatible avec tous les navigateurs modernes (Chrome, Firefox, Safari, Edge).
- **Mobile** : L'application peut être exécutée sur un navigateur mobile, mais elle n'est pas native. Pour une application mobile native, il faudrait utiliser React Native.

## Fonctionnalités

- Recherche de restaurants par nom ou cuisine.
- Affichage des détails des restaurants (nom, cuisine, note, image).
- Ajout de plats au panier.
- Animation de fondu horizontal progressive pour tous les éléments.

## Prérequis

- Node.js (version 16 ou supérieure)
- npm (version 7 ou supérieure)

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd votre-repo
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

## Dépendances

Les dépendances suivantes sont nécessaires pour exécuter ce projet :

- **React** (version 18.2.0)
- **react-spring** (version 9.7.2) pour les animations.
- **react-icons** (version 4.8.0) pour les icônes.

Pour installer ces dépendances, exécutez :

```bash
npm install react react-dom react-spring react-icons
```

## Structure du projet

```

votre-repo/
├── public/
├── src/
│   ├── assets/               # Images et autres ressources
│   ├── components/           # Composants réutilisables
│   ├── context/              # Contexte React (ex: CartContext)
│   ├── pages/                # Pages de l'application
│   ├── styles/               # Fichiers CSS
│   ├── App.js                # Point d'entrée de l'application
│   └── index.js              # Fichier de rendu principal
├── package.json
└── README.md 