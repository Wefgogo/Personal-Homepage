# Personal Website - Yifan Wei

A modern personal portfolio website built with Vue 3, TypeScript, and Vite.

## Features

- 🏠 **Home/About**: Personal introduction and social links
- 💼 **Projects**: Showcase of research and engineering projects
- 📄 **Resume**: Education, experience, and skills
- 📝 **Blog**: Technical articles and notes
- 📧 **Contact**: Get in touch form
- 🌍 **i18n**: Chinese/English language switching

## Tech Stack

- Vue 3 (Composition API)
- TypeScript
- Vue Router
- Pinia (State Management)
- Vue I18n (Internationalization)
- Vite

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images, icons, etc.
├── components/      # Reusable components
├── views/           # Page components
├── router/          # Route configuration
├── stores/          # Pinia stores
├── types/           # TypeScript definitions
├── styles/          # Global styles
├── locales/         # i18n language files
├── data/            # Personal data
├── App.vue          # Root component
└── main.ts          # Entry point
```

## Customization

Edit `src/data/` files to customize your personal information, projects, and experiences.

## Internationalization (i18n)

This project supports Chinese and English. The language switcher is located in the header.

- Language files: `src/locales/zh.ts` and `src/locales/en.ts`
- Auto-detects browser language on first visit
- Saves language preference to localStorage
- See `I18N_GUIDE.md` for detailed instructions

**Note:** After running `npm install`, the Header and Footer components will display in the selected language. Other pages can be updated following the guide in `I18N_GUIDE.md`.
