# 🚀 个人主页项目 - 使用指南

## 📋 项目概述

这是一个使用 **Vue 3 + TypeScript** 构建的现代化个人主页前端框架，包含以下功能模块：

- 🏠 **首页** - 个人简介、头像、社交链接
- 💼 **项目展示** - 研究项目、工程项目、开源贡献
- 📄 **简历** - 教育背景、工作经验、技能展示
- 📝 **博客** - 技术文章、学习笔记
- 📧 **联系** - 联系表单、社交信息

## 🛠️ 技术栈

- **Vue 3** - 使用 Composition API
- **TypeScript** - 类型安全
- **Vue Router** - 路由管理
- **Pinia** - 状态管理
- **Vite** - 构建工具

## 📦 安装和运行

### 1. 安装依赖

```bash
cd e:\Projects\VueProjects\PersonalWebsite
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:3000` 查看网站

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产构建

```bash
npm run preview
```

## 🎨 自定义内容

### 修改个人信息

编辑 `src/data/index.ts` 文件，更新以下内容：

```typescript
export const personalInfo: PersonalInfo = {
  name: '你的名字',
  title: '你的职位',
  introduction: '你的自我介绍',
  avatar: '头像图片路径',
  email: 'your.email@example.com',
  location: '你的位置'
}
```

### 修改社交链接

在 `src/data/index.ts` 中更新社交链接：

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: '🐙',
    url: 'https://github.com/你的用户名',
    color: '#181717'
  },
  // 添加更多社交链接...
]
```

### 添加项目

在 `src/data/index.ts` 的 `projects` 数组中添加项目：

```typescript
{
  id: '项目ID',
  title: '项目标题',
  description: '项目描述',
  category: 'research' | 'engineering' | 'opensource',
  coverImage: '项目封面图片',
  tags: ['标签1', '标签2'],
  links: {
    github: 'GitHub链接',
    demo: 'Demo链接',
    paper: '论文链接',
    video: '视频链接'
  },
  featured: true, // 是否在首页展示
  date: '2024-01'
}
```

### 更新简历

在 `src/data/index.ts` 中更新教育背景和工作经验：

```typescript
export const education: Education[] = [
  {
    id: '1',
    degree: '学位',
    major: '专业',
    school: '学校名称',
    location: '地点',
    startDate: '2022',
    endDate: '2025',
    gpa: '3.8/4.0',
    description: '详细描述'
  }
]

export const experience: Experience[] = [
  {
    id: '1',
    title: '职位名称',
    company: '公司/机构',
    location: '地点',
    startDate: '2023',
    endDate: 'Present',
    type: 'research' | 'internship' | 'work',
    description: [
      '工作内容1',
      '工作内容2'
    ]
  }
]
```

### 添加博客文章

在 `src/data/index.ts` 中添加博客文章：

```typescript
{
  id: '文章ID',
  title: '文章标题',
  excerpt: '文章摘要',
  content: '文章完整内容',
  coverImage: '封面图片',
  tags: ['标签1', '标签2'],
  date: '2024-03-15',
  readTime: '8 min read',
  published: true
}
```

## 🎨 自定义样式

### 修改主题颜色

编辑 `src/styles/main.css` 中的 CSS 变量：

```css
:root {
  --primary-color: #667eea;      /* 主色 */
  --secondary-color: #764ba2;    /* 辅助色 */
  --accent-color: #3b82f6;       /* 强调色 */
  --text-primary: #2c3e50;       /* 主文本颜色 */
  --text-secondary: #64748b;     /* 次文本颜色 */
}
```

### 修改组件样式

每个组件都有自己的 `<style scoped>` 部分，直接在组件文件中修改即可。

## 📁 项目结构

```
src/
├── assets/              # 静态资源（图片、字体等）
├── components/          # 可复用组件
│   └── layout/          # 布局组件
│       ├── Header.vue   # 导航栏
│       └── Footer.vue   # 页脚
├── views/               # 页面组件
│   ├── Home.vue         # 首页
│   ├── Projects.vue     # 项目展示
│   ├── Resume.vue       # 简历
│   ├── Blog.vue         # 博客列表
│   ├── BlogPost.vue     # 博客文章详情
│   └── Contact.vue      # 联系页面
├── router/              # 路由配置
│   └── index.ts
├── stores/              # Pinia 状态管理
├── types/               # TypeScript 类型定义
│   └── index.ts
├── styles/              # 全局样式
│   └── main.css
├── data/                # 数据文件
│   └── index.ts
├── App.vue              # 根组件
└── main.ts              # 入口文件
```

## 🔧 集成建议

### 添加联系表单功能

建议使用以下服务之一：

1. **EmailJS** - [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Formspree** - [https://formspree.io/](https://formspree.io/)
3. **自建后端 API**

在 `src/views/Contact.vue` 的 `handleSubmit` 函数中集成。

### 添加博客内容管理

建议使用 Headless CMS：

1. **Strapi** - 开源 CMS
2. **Contentful** - 商业 CMS
3. **Sanity** - 现代化 CMS
4. **Markdown 文件** - 简单方案

### 添加分析工具

在 `index.html` 中添加 Google Analytics 或其他分析工具。

## 📱 响应式设计

项目已包含完整的响应式设计，支持：

- 🖥️ 桌面端（>1200px）
- 💻 笔记本（768px - 1200px）
- 📱 平板和手机（<768px）

## 🚀 部署

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# 上传 dist 文件夹到 Netlify
```

### GitHub Pages

在 `vite.config.ts` 中设置 `base`:

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

## 📝 TODO

- [ ] 替换所有占位图片为实际图片
- [ ] 更新个人信息和社交链接
- [ ] 添加实际项目数据
- [ ] 编写博客文章
- [ ] 集成联系表单服务
- [ ] 添加 SEO 优化
- [ ] 添加网站图标（favicon）
- [ ] 配置域名

## 🤝 贡献

欢迎提出建议和改进！

## 📄 许可

MIT License
