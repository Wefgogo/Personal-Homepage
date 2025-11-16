# 🌍 中英文切换功能使用指南

## ✅ 已完成的功能

### 1. 国际化系统集成

- ✅ 安装 `vue-i18n` 国际化库
- ✅ 创建中文 (zh) 和英文 (en) 语言包
- ✅ 配置 i18n 实例，支持自动检测浏览器语言
- ✅ 语言偏好保存到 localStorage

### 2. 语言切换组件

- ✅ 创建 `LanguageSwitcher.vue` 组件
- ✅ 显示当前语言（🇨🇳 中文 / 🇺🇸 EN）
- ✅ 点击切换语言
- ✅ 响应式设计，适配移动端

### 3. 导航栏和页脚

- ✅ Header 导航栏已集成语言切换按钮
- ✅ Footer 页脚已国际化

## 📦 安装步骤

### 1. 安装依赖

运行以下命令安装 vue-i18n：

```powershell
cd e:\Projects\VueProjects\PersonalWebsite
npm install
```

这将安装项目所需的所有依赖，包括 `vue-i18n@^9.9.0`。

### 2. 验证安装

启动开发服务器：

```powershell
npm run dev
```

访问 `http://localhost:3000`，你应该能看到：

- 导航栏右侧的语言切换按钮（🇨🇳 中文 / 🇺🇸 EN）
- 点击可切换中英文

## 🎨 功能特性

### 自动语言检测

首次访问时，系统会自动检测浏览器语言：

- 如果浏览器语言包含 `zh`，默认显示中文
- 否则默认显示英文

### 语言偏好保存

用户选择的语言会保存到 `localStorage`，下次访问时自动应用。

### 完整的页面覆盖

以下内容已支持中英文切换：

#### ✅ 导航栏 (Header)

- 首页、项目、简历、博客、联系
- 语言切换按钮

#### ✅ 页脚 (Footer)

- 个人描述
- 快速链接
- 社交平台
- 版权信息

#### ⚠️ 待完成的页面

以下页面的翻译文件已准备好，但需要更新组件使用 i18n：

1. **首页 (Home.vue)**

   - 个人介绍
   - About Me 部分
   - 精选项目

2. **项目展示 (Projects.vue)**

   - 页面标题和描述
   - 分类筛选标签

3. **简历 (Resume.vue)**

   - 教育背景
   - 工作经历
   - 技能分类

4. **博客 (Blog.vue & BlogPost.vue)**

   - 文章列表
   - 文章详情页

5. **联系页面 (Contact.vue)**
   - 表单标签
   - 联系信息

## 🔧 如何更新其他页面

以下是更新页面组件支持国际化的步骤：

### 示例：更新 Home.vue

**原代码：**

```vue
<h1>Hi, I'm Yifan Wei</h1>
```

**更新后：**

```vue
<h1>{{ $t('home.greeting') }} Yifan Wei</h1>
```

### 完整示例

```vue
<template>
  <div class="home">
    <h1>{{ $t("home.greeting") }} <span>Yifan Wei</span></h1>
    <p>{{ $t("home.subtitle") }}</p>
    <p>{{ $t("home.position") }}</p>
    <button>{{ $t("home.viewProjects") }}</button>
    <button>{{ $t("home.getInTouch") }}</button>
  </div>
</template>
```

## 📝 语言包结构

语言文件位于 `src/locales/` 目录：

```
src/locales/
├── index.ts    # i18n 配置
├── zh.ts       # 中文翻译
└── en.ts       # 英文翻译
```

### 添加新的翻译

在 `src/locales/zh.ts` 和 `src/locales/en.ts` 中添加：

```typescript
// zh.ts
export default {
  // ... 现有内容
  newSection: {
    title: "新标题",
    description: "新描述",
  },
};

// en.ts
export default {
  // ... 现有内容
  newSection: {
    title: "New Title",
    description: "New Description",
  },
};
```

在组件中使用：

```vue
<h2>{{ $t('newSection.title') }}</h2>
<p>{{ $t('newSection.description') }}</p>
```

## 🎯 下一步任务

要完整启用中英文切换，需要更新以下文件：

1. ✅ `src/components/layout/Header.vue` - 已完成
2. ✅ `src/components/layout/Footer.vue` - 已完成
3. ⬜ `src/views/Home.vue` - 需要更新
4. ⬜ `src/views/Projects.vue` - 需要更新
5. ⬜ `src/views/Resume.vue` - 需要更新
6. ⬜ `src/views/Blog.vue` - 需要更新
7. ⬜ `src/views/BlogPost.vue` - 需要更新
8. ⬜ `src/views/Contact.vue` - 需要更新

## 💡 提示

### 使用插值

对于动态内容（如姓名、日期等），使用插值：

```vue
<p>{{ $t('home.greeting') }} {{ userName }}</p>
```

### 使用 Composition API

在 `<script setup>` 中使用 i18n：

```vue
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

// 在 JS 中使用翻译
const message = t("home.greeting");

// 切换语言
const switchLanguage = () => {
  locale.value = locale.value === "zh" ? "en" : "zh";
};
</script>
```

### 复数和数字格式化

vue-i18n 支持复数、日期、数字等高级格式化：

```typescript
// 复数
{
  car: 'car | cars',
  apple: 'no apples | one apple | {count} apples'
}
```

```vue
<p>{{ $t('car', 2) }}</p>
<!-- 输出: cars -->
<p>{{ $t('apple', 5) }}</p>
<!-- 输出: 5 apples -->
```

## 🔍 调试

### 检查当前语言

在浏览器控制台中：

```javascript
localStorage.getItem("locale");
```

### 切换语言测试

手动切换测试：

```javascript
localStorage.setItem("locale", "zh"); // 设置中文
localStorage.setItem("locale", "en"); // 设置英文
location.reload(); // 刷新页面
```

## 📚 参考资源

- [Vue I18n 官方文档](https://vue-i18n.intlify.dev/)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)

## ❓ 常见问题

### Q: 为什么切换语言后某些内容没有变化？

A: 该内容可能还没有国际化。检查组件是否使用了 `$t()` 函数。

### Q: 如何添加更多语言？

A: 在 `src/locales/` 中创建新的语言文件（如 `ja.ts` for 日语），然后在 `index.ts` 中导入并添加到 messages 对象。

### Q: TypeScript 报错怎么办？

A: 安装依赖后 TypeScript 错误会消失。运行 `npm install` 然后重启 VS Code。

---

**祝你成功实现多语言网站！** 🎉
