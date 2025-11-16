<template>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <RouterLink to="/" class="logo">
                    <span class="logo-text">YW</span>
                </RouterLink>

                <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
                    <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" class="nav-link"
                        @click="closeMenu">
                        {{ $t(`nav.${item.key}`) }}
                    </RouterLink>
                    <LanguageSwitcher />
                </nav>

                <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

interface NavItem {
    key: string
    path: string
}

const navItems: NavItem[] = [
    { key: 'home', path: '/' },
    { key: 'projects', path: '/projects' },
    { key: 'resume', path: '/resume' },
    { key: 'blog', path: '/blog' },
    { key: 'contact', path: '/contact' }
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
}
</script>

<style scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(54, 54, 54, 0.1);
    backdrop-filter: blur(18px);
    box-shadow: 0 8px 24px rgba(8, 11, 19, 0.35);
    border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.logo {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: #e2e8f0;
    transition: color 0.3s;
}

.logo:hover {
    color: #e2e8f0;
}

.logo-text {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 2px solid #f7f7f7;
    border-radius: 8px;
}

.nav {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-link {
    text-decoration: none;
    color: #cbd5f5;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
    color: #93c5fd;
}

.nav-link.router-link-active {
    color: #3b82f6;
}

.nav-link.router-link-active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background: #93c5fd;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.menu-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background: #e2e8f0;
    transition: all 0.3s;
}

@media (max-width: 768px) {
    .nav {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: rgba(10, 14, 25, 0.85);
        backdrop-filter: blur(18px);
        padding: 2rem;
        box-shadow: 0 12px 30px rgba(7, 11, 19, 0.45);
        transform: translateY(-100%);
        opacity: 0;
        transition: all 0.3s;
        pointer-events: none;
    }

    .nav.nav-open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
    }

    .menu-toggle {
        display: flex;
    }

    .nav-link.router-link-active::after {
        display: none;
    }
}
</style>
