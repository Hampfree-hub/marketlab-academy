#!/bin/sh
# Удаляет Co-authored-by из сообщения коммита (не указывать авторство IDE/сторонних сервисов в репо).
# Установка: cp scripts/prepare-commit-msg-no-coauthor.sh .git/hooks/prepare-commit-msg && chmod +x .git/hooks/prepare-commit-msg
# Файл сообщения передаётся как $1.

MSG_FILE="$1"
[ -z "$MSG_FILE" ] || [ ! -f "$MSG_FILE" ] && exit 0

# Удалить строки Co-authored-by (любые)
sed -i.bak '/^Co-authored-by:/d' "$MSG_FILE" 2>/dev/null || sed -i '/^Co-authored-by:/d' "$MSG_FILE" 2>/dev/null || true
rm -f "${MSG_FILE}.bak" 2>/dev/null || true
exit 0
