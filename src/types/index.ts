// Personal Information Types
export interface SocialLink {
  name: string
  icon: string
  url: string
  color?: string
}

export interface PersonalInfo {
  name: string
  title: string
  introduction: string
  avatar: string
  backgroundImage?: string
  email: string
  location?: string
}

// Project Types
export type ProjectCategory = 'research' | 'engineering' | 'opensource'

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  coverImage: string
  tags: string[]
  links: {
    github?: string
    demo?: string
    paper?: string
    video?: string
  }
  featured?: boolean
  date: string
}

// Resume Types
export interface Education {
  id: string
  degree: string
  major: string
  school: string
  location: string
  startDate: string
  endDate: string
  gpa?: string
  description?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  type: 'internship' | 'research' | 'work'
}

export interface SkillCategory {
  category: string
  skills: string[]
}

// Blog Types
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  coverImage?: string
  tags: string[]
  date: string
  readTime: string
  published: boolean
}

// Contact Types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}
