# 🔄 Инструкция по переименованию в MarketLab Academy

**Текущее:** `marketlab-blog`  
**Новое:** `marketlab-academy`  
**URL:** `https://hampfree-hub.github.io/marketlab-academy/`

---

## 📋 Пошаговая инструкция:

### Шаг 1: Проверить доступность (2 минуты)

**Проверить на GitHub:**
1. Откройте: `https://github.com/hampfree-hub/marketlab-academy`
2. Если репозиторий не существует → можно использовать ✅
3. Если существует → выбрать другой вариант

**Проверить домен:**
1. Откройте: `https://hampfree-hub.github.io/marketlab-academy/`
2. Если 404 → можно использовать ✅
3. Если что-то есть → выбрать другой вариант

---

### Шаг 2: Переименовать репозиторий на GitHub (2 минуты)

1. Откройте репозиторий: `https://github.com/hampfree-hub/marketlab-blog`
2. Перейдите: **Settings** → **General**
3. Прокрутите до **"Repository name"**
4. Введите: `marketlab-academy`
5. Нажмите **"Rename"**

**Важно:** GitHub автоматически обновит все ссылки!

---

### Шаг 3: Обновить локальные настройки (5 минут)

**3.1. Обновить `astro.config.mjs`:**

```javascript
export default defineConfig({
	site: 'https://hampfree-hub.github.io',
	base: '/marketlab-academy', // ← изменить здесь
	integrations: [mdx(), sitemap()],
});
```

**3.2. Обновить remote URL:**

```powershell
cd "D:\Projects\HampfreeBlog"
git remote set-url github https://github.com/hampfree-hub/marketlab-academy.git
git remote -v  # проверить
```

**3.3. Обновить пути к шрифтам (если нужно):**

В `src/styles/global.css`:
```css
src: url("/marketlab-academy/fonts/atkinson-regular.woff")
```

В `src/components/BaseHead.astro`:
```html
<link rel="preload" href={new URL('/marketlab-academy/fonts/atkinson-regular.woff', Astro.site)} />
```

---

### Шаг 4: Закоммитить изменения (2 минуты)

```powershell
git add astro.config.mjs src/styles/global.css src/components/BaseHead.astro
git commit -m "refactor: rename to marketlab-academy

- Update base path to /marketlab-academy
- Update font paths
- Update remote URL"
git push github main
```

---

### Шаг 5: Проверить что всё работает (3 минуты)

1. **GitHub Actions:**
   - Откройте: `https://github.com/hampfree-hub/marketlab-academy/actions`
   - Проверьте что workflow запустился

2. **Блог онлайн:**
   - Откройте: `https://hampfree-hub.github.io/marketlab-academy/`
   - Проверьте что страница загружается

3. **Локально:**
   - `npm run dev`
   - Откройте: `http://localhost:4321/marketlab-academy/`
   - Проверьте что всё работает

---

## ✅ Итоговый чеклист:

- [ ] Проверить доступность `marketlab-academy`
- [ ] Переименовать репозиторий на GitHub
- [ ] Обновить `astro.config.mjs`
- [ ] Обновить remote URL
- [ ] Обновить пути к шрифтам
- [ ] Закоммитить изменения
- [ ] Проверить что всё работает

---

## 🚀 Готовы начать?

**Проверить доступность и переименовать?** 🔄

