#!/usr/bin/env node

/**
 * Create Phase 2 issues (Strict 8-bit approach)
 * Date: 2026-01-08
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const REPO_OWNER = 'Hampfree-hub';
const REPO_NAME = 'marketlab-academy';

function readTokenFromFile() {
  // Используем переменную окружения для пути к токену
  const tokenPath = process.env.GITHUB_TOKEN_PATH || null;
  if (tokenPath && fs.existsSync(tokenPath)) {
    return fs.readFileSync(tokenPath, 'utf-8').trim();
  }
  return null;
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || readTokenFromFile();

if (!GITHUB_TOKEN) {
  console.error('❌ GITHUB_TOKEN не найден!');
  console.error('Установите переменную окружения GITHUB_TOKEN или GITHUB_TOKEN_PATH');
  process.exit(1);
}

function makeRequest(endpoint, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: endpoint,
      method: method,
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Node.js',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${parsed.message || body}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function createIssue(title, body, labels) {
  console.log(`\n📝 Создаю issue: ${title}`);
  
  try {
    const issue = await makeRequest(
      `/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
      'POST',
      { title, body, labels }
    );
    
    console.log(`✅ Issue #${issue.number} создан: ${issue.html_url}`);
    return issue;
  } catch (error) {
    console.error(`❌ Ошибка создания issue: ${error.message}`);
    throw error;
  }
}

const issues = [
  {
    title: "📐 [PHASE 2] Spacing System — строгий 8-bit grid (кратно 8px)",
    body: `## 🎯 Цель
Создать систему отступов (spacing) строго кратных 8px для аутентичного 8-bit NES стиля.

## 📊 Текущая проблема
- ❌ Хардкод значения: \`padding: 12px\`, \`margin: 120px\`, \`gap: 10px\`
- ❌ Не кратно 8 (нарушает 8-bit grid)
- ❌ Нет единой системы

## ✅ Решение
Создать CSS переменные в \`src/styles/nes8bit.css\`:

\`\`\`css
:root {
  /* ═══ SPACING SYSTEM (строго кратно 8px) ═══ */
  --space-0: 0;
  --space-1: 8px;    /* 0.5 × 16 — минимальный gap (иконки) */
  --space-2: 16px;   /* 1 × 16 — БАЗОВЫЙ ШАГ! (margin, padding основных элементов) */
  --space-3: 24px;   /* 1.5 × 16 — gap между элементами в ряду */
  --space-4: 32px;   /* 2 × 16 — margin между компонентами */
  --space-6: 48px;   /* 3 × 16 — margin между секциями */
  --space-8: 64px;   /* 4 × 16 — padding крупных секций (hero) */
  --space-10: 80px;  /* 5 × 16 — padding топ-секций (hero top) */
}
\`\`\`

## 📁 Файлы для изменения
- \`src/styles/nes8bit.css\` — создать переменные
- \`src/styles/global.css\` — обновить использование
- \`src/pages/index.astro\` — hero, sections
- \`src/components/Header.astro\` — navigation
- \`src/components/Footer.astro\` — footer padding
- \`src/components/SubscribeForm.astro\` — form padding

## 🔍 Примеры замен

### ДО (хардкод):
\`\`\`css
.btn { padding: 12px 32px; }        /* ❌ 12px не кратно 8 */
.hero { padding: 120px 0 80px; }    /* ❌ 120px не кратно 8 */
.tag-btn { padding: 10px 20px; }    /* ❌ 10px не кратно 8 */
\`\`\`

### ПОСЛЕ (переменные):
\`\`\`css
.btn { padding: var(--space-2) var(--space-4); }     /* 16px 32px */
.hero { padding: var(--space-10) 0 var(--space-8); } /* 80px 0 64px */
.tag-btn { padding: var(--space-1) var(--space-2); } /* 8px 16px */
\`\`\`

## ✅ Checklist
- [ ] Создать переменные в \`nes8bit.css\`
- [ ] Обновить \`.btn\`: \`12px → 16px\` (вертикальный padding)
- [ ] Обновить \`.tag-btn\`: \`10px → 8px\`
- [ ] Обновить hero: \`120px → 80px\`
- [ ] Обновить все \`padding/margin/gap\` на переменные
- [ ] Проверить на desktop (1200px+)
- [ ] Проверить на tablet (768-1199px)
- [ ] Проверить на mobile (<768px)

## 🎨 Визуальный эффект
- Кнопки станут чуть выше (+4px)
- Hero станет компактнее (-40px)
- Всё выровнено по 8×8 grid (аутентичный NES стиль!)

## 📚 Связанные документы
- \`docs/8BIT_UI_GUIDELINES.md\` — spacing system
- \`docs/DESIGN_SYSTEM_V1_PLAN.md\` — phase 2 plan`,
    labels: ["enhancement", "8-bit", "design-system-v1", "phase-2", "spacing", "high-priority"]
  },
  {
    title: "✍️ [PHASE 2] Heading Styles — нейтральный h1 + явные классы (.brutal / .long)",
    body: `## 🎯 Цель
Создать два стиля заголовков (brutal / long) для коротких и длинных текстов.

## 📊 Текущая проблема
- ❌ Все \`h1\` в uppercase + расширенный трекинг
- ❌ Длинные русские заголовки выглядят как крик
- ❌ Нет гибкости для разных типов контента

**Пример проблемы:**
\`\`\`html
<h1>ПРИМЕНЕНИЕ ВОЛН ЭЛЛИОТА В КРИПТО-ТОРГОВЛЕ НА ФЬЮЧЕРСАХ</h1>
<!-- ↑ Нечитабельно! Слишком длинно для капса -->
\`\`\`

## ✅ Решение
Создать 3 стиля в \`src/styles/nes8bit.css\`:

\`\`\`css
/* h1 БЕЗ класса — нейтральный (НЕ трогаем text-transform!) */
h1 {
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: var(--space-2);
  /* НЕТ text-transform и letter-spacing! */
}

/* .brutal — для коротких заголовков (2-5 слов) */
h1.brutal {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.1;
}

/* .long — для длинных заголовков (5+ слов) */
h1.long {
  text-transform: none;
  letter-spacing: 0;
  line-height: 1.3;
}
\`\`\`

## 📁 Файлы для изменения
- \`src/styles/nes8bit.css\` — создать стили
- \`src/pages/index.astro\` — добавить \`.brutal\` к hero h1
- \`src/pages/blog/index.astro\` — проверить заголовок
- \`src/layouts/BlogPost.astro\` — применить к статьям

## 🔍 Примеры использования

### Короткий заголовок (BRUTAL):
\`\`\`html
<h1 class="brutal">MARKETLAB ACADEMY</h1>
<!-- ↑ 2 слова, капс выглядит мощно ✓ -->
\`\`\`

### Длинный заголовок (LONG):
\`\`\`html
<h1 class="long">Применение волн Эллиота в крипто-торговле на фьючерсах</h1>
<!-- ↑ 7 слов, обычный вид, читабельно ✓ -->
\`\`\`

### Нейтральный (без класса):
\`\`\`html
<h1>Crypto Trading Guide</h1>
<!-- ↑ Без класса = нейтральный стиль (не ломается ничего) ✓ -->
\`\`\`

## ✅ Checklist
- [ ] Создать стили в \`nes8bit.css\`
- [ ] Добавить \`.brutal\` к главной странице hero
- [ ] Проверить существующие статьи (не сломались?)
- [ ] Обновить \`8BIT_UI_GUIDELINES.md\` (примеры)
- [ ] Протестировать на RU/EN/ES языках

## 🎨 Визуальный эффект
- Короткие заголовки: мощные, капс, расширенные
- Длинные заголовки: читабельные, обычный вид
- Старые статьи: не сломаются (нейтральный стиль)

## 📚 Связанные документы
- \`docs/DESIGN_SYSTEM_V1_PLAN.md\` — typographic hierarchy`,
    labels: ["enhancement", "8-bit", "design-system-v1", "phase-2", "typography", "medium-priority"]
  },
  {
    title: "🔲 [PHASE 2] Border System — structural (2px) vs decorative (1px)",
    body: `## 🎯 Цель
Разделить бордеры на 2 категории для визуальной иерархии.

## 📊 Текущая проблема
- ❌ Все линии одинаковой толщины (2px)
- ❌ Нет визуальной иерархии (кнопки = разделители)
- ❌ Визуальный шум

## ✅ Решение
Создать 2 типа бордеров в \`src/styles/nes8bit.css\`:

\`\`\`css
:root {
  /* ═══ BORDER SYSTEM ═══ */
  
  /* STRUCTURAL — важные элементы (кнопки, карточки) */
  --border-structural: 2px solid var(--nes-border-primary);
  --border-structural-accent: 2px solid var(--nes-accent-green);
  --border-bulge: 4px solid var(--nes-accent-green-dark);
  
  /* DECORATIVE — вспомогательные разделители */
  --border-decorative: 1px solid var(--nes-border-primary);
}
\`\`\`

## 📁 Файлы для изменения
- \`src/styles/nes8bit.css\` — создать переменные
- \`src/styles/global.css\` — обновить \`.btn\`, \`.tag-btn\`
- \`src/components/Footer.astro\` — \`border-top: 1px\` (decorative)
- \`src/pages/index.astro\` — hero \`border-bottom: 1px\` (decorative)

## 🔍 Примеры использования

### STRUCTURAL (2px) — интерактивные элементы:
\`\`\`css
.btn {
  border: var(--border-structural-accent);   /* 2px, зелёный */
  border-bottom: var(--border-bulge);        /* 4px, тёмно-зелёный */
}

.post-card {
  border: var(--border-structural);          /* 2px, серый */
  border-bottom: var(--border-bulge);        /* 4px при hover */
}
\`\`\`

### DECORATIVE (1px) — разделители:
\`\`\`css
.hero {
  border-bottom: var(--border-decorative);   /* 1px, серый */
}

.footer {
  border-top: var(--border-decorative);      /* 1px, серый */
}
\`\`\`

## ✅ Checklist
- [ ] Создать переменные в \`nes8bit.css\`
- [ ] Обновить кнопки на \`--border-structural-accent\`
- [ ] Обновить разделители на \`--border-decorative\`
- [ ] Проверить визуальную иерархию
- [ ] Убедиться, что bulge остался (4px)

## 🎨 Визуальный эффект
- Кнопки/карточки: толстые бордеры (2px) — выделяются
- Разделители: тонкие линии (1px) — уходят на фон
- Чёткая визуальная иерархия!

## 📚 Связанные документы
- \`docs/8BIT_UI_GUIDELINES.md\` — border system`,
    labels: ["enhancement", "8-bit", "design-system-v1", "phase-2", "borders", "medium-priority"]
  },
  {
    title: "📱 [PHASE 2] Mobile Breakpoints — адаптировать spacing для мобильных",
    body: `## 🎯 Цель
Адаптировать отступы (spacing) для мобильных устройств.

## 📊 Текущая проблема
- ❌ Desktop padding используется на mobile
- ❌ Hero: \`120px\` на мобильном — слишком много!
- ❌ Контент "тонет" в отступах

**Пример:**
\`\`\`css
.hero { padding: 120px 0 80px; }  /* ❌ На iPhone — огромные пустые зоны! */
\`\`\`

## ✅ Решение
Создать адаптивные значения для мобильных:

\`\`\`css
/* Desktop (по умолчанию) */
.hero {
  padding: var(--space-10) 0 var(--space-8);  /* 80px 0 64px */
}

.section {
  margin-bottom: var(--space-8);  /* 64px */
}

/* Mobile (<768px) — уменьшить в 2 раза */
@media (max-width: 767px) {
  .hero {
    padding: var(--space-4) 0 var(--space-4);  /* 32px 0 32px */
  }
  
  .section {
    margin-bottom: var(--space-4);  /* 32px */
  }
}
\`\`\`

## 📁 Файлы для изменения
- \`src/pages/index.astro\` — hero, sections
- \`src/components/Header.astro\` — header padding
- \`src/components/Footer.astro\` — footer padding
- \`src/styles/global.css\` — общие отступы

## 🔍 Breakpoints

### Desktop (1200px+):
- Hero: \`80px\` top, \`64px\` bottom
- Sections: \`64px\` margin

### Tablet (768-1199px):
- Hero: \`48px\` top, \`48px\` bottom
- Sections: \`48px\` margin

### Mobile (<768px):
- Hero: \`32px\` top, \`32px\` bottom
- Sections: \`32px\` margin

## ✅ Checklist
- [ ] Добавить \`@media (max-width: 767px)\` для hero
- [ ] Добавить \`@media (max-width: 767px)\` для sections
- [ ] Проверить на iPhone SE (375px)
- [ ] Проверить на iPhone 12 (390px)
- [ ] Проверить на iPad (768px)
- [ ] Проверить на desktop (1200px+)

## 🎨 Визуальный эффект
- Mobile: компактнее, больше контента на экране
- Desktop: просторнее, дышащие отступы
- Оптимальное использование пространства!

## 📚 Связанные документы
- \`docs/HEADER_FINAL_SUMMARY.md\` — breakpoints reference`,
    labels: ["enhancement", "8-bit", "design-system-v1", "phase-2", "responsive", "high-priority"]
  },
  {
    title: "✅ [PHASE 2] Final Check — тестирование spacing/typography/borders",
    body: `## 🎯 Цель
Проверить все изменения Phase 2 и обновить документацию.

## 📋 Checklist

### Spacing System
- [ ] Все значения кратны 8px
- [ ] Переменные созданы в \`nes8bit.css\`
- [ ] Хардкод заменён на переменные
- [ ] Визуально проверено на всех страницах

### Heading Styles
- [ ] \`h1\` нейтральный (без text-transform)
- [ ] \`.brutal\` применён к коротким заголовкам
- [ ] \`.long\` готов для длинных заголовков
- [ ] Старые статьи не сломались

### Border System
- [ ] Structural (2px) для кнопок/карточек
- [ ] Decorative (1px) для разделителей
- [ ] Bulge (4px) остался на кнопках
- [ ] Визуальная иерархия очевидна

### Mobile Breakpoints
- [ ] Hero адаптирован (<768px)
- [ ] Sections адаптированы (<768px)
- [ ] Протестировано на iPhone SE (375px)
- [ ] Протестировано на iPad (768px)
- [ ] Протестировано на desktop (1200px+)

### Документация
- [ ] Обновлён \`8BIT_UI_GUIDELINES.md\`
- [ ] Обновлён \`DESIGN_SYSTEM_V1_PLAN.md\`
- [ ] Созданы примеры (ДО → ПОСЛЕ)
- [ ] Закоммичено в оба репозитория

## 🎨 Финальная проверка

### Desktop (1200px+):
- [ ] Hero: отступы правильные
- [ ] Кнопки: видимый bulge (4px)
- [ ] Заголовки: читабельные

### Tablet (768-1199px):
- [ ] Компактные отступы
- [ ] Всё читабельно
- [ ] Кнопки не слишком маленькие

### Mobile (<768px):
- [ ] Контент не "тонет" в отступах
- [ ] Кнопки тапабельные (min 44px)
- [ ] Заголовки не обрезаются

## 📸 Screenshots
- [ ] Desktop: главная страница
- [ ] Tablet: главная страница
- [ ] Mobile: главная страница
- [ ] Mobile: статья

## 📚 Связанные документы
- Все issues #3, #4, #5, #6`,
    labels: ["testing", "8-bit", "design-system-v1", "phase-2", "documentation", "high-priority"]
  }
];

async function main() {
  console.log('🚀 Создание Phase 2 issues (Strict 8-bit approach)\n');
  console.log(`Репозиторий: ${REPO_OWNER}/${REPO_NAME}`);
  console.log(`Issues для создания: ${issues.length}\n`);

  const createdIssues = [];

  for (const issue of issues) {
    try {
      const created = await createIssue(issue.title, issue.body, issue.labels);
      createdIssues.push(created);
      // Sleep 1 second to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`❌ Не удалось создать issue: ${issue.title}`);
      console.error(`   Причина: ${error.message}`);
    }
  }

  console.log(`\n✅ Создано ${createdIssues.length} из ${issues.length} issues`);
  console.log('\n📋 Созданные issues:');
  createdIssues.forEach(issue => {
    console.log(`   #${issue.number}: ${issue.title}`);
    console.log(`   ${issue.html_url}\n`);
  });
}

main().catch(error => {
  console.error('❌ Ошибка:', error);
  process.exit(1);
});
