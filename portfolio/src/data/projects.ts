import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'icade',
    title: 'Icade',
    year: '2023 – 2024',
    description:
      "Maintenance évolutive d'un écosystème Symfony / eZPlatform. Modernisation du frontend via Vue.js, intégration de Sonar pour la qualité code, déploiements automatisés sous GitLab CI.",
    tech: ['Symfony 5', 'PHP 7', 'Vue.js', 'GitLab CI', 'eZPlatform'],
    url: 'https://icade.fr',
  },
  {
    id: 'marketplace-b2b',
    title: 'Marketplace B2B',
    year: '2022 – 2023',
    description:
      "Conception et développement d'une API RESTful avec API Platform. Architecture orientée messages via RabbitMQ pour les commandes asynchrones.",
    tech: ['Symfony 6', 'API Platform', 'RabbitMQ', 'React', 'PostgreSQL'],
    github: 'https://github.com/ton-username/marketplace',
  },
  {
    id: 'saas-analytics',
    title: 'SaaS Analytics',
    year: '2021 – 2022',
    description:
      'Dashboard analytique temps réel pour une startup EdTech. WebSockets pour les mises à jour live, PostgreSQL + Redis pour la performance.',
    tech: ['Node.js', 'Angular', 'WebSocket', 'Redis', 'Docker'],
  },
]
