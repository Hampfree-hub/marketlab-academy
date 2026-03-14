# 🚫 YAML FRONTMATTER: ИЗБЕГАЙТЕ АПОСТРОФОВ В ОДИНАРНЫХ КАВЫЧКАХ

**Дата создания:** 14 марта 2026 г.  
**Статус:** ⚠️ **КРИТИЧНО ВАЖНО**  
**Причина:** 2 дня простоя из-за ошибки YAML parsing

---

## ❌ ПРОБЛЕМА

**Ошибка:**
```
bad indentation of a mapping entry
Location: file.md:3:79
```

**Причина:** Апостроф внутри строки в одинарных кавычках ломает YAML парсер.

**Пример проблемного кода:**
```yaml
---
title: 'Article Title'
description: 'This is John's article about crypto'  # ❌ ЛОМАЕТ YAML!
---
```

**Почему ломается:** YAML интерпретирует `'s` как конец строки и начинает искать следующий ключ.

---

## ✅ РЕШЕНИЕ

### Вариант 1: Двойные кавычки (РЕКОМЕНДУЕТСЯ)

```yaml
---
title: "Article Title"
description: "This is John's article about crypto"  # ✅ РАБОТАЕТ
---
```

### Вариант 2: Экранирование апострофа

```yaml
---
title: 'Article Title'
description: 'This is John''s article about crypto'  # ✅ РАБОЕТ (два апострофа)
---
```

### Вариант 3: Перефразирование

```yaml
---
title: 'Article Title'
description: 'Article by John about crypto'  # ✅ БЕЗ АПОСТРОФА
---
```

---

## 📋 ПРАВИЛА ДЛЯ ВСЕХ ЯЗЫКОВ

### English (EN)

**⚠️ ОПАСНЫЕ СЛОВА:**
- `it's` → `"it's"` или `it is`
- `don't` → `"don't"` или `do not`
- `can't` → `"can't"` или `cannot`
- `won't` → `"won't"` или `will not`
- `that's` → `"that's"` или `that is`
- `what's` → `"what's"` или `what is`
- `John's` → `"John's"` или `Johns`

**Пример:**
```yaml
# ❌ ПЛОХО
description: 'Learn how it's done'

# ✅ ХОРОШО
description: "Learn how it's done"
description: 'Learn how it is done'
```

### Русский (RU)

**⚠️ ОПАСНЫЕ СЛОВА:**
- `чьё-то` → `"чьё-то"`
- `чьей-то` → `"чьей-то"`

**Пример:**
```yaml
# ❌ ПЛОХО (редко, но возможно)
description: 'Это чьё-то мнение'

# ✅ ХОРОШО
description: "Это чьё-то мнение"
description: 'Это мнение автора'
```

### Español (ES)

**⚠️ ОПАСНЫЕ СЛОВА:**
- `qué es` → `"qué es"` (акцент не проблема, но кавычки важны)
- `cómo se usa` → `"cómo se usa"`

**Пример:**
```yaml
# ❌ ПЛОХО
description: 'Explica qué es y cómo se usa'

# ✅ ХОРОШО
description: "Explica qué es y cómo se usa"
```

---

## 🔍 ПРОВЕРКА ПЕРЕД КОММИТОМ

### Скрипт для проверки (Bash)

```bash
#!/bin/bash
# Проверить все .md файлы на апострофы в одинарных кавычках

find src/content -name "*.md" -exec grep -H "description: '.*'.*[A-Za-z]'[A-Za-z]" {} \;

# Если нашёл — выведет文件名 и строку
```

### Скрипт для проверки (PowerShell)

```powershell
# Проверить все .md файлы
Get-ChildItem -Recurse -Filter "*.md" -Path "src/content" | 
  ForEach-Object { 
    $content = Get-Content $_.FullName -Raw
    if ($content -match "description:\s*'.*'.*[A-Za-z]'[A-Za-z]") {
      Write-Output "PROBLEM: $($_.FullName)"
    }
  }
```

---

## 🛠️ ИНСТРУМЕНТЫ

### VS Code Extension

Установите расширение **YAML Validator** для подсветки ошибок.

### Pre-commit Hook

Добавьте в `.git/hooks/pre-commit`:

```bash
#!/bin/bash

# Проверяем файлы на апострофы в одинарных кавычках
git diff --cached --name-only | grep '\.md$' | while read file; do
  if grep -q "description: '.*'.*[A-Za-z]'[A-Za-z]" "$file"; then
    echo "ERROR: $file contains apostrophe in single-quoted string"
    echo "Fix: Use double quotes or escape the apostrophe"
    exit 1
  fi
done
```

---

## 📊 СТАТИСТИКА ПРОБЛЕМЫ

| Параметр | Значение |
|----------|----------|
| Дата обнаружения | 13 марта 2026 |
| Упавших сборок | 8 (#454-#461) |
| Время простоя | ~40 часов |
| Затронутых файлов | 1 (what-is-whitepaper/index.md) |
| Причина | Апостроф `it's` в description |

---

## ✅ ЧЕКЛИСТ ПЕРЕД ПУБЛИКАЦИЕЙ

Перед коммитом статьи проверьте:

- [ ] Все строки в frontmatter используют **двойные кавычки** `"`
- [ ] Нет апострофов в одинарных кавычках (`'it's'` → `"it's"`)
- [ ] Description не содержит специальных YAML символов без экранирования
- [ ] Title корректно экранирован (если содержит кавычки)

**Быстрая проверка:**
```bash
# Найти все файлы с потенциальной проблемой
grep -r "description: '.*'.*[A-Za-z]'[A-Za-z]" src/content/
```

---

## 🎯 ИТОГ

**Золотое правило:** Всегда используйте **двойные кавычки** `"` для `title` и `description` во frontmatter.

**Пример правильного frontmatter:**
```yaml
---
title: "Bitcoin's Price Analysis"
description: "Learn how Bitcoin's price changes and what it means for investors."
pubDate: '2026-03-14'
category: 'crypto'
---
```

**Почему двойные кавычки лучше:**
- ✅ Поддерживают апострофы без экранирования
- ✅ Поддерживают escape-последовательности (`\n`, `\"`)
- ✅ Меньше шансов на ошибку

---

**Инструкция обязательна к исполнению!** ⚠️
