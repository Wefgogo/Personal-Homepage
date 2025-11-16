<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Yifan Wei</h3>
                    <p class="footer-description">
                        {{ $t('footer.description') }}
                    </p>
                </div>

                <div class="footer-section">
                    <h4>{{ $t('footer.quickLinks') }}</h4>
                    <div class="footer-links">
                        <RouterLink to="/">{{ $t('nav.home') }}</RouterLink>
                        <RouterLink to="/projects">{{ $t('nav.projects') }}</RouterLink>
                        <RouterLink to="/resume">{{ $t('nav.resume') }}</RouterLink>
                        <RouterLink to="/blog">{{ $t('nav.blog') }}</RouterLink>
                        <RouterLink to="/contact">{{ $t('nav.contact') }}</RouterLink>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>{{ $t('footer.connect') }}</h4>
                    <div class="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener"
                            aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="mailto:your.email@example.com" aria-label="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                </path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; {{ currentYear }} Yifan Wei. {{ $t('footer.rights') }}</p>
                <p class="footer-tech">{{ $t('footer.builtWith') }}</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 3rem 0 1rem;
    margin-top: 4rem;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.footer-section h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
}

.footer-description {
    opacity: 0.8;
    line-height: 1.6;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-links a {
    color: white;
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.3s;
}

.footer-links a:hover {
    opacity: 1;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    transition: all 0.3s;
}

.social-links a:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
    opacity: 0.7;
    margin: 0.5rem 0;
    font-size: 0.9rem;
}

.footer-tech {
    font-size: 0.85rem;
}

@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}
</style>
