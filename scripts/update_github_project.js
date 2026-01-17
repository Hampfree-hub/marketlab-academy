#!/usr/bin/env node

/**
 * Update GitHub Project with 8-bit NES implementation issues
 * Creates/updates issues for marketlab-academy blog
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const REPO_OWNER = 'Hampfree-hub';
const REPO_NAME = 'marketlab-academy';

function readTokenFromFile() {
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
            reject(new Error(`HTTP ${res.statusCode}: ${parsed.message || JSON.stringify(parsed)}`));
          }
        } catch (e) {
          resolve(body);
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

const issues = [
  {
    title: '✅ Stage 1: 8-bit NES Base Structure (COMPLETED)',
    body: `## ✅ ЗАВЕРШЕНО

**Дата:** 2026-01-07  
**Модель:** Sonnet 4.5  
**Коммит:** cd539fc

### Создано:

1. **src/styles/nes8bit.css** (500+ строк)
   - NES палитра (Dark: #0F0F0F + #00D800)
   - Game Boy палитра (Light: #9BBC0F)
   - Пиксельные границы (4px solid, NO curves)
   - 8-bit кнопки (.nes-btn)
   - Мигающий курсор (.nes-cursor)
   - Utility классы

2. **src/components/BaseHead.astro**
   - Пиксельные шрифты (Press Start 2P + JetBrains Mono)
   - Импорт nes8bit.css

3. **src/styles/global.css**
   - Интеграция с NES палитрой
   - NO transitions (instant)
   - NO border-radius (pixel-perfect)

### Ключевые принципы (соблюдены):
- ✅ Баланс 70/30 (серьёзное/забавное)
- ✅ Пиксельные шрифты
- ✅ Ограниченная NES палитра
- ✅ Instant effects (NO smooth transitions)

---

**Status:** ✅ Completed  
**Next:** Stage 2 (Header + Footer)`,
    labels: ['enhancement', 'design', '8-bit', 'stage-1']
  },
  {
    title: '🚀 Stage 2: NES Header + Footer Components',
    body: `## Цель

Создать Header и Footer в 8-bit NES стиле.

### Header (NES_Header.astro):

**Концепция:** Терминальный стиль с мигающим курсором

\`\`\`
┌─────────────────────────────────────────────────┐
│ > MARKETLAB_ACADEMY█                   [RU|EN]  │
│ ─────────────────────────────────────────────── │
│ [АРХИВ] [О_ПРОЕКТЕ] [RSS]              [●/○]   │
└─────────────────────────────────────────────────┘
\`\`\`

**Особенности:**
- Sticky позиция
- Пиксельная рамка (4px)
- Мигающий курсор (\`█\`)
- Переключатель темы (●/○)
- Моноширинный шрифт

### Footer (NES_Footer.astro):

**Концепция:** System Status стиль

\`\`\`
┌─────────────────────────────────────────────────┐
│ SYSTEM_STATUS: STABLE                           │
│ ARCHIVE_RESTORED: 2025-12-XX BY EMILY          │
│ ───────────────────────────────────────────────│
│ [DZEN] [BITGET] [BYBIT] [VELES]                │
│                                                 │
│ © 2026 MARKETLAB_ACADEMY | ALL_SYSTEMS_GO █    │
└─────────────────────────────────────────────────┘
\`\`\`

**Особенности:**
- Моноширинный текст
- Пиксельная рамка
- Мигающий статус (\`█\`)
- Ссылки в формате \`[NAME]\`

---

**Время:** ~1 час  
**Зависимости:** Stage 1 (completed)  
**Status:** Pending`,
    labels: ['enhancement', 'components', '8-bit', 'stage-2']
  },
  {
    title: '📄 Stage 3: Post Cards + Archive Lore',
    body: `## Цель

Создать карточки постов в стиле "файлов из архива" и компонент с лором про Эмили.

### Post Card (NES_PostCard.astro):

**Концепция:** Архивный файл

\`\`\`
┌───────────────────────────────────────────────┐
│ 📄 post-001.md              2025-01-07  [NEW] │
│ ─────────────────────────────────────────────│
│ КАТЕГОРИЯ: [TECHNICAL_ANALYSIS]               │
│ АВТОР: EMILY                                  │
│ ─────────────────────────────────────────────│
│ RVI Divergence Signal | BTC/USDT              │
│ Протестирована стратегия на основе...        │
│ ─────────────────────────────────────────────│
│ [ЧИТАТЬ_ФАЙЛ →]                               │
└───────────────────────────────────────────────┘
\`\`\`

**Особенности:**
- Пиксельная рамка (4px)
- Hover: зелёное свечение
- Моноширинный шрифт
- Метаданные (дата, категория, автор)

### Archive Lore (ArchiveLore.astro):

**Концепция:** История восстановления архива

\`\`\`
┌─────────────────────────────────────────────────┐
│ ⚠ ARCHIVE_NOTICE                                │
│ ─────────────────────────────────────────────── │
│ Этот архив был восстановлен Эмили в декабре     │
│ 2025 года. Файлы содержат исследования Market  │
│ Lab Academy (2010-2018) по алгоритмической      │
│ торговле и техническому анализу.                │
│                                                 │
│ INTEGRITY: 95% | LAST_CHECK: 2025-12-XX         │
└─────────────────────────────────────────────────┘
\`\`\`

---

**Время:** ~1-2 часа  
**Зависимости:** Stage 1 (completed), Stage 2 (required)  
**Status:** Pending`,
    labels: ['enhancement', 'components', '8-bit', 'stage-3']
  },
  {
    title: '📝 Stage 4: Content Integration + Emily Lore',
    body: `## Цель

Интегрировать лор про Эмили и архив Market Lab Academy (2010-2018) в контент блога.

### Задачи:

1. **Обновить about.astro**
   - История Эмили (лидер лаборатории)
   - Команда: Kai, Alex, Vera, Leon, NEWBEE
   - Философия: "Волатильность пугает только тех, у кого нет компаса"
   - Архив 2010-2018

2. **Добавить ArchiveLore на главную**
   - Notification bar с историей восстановления
   - Статус системы (Integrity: 95%)

3. **Создать первый архивный пост**
   - Формат: \`post-001.md\`
   - Стиль: "Файл из архива"
   - Категория: Technical Analysis
   - Автор: Emily

4. **Обновить consts.ts**
   - SITE_TITLE: "MARKETLAB_ACADEMY"
   - SITE_DESCRIPTION: Архив лаборатории
   - Новые константы

---

**Время:** ~1 час  
**Зависимости:** Stage 1-3 (required)  
**Status:** Pending`,
    labels: ['content', '8-bit', 'stage-4', 'lore']
  },
  {
    title: '✨ Stage 5: Polish + Mobile + Performance',
    body: `## Цель

Финальная полировка, мобильная версия, оптимизация.

### Задачи:

1. **Мобильная версия**
   - Адаптивные шрифты (меньше на мобильных)
   - Responsive layout (Header, Footer, Cards)
   - Touch-friendly кнопки

2. **Оптимизация производительности**
   - Lighthouse 90+ (Performance)
   - Оптимизация шрифтов (preload)
   - Минификация CSS

3. **Финальные правки**
   - Проверка баланса 70/30
   - Удобство навигации
   - Цветовая контрастность (accessibility)
   - HTML баннеры (интеграция)

4. **Документация**
   - README обновлён
   - Комментарии в коде
   - Примеры использования компонентов

---

**Время:** ~30 мин - 1 час  
**Зависимости:** Stage 1-4 (required)  
**Status:** Pending`,
    labels: ['enhancement', 'optimization', '8-bit', 'stage-5']
  },
  {
    title: '🎨 Enhancement: HTML Banner Generation',
    body: `## Цель

Интегрировать систему генерации HTML баннеров для постов (как в n8n Image Generator).

### Концепция:

**Пиксельные баннеры для статей:**
- 8-bit стиль (пиксельные границы)
- Динамические данные (ROI, тикер, дата)
- Canvas или HTML/CSS генерация
- Кэширование (для быстроты)

### Референс:

- **n8n Image Generator:** \`D:/Projects/AutomationHub/n8n/image-generator/server.js\`
- **Puppeteer + Chart.js:** Генерация графиков
- **8-bit эстетика:** Пиксельные шрифты, NES палитра

### Примерный баннер:

\`\`\`
┌─────────────────────────────────────────────────┐
│ MARKET LAB ARCHIVE #2847                        │
│ ─────────────────────────────────────────────── │
│                                                 │
│  📊 RVI DIVERGENCE SIGNAL                       │
│                                                 │
│  BTC/USDT: +12.4% (4h)                         │
│  Success Rate: 73% (30d)                       │
│                                                 │
│  [ГРАФИК]                                      │
│                                                 │
│ ─────────────────────────────────────────────── │
│ 2025-01-07 | CATEGORY: TECHNICAL_ANALYSIS       │
└─────────────────────────────────────────────────┘
\`\`\`

---

**Приоритет:** Medium  
**Зависимости:** Stage 1-5 (optional)  
**Status:** Backlog`,
    labels: ['enhancement', 'graphics', '8-bit', 'future']
  }
];

async function main() {
  console.log('📝 Создание/обновление issues в GitHub...\n');
  
  for (const issue of issues) {
    try {
      const result = await makeRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/issues`, 'POST', issue);
      console.log(`✅ Created issue #${result.number}: ${issue.title}`);
    } catch (e) {
      console.error(`❌ Failed to create "${issue.title}": ${e.message}`);
    }
  }
  
  console.log('\n✅ Готово! Проверьте:');
  console.log(`   https://github.com/${REPO_OWNER}/${REPO_NAME}/issues`);
  console.log(`   https://github.com/users/${REPO_OWNER}/projects/1`);
}

main();
