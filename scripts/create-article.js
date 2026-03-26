// scripts/create-article.js
import { mkdir, writeFile } from 'fs/promises';
import { join, resolve } from 'path';

// Путь к папке src/content от корня проекта
const contentDir = resolve('src', 'content');

// Допустимые категории
const categories = ['indicators', 'strategies', 'basics', 'crypto', 'risk-management'];

// Преобразует строку в kebab-case (только латиница)
function toKebabCase(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')      // пробелы/подчёркивания → дефисы
    .replace(/[^a-z0-9\-]/g, '')  // удаляем всё, кроме латиницы, цифр и дефисов
    .replace(/-+/g, '-')          // убираем дубли
    .replace(/^-+|-+$/g, '');     // убираем в начале и конце
}

async function createArticle(title, langs) {
  // Проверка: только латиница в названии
  if (!/^[a-z0-9\s\-.,:;'"()]+$/i.test(title)) {
    console.error('❌ Название статьи должно быть на английском языке (латиница). Пример: "Williams %R Strategy"');
    return;
  }

  const slug = toKebabCase(title);
  if (!slug) {
    console.error('❌ Не удалось создать slug. Используйте корректное английское название.');
    return;
  }

  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  for (const lang of langs) {
    const blogPath = join(contentDir, `blog-${lang}`, slug);
    const filePath = join(blogPath, 'index.md');

    try {
      await mkdir(blogPath, { recursive: true });

      const template = `---
title: "${title}"
description: ""
pubDate: ${today}
category: ${categories[0]}
draft: true
---

# ${title}

...

`;

      await writeFile(filePath, template, 'utf8');
      console.log(`✅ Создано: /blog-${lang}/${slug}/index.md`);
    } catch (err) {
      console.error(`❌ Ошибка при создании ${lang}/${slug}:`, err.message);
    }
  }

  console.log(`\n📌 Готово! Теперь:`);
  console.log(`1. Открой файлы и допиши контент`);
  console.log(`2. Заполни description`);
  console.log(`3. Выбери нужную category`);
  console.log(`4. Удали draft: true перед публикацией`);
}

// === Запуск ===
const title = process.argv[2];
const langArg = process.argv[3]; // ru,en,es

if (!title || !langArg) {
  console.error('Использование: node scripts/create-article.js "Article Title" ru,en,es');
  console.error('Пример: node scripts/create-article.js "Williams Percent Range R" ru,en,es');
  process.exit(1);
}

const langs = langArg.split(',');
createArticle(title, langs).catch(console.error);