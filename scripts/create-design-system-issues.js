#!/usr/bin/env node

/**
 * Create GitHub Issues for Design System V1 Plan
 * 
 * PHASE 1: Critical Fixes (1-2h)
 * PHASE 2: Typography & Spacing (2-3h)
 * PHASE 3: Color System (2-3h)
 * PHASE 4: Content & UX (1-2h)
 * PHASE 5: Polish (1-2h)
 */

const issues = [
  // PHASE 1
  {
    title: "🎨 [PHASE 1] Dark theme: улучшить контраст (#E5E5E5, #050608)",
    body: `## Проблема
Сейчас используется чисто чёрный (#000) и чисто белый (#fff), что утомляет глаза при длинном чтении.

## Решение
\`\`\`css
/* Dark theme */
--color-bg: #050608           /* вместо #000000 */
--color-text-primary: #E5E5E5 /* вместо #FFFFFF */
\`\`\`

## Файлы
- \`src/styles/nes8bit.css\`

## Приоритет
🔴 HIGH

## Roadmap
- [ ] Изменить цвета в \`:root[data-theme="dark"]\`
- [ ] Проверить на всех страницах
- [ ] Проверить WCAG AA контраст (≥4.5:1)`,
    labels: ["enhancement", "8-bit", "design-system-v1", "phase-1"]
  },
  {
    title: "📝 [PHASE 1] Категории: короткие названия",
    body: `## Проблема
Текущие названия слишком длинные и тяжёлые:
- [ТЕХНИЧЕСКИЙ_АНАЛИЗ]
- [АВТОМАТИЗАЦИЯ]

## Решение
\`\`\`
RU: [ТЕХАНАЛИЗ] [КРИПТО] [АЛГО] [ФУНДАМЕНТ]
EN: [ANALYSIS] [CRYPTO] [ALGO] [FUNDAMENTAL]
ES: [ANÁLISIS] [CRIPTO] [ALGO] [FUNDAMENTAL]
\`\`\`

## Файлы
- \`docs/CATEGORIES_FINAL_3_LANGUAGES.md\`
- \`src/pages/index.astro\`
- \`src/styles/global.css\`

## Приоритет
🔴 HIGH

## Roadmap
- [ ] Обновить названия в \`CATEGORIES_FINAL_3_LANGUAGES.md\`
- [ ] Применить в \`index.astro\`
- [ ] Добавить тултипы с полными названиями (опционально)`,
    labels: ["content", "localization", "design-system-v1", "phase-1"]
  },

  // PHASE 2
  {
    title: "📐 [PHASE 2] Вертикальный ритм: базовый шаг 16px",
    body: `## Проблема
Отступы не систематизированы, слишком большие пустые зоны.

## Решение
\`\`\`css
:root {
  --spacing-xs: 8px;   /* 0.5 × base */
  --spacing-sm: 16px;  /* 1 × base */
  --spacing-md: 24px;  /* 1.5 × base */
  --spacing-lg: 32px;  /* 2 × base */
  --spacing-xl: 48px;  /* 3 × base */
}
\`\`\`

## Файлы
- \`src/styles/global.css\`
- \`src/pages/index.astro\`
- \`src/layouts/*.astro\`

## Приоритет
🟡 MEDIUM

## Roadmap
- [ ] Определить CSS variables для spacing
- [ ] Применить к отступам между блоками
- [ ] Header → КАТЕГОРИИ: --spacing-lg (32px)
- [ ] КАТЕГОРИИ → ПОСЛЕДНИЕ_СТАТЬИ: --spacing-md (24px)`,
    labels: ["enhancement", "design-system-v1", "phase-2"]
  },
  {
    title: "✍️ [PHASE 2] Типографика: два стиля заголовков",
    body: `## Проблема
Капс + большой трекинг тяжеловат для русского языка.

## Решение
\`\`\`css
/* Для коротких заголовков (≤2 слова) */
.h1-brutal {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Для длинных заголовков */
.h1-long {
  text-transform: none; /* Mixed case */
  letter-spacing: 0.02em;
}
\`\`\`

## Файлы
- \`src/styles/global.css\`
- \`src/components/*.astro\`

## Приоритет
🟡 MEDIUM`,
    labels: ["enhancement", "typography", "design-system-v1", "phase-2"]
  },
  {
    title: "🔲 [PHASE 2] Две толщины линий: structural vs decorative",
    body: `## Проблема
Все линии одинаковой толщины → визуальный шум.

## Решение
\`\`\`css
:root {
  --border-structural: 2px solid;  /* UI элементы */
  --border-decorative: 1px solid;  /* Разделители */
  --border-bulge: 4px solid;       /* Нижняя выпуклость */
}
\`\`\`

## Файлы
- \`src/styles/global.css\`
- \`src/pages/index.astro\`

## Приоритет
🟡 MEDIUM`,
    labels: ["enhancement", "design-system-v1", "phase-2"]
  },

  // PHASE 3
  {
    title: "🌈 [PHASE 3] Light theme: отдельные токены (не инверсия!)",
    body: `## Проблема
Светлая тема — просто механическая инверсия тёмной, нет тонкой настройки.

## Решение
\`\`\`css
[data-theme="light"] {
  --color-bg: #F8F8F6;           /* Тёплая бумага, не салатный! */
  --color-text-primary: #1A1A1A;
  --color-accent: #2A5A1A;       /* Менее ядовитый зелёный */
  --color-border: #C8C8C0;
}
\`\`\`

## Файлы
- \`src/styles/nes8bit.css\`

## Приоритет
🟡 MEDIUM

## Roadmap
- [ ] Создать отдельную палитру для light
- [ ] Проверить WCAG AA контраст
- [ ] Протестировать на всех страницах`,
    labels: ["enhancement", "design-system-v1", "phase-3"]
  },

  // PHASE 4
  {
    title: "🌍 [PHASE 4] Индикатор языка статьи в метаданных",
    body: `## Проблема
Не понятно на каком языке статья (заголовок на EN, мета на RU).

## Решение
Добавить индикатор языка рядом с датой:
\`\`\`
"5 мин · [EN]"
\`\`\`

## Файлы
- \`src/content/config.ts\` — добавить \`language\` в схему
- \`src/pages/index.astro\` — отображать индикатор
- \`src/components/*.astro\` — проверить локали UI

## Приоритет
🟢 LOW`,
    labels: ["enhancement", "localization", "design-system-v1", "phase-4"]
  },
  {
    title: "💬 [PHASE 4] Тултипы для категорий (полные названия)",
    body: `## Проблема
Короткие названия [ТЕХАНАЛИЗ] могут быть непонятны новым пользователям.

## Решение
При hover показывать полное название:
\`\`\`
[ТЕХАНАЛИЗ] → "Технический анализ"
\`\`\`

## Файлы
- \`src/pages/index.astro\`
- \`src/styles/global.css\` (tooltip styles)

## Приоритет
🟢 LOW`,
    labels: ["enhancement", "ux", "design-system-v1", "phase-4"]
  },

  // PHASE 5
  {
    title: "✨ [PHASE 5] Карточки: subtle hover эффект",
    body: `## Проблема
Текущий hover эффект карточек слишком агрессивный или недостаточно заметный.

## Решение
\`\`\`css
.post-card:hover {
  border-bottom-color: var(--nes-accent-green-dark); /* Subtle bulge */
}
.post-card:hover h3 {
  color: var(--nes-accent-yellow); /* Заголовок жёлтый */
}
\`\`\`

## Файлы
- \`src/styles/global.css\`

## Приоритет
🟢 LOW`,
    labels: ["enhancement", "8-bit", "design-system-v1", "phase-5"]
  },
  {
    title: "📄 [PHASE 5] Footer: унифицировать отступы",
    body: `## Проблема
Отступы в футере не соответствуют общей системе spacing.

## Решение
Применить spacing system из Phase 2.

## Файлы
- \`src/components/Footer.astro\`

## Приоритет
🟢 LOW`,
    labels: ["enhancement", "design-system-v1", "phase-5"]
  },
  {
    title: "🔍 [PHASE 5] Финальная проверка на всех breakpoints",
    body: `## Чеклист
- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablet (1024px, 768px)
- [ ] Mobile (414px, 375px)

## Страницы
- [ ] Homepage
- [ ] Blog list
- [ ] Post page
- [ ] About page

## Проверить
- [ ] Все кнопки с bottom bulge
- [ ] Spacing унифицирован
- [ ] Цвета по палитре
- [ ] Типографика консистентна
- [ ] Mobile menu работает

## Приоритет
🟢 LOW`,
    labels: ["testing", "design-system-v1", "phase-5"]
  }
];

console.log(`📋 Создано ${issues.length} issues для Design System V1 Plan`);
console.log(`
Для создания issues на GitHub используй GitHub CLI:

gh issue create --title "TITLE" --body "BODY" --label "label1,label2"

Или используй GitHub API через curl.
`);

// Export for use
module.exports = issues;
