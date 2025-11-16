import type { PersonalInfo, SocialLink, Project, Education, Experience, SkillCategory, BlogPost } from '@/types'

// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Yifan Wei',
  title: 'Computer Vision Researcher & Java Backend Developer',
  introduction: "Hi, I'm Yifan Wei — a Computer Vision Researcher and Java Backend Developer.",
  avatar: 'https://via.placeholder.com/300',
  backgroundImage: 'https://via.placeholder.com/1920x1080',
  email: 'your.email@example.com',
  location: 'City, Country'
}

// Social Links
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: '🐙',
    url: 'https://github.com/yourusername',
    color: '#181717'
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://linkedin.com/in/yourusername',
    color: '#0A66C2'
  },
  {
    name: 'Gitee',
    icon: '🦊',
    url: 'https://gitee.com/yourusername',
    color: '#C71D23'
  },
  {
    name: 'Email',
    icon: '📧',
    url: 'mailto:your.email@example.com',
    color: '#EA4335'
  },
  {
    name: 'Twitter',
    icon: '🐦',
    url: 'https://twitter.com/yourusername',
    color: '#1DA1F2'
  }
]

// Projects - You can customize these
export const projects: Project[] = [
  {
    id: '1',
    title: '3D Gaussian Splatting Research',
    description: 'Novel view synthesis using 3D Gaussian Splatting techniques for real-time rendering',
    category: 'research',
    coverImage: 'https://via.placeholder.com/400x250',
    tags: ['PyTorch', '3DGS', 'CUDA', 'Computer Vision'],
    links: {
      github: 'https://github.com/yourusername/project',
      paper: 'https://arxiv.org/abs/example',
      video: 'https://youtube.com/watch?v=example'
    },
    featured: true,
    date: '2024-01'
  },
  // Add more projects...
]

// Education
export const education: Education[] = [
  {
    id: '1',
    degree: "Master's Degree",
    major: 'Computer Technology',
    school: 'Your University',
    location: 'City, Country',
    startDate: '2022',
    endDate: '2025',
    gpa: '3.8/4.0',
    description: 'Focus on Computer Vision, Deep Learning, and AI Systems'
  },
  // Add more education entries...
]

// Work Experience
export const experience: Experience[] = [
  {
    id: '1',
    title: 'Research Assistant',
    company: 'Computer Vision Lab',
    location: 'University',
    startDate: '2023',
    endDate: 'Present',
    type: 'research',
    description: [
      'Conducted research on 3D Gaussian Splatting',
      'Developed novel conditioning mechanisms for diffusion models',
      'Published 2 papers in top-tier conferences'
    ]
  },
  // Add more experiences...
]

// Skills
export const skills: SkillCategory[] = [
  {
    category: 'Backend Development',
    skills: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Redis', 'Docker']
  },
  {
    category: 'AI/ML & Computer Vision',
    skills: ['PyTorch', 'TensorFlow', 'Diffusion Models', '3DGS', 'OpenCV', 'CUDA']
  },
  {
    category: 'Frontend Development',
    skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'HTML/CSS']
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'GitHub', 'Maven', 'Linux', 'AWS', 'CI/CD']
  }
]

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding 3D Gaussian Splatting',
    excerpt: 'A deep dive into the revolutionary 3D Gaussian Splatting technique...',
    content: 'Full article content goes here...',
    coverImage: 'https://via.placeholder.com/600x300',
    tags: ['Computer Vision', '3DGS', 'Research'],
    date: '2024-03-15',
    readTime: '8 min read',
    published: true
  },
  // Add more blog posts...
]
