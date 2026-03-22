# 🎨 Реферальные баннеры: Руководство по использованию

**Дата:** 22 марта 2026  
**Статус:** ✅ Готово к использованию

---

## 📊 Что реализовано

### 1. Автоматическая вставка баннеров

**Как работает:**
- При загрузке статьи JavaScript находит 2-й заголовок H2
- После него вставляется реферальный баннер
- Баннер выбирается по категории статьи и языку

**Логика выбора:**
| Категория | Язык | Баннер | Ссылка |
|-----------|------|--------|--------|
| `algo-trading` | RU | Veles | Veles referral |
| Любая другая | RU/EN/ES | Bybit | Bybit referral (локализация) |

---

### 2. Переиспользуемый компонент BannerCard

**Файл:** `src/components/BannerCard.astro`

**Использование вручную в статьях:**

```astro
---
import BannerCard from '../components/BannerCard.astro';
import { AD_BANNERS } from '../config/ad-banners';

const banner = AD_BANNERS.find(b => b.id === 'veles-algo');
---

<BannerCard banner={banner} lang="ru" />
```

**Использование в Markdown (через HTML):**

```markdown
<div class="custom-banner">
  <a href="https://veles.finance/invite/washmallay" target="_blank" rel="nofollow sponsored">
    <img src="/og/ad/veles-algo_ru.png" alt="Veles" />
  </a>
</div>
```

---

### 3. Конфигурация баннеров

**Файл:** `src/config/ad-banners.ts`

**Добавление нового баннера:**

```typescript
export const AD_BANNERS: AdBanner[] = [
  {
    id: 'my-new-banner',
    title: 'Заголовок баннера',
    subtitle: 'Описание баннера',
    cta: 'CTA кнопка →',
    link: 'https://example.com',
    categories: ['algo-trading'], // Опционально: для каких категорий
    languages: ['ru', 'en'], // Опционально: для каких языков
    priority: 10, // Опционально: приоритет (чем выше, тем важнее)
    colors: {
      bgStart: '#1A1F2E',
      bgEnd: '#2D7A6E',
      text: '#FFFFFF',
      ctaBg: '#FFD966',
      ctaText: '#1A1F2E',
      border: '#FFB347',
    },
  },
];
```

---

### 4. Генерация PNG баннеров

**Команда:** `npm run generate-ads`

**Что делает:**
- Генерирует PNG для каждого баннера из конфига
- Сохраняет в `public/og/ad/{id}_{lang}.png`
- Размер: 1200×400px (3:1)
- Использует Puppeteer для рендеринга

**Файлы:**
- Скрипт: `scripts/generate-ad-banners.mjs`
- Шаблон: HTML с Google Fonts (Press Start 2P, JetBrains Mono)

---

## 📁 Структура файлов

```
d:\Projects\HampfreeBlog\
├── astro.config.mjs              ← Интеграция (пока не подключена)
├── package.json                  ← Скрипт "generate-ads"
├── src/
│   ├── config/
│   │   └── ad-banners.ts         ← Конфигурация баннеров
│   ├── components/
│   │   ├── BannerCard.astro      ← Переиспользуемый компонент
│   │   └── InArticleAd.astro     ← Компонент для автовставки
│   ├── integrations/
│   │   └── ad-banners.ts         ← Интеграция для автосборки
│   ├── layouts/
│   │   └── BlogPost.astro        ← Автовставка баннера (JS)
│   ├── utils/
│   │   └── insert-ad-banner.ts   ← Утилита (не используется)
│   └── public/
│       └── og/
│           └── ad/               ← Сгенерированные PNG
│               ├── veles-algo_ru.png
│               ├── bybit-general_ru.png
│               ├── bybit-general_en.png
│               ├── bybit-general_es.png
│               ├── bingx-copy_ru.png
│               ├── bingx-copy_en.png
│               ├── bingx-copy_es.png
│               ├── finbazar-fundamental_ru.png
│               ├── default-academy_ru.png
│               ├── default-academy_en.png
│               └── default-academy_es.png
```

---

## 🔄 Рабочий флоу

### 1. Добавление нового баннера

1. **Обновить конфиг** (`src/config/ad-banners.ts`):
   ```typescript
   export const AD_BANNERS.push({
     id: 'new-partner',
     title: '...',
     // ...
   });
   ```

2. **Сгенерировать PNG**:
   ```bash
   npm run generate-ads
   ```

3. **Закоммитить и запушить**:
   ```bash
   git add -A && git commit -m "add: new partner banner" && git push
   ```

---

### 2. Обновление ссылок

