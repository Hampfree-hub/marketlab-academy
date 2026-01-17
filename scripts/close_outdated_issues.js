#!/usr/bin/env node

/**
 * Close or update outdated GitHub Issues
 * Analyzes issues and closes/updates them based on current project state
 */

const https = require('https');
const fs = require('fs');

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

// Issues to close with reasons
const issuesToClose = [
  {
    number: 1,
    reason: 'Banner sizes optimized in commit 874d01a. Fixed height: 200px for banner-preview.',
    comment: '✅ **Закрыто:** Баннеры оптимизированы в коммите 874d01a. Установлена фиксированная высота 200px для `.banner-preview` для синхронизации на всех разрешениях.'
  },
  {
    number: 2,
    reason: 'Font size scaling implemented via Fibonacci scale in tokens.css. All typography follows 8px grid.',
    comment: '✅ **Закрыто:** Масштабирование шрифтов реализовано через Fibonacci scale в `tokens.css`. Вся типографика следует 8px grid системе.'
  },
  {
    number: 3,
    reason: 'Background naming and gradients standardized in design system integration (PR #73).',
    comment: '✅ **Закрыто:** Наименования фонов и градиенты стандартизированы в рамках интеграции дизайн-системы (PR #73).'
  },
  {
    number: 4,
    reason: 'Language switcher (i18n) fully implemented. Supports RU, EN, ES with useTranslations and useTranslatedPath.',
    comment: '✅ **Закрыто:** Переключатель языков (i18n) полностью реализован. Поддерживает RU, EN, ES через `useTranslations` и `useTranslatedPath`.'
  },
  {
    number: 5,
    reason: 'UX polish completed in design system integration. All spacing, fonts, and components unified.',
    comment: '✅ **Закрыто:** UX полировка завершена в рамках интеграции дизайн-системы. Все отступы, шрифты и компоненты унифицированы.'
  },
  {
    number: 47,
    reason: 'Blinking arrow and underline hover effects fixed in design system integration.',
    comment: '✅ **Закрыто:** Эффекты мигающей стрелки и подчёркивания при hover исправлены в рамках интеграции дизайн-системы.'
  },
  {
    number: 48,
    reason: 'Theme icons (sun/moon) updated to 8-bit style in design system integration.',
    comment: '✅ **Закрыто:** Иконки темы (солнце/луна) обновлены до 8-bit стиля в рамках интеграции дизайн-системы.'
  },
  {
    number: 49,
    reason: '"Читать статьи" button hover effect fixed in design system integration.',
    comment: '✅ **Закрыто:** Эффект hover кнопки "Читать статьи" исправлен в рамках интеграции дизайн-системы.'
  },
  {
    number: 60,
    reason: 'Text overlapping with underline border fixed. Banner and card styles unified in design system.',
    comment: '✅ **Закрыто:** Перекрытие текста с подчёркиванием исправлено. Стили баннеров и карточек унифицированы в дизайн-системе.'
  }
];

// Issues to update (add comment but keep open)
const issuesToUpdate = [
  {
    number: 51,
    comment: '📋 **Обновление:** Анализ категорий контента из внешнего источника продолжается. Структура категорий определена: `technical-analysis`, `crypto`, `algo-trading`, `fundamental-analysis`.'
  },
  {
    number: 59,
    comment: '📋 **Обновление:** Гибридная автоматизация баннеров (Premium + Daily) в планах. Текущая реализация: HTML генератор баннеров в `public/banner-generator.html`.'
  },
  {
    number: 61,
    comment: '📋 **Обновление:** Banner Generator работает через `public/banner-generator.html`. Критические проблемы исправлены в рамках интеграции дизайн-системы.'
  }
];

async function closeIssue(number, comment) {
  try {
    // Add comment
    await makeRequest(
      `/repos/${REPO_OWNER}/${REPO_NAME}/issues/${number}/comments`,
      'POST',
      { body: comment }
    );
    console.log(`✅ Comment added to #${number}`);

    // Close issue
    await makeRequest(
      `/repos/${REPO_OWNER}/${REPO_NAME}/issues/${number}`,
      'PATCH',
      { state: 'closed' }
    );
    console.log(`✅ Closed issue #${number}`);
  } catch (e) {
    console.error(`❌ Failed to close #${number}: ${e.message}`);
  }
}

async function updateIssue(number, comment) {
  try {
    await makeRequest(
      `/repos/${REPO_OWNER}/${REPO_NAME}/issues/${number}/comments`,
      'POST',
      { body: comment }
    );
    console.log(`✅ Updated issue #${number}`);
  } catch (e) {
    console.error(`❌ Failed to update #${number}: ${e.message}`);
  }
}

async function main() {
  console.log('📝 Закрытие и обновление устаревших issues...\n');

  // Close issues
  for (const issue of issuesToClose) {
    await closeIssue(issue.number, issue.comment);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Rate limit
  }

  // Update issues
  for (const issue of issuesToUpdate) {
    await updateIssue(issue.number, issue.comment);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Rate limit
  }

  console.log('\n✅ Готово! Проверьте:');
  console.log(`   https://github.com/${REPO_OWNER}/${REPO_NAME}/issues`);
}

main();
