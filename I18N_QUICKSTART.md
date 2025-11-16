# 🌍 快速启用中英文切换

## 第一步：安装依赖

```powershell
cd e:\Projects\VueProjects\PersonalWebsite
npm install
```

## 第二步：启动项目

```powershell
npm run dev
```

## 第三步：测试语言切换

1. 打开浏览器访问 `http://localhost:3000`
2. 在导航栏右侧找到语言切换按钮（🇨🇳 中文 / 🇺🇸 EN）
3. 点击按钮切换语言

### ✅ 已支持国际化的部分

- 导航栏（首页、项目、简历、博客、联系）
- 页脚（描述、快速链接、版权信息）
- 语言切换按钮

### ⚠️ 需要手动更新的页面

虽然所有翻译文本已经准备好，但以下页面需要手动替换硬编码文本为 `$t()` 函数调用：

1. `src/views/Home.vue` - 首页
2. `src/views/Projects.vue` - 项目展示
3. `src/views/Resume.vue` - 简历
4. `src/views/Blog.vue` - 博客列表
5. `src/views/BlogPost.vue` - 博客详情
6. `src/views/Contact.vue` - 联系页面

## 如何更新其他页面

### 简单示例

**原代码：**

```vue
<h1>Projects</h1>
<p>Explore my research work</p>
```

**更新为：**

```vue
<h1>{{ $t('projects.title') }}</h1>
<p>{{ $t('projects.description') }}</p>
```

### 完整步骤

1. 打开需要更新的组件文件
2. 找到所有硬编码的文本
3. 在 `src/locales/zh.ts` 和 `src/locales/en.ts` 中查找对应的翻译键
4. 将硬编码文本替换为 `{{ $t('翻译键') }}`
5. 保存文件，查看效果

## 已准备好的翻译

所有翻译已经在以下文件中准备好：

- `src/locales/zh.ts` - 中文翻译
- `src/locales/en.ts` - 英文翻译

翻译包含：

```typescript
{
  nav: { ... },           // 导航栏
  home: { ... },          // 首页
  projects: { ... },      // 项目页
  resume: { ... },        // 简历页
  blog: { ... },          // 博客页
  contact: { ... },       // 联系页
  footer: { ... },        // 页脚
  common: { ... }         // 通用文本
}
```

## 🎯 推荐顺序

建议按以下顺序更新页面：

1. ✅ Header & Footer - 已完成
2. ⬜ Home.vue - 首页（建议优先）
3. ⬜ Projects.vue - 项目展示
4. ⬜ Contact.vue - 联系页面
5. ⬜ Resume.vue - 简历
6. ⬜ Blog.vue - 博客
7. ⬜ BlogPost.vue - 博客详情

## 💡 提示

- 所有翻译键都在 `I18N_GUIDE.md` 文件中有详细说明
- 如果遇到 TypeScript 错误，重启 VS Code 即可
- 语言偏好会自动保存到浏览器

## 🔍 验证

切换语言后，检查：

- ✅ 导航栏文本是否改变
- ✅ 页脚文本是否改变
- ✅ 页面标题是否改变
- ✅ 刷新页面后语言是否保持

---

详细使用指南请查看 `I18N_GUIDE.md` 📚
