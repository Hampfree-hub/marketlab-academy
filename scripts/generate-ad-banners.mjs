/**
 * Генерация PNG баннеров для реферальных ссылок
 * Используется Puppeteer для рендеринга HTML → PNG
 * 
 * Запуск: npm run generate-ads
 */

import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Пути
const PUBLIC_DIR = path.join(ROOT, 'public', 'og', 'ad');

// Баннеры (компактные 728×90, спокойный 8-bit дизайн)
const AD_BANNERS = [
  {
    id: 'veles-algo',
    title: 'Veles: Торговые боты',
    subtitle: 'Автоматизируй торговлю на криптобиржах',
    cta: 'Попробовать →',
    languages: ['ru'],
    colors: {
      bgStart: '#1A1F2E',
      bgEnd: '#2D7A6E',
      text: '#E5E5E5',
      ctaBg: '#00D800',
      ctaText: '#1A202C',
      border: '#3CBCFC',
    },
  },
  {
    id: 'bybit-general',
    title: 'Bybit: Криптобиржа',
    subtitle: 'Спот, фьючерсы, низкие комиссии',
    cta: 'Регистрация →',
    languages: ['ru', 'en', 'es'],
    colors: {
      bgStart: '#1E1E2F',
      bgEnd: '#2D3748',
      text: '#E5E5E5',
      ctaBg: '#3CBCFC',
      ctaText: '#1A202C',
      border: '#00D800',
    },
  },
  {
    id: 'finbazar-fundamental',
    title: 'FinBazar: Ончейн',
    subtitle: 'Аналитика и сигналы для трейдера',
    cta: 'Инструменты →',
    languages: ['ru'],
    colors: {
      bgStart: '#0F2027',
      bgEnd: '#2C5364',
      text: '#E5E5E5',
      ctaBg: '#FFB347',
      ctaText: '#0F2027',
      border: '#FFD966',
    },
  },
  {
    id: 'bingx-copy',
    title: 'BingX: Копитрейдинг',
    subtitle: 'Копируй сделки успешных трейдеров',
    cta: 'Начать →',
    languages: ['ru', 'en', 'es'],
    colors: {
      bgStart: '#1A1F2E',
      bgEnd: '#2D7A6E',
      text: '#E5E5E5',
      ctaBg: '#FFD966',
      ctaText: '#1A202C',
      border: '#3CBCFC',
    },
  },
  {
    id: 'default-academy',
    title: 'MarketLab Academy',
    subtitle: 'Автоматизация, сигналы, аналитика',
    cta: 'Библиотека →',
    languages: ['ru', 'en', 'es'],
    colors: {
      bgStart: '#2D3748',
      bgEnd: '#1A202C',
      text: '#E5E5E5',
      ctaBg: '#00D800',
      ctaText: '#1A202C',
      border: '#3CBCFC',
    },
  },
];

// Переводы для EN/ES
const translations = {
  en: {
    'Bybit: Криптобиржа': 'Bybit: Crypto Exchange',
    'Спот, фьючерсы, низкие комиссии': 'Spot, futures, low fees',
    'Регистрация →': 'Sign up →',
    'BingX: Копитрейдинг': 'BingX: Copy Trading',
    'Копируй сделки успешных трейдеров': 'Copy successful traders',
    'Начать →': 'Start →',
    'MarketLab Academy': 'MarketLab Academy',
    'Автоматизация, сигналы, аналитика': 'Automation, signals, analytics',
    'Библиотека →': 'Library →',
  },
  es: {
    'Bybit: Криптобиржа': 'Bybit: Exchange Crypto',
    'Спот, фьючерсы, низкие комиссии': 'Spot, futuros, bajas comisiones',
    'Регистрация →': 'Registrarse →',
    'BingX: Копитрейдинг': 'BingX: Copy Trading',
    'Копируй сделки успешных трейдеров': 'Copia traders exitosos',
    'Начать →': 'Comenzar →',
    'MarketLab Academy': 'MarketLab Academy',
    'Автоматизация, сигналы, аналитика': 'Automatización, señales, análisis',
    'Библиотека →': 'Biblioteca →',
  },
};

