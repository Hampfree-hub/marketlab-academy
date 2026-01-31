# Безопасный коммит и пуш (MarketLab Academy)

**Конфиденциальность и разные репозитории на первом месте.** Этот репозиторий — публичный блог; планы, секреты, приватные документы — только в своих репозиториях.

---

## Почему git в Cursor может падать

В терминале Cursor (bash) команды `git pull` / `git status` иногда падают с ошибкой **CreateFileMapping / Win32 error 5** — это ограничение окружения, а не вашего репозитория.

**Решение:** делать коммиты и пуш в **обычном терминале**:
- **PowerShell** (ранее коммиты проходили без проблем), или
- **Git Bash** вне Cursor (если вы его ставили для git).

---

## Перед каждым коммитом

1. **Проверить, что коммитим только нужное** — не использовать `git add .` или `git add -A`, если в каталоге есть приватные или лишние файлы.
2. **Явно добавлять только изменённые файлы** (см. список ниже).
3. **После `git add` обязательно выполнить `git status`** и убедиться, что в списке нет:
   - `.env`, `*.key`, `secrets/`
   - файлов из `.gitignore` (планы, ARTICLES_OPTIMIZATION*, docs/README.md, docs/characters/, *PRIVATE*, и т.д.)
   - путей из других репозиториев (HampfreeBlog-Private, AutomationHub и т.п., если они не часть этого репо).

---

## Пример: коммит правок по баннерам (только эти файлы)

В **PowerShell** (или Git Bash вне Cursor):

```powershell
cd d:\Projects

# Добавляем ТОЛЬКО файлы, которые правили под баннеры и документацию
git add src/components/Banner.astro
git add src/components/RelatedPosts.astro
git add src/styles/global.css
git add src/styles/components/blog-post.css
git add docs/BANNER_LAYOUT_TEST_CHECKLIST.md
git add docs/BLOG_BANNER_AND_LAYOUT_RULES.md
git add docs/LOCAL_DEV_TROUBLESHOOTING.md
git add docs/SAFE_COMMIT_PROCEDURE.md
git add package.json

# Обязательно проверить список — ничего лишнего и приватного
git status

# Если в status только ожидаемые файлы — коммит и пуш
git commit -m "fix(blog): баннеры — водяная марка по словам, категория, правила вёрстки"
git push
```

Если вы правили только часть файлов — добавляйте в `git add` только их, затем снова `git status`.

---

## Что уже в .gitignore (не попадёт в коммит)

- `.env`, `secrets/`, `*.key`, `*PRIVATE*`, `*SECRET*`
- Планы и стратегии: `docs/ARTICLES_WORK_PLAN.md`, `docs/SEO_STRATEGY_SUMMARY.md`, `ARTICLES_OPTIMIZATION_*.md` и др.
- `docs/README.md`, `docs/characters/`
- `.cursorrules*`, `node_modules/`, `dist/`, `.astro/`

Полный список — в корне проекта: `.gitignore`.

---

## Разные репозитории

У вас отдельные репозитории под разные цели. В **этом** репо (MarketLab Academy / блог) коммитим только код и документацию блога, без внутренних планов и секретов. Правила вёрстки и чеклисты — можно коммитить; копирование в приватные репо — по вашему workflow.
