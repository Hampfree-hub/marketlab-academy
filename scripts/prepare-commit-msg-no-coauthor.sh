#!/bin/sh
# Удаляет Co-authored-by из сообщения коммита (не указывать авторство IDE/сторонних сервисов в репо).
# Установка: cp scripts/prepare-commit-msg-no-coauthor.sh .git/hooks/prepare-commit-msg && chmod +x .git/hooks/prepare-commit-msg
# Файл сообщения передаётся как $1.

MSG_FILE="$1"
[ -z "$MSG_FILE" ] || [ ! -f "$MSG_FILE" ] && exit 0

# Удалить строки, содержащие Co-authored-by или cursoragent (любой формат)
if sed --version 2>/dev/null | grep -q GNU; then
  sed -i '/Co-authored-by:/d; /cursoragent/d' "$MSG_FILE"
else
  sed -i.bak -e '/Co-authored-by:/d' -e '/cursoragent/d' "$MSG_FILE" && rm -f "${MSG_FILE}.bak"
fi
exit 0
