# Состояние репозитория marketlab-academy (02.02.2026)

**Локально:** `D:\Projects\HampfreeBlog` — рабочая копия блога. Ветка **main**.

**GitHub:** [Hampfree-hub/marketlab-academy](https://github.com/Hampfree-hub/marketlab-academy)  
- Удалённый **origin** указывает на тот же репо.  
- **origin/HEAD** → `origin/feature/astro-setup` (дефолтная ветка на GitHub может быть feature/astro-setup).  
- Есть ветки: **main**, **feature/astro-setup**, и др.

**Рекомендации:**

1. **Перед пушем в прод** — убедиться, с какой ветки идёт деплой (в GitHub Actions обычно `main` или `master`). Если деплой с `main`, пушить в `main`; если с `feature/astro-setup`, возможно, нужно смержить в неё или сменить default branch.
2. **Локально** — много изменённых и неотслеживаемых файлов (контент из корня Projects, серия диверсификации, FA/onchain, доки). Промежуточный коммит можно делать по подмножеству файлов (см. предложение коммита ниже).
3. **Структура** — в HampfreeBlog есть полный контент (blog-ru/en/es), компоненты, .github/workflows, docs. Всё соответствует одной основе; лишних дубликатов `src/` в корне Projects нет.
