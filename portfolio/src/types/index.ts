export interface Project {
  id: string
  title: string
  year: string
  description: string
  tech: string[]
  url?: string
  github?: string
}

export interface Experience {
  id: string
  period: string
  company: string
  role: string
  description: string
}

export interface SkillGroup {
  id: string
  category: string
  skills: string[]
}

export interface SocialLink {
  label: string
  url: string
}

export interface Config {
  name: string
  role: string
  bio: string
  location: string
  availability: string
  contractType: string
  email: string
  phone?: string
  cvUrl?: string
  socials: SocialLink[]
}
