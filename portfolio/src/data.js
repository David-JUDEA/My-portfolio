// ─────────────────────────────────────────────────────────
//  FICHIER PRINCIPAL DE PERSONNALISATION
//  Modifie uniquement ce fichier pour mettre à jour le site
// ─────────────────────────────────────────────────────────

export const config = {
  // Identité
  name: "Judea",
  firstName: "Judea",
  lastName: "David",
  role: "Développeur",

  // Présentation courte (2 phrases max chacune)
  bio: "D'une curiosité naturel.",
  bio2: "M'épanouir dans le domaine de la tech.",

  // Tags personnels — modifie librement
  tags: ["🎓 ETNA Paris", "💼 Alternance", "🐧 Omarchy/Linux", "🚲 VTT"],

  // Infos de contact
  location: "Paris, France",
  availability: "Disponible",
  contractType: "Alternance",
  email: "judea_d@etna-alternance.net",

  // Liens sociaux
  links: {
    github: "https://github.com/David-JUDEA",
    linkedin: "https://www.linkedin.com/in/david-catalin-judea/",
  },
};

// ─── Barre Omarchy (section Contact) ─────────────────────
// Modifie `message` pour changer le texte affiché dans la barre
export const omarchyBar = {
  message: "Contact.md",
};

// ─── Marquee Skills ───────────────────────────────────────
// Technologies qui défilent en haut de la section Skills
export const skillsMarquee = [
  "React",
  "TypeScript",
  "Node.js",
  "GitHub",
  "Omarchy",
  "MySQL",
  "Docker",
  "GitLab",
  "Figma",
  "JavaScript",
  "Linux",
  "CSS",
  "GLPI",
  "Python",
  "Bash",
  "Unix",
  "n8n",
  "VS-Code",
  "Unreal-Engine 5",
];

// ─── Compétences par catégorie ────────────────────────────
// Affichées en lignes simples sous le marquee
export const skillGroups = [
  {
    id: "frontend",
    category: "Frontend",
    color: "var(--green)",
    items: ["React", "TypeScript", "HTML", "CSS", "Figma", "JavaScript"],
  },
  {
    id: "backend",
    category: "Backend",
    color: "var(--yellow)",
    items: ["MariaDB", "Node.js", "Flask", "MySQL"],
  },
  {
    id: "infra",
    category: "Infra/outil",
    color: "var(--teal)",
    items: ["Docker", "GitLab", "Github", "Unix", "Figma", "VS-Code", "UE5"],
  },
];

// ─── Projets ──────────────────────────────────────────────
// Chaque projet est affiché en carte
export const projects = [
  {
    id: "01",
    title: "Spider-Bot",
    year: "05/2026 - 05/2026",
    image: "/projects/spider-bot.jpg",
    description:
      "• Montage et programmation d'un robot araignée à huit pattes. \n\n • Objectif : faire danser l'araignée \n • Basé sur le module ESP32-S2 Mini.",
    tech: ["C", "CMake"],
    url: "https://github.com/David-JUDEA/Spider-Bot",
    color: "var(--green-d)",
  },
  {
    id: "02",
    title: "Cloud-Photo-Manager",
    year: "03/2026 - 03/2026",
    image: "/projects/cloud-photo-manager.jpg",
    description:
      "• Il s'agit d'une démonstration technique qui simule un environnement cloud AWS directement en local.",
    tech: ["JavaScript", "Python", "CSS", "HTML", "Docker"],
    url: "https://github.com/David-JUDEA/Cloud-Photo-Manager",
    color: "var(--yellow)",
  },
  {
    id: "03",
    title: "SIGNAL LOST VR",
    year: "12/2025 - 12/2025",
    image: "/projects/game-vr.png",
    description:
      "• Une expérience de survival horror en réalité virtuelle. \n\n • Le joueur incarne un vidéaste, venu pour tourner un reportage.",
    tech: ["Unreal-Engine 5", "Blender"],
    url: "https://github.com/David-JUDEA/Introduction-to-virtual-reality",
    color: "var(--blue)",
  },
  {
    id: "04",
    title: "EtnaFlix",
    year: "11/2025 - 11/2025",
    image: "/projects/movies.jpg",
    description:
      "• Une application mobile de catalogue de films. \n\n • Elle permet aux utilisateurs de parcourir les films populaires.",
    tech: ["TypeScript", "JavaScript"],
    url: "https://github.com/David-JUDEA/Fundamentals-of-mobile-development",
    color: "var(--teal)",
  },
  {
    id: "05",
    title: "The Productivity Engine",
    year: "11/2025 - 11/2025",
    image: "/projects/n8n.png",
    description:
      "• Ce projet réunit des flux n8n : \n • Automatisation des tâches quotidiennes \n • Surveillance des systèmes \n • Intégration de l'IA dans la messagerie.",
    tech: ["n8n", "Gemini-API"],
    url: "https://github.com/David-JUDEA/Fundamentals_of_no-code_low-code",
    color: "var(--green)",
  },
  {
    id: "06",
    title: "Computer-Fundamentals",
    year: "10/2025 - 10/2025",
    image: "/projects/computer-fundamentals.jpg",
    description:
      "• Des projets réalisés au début de ma formation, portant sur : \n • développement web \n • l'administration système \n • logique algorithmique.",
    tech: ["Shell", "HTML", "Python", "CSS", "JavaScript"],
    url: "https://github.com/David-JUDEA/Computer-Fundamentals",
    color: "var(--yellow1)",
  },
];

// ─── Expériences ──────────────────────────────────────────
export const experiences = [
  {
    id: "stage0",
    period: "11/2024-01/2025",
    company: "Mairie de Goussainville",
    role: "Technicien IT (Stagiaire)",
    description:
      "• Accompagnement technique des écoles et des structures municipales. Préparation et test du déploiement de Windows 11.",
  },
  {
    id: "stage1",
    period: "01/2024-04/2024",
    company: "Mairie de Goussainville",
    role: "Technicien IT (Stagiaire)",
    description:
      "• Assistance de proximité auprès des agents pour le renouvellement du parc informatique.",
  },
  {
    id: "stage2",
    period: "04/2023-06/2023",
    company: "Mairie de Goussainville",
    role: "Technicien IT (Stagiaire)",
    description:
      "• Support aux utilisateurs pour le remplacement de leur matériel de bureau. Préparation des ordinateurs portables.",
  },
];
