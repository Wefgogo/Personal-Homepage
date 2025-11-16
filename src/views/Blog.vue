<template>
  <div class="blog">
    <FaultyTerminal
      class="blog-terminal"
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
    <div class="blog-overlay">
      <div class="container">
        <!-- Page Header -->
        <section class="page-header">
          <h1>Blog</h1>
          <p>Technical articles, research notes, and thoughts on AI and development</p>
        </section>

        <!-- Blog Posts Grid -->
        <div class="blog-grid">
          <article 
            v-for="post in publishedPosts" 
            :key="post.id" 
            class="blog-card"
            @click="navigateToPost(post.id)"
          >
            <div v-if="post.coverImage" class="blog-image">
              <img :src="post.coverImage" :alt="post.title">
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">{{ post.date }}</span>
                <span class="blog-read-time">{{ post.readTime }}</span>
              </div>
              <h2>{{ post.title }}</h2>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <div class="blog-tags">
                <span v-for="tag in post.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
              <div class="read-more">
                Read More →
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-if="publishedPosts.length === 0" class="empty-state">
          <div class="empty-icon">📝</div>
          <h3>No blog posts yet</h3>
          <p>Stay tuned for upcoming articles!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { BlogPost } from '@/types'
import FaultyTerminal from '@/components/vue-bits/FaultyTerminal.vue'

const router = useRouter()

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding 3D Gaussian Splatting',
    excerpt: 'A deep dive into the revolutionary 3D Gaussian Splatting technique for real-time novel view synthesis and its applications in computer vision.',
    content: '...',
    coverImage: 'https://via.placeholder.com/600x300',
    tags: ['Computer Vision', '3DGS', 'Research'],
    date: '2024-03-15',
    readTime: '8 min read',
    published: true
  },
  {
    id: '2',
    title: 'Building Scalable Microservices with Spring Boot',
    excerpt: 'Best practices and patterns for designing and implementing microservices architecture using Spring Boot and Spring Cloud.',
    content: '...',
    coverImage: 'https://via.placeholder.com/600x300',
    tags: ['Spring Boot', 'Microservices', 'Backend'],
    date: '2024-03-10',
    readTime: '10 min read',
    published: true
  },
  {
    id: '3',
    title: 'Diffusion Models: From Theory to Practice',
    excerpt: 'An exploration of diffusion models in generative AI, covering the mathematical foundations and practical implementation details.',
    content: '...',
    coverImage: 'https://via.placeholder.com/600x300',
    tags: ['AI', 'Diffusion Models', 'Deep Learning'],
    date: '2024-03-05',
    readTime: '12 min read',
    published: true
  },
  {
    id: '4',
    title: 'Vue 3 Composition API: A Complete Guide',
    excerpt: 'Everything you need to know about Vue 3 Composition API, including best practices and real-world examples.',
    content: '...',
    coverImage: 'https://via.placeholder.com/600x300',
    tags: ['Vue.js', 'Frontend', 'JavaScript'],
    date: '2024-02-28',
    readTime: '15 min read',
    published: true
  },
  {
    id: '5',
    title: 'Optimizing Database Performance in Spring Boot',
    excerpt: 'Techniques for improving database query performance and managing connections efficiently in Spring Boot applications.',
    content: '...',
    tags: ['Database', 'Spring Boot', 'Performance'],
    date: '2024-02-20',
    readTime: '7 min read',
    published: true
  }
]

const publishedPosts = computed(() => 
  posts.filter(post => post.published).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
)

const navigateToPost = (id: string) => {
  router.push(`/blog/${id}`)
}
</script>

<style scoped>
.blog {
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 3rem 0;
  overflow: hidden;
  color: #e2e8f0;
}

.blog-terminal {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.blog-overlay {
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
  background: rgba(15, 23, 42, 0.75);
  padding: 3rem 2rem;
  border-radius: 24px;
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 55px rgba(2, 6, 23, 0.45);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.page-header h1 {
  font-size: 3rem;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  color: #cbd5f5;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
}

.blog-card {
  background: rgba(15, 23, 42, 0.7);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 45px rgba(2, 6, 23, 0.45);
  transition: all 0.3s;
  cursor: pointer;
  border: 1px solid rgba(148, 163, 184, 0.18);
  backdrop-filter: blur(8px);
}

.blog-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.blog-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.blog-card:hover .blog-image img {
  transform: scale(1.1);
}

.blog-content {
  padding: 1.5rem;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #94a3b8;
}

.blog-date {
  font-weight: 500;
}

.blog-read-time {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.blog-read-time::before {
  content: '⏱️';
}

.blog-content h2 {
  font-size: 1.5rem;
  color: #e0e7ff;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.blog-excerpt {
  color: #cbd5f5;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(59, 130, 246, 0.2);
  color: #bfdbfe;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.read-more {
  color: #93c5fd;
  font-weight: 600;
  transition: color 0.3s;
}

.blog-card:hover .read-more {
  color: #bfdbfe;
}

.empty-state {
  text-align: center;
  padding: 5rem 2rem;
  color: #cbd5f5;
}

.empty-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.empty-state h3 {
  font-size: 1.8rem;
  color: #e0e7ff;
  margin-bottom: 0.5rem;
}

.empty-state p {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
