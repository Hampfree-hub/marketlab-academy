# 📋 ИНСТРУКЦИИ ПО ГЕНЕРАЦИИ БАННЕРОВ ДЛЯ ТЕСТОВЫХ СТАТЕЙ

**Дата:** 2026-01-10  
**Статус:** 📋 **ГОТОВО К ИСПОЛЬЗОВАНИЮ**

---

## 🎯 ЦЕЛЬ

Сгенерировать баннеры для трёх тестовых статей, используя `banner-generator.html` и маппинг категорий → паттерны.

---

## 📝 СТАТЬИ ДЛЯ ОБРАБОТКИ

### **1. first-post.md — "RSI Technical Analysis"**

**Параметры баннера:**
- **Banner Size:** "Article Banner (1200×400)"
- **Title:** "RSI TECHNICAL ANALYSIS"
- **Subtitle:** "MARKETLAB"
- **Rubric:** "ТЕХАНАЛИЗ"
- **Watermark:** "MARKETLAB ACADEMY"
- **Background:** "Grid Lines" (рекомендуется) или "Crypto Theme"

**Путь сохранения:**
```
src/content/blog/first-post/assets/banner.png
```

---

### **2. second-post.md — "Bitcoin Basics"**

**Параметры баннера:**
- **Banner Size:** "Article Banner (1200×400)"
- **Title:** "BITCOIN BASICS"
- **Subtitle:** "MARKETLAB"
- **Rubric:** "КРИПТО"
- **Watermark:** "MARKETLAB ACADEMY"
- **Background:** "Bitcoin Theme" (рекомендуется) или "Blockchain"

**Путь сохранения:**
```
src/content/blog/second-post/assets/banner.png
```

---

### **3. third-post.md — "Trading Bots Guide"**

**Параметры баннера:**
- **Banner Size:** "Article Banner (1200×400)"
- **Title:** "TRADING BOTS GUIDE"
- **Subtitle:** "MARKETLAB"
- **Rubric:** "АЛГО"
- **Watermark:** "MARKETLAB ACADEMY"
- **Background:** "Gradient" (рекомендуется) или "Crypto Theme"

**Путь сохранения:**
```
src/content/blog/third-post/assets/banner.png
```

---

## 🔄 ПОШАГОВАЯ ИНСТРУКЦИЯ

### **Шаг 1: Открыть генератор**

1. Запустить dev-сервер: `npm run dev`
2. Открыть: `http://localhost:4321/marketlab-academy/banner-generator.html`

---

### **Шаг 2: Генерация баннера для first-post.md**

1. **Banner Size:** Выбрать "Article Banner (1200×400)"
2. **Title:** Ввести "RSI Technical Analysis"
3. **Subtitle:** Ввести "MARKETLAB"
4. **Rubric:** Выбрать "ТЕХАНАЛИЗ"
5. **Watermark:** Ввести "MARKETLAB ACADEMY"
6. **Background:** Выбрать "Grid Lines"
7. **Проверить Preview** — убедиться, что текст читается
8. **Нажать "Download PNG"**
9. **Сохранить** как `banner.png` в `src/content/blog/first-post/assets/`

---

### **Шаг 3: Генерация баннера для second-post.md**

1. **Banner Size:** Выбрать "Article Banner (1200×400)"
2. **Title:** Ввести "Bitcoin Basics"
3. **Subtitle:** Ввести "MARKETLAB"
4. **Rubric:** Выбрать "КРИПТО"
5. **Watermark:** Ввести "MARKETLAB ACADEMY"
6. **Background:** Выбрать "Bitcoin Theme"
7. **Проверить Preview**
8. **Нажать "Download PNG"**
9. **Сохранить** как `banner.png` в `src/content/blog/second-post/assets/`

---

### **Шаг 4: Генерация баннера для third-post.md**

1. **Banner Size:** Выбрать "Article Banner (1200×400)"
2. **Title:** Ввести "Trading Bots Guide"
3. **Subtitle:** Ввести "MARKETLAB"
4. **Rubric:** Выбрать "АЛГО"
5. **Watermark:** Ввести "MARKETLAB ACADEMY"
6. **Background:** Выбрать "Gradient"
7. **Проверить Preview**
8. **Нажать "Download PNG"**
9. **Сохранить** как `banner.png` в `src/content/blog/third-post/assets/`

---

## ✅ ПРОВЕРКА

После генерации всех трёх баннеров:

1. **Проверить файлы:**
   - `src/content/blog/first-post/assets/banner.png` ✅
   - `src/content/blog/second-post/assets/banner.png` ✅
   - `src/content/blog/third-post/assets/banner.png` ✅

2. **Проверить frontmatter:**
   - Все статьи имеют `heroImage: './assets/banner.png'` ✅

3. **Проверить на сайте:**
   - Открыть `http://localhost:4321/marketlab-academy/blog/first-post`
   - Открыть `http://localhost:4321/marketlab-academy/blog/second-post`
   - Открыть `http://localhost:4321/marketlab-academy/blog/third-post`
   - Убедиться, что баннеры отображаются корректно ✅

---

## 🐛 ВОЗМОЖНЫЕ ПРОБЛЕМЫ

### **Проблема: Баннер не отображается**
- **Решение:** Проверить путь в `heroImage` (должен быть `'./assets/banner.png'`)

### **Проблема: Текст не читается**
- **Решение:** Сократить заголовок или выбрать больший размер баннера

### **Проблема: Паттерн не применяется**
- **Решение:** Обновить страницу генератора (Ctrl+F5) и попробовать снова

---

**Статус:** 📋 **ГОТОВО К ВЫПОЛНЕНИЮ**
