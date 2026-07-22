# Portfolio — React + Vite + Vercel

Portfolio développeur construit avec **React 18** et **Vite**.  
Déployable en 1 clic sur **Vercel**.

---

## Lancer en local

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## Personnalisation

> **Tout se passe dans un seul fichier : `src/data.js`**  
> Tu n'as rien d'autre à toucher pour mettre à jour le contenu.

### Ce que tu peux modifier dans `src/data.js`

| Clé                                    | Ce que ça change                               |
| -------------------------------------- | ---------------------------------------------- |
| `config.name`                          | Ton prénom et nom (logo + footer)              |
| `config.firstName` / `config.lastName` | Affichage dans le hero                         |
| `config.role`                          | Titre sous ton nom                             |
| `config.bio` / `config.bio2`           | Les deux lignes de présentation                |
| `config.tags`                          | Les petits badges personnels (emoji + texte)   |
| `config.email`                         | Adresse email dans Contact                     |
| `config.links.github`                  | Lien GitHub                                    |
| `config.links.linkedin`                | Lien LinkedIn                                  |
| `config.availability`                  | Texte du badge vert (ex: "Disponible")         |
| `config.contractType`                  | Type de contrat (ex: "Alternance · Freelance") |
| `omarchyBar.message`                   | Message dans la barre style Omarchy            |
| `skillsMarquee`                        | Technologies qui défilent en haut de Skills    |
| `skillGroups`                          | Compétences par catégorie (lignes)             |
| `projects`                             | Tes projets en cartes                          |
| `experiences`                          | Ton parcours professionnel                     |

---

## Structure du projet

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css       ← Barre de navigation fixe
│   ├── Hero.jsx   / Hero.css         ← Section d'accueil
│   ├── Skills.jsx / Skills.css       ← Compétences (marquee + lignes)
│   ├── Projects.jsx / Projects.css   ← Projets en cartes
│   ├── Experience.jsx / Experience.css  ← Timeline expérience
│   └── Contact.jsx  / Contact.css   ← Contact + barre Omarchy
├── hooks/
│   └── useInView.js                  ← Animation au scroll (1 seul hook)
├── data.js                           ← ← ← TON FICHIER DE CONTENU
├── App.jsx                           ← Assemblage des composants
├── App.css                           ← Variables CSS + styles globaux
└── main.jsx                          ← Point d'entrée React
```

---

## Palette de couleurs

Les couleurs sont définies dans `src/App.css` sous `:root` :

```css
--green: #6db87a; /* Vert sauge — couleur principale */
--yellow: #c9983a; /* Ambre doré — couleur secondaire */
--teal: #3aada0; /* Teal       — couleur tertiaire  */
--gradient: linear-gradient(135deg, #6db87a, #a5c84a, #c9983a);
```

Pour changer la palette, modifie ces 4 lignes et le reste s'adapte automatiquement.

---

## Déployer sur Vercel

### Option 1 — Interface Vercel (recommandé)

1. Push le code sur GitHub
2. Va sur [vercel.com](https://vercel.com) → **New Project**
3. Importe le repo → **Deploy**
4. C'est tout ✓

Chaque `git push main` redéploie automatiquement.

### Option 2 — CLI

```bash
npm i -g vercel
vercel        # première fois (configure le projet)
vercel --prod # déploiement production
```

---

## Build

```bash
npm run build     # génère le dossier dist/
npm run preview   # prévisualise le build en local
```

---

## Ajouter un projet

Dans `src/data.js`, ajoute un objet dans le tableau `projects` :

```js
{
  id:          '04',
  title:       'Mon Nouveau Projet',
  year:        '2025',
  description: "Description courte du projet.",
  tech:        ['React', 'Node.js', 'PostgreSQL'],
  url:         'https://lien-du-projet.fr',
  color:       'var(--green)',   // ou --yellow, --teal
},
```

---

## FAQ

**Comment changer le message dans la barre Omarchy ?**  
→ Modifie `omarchyBar.message` dans `src/data.js`.

**Comment changer les couleurs du portfolio ?**  
→ Modifie les variables `--green`, `--yellow`, `--teal` dans `src/App.css`.

**Comment ajouter une section ?**  
→ Crée `src/components/MaSection.jsx` + `MaSection.css`, importe-la dans `src/App.jsx`.

**Le build échoue, que faire ?**  
→ Lance `npm install` puis `npm run build` à nouveau.
