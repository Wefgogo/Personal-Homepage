<template>
    <button class="language-switcher" @click="toggleLanguage" :aria-label="$t('nav.language')">
        <span class="language-icon">{{ currentLocale === 'zh' ? '🇨🇳' : '🇺🇸' }}</span>
        <span class="language-text">{{ currentLocale === 'zh' ? '中文' : 'EN' }}</span>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

const toggleLanguage = () => {
    const newLocale = locale.value === 'zh' ? 'en' : 'zh'
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
}
</script>

<style scoped>
.language-switcher {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(59, 130, 246, 0.1);
    border: 2px solid transparent;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
    color: #3b82f6;
    font-size: 0.95rem;
}

.language-switcher:hover {
    background: rgba(59, 130, 246, 0.15);
    border-color: #3b82f6;
    transform: translateY(-2px);
}

.language-icon {
    font-size: 1.2rem;
    line-height: 1;
}

.language-text {
    font-weight: 600;
}

@media (max-width: 768px) {
    .language-switcher {
        width: 100%;
        justify-content: center;
        padding: 0.75rem 1rem;
    }
}
</style>
