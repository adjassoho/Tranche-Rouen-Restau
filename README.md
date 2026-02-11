# Tranché Rouen - Site Next.js

Site web moderne pour la boulangerie artisanale Tranché Rouen, converti en Next.js avec TypeScript et Tailwind CSS.

## 🚀 Démarrage rapide

### Installation des dépendances

```bash
npm install
```

### Lancement en mode développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
tranche-rouen/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── menu/
│   │   └── page.tsx          # Page menu du jour
│   ├── contact/
│   │   └── page.tsx          # Page contact
│   ├── reservation/
│   │   └── page.tsx          # Page réservation 3D
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Styles globaux
├── components/
│   ├── Header.tsx            # En-tête de navigation
│   └── Footer.tsx            # Pied de page
├── public/                   # Fichiers statiques
├── tailwind.config.ts        # Configuration Tailwind
├── next.config.ts            # Configuration Next.js
└── package.json
```

## 🎨 Fonctionnalités

- ✅ **Next.js 15** avec App Router
- ✅ **TypeScript** pour la sécurité des types
- ✅ **Tailwind CSS** avec configuration personnalisée
- ✅ **Responsive Design** - mobile, tablette, desktop
- ✅ **Dark Mode** par défaut
- ✅ **Composants réutilisables** (Header, Footer)
- ✅ **Navigation fluide** entre les pages
- ✅ **Optimisation des images** avec Next.js Image
- ✅ **Material Symbols Icons**
- ✅ **Animations CSS** personnalisées

## 🎯 Pages disponibles

- **/** - Page d'accueil avec hero section et présentation
- **/menu** - Menu du jour avec produits en temps réel
- **/contact** - Informations de contact et carte interactive
- **/reservation** - Système de réservation 3D interactif

## 🛠️ Technologies utilisées

- **Next.js 15** - Framework React
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Google Fonts** - Space Grotesk & Noto Sans
- **Material Symbols** - Icônes

## 🎨 Personnalisation

### Couleurs (tailwind.config.ts)

```typescript
colors: {
  primary: "#d41132",
  "background-dark": "#221013",
  "surface-dark": "#181112",
  "text-muted": "#b99da1",
  // ...
}
```

### Polices

- **Display**: Space Grotesk (titres)
- **Body**: Noto Sans (texte)

## 📝 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Crée le build de production
- `npm start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## 🌐 Déploiement

Le projet peut être déployé facilement sur :

- **Vercel** (recommandé) - `vercel deploy`
- **Netlify**
- **AWS Amplify**
- Tout hébergeur supportant Node.js

## 📄 License

Projet privé - Tranché Rouen © 2024
