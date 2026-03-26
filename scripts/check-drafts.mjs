// scripts/check-drafts.mjs
import { readdir, readFile } from 'fs/promises';
import { join, resolve } from 'path';
import matter from 'gray-matter';

// Правильный путь от корня проекта
const contentDir = resolve('src', 'content');

const langDirs = {
  ru: 'blog-ru',
  en: 'blog-en',
  es: 'blog-es',
};

async function findDrafts(lang) {
  const blogDir = join(contentDir, langDirs[lang]);
  try {
    const dirs = await readdir(blogDir);
    const drafts = [];

    for (const dir of dirs) {
      const filePath = join(blogDir, dir, 'index.md');
      try {
        const content = await readFile(filePath, 'utf8');
        const { data } = matter(content);
        if (data.draft === true) {
          drafts.push({ slug: dir, date: data.pubDate });
        }
      } catch (err) {
        // Пропускаем ошибки чтения файла
      }
    }

    return drafts;
  } catch (err) {
    console.error(`❌ Не удалось прочитать ${langDirs[lang]}:`, err.message);
    return [];
  }
}

async function main() {
  console.log('\n📌 Черновики:\n');
  let total = 0;

  for (const lang of ['ru', 'en', 'es']) {
    const drafts = await findDrafts(lang);
    if (drafts.length > 0) {
      console.log(`${lang.toUpperCase()}:`);
      drafts.forEach(d => {
        console.log(`  - /${lang}/${d.slug}/ → ${d.date || 'no date'}`);
      });
      total += drafts.length;
    }
  }

  if (total === 0) {
    console.log('✅ Нет черновиков');
  } else {
    console.log(`\n📋 Всего черновиков: ${total}`);
  }
}

main().catch(console.error);