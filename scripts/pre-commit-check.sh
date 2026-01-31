#!/bin/bash
# Проверка перед коммитом: не допускать конфиденциальные файлы и секреты в публичный репо.
# Установка: cp scripts/pre-commit-check.sh .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit

set -e

# 1) Секреты в содержимом
if git diff --cached | grep -E "(AIza|GCLOUD|SECRET|API_KEY|PASSWORD|TOKEN|\.env)" > /dev/null 2>&1; then
  echo "❌ PRE-COMMIT: Обнаружены потенциальные секреты в файлах!"
  exit 1
fi

# 2) Запрещённые пути (планы, архив, конфид — НЕ трогаем src/content/)
STAGED_NAMES=$(git diff --cached --name-only)
if echo "$STAGED_NAMES" | grep -E "^(docs/ARCHIVE_RECOMMENDATIONS|docs/PLANS_AND_CATEGORIES|docs/.*PLAN.*\.md|docs/.*ARCHIVE.*\.md|docs/.*CATEGOR.*\.md)" > /dev/null 2>&1; then
  echo "❌ PRE-COMMIT: В коммите есть конфиденциальные документы (планы, архив, категории)."
  echo "   Эти файлы только в приватном репо. Добавьте их в .gitignore и не коммитьте."
  exit 1
fi
if echo "$STAGED_NAMES" | grep -iE "Veles|veles" > /dev/null 2>&1; then
  echo "❌ PRE-COMMIT: В коммите есть упоминание внутреннего проекта (Veles). Не коммитьте в публичный репо."
  exit 1
fi

echo "✅ Pre-commit: проверка пройдена"
exit 0
