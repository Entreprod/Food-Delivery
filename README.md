# N Z A F O O D

### Application de livraison de nourriture développée avec React.js

NzaFood est une plateforme innovante de livraison de nourriture qui met à l'honneur les saveurs africaines. L'application permet aux utilisateurs de découvrir une sélection de restaurants africains locaux, offrant ainsi une expérience culinaire authentique tout en soutenant les commerces de proximité. Avec une interface moderne et intuitive, NzaFood assure une navigation fluide et agréable.


L'identité visuelle de NzaFood s'inspire des couleurs vibrantes de l'Afrique, symbolisant sa richesse culinaire et culturelle. Les tons chauds tels que l'orange et le vert évoquent les épices, les ingrédients frais et la nature. L'interface de l'application est conçue pour être accueillante et immersive, avec des animations douces et des icônes modernes qui reflètent l'énergie et la convivialité des restaurants africains.

---

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

### 1. **Git**
   - Téléchargez Git depuis [https://git-scm.com/download/win](https://git-scm.com/download/win)
   - Vérifiez l'installation en tapant dans PowerShell :
     ```powershell
     git --version
     ```

### 2. **Node.js et npm**
   - Téléchargez Node.js depuis [https://nodejs.org/](https://nodejs.org/)
   - Vérifiez l'installation avec :
     ```powershell
     node --version
     npm --version
     ```

### 3. **Cursor (IDE recommandé)**
   - Téléchargez Cursor depuis [https://cursor.sh/](https://cursor.sh/)
   - Lancez l'application après installation.

---

## 📥 Installation

1. **Clonez le repository :**
   ```powershell
   git clone <votre-repo-url>
   cd food-delivery-app
   ```

2. **Installez les dépendances du backend :**
   ```powershell
   cd backend
   npm install
   ```

3. **Configurez le backend :**
   - Créez un fichier `.env` dans le dossier `backend` avec les variables suivantes :
     ```env
     PORT=5000
     JWT_SECRET=votre_secret_jwt
     STRIPE_SECRET_KEY=votre_cle_stripe
     ```

4. **Installez les dépendances du frontend :**
   ```powershell
   cd ../frontend
   npm install
   ```

---

## 🚀 Lancement de l'application

1. **Démarrer le backend :**
   ```powershell
   cd backend
   npm start
   ```
   Le backend démarre sur `http://localhost:5000`.

2. **Démarrer le frontend :**
   ```powershell
   cd frontend
   npm start
   ```
   Le frontend démarre sur `http://localhost:3000`.

---

## 🏗️ Structure du Projet

```
food-delivery-app/
├── backend/
│   ├── controllers/     # Logique métier
│   ├── models/          # Modèles de données
│   ├── routes/          # Routes API
│   ├── src/             # Code source principal
│   └── tests/           # Tests
├── frontend/
│   ├── src/
│   │   ├── assets/      # Images et ressources
│   │   ├── components/  # Composants React
│   │   ├── context/     # Contextes React
│   │   ├── pages/       # Pages de l'application
│   │   └── styles/      # Fichiers CSS
│   └── public/          # Fichiers statiques
```

---

## 🛠️ Technologies Utilisées

### Backend
- **Node.js**
- **Express.js**
- **JWT** pour l'authentification
- **Stripe** pour les paiements

### Frontend
- **React.js**
- **React Router**
- **Axios**
- **React Stripe.js**
- **React Spring** pour les animations
- **CSS** pour le style

---

## 🔐 Fonctionnalités

- 🍽️ **Liste des restaurants**
- 🛒 **Gestion du panier**
- 💳 **Mode de Paiement**
