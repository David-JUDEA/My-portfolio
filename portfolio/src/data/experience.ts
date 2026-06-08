import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'freelance',
    period: '2022 → Présent',
    company: 'Freelance',
    role: 'Développeur Fullstack Senior',
    description:
      "Missions variées pour des clients grands comptes et startups. Architecture d'APIs, migrations techniques, mise en place de CI/CD et accompagnement d'équipes juniors.",
  },
  {
    id: 'agence-xyz',
    period: '2019 → 2022',
    company: 'Agence XYZ',
    role: 'Développeur Backend — Symfony',
    description:
      'Développement de projets web complexes en PHP / Symfony. Référent technique sur plusieurs projets, participation aux rituels Agile et code reviews.',
  },
  {
    id: 'startup-abc',
    period: '2017 → 2019',
    company: 'Startup ABC',
    role: 'Développeur Fullstack Junior',
    description:
      "Première expérience professionnelle en startup. Développement full-stack PHP et JavaScript, mise en production sur serveurs Linux.",
  },
]