// HTML шаблон баннера (728×150, адаптивный)
function generateHTML(banner, lang) {
  let title = banner.title;
  let subtitle = banner.subtitle;
  let cta = banner.cta;

  if (lang !== 'ru' && translations[lang]) {
    title = translations[lang][title] || title;
    subtitle = translations[lang][subtitle] || subtitle;
    cta = translations[lang][cta] || cta;
  }

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ad Banner</title>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      width: 728px;
      height: 150px;
      margin: 0;
      padding: 0;
      font-family: 'Press Start 2P', monospace;
      overflow: hidden;
    }

    .ad-banner {
      width: 100%;
      height: 100%;
      position: relative;
      background: linear-gradient(135deg, ${banner.colors.bgStart}, ${banner.colors.bgEnd});
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
    }

    /* Scanlines effect */
    .ad-banner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.05) 1px,
        transparent 1px,
        transparent 4px
      );
      pointer-events: none;
      z-index: 1;
    }

    /* Border frame */
    .ad-banner::after {
      content: "";
      position: absolute;
      top: 6px;
      left: 6px;
      right: 6px;
      bottom: 6px;
      border: 2px solid ${banner.colors.border};
      border-radius: 4px;
      pointer-events: none;
      z-index: 1;
    }

    .content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 16px;
    }

    .text-block {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      overflow: hidden;
    }

    .title {
      font-family: 'Press Start 2P', monospace;
      font-size: 12px;
      color: ${banner.colors.text};
      line-height: 1.3;
      text-transform: uppercase;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .subtitle {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: ${banner.colors.text};
      opacity: 0.9;
      line-height: 1.4;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .cta {
      display: inline-block;
      font-family: 'Press Start 2P', monospace;
      font-size: 9px;
      background: ${banner.colors.ctaBg};
      color: ${banner.colors.ctaText};
      padding: 6px 14px;
      border: 1px solid #000;
      border-radius: 3px;
      white-space: nowrap;
      flex-shrink: 0;
    }
  </style>
</head>
<body>
  <div class="ad-banner">
    <div class="content">
      <div class="text-block">
        <div class="title">${title}</div>
        <div class="subtitle">${subtitle}</div>
      </div>
      <div class="cta">${cta}</div>
    </div>
  </div>
</body>
</html>`;
}

// Генерация одного баннера
async function generateBanner(banner, lang, browser) {
  const html = generateHTML(banner, lang);
  
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  const filename = `${banner.id}_${lang}.png`;
  const filepath = path.join(PUBLIC_DIR, filename);
  
  await page.screenshot({
    path: filepath,
    clip: { x: 0, y: 0, width: 728, height: 150 },
  });
  
  await page.close();
  
  return filepath;
}

// Основная функция
async function generateAllBanners() {
  console.log('🎨 Генерация реферальных баннеров (728×90)...\n');

  // Создаём директорию
  try {
    await mkdir(PUBLIC_DIR, { recursive: true });
  } catch (error) {
    // Dir already exists
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let count = 0;
  const errors = [];

  try {
    for (const banner of AD_BANNERS) {
      const langs = banner.languages || ['ru', 'en', 'es'];

      for (const lang of langs) {
        try {
          console.log(`  → ${banner.id}_${lang}.png`);
          await generateBanner(banner, lang, browser);
          count++;
        } catch (error) {
          errors.push(`${banner.id}_${lang}: ${error.message}`);
          console.error(`  ❌ Ошибка при генерации ${banner.id}_${lang}:`, error.message);
        }
      }
    }
  } finally {
    await browser.close();
  }

  console.log(`\n✅ Сгенерировано ${count} баннеров в ${PUBLIC_DIR}`);
  
  if (errors.length > 0) {
    console.log(`⚠️  Ошибки: ${errors.length}`);
    errors.forEach(err => console.log(`   - ${err}`));
  }
}

// Запуск
generateAllBanners().catch(console.error);
