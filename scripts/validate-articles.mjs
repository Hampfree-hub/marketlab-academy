// scripts/validate-articles.mjs
import { readdir, readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = new URL('../src/content/', import.meta.url);
const ALLOWED_CATEGORIES = ['indicators', 'strategies', 'basics', 'crypto', 'risk-management'];

async function validateArticle(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    const { data } = matter(content);

    const errors = [];

    if (!data.title || !data.title.trim()) {
      errors.push('title отсутствует');
    }
    if (!data.description || !data.description.trim()) {
      errors.push('description отсутствует');
    }
    if (!data.pubDate || !/^\d{4}-\d{2}-\d{2}$/.test(data.pubDate)) {
      errors.push('pubDate должен быть в формате YYYY-MM-DD');
    }
    if (!data.category || !ALLOWED_CATEGORIES.includes(data.category)) {
      errors.push(`category должен быть одним из: ${ALLOWED_CATEGORIES.join(', ')}`);
    }

    if (errors.length > 0) {
      console.error(`❌ Ошибки в ${filePath.replace(CONTENT_DIR.pathname, '')}:`);
      errors.forEach(err => console.error(`   • ${err}`));
      return false;
    }

    return true;
  } catch (err) {
    console.error(`❌ Ошибка чтения файла:`, err.message);
    return false;
  }
}

async function main() {
  let hasErrors = false;

  for (const lang of ['ru', 'en', 'es']) {
    const dirPath = path.join(CONTENT_DIR.pathname, `blog-${lang}`);
    try {
      const dirs = await readdir(dirPath);
      for (const dir of dirs) {
        const filePath = path.join(dirPath, dir, 'index.md');
        const ok = await validateArticle(filePath);
        if (!ok) hasErrors = true;
      }
    } catch {}
  }

  if (hasErrors) {
    process.exit(1);
  } else {
    console.log('✅ Все статьи в порядке');
    process.exit(0);
  }
}

main();