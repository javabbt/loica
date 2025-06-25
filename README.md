# Loica - Application Web Next.js

## 📝 Description

Loica est une application web moderne construite avec Next.js 13+, offrant une expérience utilisateur fluide et responsive. Cette application combine des fonctionnalités avancées de navigation, d'authentification et de présentation de contenu.

## 🚀 Fonctionnalités

- **Architecture Modern**: Utilisation de Next.js 13+ avec App Router
- **Interface Utilisateur Élégante**: Composants UI personnalisés et responsive
- **Authentification**: Système de connexion et d'inscription sécurisé
- **Navigation Dynamique**: Menu de navigation interactif
- **Contenu Multimédia**: Support pour images et vidéos
- **Pages Principales**:
  - Accueil
  - À propos
  - Blog
  - Contact
  - Menu
  - Connexion/Inscription

## 🛠 Technologies Utilisées

- **Frontend**: Next.js 13+, React, TypeScript
- **Styles**: CSS Modules, PostCSS
- **UI Components**: Composants personnalisés
- **Authentification**: API Routes Next.js
- **Autres**: ESLint pour la qualité du code

## 📦 Installation

1. Clonez le repository :

```bash
git clone [url-du-repo]
cd loica
```

2. Installez les dépendances :

```bash
npm install
```

3. Lancez le serveur de développement :

```bash
npm run dev
```

L'application sera accessible à l'adresse `http://localhost:3000`

## 🗂 Structure du Projet

```
loica/
├── app/                    # Dossier principal de l'application
│   ├── about/             # Page À propos
│   ├── api/               # Routes API
│   ├── blog/              # Page Blog
│   ├── contact/           # Page Contact
│   ├── login/             # Page de connexion
│   ├── signup/            # Page d'inscription
│   └── ...
├── components/            # Composants réutilisables
│   ├── footer.tsx        # Pied de page
│   ├── header.tsx        # En-tête
│   ├── hero.tsx          # Section héro
│   └── ui/               # Composants UI génériques
├── lib/                   # Utilitaires et fonctions
├── public/               # Assets statiques
│   ├── images/           # Images
│   └── videos/           # Vidéos
└── ...
```

## ⚙️ Configuration

### Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
NEXT_PUBLIC_API_URL=votre_url_api
# Ajoutez d'autres variables selon vos besoins
```

### Configuration Next.js

Le fichier `next.config.ts` contient la configuration personnalisée de Next.js.

## 🔒 Sécurité

- Authentification sécurisée via API Routes
- Protection des routes sensibles
- Validation des données côté serveur

## 🚀 Déploiement

1. Construisez l'application :

```bash
npm run build
```

2. Démarrez en production :

```bash
npm start
```

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à nous contacter.

---

Développé avec ❤️ par l'équipe Loica
