#!/usr/bin/env node

/**
 * Create issues for tomorrow's fixes (2026-01-08)
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
    title: '🔧 Fix: Blinking arrow with underline on hover',
    body: `## Проблема

При наведении курсора на "Архив" / "О проекте":
- Стрелочка (\`>\`) мигает
- Вместе с ней мигает кусочек нижнего подчёркивания
- Рассинхрон выглядит странно

## Решение

**Вариант 1:** Убрать мигание стрелочки при hover
\`\`\`css
.nav-link:hover .prompt {
  animation: none; /* Stop blinking on hover */
}
\`\`\`

**Вариант 2:** Синхронизировать мигание
\`\`\`css
.nav-link:hover {
  animation: fade-blink 2s ease-in-out infinite;
}
\`\`\`

**Вариант 3:** Убрать стрелочку из nav-link (только в Logo)

## Приоритет
🟡 Medium

## Теги
- \`bug\`
- \`8-bit\`
- \`stage-1-fixes\``,
    labels: ['bug', '8-bit', 'stage-1-fixes']
  },
  {
    title: '🎨 Fix: Theme icons (sun/moon) not 8-bit style',
    body: `## Проблема

Текущие SVG иконки солнца/луны:
- ❌ Странные (не похожи на солнце/луну)
- ❌ Не одного формата
- ❌ Не 8-bit стиль

## Решение

Создать правильные 8-bit пиксельные иконки:

**Sun (8x8 pixel grid):**
\`\`\`svg
<!-- Pixel sun -->
<rect x="3" y="0" width="2" height="1"/>
<rect x="0" y="3" width="1" height="2"/>
<rect x="7" y="3" width="1" height="2"/>
<rect x="3" y="7" width="2" height="1"/>
<rect x="2" y="2" width="4" height="4"/>
\`\`\`

**Moon (8x8 pixel grid):**
\`\`\`svg
<!-- Pixel crescent moon -->
<rect x="3" y="1" width="3" height="1"/>
<rect x="2" y="2" width="1" height="4"/>
<rect x="3" y="6" width="3" height="1"/>
<rect x="4" y="3" width="2" height="3"/>
\`\`\`

**Референсы:**
- NES games icons
- 8-bit pixel art tutorials
- [lospec.com/palette-list/nes](https://lospec.com/palette-list/nes)

## Приоритет
🔴 High (визуально важно)

## Теги
- \`enhancement\`
- \`design\`
- \`8-bit\`
- \`stage-1-fixes\``,
    labels: ['enhancement', 'design', '8-bit', 'stage-1-fixes']
  },
  {
    title: '🐛 Fix: "Читать статьи" button hover effect',
    body: `## Проблема

Кнопка "Читать статьи" на главной:
- ❌ Не выезжает при hover
- ❌ Должна быть как другие 8-bit кнопки

## Решение

Унифицировать hover эффекты для всех кнопок:

\`\`\`css
.btn:hover {
  background: var(--nes-bg-secondary);
  color: var(--color-accent);
  border-color: var(--color-accent);
  box-shadow: 0 0 20px var(--nes-shadow-green);
  transform: translate(-2px, -2px); /* 8-bit "push" effect */
}

.btn:active {
  transform: translate(0, 0); /* Back to normal */
}
\`\`\`

**Применить ко всем кнопкам:**
- \`.btn\` (главная страница)
- \`.nes-btn\` (общий класс)
- \`.tag-btn\` (категории)

## Приоритет
🟡 Medium

## Теги
- \`bug\`
- \`8-bit\`
- \`stage-1-fixes\``,
    labels: ['bug', '8-bit', 'stage-1-fixes']
  },
  {
    title: '🎨 Remove box-shadow from post cards (not 8-bit)',
    body: `## Проблема

Карточки в разделе "ПОСЛЕДНИЕ_СТАТЬИ":
- ❌ Появляется тень (box-shadow)
- ❌ Не актуально для 8-bit стиля

## Решение

Убрать все \`box-shadow\` (кроме glow эффектов):

\`\`\`css
.post-card {
  border: 4px solid var(--nes-border-primary);
  background: var(--nes-bg-secondary);
  /* NO box-shadow */
}

.post-card:hover {
  border-color: var(--nes-accent-green);
  box-shadow: 0 0 20px var(--nes-shadow-green); /* Only glow */
}
\`\`\`

**Правило 8-bit:**
- ✅ Glow эффекты (0 0 20px) — ОК
- ❌ Тени (offset shadows) — НЕТ

## Приоритет
🟢 Low (polish)

## Теги
- \`enhancement\`
- \`8-bit\`
- \`stage-1-fixes\``,
    labels: ['enhancement', '8-bit', 'stage-1-fixes']
  },
  {
    title: '📊 Analyze content categories from Veles Blog',
    body: `## Задача

Проанализировать существующий контент и определить правильные категории.

## Источники

1. **Внешний источник контента:**
   - Структура не раскрывается
   - Посмотреть структуру папок
   - Проанализировать теги и категории

2. **Market Lab контент:**
   - Telegram посты (существующие теги)
   - Дзен статьи
   - Планы контента

## Текущие категории (от Composer):
- ТЕХНИЧЕСКИЙ_АНАЛИЗ
- КРИПТО
- АВТОМАТИЗАЦИЯ
- ФУНДАМЕНТ

## Что нужно:

1. **Проанализировать внешний источник контента**
   - Какие категории там использовались?
   - Какие посты планируется переносить?
   - Структура контента

2. **Предложить новые категории**
   - На основе анализа
   - 4-6 категорий (не больше)
   - На русском и английском

3. **Создать mapping**
   - Старые категории → новые
   - Теги → категории
   - Контент → структура

## Референсы

Существующие теги (из Telegram):
- #вариантстратегии
- #нареальномсчёте
- #бектест
- #спот
- #фьючерсы
- #техническийанализ
- #токеномика

## Приоритет
🔴 High (критично для структуры)

## Теги
- \`content\`
- \`planning\`
- \`stage-4\``,
    labels: ['content', 'planning', 'stage-4']
  }
];

async function main() {
  console.log('📝 Создание issues для завтра (2026-01-08)...\n');
  
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
}

main();
