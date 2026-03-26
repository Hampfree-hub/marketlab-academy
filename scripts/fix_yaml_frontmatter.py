#!/usr/bin/env python3
"""
Скрипт для исправления дублирования '---' в начале YAML фронтматтера.
"""

import os
from pathlib import Path

# Файлы для исправления
FILES_TO_FIX = [
    "src/content/blog-ru/crypto-staking-guide-2026/index.md",
    "src/content/blog-en/crypto-staking-guide-2026/index.md",
    "src/content/blog-es/crypto-staking-guide-2026/index.md",
    "src/content/blog-ru/how-to-verify-crypto-project/index.md",
    "src/content/blog-en/how-to-verify-crypto-project/index.md",
    "src/content/blog-es/how-to-verify-crypto-project/index.md",
]

BASE_DIR = Path(__file__).parent.parent

def fix_file(file_path):
    """Исправляет файл, удаляя лишние '---' в начале."""
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Проверяем первые строки
    if len(lines) < 3:
        return False, "Файл слишком короткий"
    
    # Если первая строка пустая или содержит только '---', удаляем её
    new_lines = lines
    
    # Удаляем пустые строки в начале
    while new_lines and new_lines[0].strip() == '':
        new_lines = new_lines[1:]
    
    # Если после удаления пустых строк первая строка '---', а вторая тоже '---', удаляем первую
    if len(new_lines) >= 2 and new_lines[0].strip() == '---' and new_lines[1].strip() == '---':
        new_lines = new_lines[1:]
    
    if new_lines == lines:
        return False, "Нет изменений"
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    return True, "Исправлено"

def main():
    """Основная функция."""
    print("=" * 60)
    print("ИСПРАВЛЕНИЕ YAML ФРОНТМАТТЕРА")
    print("=" * 60)
    
    for rel_path in FILES_TO_FIX:
        file_path = BASE_DIR / rel_path
        if not file_path.exists():
            print(f"❌ {rel_path}: Файл не найден")
            continue
        
        success, message = fix_file(file_path)
        if success:
            print(f"✅ {rel_path}: {message}")
        else:
            print(f"⚠️  {rel_path}: {message}")
    
    print("=" * 60)

if __name__ == "__main__":
    main()
