# Исправление pre-commit: не считать статьи «приватными»

## Что произошло (03.02.2026)

В pre-commit хуке (`.git/hooks/pre-commit`) список «запрещённых для публичного репо» паттернов включал **STRATEGY**. При коммите с добавлением статьи **oracle-strategy** (RU/EN/ES) хук сработал на путь `src/content/.../oracle-strategy/`, посчитал эти файлы «для приватного репо», **снял их со staging** и попытался отправить в приватный репозиторий. В итоге в коммит попали все остальные изменения, но **не попала сама статья ORACLE 1.1**.

## Исправление

В `.git/hooks/pre-commit` при формировании списка `BLOCKED_FILES` нужно **исключить пути из `src/content/`**: там лежат только статьи блога, и slug вроде `oracle-strategy`, `risk-management` — норма, а не конфиденциальные документы.

**Было:**
```sh
BLOCKED_FILES=$(git diff --cached --name-only | grep -iE "$FORBIDDEN_PATTERNS" || true)
```

**Стало:**
```sh
BLOCKED_FILES=$(git diff --cached --name-only | grep -v "^src/content/" | grep -iE "$FORBIDDEN_PATTERNS" || true)
```

Хук в `.git/hooks/` не хранится в репозитории. Если вы переустанавливаете хук или клонируете репо заново — примените эту правку вручную в `.git/hooks/pre-commit`.

## Рекомендация

Имеет смысл хранить «каноническую» версию хука в репозитории (например `scripts/pre-commit.hook-template`) с уже внесённым исправлением и в README или в этой документации указывать: копировать в `.git/hooks/pre-commit` при настройке окружения.
