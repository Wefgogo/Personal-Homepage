<template>
  <div class="blog-post">
    <div class="container">
      <article v-if="post" class="post-content">
        <!-- Back Button -->
        <RouterLink to="/blog" class="back-button">
          ← Back to Blog
        </RouterLink>

        <!-- Post Header -->
        <header class="post-header">
          <h1>{{ post.title }}</h1>
          <div class="post-meta">
            <span class="post-date">{{ post.date }}</span>
            <span class="post-read-time">{{ post.readTime }}</span>
          </div>
          <div class="post-tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </header>

        <!-- Cover Image -->
        <div v-if="post.coverImage" class="post-cover">
          <img :src="post.coverImage" :alt="post.title">
        </div>

        <!-- Post Content -->
        <div class="post-body">
          <p>{{ post.content }}</p>
          
          <!-- Placeholder content -->
          <div class="placeholder-content">
            <h2>Introduction</h2>
            <p>
              This is a placeholder for the blog post content. In a real application, 
              you would replace this with the actual content loaded from your data source 
              or CMS.
            </p>

            <h2>Main Content</h2>
            <p>
              You can use markdown, HTML, or a rich text editor to create your blog content. 
              Consider integrating a markdown parser like <code>marked</code> or a headless 
              CMS like Strapi, Contentful, or Sanity.
            </p>

            <h3>Code Examples</h3>
            <pre><code>const example = () => {
  console.log('Hello, World!');
};</code></pre>

            <h2>Conclusion</h2>
            <p>
              This blog post template provides a clean and professional layout for your 
              technical articles and research notes.
            </p>
          </div>
        </div>

        <!-- Share Section -->
        <div class="post-share">
          <h3>Share this article</h3>
          <div class="share-buttons">
            <button class="share-btn twitter">Twitter</button>
            <button class="share-btn linkedin">LinkedIn</button>
            <button class="share-btn copy">Copy Link</button>
          </div>
        </div>
      </article>

      <!-- Not Found -->
      <div v-else class="not-found">
        <h2>Post Not Found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <RouterLink to="/blog" class="btn-primary">
          Back to Blog
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import type { BlogPost } from '@/types'

const route = useRoute()

// Mock data - in real app, fetch from API or CMS
const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding 3D Gaussian Splatting',
    excerpt: 'A deep dive into the revolutionary 3D Gaussian Splatting technique...',
    content: 'Full article content would go here...',
    coverImage: 'https://via.placeholder.com/1200x600',
    tags: ['Computer Vision', '3DGS', 'Research'],
    date: '2024-03-15',
    readTime: '8 min read',
    published: true
  }
]

const post = computed(() => 
  posts.find(p => p.id === route.params.id)
)
</script>

<style scoped>
.blog-post {
  min-height: calc(100vh - 70px);
  padding: 3rem 0;
  background: #f8fafc;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

.back-button:hover {
  color: #2563eb;
}

.post-content {
  background: white;
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.post-header {
  margin-bottom: 2rem;
}

.post-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  line-height: 1.3;
  margin-bottom: 1rem;
}

.post-meta {
  display: flex;
  gap: 1.5rem;
  font-size: 0.95rem;
  color: #94a3b8;
  margin-bottom: 1rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: #e0e7ff;
  color: #3730a3;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.post-cover {
  width: calc(100% + 6rem);
  margin-left: -3rem;
  margin-bottom: 2rem;
  height: 400px;
  overflow: hidden;
}

.post-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
}

.post-body h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin: 2rem 0 1rem;
}

.post-body h3 {
  font-size: 1.4rem;
  color: #2c3e50;
  margin: 1.5rem 0 0.75rem;
}

.post-body p {
  margin-bottom: 1.5rem;
}

.post-body code {
  background: #f1f5f9;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  color: #e11d48;
}

.post-body pre {
  background: #1e293b;
  color: #e2e8f0;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.post-body pre code {
  background: none;
  padding: 0;
  color: inherit;
}

.placeholder-content {
  border-top: 2px solid #e2e8f0;
  padding-top: 2rem;
  margin-top: 2rem;
}

.post-share {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #e2e8f0;
}

.post-share h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.share-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.share-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.share-btn.twitter {
  background: #1da1f2;
  color: white;
}

.share-btn.linkedin {
  background: #0a66c2;
  color: white;
}

.share-btn.copy {
  background: #64748b;
  color: white;
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.not-found {
  text-align: center;
  padding: 5rem 2rem;
}

.not-found h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 2rem;
}

.btn-primary {
  display: inline-block;
  padding: 1rem 2rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .post-content {
    padding: 2rem 1.5rem;
  }

  .post-header h1 {
    font-size: 1.8rem;
  }

  .post-cover {
    width: calc(100% + 3rem);
    margin-left: -1.5rem;
    height: 250px;
  }

  .share-buttons {
    flex-direction: column;
  }

  .share-btn {
    width: 100%;
  }
}
</style>
