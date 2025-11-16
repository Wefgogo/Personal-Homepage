<template>
    <div class="home">
        <Galaxy
            class="home-galaxy"
            :mouse-repulsion="true"
            :mouse-interaction="true"
            :density="1.0"
            :glow-intensity="0.3"
            :saturation="0"
            :hue-shift="240"
            :transparent="false"
        />
        <div class="home-overlay">
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-text">
                            <h1 class="hero-title animate-fade-in">
                                {{ $t('home.greeting') }} <span class="highlight">{{ $t('home.name') }}</span>
                            </h1>
                            <p class="hero-subtitle animate-fade-in-delay">
                                {{ $t('home.subtitle') }}
                            </p>
                            <p class="hero-description animate-fade-in-delay-2">
                                {{ $t('home.position') }}
                            </p>
                            <div class="social-links animate-fade-in-delay-3">
                                <a
                                    v-for="link in socialLinks"
                                    :key="link.name"
                                    :href="link.url"
                                    target="_blank"
                                    rel="noopener"
                                    class="social-link"
                                    :style="{ '--link-color': link.color }"
                                    :aria-label="link.name"
                                >
                                    <span class="social-icon">{{ link.icon }}</span>
                                    <span class="social-name">{{ link.name }}</span>
                                </a>
                            </div>
                            <div class="cta-buttons animate-fade-in-delay-4">
                                <RouterLink to="/projects" class="btn btn-primary">
                                    {{ $t('home.viewProjects') }}
                                </RouterLink>
                                <RouterLink to="/contact" class="btn btn-secondary">
                                    {{ $t('home.getInTouch') }}
                                </RouterLink>
                            </div>
                        </div>
                        <div class="hero-image animate-fade-in-delay-2">
                            <div class="avatar-wrapper">
                                <img src="https://via.placeholder.com/300" alt="Yifan Wei" class="avatar">
                                <div class="avatar-ring"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="about">
                <div class="container glass-panel">
                    <h2 class="section-title">{{ $t('home.aboutMe') }}</h2>
                    <div class="about-content">
                        <div class="about-text">
                            <p>
                                {{ $t('home.aboutText1') }}
                            </p>
                            <p>
                                {{ $t('home.aboutText2') }}
                            </p>
                        </div>
                        <div class="highlights">
                            <div class="highlight-card">
                                <div class="highlight-icon">🎓</div>
                                <h3>Education</h3>
                                <p>Master's in Computer Technology</p>
                            </div>
                            <div class="highlight-card">
                                <div class="highlight-icon">🔬</div>
                                <h3>Research</h3>
                                <p>Computer Vision & AI</p>
                            </div>
                            <div class="highlight-card">
                                <div class="highlight-icon">💻</div>
                                <h3>Development</h3>
                                <p>Java Backend & Web</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="featured-projects">
                <div class="container glass-panel">
                    <div class="section-header">
                        <h2 class="section-title">Featured Projects</h2>
                        <RouterLink to="/projects" class="view-all">
                            View All Projects →
                        </RouterLink>
                    </div>
                    <div class="projects-grid">
                        <div v-for="project in featuredProjects" :key="project.id" class="project-card">
                            <div class="project-image">
                                <img :src="project.coverImage" :alt="project.title">
                            </div>
                            <div class="project-content">
                                <h3>{{ project.title }}</h3>
                                <p>{{ project.description }}</p>
                                <div class="project-tags">
                                    <span v-for="tag in project.tags" :key="tag" class="tag">
                                        {{ tag }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { SocialLink, Project } from '@/types'
import Galaxy from '@/components/vue-bits/Galaxy.vue'

const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        icon: '🐙',
        url: 'https://github.com/Wefgogo',
        color: '#181717'
    },
    // {
    //     name: 'LinkedIn',
    //     icon: '💼',
    //     url: 'https://linkedin.com/in/yourusername',
    //     color: '#0A66C2'
    // },
    {
        name: 'Gitee',
        icon: '🦊',
        url: 'https://gitee.com/wefcnn',
        color: '#C71D23'
    },
    {
        name: 'Email',
        icon: '📧',
        url: 'mailto:wyfyoupi@.com',
        color: '#EA4335'
    }
]

