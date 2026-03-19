#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function countCategories(langDir) {
    const categories = {};
    let total = 0;
    
    function walkDir(dir) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filepath = path.join(dir, file);
            const stat = fs.statSync(filepath);
            if (stat.isDirectory()) {
                walkDir(filepath);
            } else if (file === 'index.md') {
                const content = fs.readFileSync(filepath, 'utf-8');
                const match = content.match(/category:\s*'([^']+)'/);
                if (match) {
                    const cat = match[1];
                    categories[cat] = (categories[cat] || 0) + 1;
                    total++;
                }
            }
        }
    }
    
    walkDir(langDir);
    return { categories, total };
}

console.log("=".repeat(50));
console.log("АНАЛИЗ КАТЕГОРИЙ ПО ЯЗЫКАМ");
console.log("=".repeat(50));

const allCats = new Set();
const results = {};

for (const lang of ['ru', 'en', 'es']) {
    const langDir = path.join(__dirname, 'src/content/blog-' + lang);
    const { categories, total } = countCategories(langDir);
    results[lang] = { categories, total };
    Object.keys(categories).forEach(c => allCats.add(c));
}

// Вывод по языкам
for (const lang of ['ru', 'en', 'es']) {
    const { categories, total } = results[lang];
    console.log(`\n📂 ${lang.toUpperCase()} (${total} статей):`);
    const sorted = Object.entries(categories).sort((a, b) => b[1] - a[1]);
    for (const [cat, count] of sorted) {
        console.log(`   ${cat}: ${count}`);
    }
}

// Сводная таблица
console.log("\n" + "=".repeat(50));
console.log("СВОДНАЯ ТАБЛИЦА (RU | EN | ES):");
console.log("=".repeat(50));

for (const cat of [...allCats].sort()) {
    const ru = results.ru.categories[cat] || 0;
    const en = results.en.categories[cat] || 0;
    const es = results.es.categories[cat] || 0;
    const total = ru + en + es;
    const min = Math.min(ru, en, es);
    const missing = [];
    if (ru === 0) missing.push('RU');
    if (en === 0) missing.push('EN');
    if (es === 0) missing.push('ES');
    
    let status = '';
    if (missing.length > 0) {
        status = ` ⚠️ Отсутствует: ${missing.join(', ')}`;
    }
    console.log(`${cat.padEnd(22)} | ${String(ru).padStart(2)} | ${String(en).padStart(2)} | ${String(es).padStart(2)} | Σ ${String(total).padStart(2)}${status}`);
}

// Подсчёт по категориям
console.log("\n" + "=".repeat(50));
console.log("ИТОГО ПО КАТЕГОРИЯМ:");
console.log("=".repeat(50));

const catTotals = {};
for (const cat of allCats) {
    catTotals[cat] = (results.ru.categories[cat] || 0) + (results.en.categories[cat] || 0) + (results.es.categories[cat] || 0);
}

const sortedTotals = Object.entries(catTotals).sort((a, b) => b[1] - a[1]);
for (const [cat, total] of sortedTotals) {
    console.log(`${cat}: ${total}`);
}

console.log("\n" + "=".repeat(50));
