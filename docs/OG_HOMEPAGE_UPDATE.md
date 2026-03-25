# 🖼️ OG Изображения: Обновление главной страницы

**Дата:** 25 марта 2026 г.  
**Статус:** ✅ Завершено

---

## 📋 Проблема

**Было:**
- OG изображение для главной страницы весило **14 КБ** (очень маленькое)
- Использовался общий шаблон для статей (с категорией "GENERAL")
- Выглядело непрезентабельно для главной страницы

**Стало:**
- OG изображение весит **132-152 КБ** (качественное)
- Специальный шаблон для главной страницы
- Красивый дизайн: 8-bit заголовок, описание, 3 фичи

---

## 🎨 Дизайн нового OG изображения

### Элементы:

1. **Заголовок:** "MARKETLAB ACADEMY" (зелёный, 8-bit шрифт Press Start 2P)
2. **Описание:** "Блог о трейдинге, криптовалюте и автоматизации торговли" (серый, JetBrains Mono)
3. **Три фичи:** 
   - 🟢 Трейдинг
   - 🟢 Криптовалюты
   - 🟢 Алготрейдинг
4. **Декор:** Рамки по углам (pixel art стиль)
5. **Фон:** Тёмный с зелёным градиентом и scanline эффектом

### Цвета:
- **Фон:** `#050608` (тёмно-серый)
- **Заголовок:** `#00D800` (зелёный NES)
- **Описание:** `#B0B0B0` (серый)
- **Фичи:** `#3CBCFC` (синий) + `#00D800` (зелёный квадратик)

---

## 🛠️ Технические детали

### Новые файлы:

1. **`scripts/og-homepage-template.html`** — шаблон для главной страницы
2. **`scripts/generate-og-images.mjs`** (обновлён) — функция `generateHomepageOGImage()`

### Изменения в скрипте:

**Было:**
```js
await generateOGImage({
    ...config,
    category: 'general',
    slug: 'homepage'
}, browser, outputPath);
```

**Стало:**
```js
await generateHomepageOGImage(config, browser, outputPath);
```

### Функция генерации:

```js
async function generateHomepageOGImage(data, browser, outputPath) {
    // Читает шаблон og-homepage-template.html
    // Заменяет {{TITLE}} и {{SUBTITLE}}
    // Делает скриншот 1200x630px
    // Сохраняет как PNG
}
```

---

## 🌍 Мультиязычность

OG изображения генерируются для 3 языков:

| Язык | Файл | Заголовок | Описание |
|------|------|-----------|----------|
| **RU** | `ru-homepage.png` | MarketLab Academy | Блог о трейдинге, криптовалюте и автоматизации торговли |
| **EN** | `en-homepage.png` | MarketLab Academy | Blog about trading, cryptocurrency and trading automation |
| **ES** | `es-homepage.png` | MarketLab Academy | Blog sobre trading, criptomonedas y automatización de trading |

---

## 📊 Сравнение

| Параметр | До | После |
|----------|---|-------|
| **Размер файла** | 14 КБ | 132-152 КБ |
| **Шаблон** | Общий для статей | Специальный для homepage |
| **Дизайн** | Заголовок + категория | Заголовок + описание + 3 фичи |
| **Восприятие** | "Что это?" | "Красиво и понятно!" |

---

## 🚀 Как использовать

### Локальная генерация:
```bash
npm run generate-og
```

### Продакшен (автоматически):
```bash
npm run build:full
# или
git push origin main  # GitHub Actions сделает всё сам
```

### Проверка:
```bash
# Открыть локально
start dist/og/ru-homepage.png

# Проверить на сайте
curl -sI https://marketlab-academy.org/og/ru-homepage.png
```

---

## ✅ Чек-лист

- [x] Создан шаблон `og-homepage-template.html`
- [x] Добавлена функция `generateHomepageOGImage()`
- [x] Обновлён скрипт генерации
- [x] Сгенерированы изображения для RU, EN, ES
- [x] Задеплой на GitHub Pages
- [x] Проверено на сайте

---

## 📱 Telegram

После деплоя обновить кэш в [@WebpageBot](https://t.me/WebpageBot):

```
/send https://marketlab-academy.org/ru/
```

---

## 🎯 Следующие улучшения (опционально)

1. **About страница:** Такой же шаблон для `about.png`
2. **Анимация:** Добавить glitch эффект (если Telegram поддержит)
3. **Персонажи:** Добавить MarketLab characters (Emily, Kai, Leon, Vera)

---

**Автор:** AI Assistant  
**Статус:** ✅ Готово