const featuredProjects: Project[] = [
    {
        id: '1',
        title: '3D Gaussian Splatting Research',
        description: 'Novel view synthesis using 3D Gaussian Splatting techniques',
        category: 'research',
        coverImage: 'https://via.placeholder.com/400x250',
        tags: ['PyTorch', '3DGS', 'Computer Vision'],
        links: { github: '#', paper: '#' },
        featured: true,
        date: '2024-01'
    },
    {
        id: '2',
        title: 'Enterprise Management System',
        description: 'Full-stack enterprise resource planning system',
        category: 'engineering',
        coverImage: 'https://via.placeholder.com/400x250',
        tags: ['Spring Boot', 'Vue 3', 'PostgreSQL'],
        links: { github: '#', demo: '#' },
        featured: true,
        date: '2024-02'
    },
    {
        id: '3',
        title: 'Diffusion Model Framework',
        description: 'Open-source framework for training diffusion models',
        category: 'opensource',
        coverImage: 'https://via.placeholder.com/400x250',
        tags: ['PyTorch', 'Diffusion', 'ML'],
        links: { github: '#' },
        featured: true,
        date: '2024-03'
    }
]
</script>

<style scoped>
.home {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: #050608;
    color: #f8fafc;
    overflow: hidden;
}

.home-galaxy {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 0;
}

.home-overlay {
    position: relative;
    z-index: 1;
    padding-bottom: 5rem;
}

.hero {
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    position: relative;
    color: inherit;
    overflow: hidden;
}

.hero::before {
    display: none;
}

.about {
    padding: 5rem 0;
    background: transparent;
}

.featured-projects {
    padding: 5rem 0;
    background: transparent;
}

.section-title {
    color: #f1f5f9;
}

.about-content {
    color: #f1f5f9;
    max-width: 900px;
    margin: 0 auto;
}

.about-text {
    color: #fafafa;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 3rem;
}

.about-text p {
    margin-bottom: 1.5rem;
}

.highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.highlight-card {
    background: rgba(30, 30, 31, 0.8);
    color: #fdfeff;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    transition: transform 0.3s;
}

.highlight-card:hover {
    transform: translateY(-5px);
}

.highlight-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.highlight-card h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #a3a3a3;
}

.highlight-card p {
    color: #a3a3a3;
}

/* Hero Section */
.hero {
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    position: relative;
    color: inherit;
    overflow: hidden;
}

.hero::before {
    display: none;
}

.hero-galaxy {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.hero-galaxy-canvas {
    width: 100%;
    height: 100%;
    display: block;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 4rem 0;
}

.hero-title {
    color: #f8fafc;
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.highlight {
    background: linear-gradient(120deg, #ffffff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    color: #f8fafc;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    opacity: 0.95;
}

.hero-description {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 2rem;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    text-decoration: none;
    color: white;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
}

.social-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.social-icon {
    font-size: 1.2rem;
}

.social-name {
    font-weight: 500;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    
}

.btn {
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-block;
}

.btn-primary {
    background: white;
    color: #000000;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover {
    background: white;
    color: #667eea;
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.avatar-wrapper {
    position: relative;
    width: 300px;
    height: 300px;
}

.avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid white;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.avatar-ring {
    position: absolute;
    inset: -20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: rotate 10s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

/* Featured Projects Section */
.featured-projects {
    padding: 5rem 0;
    background: transparent;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
}

.view-all {
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s, font-size 0.5s ease;
}

.view-all:hover {
    color: #ffffff;
    font-size: 18px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.project-card {
    background: rgba(30, 30, 31, 0.8);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
}

.project-image {
    width: 100%;
    height: 200px;
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

.project-content {
    padding: 1.5rem;
}

.project-content h3 {
    color: #a3a3a3;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

.project-content p {
    color: #a3a3a3;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    padding: 0.25rem 0.75rem;
    background: rgba(180, 180, 180, 0.2);
    color: #a3a3a3;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
}

/* Animations */
.animate-fade-in {
    animation: fadeIn 0.8s ease-out;
}

.animate-fade-in-delay {
    animation: fadeIn 0.8s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
    animation: fadeIn 0.8s ease-out 0.4s both;
}

.animate-fade-in-delay-3 {
    animation: fadeIn 0.8s ease-out 0.6s both;
}

.animate-fade-in-delay-4 {
    animation: fadeIn 0.8s ease-out 0.8s both;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .home-overlay {
        padding-bottom: 3rem;
    }

    .glass-panel {
        padding: 2.5rem 1.5rem;
    }
}
</style>
