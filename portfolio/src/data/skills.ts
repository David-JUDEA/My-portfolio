import type { SkillGroup } from '@/types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    category: 'Backend',
    skills: ['PHP 8.x', 'Symfony', 'Node.js', 'API Platform', 'REST', 'GraphQL'],
  },
  {
    id: 'frontend',
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Angular', 'CSS / Sass'],
  },
  {
    id: 'database',
    category: 'Base de données',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'],
  },
  {
    id: 'infra',
    category: 'Infra & Outils',
    skills: ['Docker', 'GitLab CI', 'GitHub Actions', 'Linux', 'RabbitMQ'],
  },
  {
    id: 'architecture',
    category: 'Architecture',
    skills: ['SOLID', 'DDD', 'Clean Code', 'Design Patterns', 'Microservices'],
  },
  {
    id: 'methods',
    category: 'Méthodes',
    skills: ['Agile / Scrum', 'TDD', 'PHPUnit', 'Code Review'],
  },
]