1. **Обновить конфиг** (`src/config/ad-banners.ts`):
   ```typescript
   export const REFERRAL_LINKS = {
     bybit: {
       ru: 'https://...', // Новая ссылка
       en: 'https://...',
       es: 'https://...',
     },
   };
   ```

2. **Пересобрать и запушить**:
   ```bash
   npm run build && git add -A && git commit -m "fix: update Bybit links" && git push
   ```

---

### 3. Ручная вставка баннера в статью

**Вариант 1: MDX (с импортом компонента)**

```mdx
---
title: 'Моя статья'
category: 'algo-trading'
---

Контент статьи...

<BannerCard banner={AD_BANNERS.find(b => b.id === 'veles-algo')} lang="ru" />

Больше контента...
```

**Вариант 2: Markdown (через HTML)**

```markdown
Контент статьи...

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://veles.finance/invite/washmallay" target="_blank" rel="nofollow sponsored">
    <img src="/og/ad/veles-algo_ru.png" alt="Veles" style="max-width: 1200px; width: 100%; height: auto;" />
  </a>
</div>

Больше контента...
```

---

## 🎯 Текущие баннеры

| ID | Название | Категории | Языки | Приоритет |
|----|----------|-----------|-------|-----------|
| `veles-algo` | Veles: Торговые боты | algo-trading | RU | 10 |
| `bybit-general` | Bybit: Торгуй крипто | Все | RU/EN/ES | 5 |
| `finbazar-fundamental` | FinBazar: Ончейн | fundamental-analysis | RU | 8 |
| `bingx-copy` | BingX: Копируй сделки | algo-trading, technical-analysis | RU/EN/ES | 7 |
| `default-academy` | MarketLab Academy | Все | RU/EN/ES | 0 |

---

## 🧪 Тестирование

### Локально:

```bash
# 1. Генерация баннеров
npm run generate-ads

# 2. Запуск dev-сервера
npm run dev

# 3. Открыть статью
http://localhost:4321/ru/library/dca-strategy-crypto/
```

**Проверить:**
- [ ] Баннер появляется после 2-го H2
- [ ] Клик по баннеру открывает ссылку
- [ ] Ссылка правильная (Veles для algo-trading, Bybit для остальных)
- [ ] На мобильном (320px) баннер масштабируется

### На проде:

```bash
# После пуша
https://marketlab-academy.org/ru/library/dca-strategy-crypto/
```

---

## 📊 Метрики

| Метрика | Как отслеживать | Цель |
|---------|-----------------|------|
| CTR баннера | GA4 events + UTM-метки | 2-5% |
| Конверсия в регистрацию | Партнёрские кабинеты | 10-20% |
| Влияние на отказы | GA4 bounce rate | <5% роста |
| Доход на 1000 просмотров | Ручной расчёт | $5-15 |

---

## 🔧 Расширение функционала

### 1. Подключение интеграции (опционально)

**Файл:** `astro.config.mjs`

```javascript
import adBanners from './src/integrations/ad-banners';

export default defineConfig({
  integrations: [mdx(), sitemap(), adBanners()],
});
```

**Зачем:** Автоматическая генерация PNG при `npm run build`

**Почему не подключено:** Генерация через `npm run generate-ads` надёжнее (меньше зависимостей при сборке)

---

### 2. Отключение автовставки для конкретных статей

**Добавить frontmatter:**

```markdown
---
title: 'Статья без баннера'
disableAdBanner: true
---
```

**Обновить BlogPost.astro:**

```javascript
const disableAdBanner = Astro.props.disableAdBanner || false;

if (!disableAdBanner) {
  // Вставка баннера
}
```

---

### 3. Изменение позиции баннера

**По умолчанию:** После 2-го H2

**Как изменить:**

В `BlogPost.astro` (JS):

```javascript
const h2Index = 2; // После 3-го H2 (0-based index)
```

Или через frontmatter:

```markdown
---
adBannerPosition: 3 // После 3-го H2
---
```

---

## ⚠️ Важные заметки

1. **Не удалять PNG файлы** из `public/og/ad/` — они сгенерированы и закоммичены
2. **При изменении конфига** пересобирать PNG: `npm run generate-ads`
3. **Ссылки в конфиге** обновляются отдельно от PNG (PNG только для визуала)
4. **GA4 events** пока не настроены — нужно добавить отдельно для отслеживания CTR

---

## 📝 Changelog

### 22 марта 2026

- ✅ Добавлен компонент BannerCard.astro
- ✅ Добавлен конфиг ad-banners.ts
- ✅ Добавлен скрипт generate-ad-banners.mjs
- ✅ Добавлена автовставка баннера (JS в BlogPost.astro)
- ✅ Сгенерированы PNG (11 штук)
- ✅ Запушено на GitHub

---

**Готово к использованию!** 🚀
