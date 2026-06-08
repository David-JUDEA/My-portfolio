# Portfolio — Votre Nom

Portfolio personnel développé avec **React + TypeScript + Vite**.  
Déployé sur **Vercel**.

## Stack

- React 18
- TypeScript 5
- Vite 5
- CSS Modules

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview   # tester le build localement
```

## Déployer sur Vercel

### Option 1 — Via l'interface Vercel (recommandé)

1. Push ton code sur GitHub
2. Va sur [vercel.com](https://vercel.com) → **New Project**
3. Importe ton repo GitHub
4. Vercel détecte automatiquement Vite — clique **Deploy**
5. C'est tout ✓

Ton site sera disponible sur `https://ton-projet.vercel.app`

### Option 2 — Via CLI

```bash
npm i -g vercel
vercel        # première fois
vercel --prod # les fois suivantes
```

### Déploiement automatique

Chaque `git push` sur `main` redéploie automatiquement le site.

## Personnalisation

Toutes les données sont dans `src/data/` — aucune logique à toucher :

```
src/data/
  config.ts      # Nom, email, liens, disponibilité
  projects.ts    # Projets
  experience.ts  # Parcours
  skills.ts      # Compétences
```

## Structure du projet

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, Skills, Projects, Experience, Contact
│   └── ui/           # Badge, Button, Tag, SectionHeader
├── data/             # Données statiques (à personnaliser)
├── hooks/            # useScrollSpy, useIntersection
├── styles/           # variables.css, reset.css, global.css
├── types/            # Types TypeScript
├── App.tsx
└── main.tsx
```

## Licence

MIT
