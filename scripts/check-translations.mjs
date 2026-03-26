// scripts/check-translations.mjs
import { readdir } from 'fs/promises';
import { resolve } from 'path';

// Простой способ получить абсолютный путь от корня проекта
const contentDir = resolve('src', 'content');

const langDirs = {
  ru: 'blog-ru',
  en: 'blog-en',
  es: 'blog-es',
};

async function getSlugs(lang) {
  const dirPath = resolve(contentDir, langDirs[lang]);
  try {
    return (await readdir(dirPath)).filter(file => !file.startsWith('.'));
  } catch (err) {
    console.error(`❌ Не удалось прочитать папку ${langDirs[lang]} (${dirPath}):`, err.message);
    return [];
  }
}

async function main() {
  const slugs = {};
  for (const lang of ['ru', 'en', 'es']) {
    slugs[lang] = await getSlugs(lang);
  }

  const allSlugs = [...new Set([...slugs.ru, ...slugs.en, ...slugs.es])].sort();

  console.log('\n🔍 Отчёт: Нехватка переводов\n');
  console.log('Slug'.padEnd(40), 'RU', 'EN', 'ES');
  console.log('-'.repeat(50));

  let missing = false;

  for (const slug of allSlugs) {
    const hasRu = slugs.ru.includes(slug);
    const hasEn = slugs.en.includes(slug);
    const hasEs = slugs.es.includes(slug);

    const ruMark = hasRu ? '✅' : '❌';
    const enMark = hasEn ? '✅' : '❌';
    const esMark = hasEs ? '✅' : '❌';

    if (!hasRu || !hasEn || !hasEs) {
      console.log(
        slug.padEnd(40),
        ruMark,
        enMark,
        esMark
      );
      missing = true;
    }
  }

  if (!missing) {
    console.log('\n🎉 Все статьи переведены!');
  } else {
    console.log('\n💡 Рекомендация: создайте недостающие переводы');
  }
}

main().catch(console.error);
