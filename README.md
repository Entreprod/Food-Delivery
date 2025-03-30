# Application de Livraison de Nourriture

Cette application est une plateforme de livraison de nourriture développée avec React.js pour le frontend et Node.js/Express pour le backend.

## 📸 Captures d'écran

*Note : Les captures d'écran de l'application seront ajoutées une fois l'application en cours d'exécution.*

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine Windows :

1. **Git**
   - Téléchargez Git depuis [https://git-scm.com/download/win](https://git-scm.com/download/win)
   - Lors de l'installation, choisissez les options par défaut
   - Vérifiez l'installation en ouvrant PowerShell et en tapant :
     ```powershell
     git --version
     ```

2. **Node.js et npm**
   - Téléchargez la version LTS de Node.js depuis [https://nodejs.org/](https://nodejs.org/)
   - L'installation de Node.js inclut npm automatiquement
   - Vérifiez l'installation :
     ```powershell
     node --version
     npm --version
     ```

3. **Cursor (IDE recommandé)**
   - Téléchargez Cursor depuis [https://cursor.sh/](https://cursor.sh/)
   - Installez et lancez l'application

---

## 📥 Installation

1. **Clonez le repository**
   ```powershell
   git clone <votre-repo-url>
   cd food-delivery-app
   ```

2. **Installation des dépendances du backend**
   ```powershell
   cd backend
   npm install
   ```

3. **Configuration du backend**
   - Créez un fichier `.env` dans le dossier `backend` avec les variables suivantes :
     ```env
     PORT=5000
     JWT_SECRET=votre_secret_jwt
     STRIPE_SECRET_KEY=votre_cle_stripe
     ```

4. **Installation des dépendances du frontend**
   ```powershell
   cd ../frontend
   npm install
   ```

## 🚀 Lancement de l'application

1. **Démarrer le backend**
   ```powershell
   cd backend
   npm start
   ```
   Le serveur backend démarrera sur `http://localhost:5000`

2. **Démarrer le frontend**
   ```powershell
   cd frontend
   npm start
   ```
   L'application frontend démarrera sur `http://localhost:3000`

## 🏗️ Structure du Projet

```
food-delivery-app/
├── backend/
│   ├── controllers/     # Logique métier
│   ├── models/         # Modèles de données
│   ├── routes/         # Routes API
│   ├── src/           # Code source principal
│   └── tests/         # Tests
├── frontend/
│   ├── src/
│   │   ├── assets/    # Images et ressources
│   │   ├── components/# Composants React
│   │   ├── context/   # Contextes React
│   │   ├── pages/     # Pages de l'application
│   │   └── styles/    # Fichiers CSS
│   └── public/        # Fichiers statiques
```

## 🛠️ Technologies Utilisées

### Backend
- Node.js
- Express.js
- JWT pour l'authentification
- Stripe pour les paiements

### Frontend
- React.js
- React Router
- Axios
- React Stripe.js
- React Spring pour les animations
- CSS pour le style

## 🔐 Fonctionnalités

- 👤 Authentification des utilisateurs
- 🍽️ Liste des restaurants
- 🛒 Gestion du panier
- 💳 Paiement sécurisé
- 📍 Suivi des commandes

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Si vous rencontrez des problèmes :
1. Vérifiez que tous les prérequis sont installés correctement
2. Vérifiez les logs dans la console
3. Ouvrez une issue sur GitHub

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

## 🆕 Changements récents

- Ajout de la fonctionnalité de suivi des commandes avec le composant `TrackOrder`.
- Amélioration de l'interface utilisateur avec des animations React Spring.
- Préparation de l'intégration de Stripe pour les paiements (backend et frontend).
- Ajout de nouveaux restaurants et menus dans `restaurantsData.js`.
- Mise à jour des tests unitaires pour `TrackOrder` et `Cart`.
- Gestion des erreurs pour les appels API dans `TrackOrder` et `Cart`.
- Amélioration des styles CSS, y compris le support du mode sombre.
- Suppression de l'intégration MongoDB. Les données sont maintenant gérées localement dans le backend.