#!/usr/bin/env python3
"""
Скрипт для замены относительных внутренних ссылок на абсолютные.
/ru/library/... → https://marketlab-academy.org/ru/library/...
/en/library/... → https://marketlab-academy.org/en/library/...
/es/library/... → https://marketlab-academy.org/es/library/...
"""

import os
import re
from pathlib import Path

# Базовый путь
BASE_DIR = Path(__file__).parent.parent / "src" / "content"

# Паттерны для замены
REPLACEMENTS = [
    (r'\]\(/ru/library/', '](https://marketlab-academy.org/ru/library/'),
    (r'\]\(/en/library/', '](https://marketlab-academy.org/en/library/'),
    (r'\]\(/es/library/', '](https://marketlab-academy.org/es/library/'),
]

def process_file(file_path):
    """Обрабатывает один файл и возвращает количество замен."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    total_replacements = 0
    
    for pattern, replacement in REPLACEMENTS:
        matches = re.findall(pattern, content)
        count = len(matches)
        if count > 0:
            content = re.sub(pattern, replacement, content)
            total_replacements += count
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
    
    return total_replacements

def main():
    """Основная функция."""
    total_files = 0
    total_replacements = 0
    files_with_changes = []
    
    # Проходим по всем языковым папкам
    for lang_dir in ['blog-ru', 'blog-en', 'blog-es']:
        lang_path = BASE_DIR / lang_dir
        if not lang_path.exists():
            continue
        
        # Проходим по всем статьям
        for article_dir in lang_path.iterdir():
            if not article_dir.is_dir():
                continue
            
            index_file = article_dir / 'index.md'
            if not index_file.exists():
                continue
            
            total_files += 1
            replacements = process_file(index_file)
            
            if replacements > 0:
                total_replacements += replacements
                files_with_changes.append((article_dir.name, lang_dir, replacements))
    
    # Вывод результатов
    print("=" * 60)
    print("ОТЧЁТ ПО ЗАМЕНЕ ВНУТРЕННИХ ССЫЛОК")
    print("=" * 60)
    print(f"Всего обработано файлов: {total_files}")
    print(f"Всего заменено ссылок: {total_replacements}")
    print()
    
    if files_with_changes:
        print("Файлы с изменениями:")
        print("-" * 60)
        for article, lang, count in sorted(files_with_changes, key=lambda x: (-x[2], x[0])):
            print(f"  {lang}/{article}: {count} замен")
    else:
        print("Нет файлов с изменениями (все ссылки уже абсолютные).")
    
    print()
    print("=" * 60)

if __name__ == "__main__":
    main()
