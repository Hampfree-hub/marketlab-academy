// Скрипт для удаления Veles баннеров из статей
// Запуск: node scripts/remove-veles-banners.mjs

import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const contentDirs = [
  path.join(ROOT, 'src', 'content', 'blog-ru'),
  path.join(ROOT, 'src', 'content', 'blog-en'),
  path.join(ROOT, 'src', 'content', 'blog-es'),
];

// Паттерн для поиска Veles баннеров
const velesBannerPattern = /<!-- Veles Banner -->\s*<div style="text-align: center; margin: [\d.]+rem 0;">\s*<a href="[^"]+" target="_blank" rel="nofollow sponsored">\s*<img src="\/og\/ad\/veles-[^"]+" alt="[^"]+" style="[^"]+" \/>\s*<\/a>\s*<\/div>\s*/g;

async function removeBannersFromDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const indexPath = path.join(dir, entry.name, 'index.md');
      try {
        const content = await readFile(indexPath, 'utf-8');
        const newContent = content.replace(velesBannerPattern, '');
        
        if (newContent !== content) {
          await writeFile(indexPath, newContent, 'utf-8');
          console.log(`  ✓ ${entry.name}/index.md`);
          count++;
        }
      } catch (error) {
        // File doesn't exist or other error
      }
    }
  }

  return count;
}

async function main() {
  console.log('🧹 Удаление Veles баннеров из статей...\n');
  
  let total = 0;
  
  for (const dir of contentDirs) {
    console.log(`📁 ${path.basename(dir)}/`);
    const count = await removeBannersFromDir(dir);
    console.log(`   Удалено баннеров: ${count}\n`);
    total += count;
  }
  
  console.log(`✅ Всего удалено: ${total} баннеров`);
}

main().catch(console.error);
