# 🐛 Bash: Работа с кодировками UTF-8

**Дата:** 6 марта 2026
**Статус:** ✅ Актуально

---

## ⚠️ КРИТИЧЕСКИ ВАЖНО

**PowerShell может некорректно отображать UTF-8 символы (испанские ó, é, ñ и т.д.)!**

**Проблема:** `depÃ³sito` вместо `depósito`

**Решение:** Использовать **bash** для проверки и работы с UTF-8 файлами.

---

## ✅ ПРАВИЛЬНЫЙ ПОДХОД

### 1. Проверка файлов на артефакты кодировки

```bash
# Поиск файлов с артефактами кодировки
git grep -l 'Ã' src/content/blog-es/

# Подсчёт проблемных файлов
git grep -l 'Ã' src/content/blog-es/ | wc -l

# Поиск в локальных файлах
find src/content/blog-es -name 'index.md' -exec grep -l 'Ã' {} \;
```

### 2. Проверка на GitHub

```bash
# Файл на GitHub должен быть корректным
curl -s https://raw.githubusercontent.com/Hampfree-hub/marketlab-academy/main/src/content/blog-es/surviving-drawdown-diary/index.md | head -20
```

### 3. Исправление кодировки

```bash
# Если файл повреждён локально, восстановить из git
git checkout HEAD -- src/content/blog-es/surviving-drawdown-diary/index.md

# Или из конкретного коммита
git show <commit>:src/content/blog-es/file.md > src/content/blog-es/file.md
```

---

## 📋 ПРАВИЛА

### 1. PowerShell — НЕ для UTF-8

**НЕ использовать PowerShell для:**
- ❌ Чтения/записи UTF-8 файлов
- ❌ Замены символов в UTF-8 файлах
- ❌ Проверки кодировки

**Проблема:** PowerShell использует Windows-1252/CP1251 по умолчанию

### 2. Bash — ДА для UTF-8

**Использовать bash для:**
- ✅ Проверки файлов на артефакты
- ✅ Поиска проблемных файлов
- ✅ Восстановления из git

### 3. Python — для сложной обработки

**Использовать Python с явной кодировкой:**
```python
with open('file.md', 'r', encoding='utf-8') as f:
    content = f.read()
```

---

## 🔍 БЫСТРАЯ ПРОВЕРКА

```bash
# Все файлы корректны?
git grep -l 'Ã' src/content/blog-*/ 2>/dev/null | wc -l
# 0 — всё ок
# >0 — есть проблемы
```

---

## 📊 ТЕКУЩИЙ СТАТУС

| Язык | Файлов | Артефакты | Статус |
|------|--------|-----------|--------|
| **RU** | 45 | 0 | ✅ |
| **EN** | 45 | 0 | ✅ |
| **ES** | 45 | 0 | ✅ |

**Все файлы на GitHub корректны!**
