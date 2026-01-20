import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  // pathname is /[lang]/...
  // index 0: "", index 1: "[lang]"
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const base = import.meta.env.BASE_URL.endsWith('/') 
      ? import.meta.env.BASE_URL 
      : import.meta.env.BASE_URL + '/';
    
    // remove leading slash if any
    let cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // Ensure it ends with a slash for Astro consistency, but only if not empty
    const suffix = cleanPath && !cleanPath.endsWith('/') ? '/' : '';
    
    return `${base}${l}/${cleanPath}${suffix}`;
  }
}
