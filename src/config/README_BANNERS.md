// 🎨 Реферальные баннеры — единый конфиг
//
// Все баннеры управляются ЗДЕСЬ.
// Клиентские данные инжектятся через BannerDataInjector.astro.
//
// Файлы:
//   - ad-banners.ts        ← ЭТОТ файл (единый источник)
//   - BannerDataInjector.astro ← инжектит BANNER_TRANSLATIONS в клиентский JS
//   - BlogPost.astro       ← использует BANNER_DATA (автоматически)
//
// Добавление нового баннера:
//   1. Добавить ссылку в REFERRAL_LINKS
//   2. Добавить переводы в BANNER_TRANSLATIONS
//   3. Добавить логику в getBannerForArticle()
//   4. Готово! BannerDataInjector подтянет всё автоматически.
//
// Документация: HampfreeBlog-Private/docs/00-active/BANNER_WORKFLOW.md
