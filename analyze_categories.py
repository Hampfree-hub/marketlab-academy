#!/usr/bin/env python3
import os
import re
from collections import Counter

def count_categories(lang_dir):
    categories = Counter()
    for root, dirs, files in os.walk(lang_dir):
        for file in files:
            if file == 'index.md':
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    match = re.search(r"category:\s*'([^']+)'", content)
                    if match:
                        categories[match.group(1)] += 1
    return categories

print("=" * 50)
print("АНАЛИЗ КАТЕГОРИЙ ПО ЯЗЫКАМ")
print("=" * 50)

for lang in ['ru', 'en', 'es']:
    lang_dir = f'src/content/blog-{lang}'
    cats = count_categories(lang_dir)
    print(f"\n📂 {lang.upper()} ({sum(cats.values())} статей):")
    for cat, count in sorted(cats.items(), key=lambda x: -x[1]):
        print(f"   {cat}: {count}")

print("\n" + "=" * 50)
