import { createI18n } from "vue-i18n";
import zh from "./zh";
import en from "./en";

// 获取浏览器语言
const getBrowserLanguage = (): string => {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.includes("zh")) {
    return "zh";
  }
  return "en";
};

// 从 localStorage 获取或使用浏览器语言
const getInitialLocale = (): string => {
  const savedLocale = localStorage.getItem("locale");
  return savedLocale || getBrowserLanguage();
};

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: getInitialLocale(),
  fallbackLocale: "en",
  messages: {
    zh,
    en,
  },
});

export default i18n;
