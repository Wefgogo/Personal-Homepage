<template>
  <div class="projects">
    <FaultyTerminal
      class="projects-terminal"
      :scale="1.9"
      :grid-mul="[2, 1]"
      :speed="0.5"
      :digit-size="1.2"
      :time-scale="1"
      :pause="false"
      :scanline-intensity="0.5"
      :glitch-amount="1"
      :flicker-amount="1"
      :noise-amp="1"
      :chromatic-aberration="0"
      :dither="0"
      :curvature="0.1"
      :mouse-react="true"
      :mouse-strength="0.5"
      :page-load-animation="true"
      :brightness="0.6"
      tint="#8fa7ff"
    />
    <div class="projects-overlay">
      <div class="container">
        <!-- Page Header -->
        <section class="page-header">
          <h1>Projects</h1>
          <p>Explore my research work, engineering projects, and open-source contributions</p>
        </section>

        <!-- Filter Tabs -->
        <div class="filter-tabs">
          <button 
            v-for="category in categories" 
            :key="category.value"
            :class="['filter-tab', { active: activeCategory === category.value }]"
            @click="activeCategory = category.value"
          >
            {{ category.label }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id" 
            class="project-card"
          >
            <div class="project-image">
              <img :src="project.coverImage" :alt="project.title">
              <div class="project-overlay">
                <div class="project-links">
                  <a 
                    v-if="project.links.github" 
                    :href="project.links.github" 
                    target="_blank"
                    rel="noopener"
                    class="project-link"
                    title="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    v-if="project.links.demo" 
                    :href="project.links.demo" 
                    target="_blank"
                    rel="noopener"
                    class="project-link"
                    title="Live Demo"
                  >
                    🚀
                  </a>
                  <a 
                    v-if="project.links.paper" 
                    :href="project.links.paper" 
                    target="_blank"
                    rel="noopener"
                    class="project-link"
                    title="Research Paper"
                  >
                    📄
                  </a>
                  <a 
                    v-if="project.links.video" 
                    :href="project.links.video" 
                    target="_blank"
                    rel="noopener"
                    class="project-link"
                    title="Video Demo"
                  >
                    🎥
                  </a>
                </div>
              </div>
            </div>

            <div class="project-content">
              <div class="project-category" :class="project.category">
                {{ getCategoryLabel(project.category) }}
              </div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
              <div class="project-date">{{ project.date }}</div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="empty-state">
          <p>No projects found in this category.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project, ProjectCategory } from '@/types'
import FaultyTerminal from '@/components/vue-bits/FaultyTerminal.vue'

interface Category {
  label: string
  value: ProjectCategory | 'all'
}

const categories: Category[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Research', value: 'research' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Open Source', value: 'opensource' }
]

const activeCategory = ref<ProjectCategory | 'all'>('all')

const projects: Project[] = [
  {
    id: '1',
    title: '3D Gaussian Splatting for Real-Time Rendering',
    description: 'Implementation and optimization of 3D Gaussian Splatting for real-time novel view synthesis',
    category: 'research',
    coverImage: 'https://via.placeholder.com/400x250',
    tags: ['PyTorch', '3DGS', 'CUDA', 'Computer Vision'],
    links: { github: '#', paper: '#', video: '#' },
    date: '2024-01'
  },
  {
    id: '2',
    title: 'Diffusion Model for Image Generation',
    description: 'Custom implementation of diffusion models with novel conditioning mechanisms',
    category: 'research',
    coverImage: 'https://via.placeholder.com/400x250',
    tags: ['PyTorch', 'Diffusion Models', 'Generative AI'],
    links: { github: '#', paper: '#' },
    date: '2024-02'
  },
  {
    id: '3',
    title: 'Enterprise Resource Planning System',
    description: 'Full-stack ERP system with microservices architecture',
    category: 'engineering',
    coverImage: 'https://via.placeholder.com/400x250',
    tags: ['Spring Boot', 'Vue 3', 'PostgreSQL', 'Docker'],
    links: { github: '#', demo: '#' },
    date: '2024-03'
  },
  {
    id: '4',
    title: 'E-Commerce Platform',
    description: 'Scalable e-commerce platform with payment integration',
    category: 'engineering',
    coverImage: 'https://via.placeholder.com/400x250',
    tags: ['Spring Cloud', 'React', 'Redis', 'MySQL'],
    links: { github: '#', demo: '#' },
    date: '2023-12'
  },
  {
    id: '5',
    title: 'Computer Vision Toolkit',
    description: 'Open-source toolkit for common computer vision tasks',
    category: 'opensource',
    coverImage: 'https://via.placeholder.com/400x250',
    tags: ['Python', 'OpenCV', 'NumPy'],
    links: { github: '#' },
    date: '2023-11'
  },
  {
    id: '6',
    title: 'Deep Learning Framework Extensions',
    description: 'Contributed custom layers and utilities to popular ML frameworks',
    category: 'opensource',
    coverImage: 'https://via.placeholder.com/400x250',
    tags: ['PyTorch', 'TensorFlow', 'Python'],
    links: { github: '#' },
    date: '2023-10'
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects
  }
  return projects.filter(p => p.category === activeCategory.value)
})

const getCategoryLabel = (category: ProjectCategory): string => {
  const labels: Record<ProjectCategory, string> = {
    research: 'Research',
    engineering: 'Engineering',
    opensource: 'Open Source'
  }
  return labels[category]
}
</script>

<style scoped>
.projects {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 70px);
  overflow: hidden;
  color: #e2e8f0;
}

.projects-terminal {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.projects-overlay {
  position: relative;
  z-index: 1;
  padding: 3rem 0 5rem;
  /* 背景模糊效果 */
  /* backdrop-filter: blur(4px); */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  color: #f8fafc;
}

.page-header p {
  color: #cbd5f5;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-tab {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.2);
  color: #e2e8f0;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(8px);
}

.filter-tab:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.filter-tab.active {
  background: rgba(59, 130, 246, 0.3);
  border-color: rgba(59, 130, 246, 0.6);
  color: #f8fafc;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(15, 23, 42, 0.65);
  box-shadow: 0 20px 45px rgba(2, 6, 23, 0.45);
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  backdrop-filter: blur(8px);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.project-image {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.3s;
}

.project-link:hover {
  transform: scale(1.1);
  background: #3b82f6;
  color: white;
}

.project-content {
  padding: 1.5rem;
}

.project-category {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.project-category.research {
  background: #dbeafe;
  color: #1e40af;
}

.project-category.engineering {
  background: #dcfce7;
  color: #166534;
}

.project-category.opensource {
  background: #fef3c7;
  color: #92400e;
}

.project-content h3 {
  color: #e0e7ff;
}

.project-content p {
  color: #cbd5f5;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: rgba(59, 130, 246, 0.18);
  color: #bfdbfe;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-date {
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 500;
}

.empty-state {
  color: #cbd5f5;
  text-align: center;
  padding: 4rem 0;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
