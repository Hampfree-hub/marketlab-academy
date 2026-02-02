# Чеклист визуалов (картинки и списки в статьях)

**Альт-текст (alt):** на том же языке, что и языковая версия статьи (RU — русский, EN — английский, ES — испанский). Не универсальный EN для всех.

**Баннеры:** генерируются отдельно (англоязычные по конвенции проекта).

**Таблицы vs списки:** на малых экранах Markdown-таблицы отображаются неудобно. В статьях используем **списки** (маркированные или нумерованные); картинки — по желанию для усиления.

---

## Сделано

- **EN what-are-backtests** — добавлен тот же скрин, что и в RU: `Example-of-backtest-results.png`. Alt на EN: «Strategy tester window: equity curve, trade count, and win rate».
- **exchange-uptime-downtime, fundamental-analysis-intro/checklist, diversification part 1/2/3** — визуалы в виде списков (таблицы не используем из-за малых экранов).

---

## Статьи с картинками (всё ок)

- **RU/EN/ES:** bitcoin-basics, technical-analysis-rsi, money-flow-index, what-are-doji-candles, flag-and-pennant-patterns, what-is-rising-wedge, what-is-bitcoin-halving, what-are-trading-signals, what-is-whitepaper, what-is-trailing-stop, sideways-trend-strategies, grid-trading-crypto, dca-strategy-crypto, williams-percent-range-r
- **RU:** what-are-backtests
- **EN:** what-are-backtests (тот же скрин, alt на EN)

---

## Визуалы по статьям (списки, не таблицы)

Для перечисленных статей используем **списки** (нумерованные или маркированные) — на малых экранах так читать удобнее. Картинки — по желанию; при добавлении изображения alt на языке статьи (RU/EN/ES).

| Статья / серия                         | Что сделано / что сделать |
|---------------------------------------|----------------------------|
| fundamental-analysis-intro            | Список 3 шагов (макро, качество актива, ончейн-контекст). Картинка — по желанию. |
| fundamental-analysis-checklist        | Списки по шагам в тексте. Картинка — по желанию. |
| exchange-uptime-downtime              | Маркированный список «Что считается даунтаймом». Формула в тексте. |
| onchain-metrics-fundamental-analysis  | Списки/текст по метрикам. Картинка «поток на биржи» — по желанию. |
| diversification part 1/2/3             | Списки в тексте. Картинка/схема — по желанию. |

---

## Формат при добавлении картинки

- Файл в `./assets/` статьи (PNG или WebP).
- В текст: `![alt на языке статьи](./assets/имя-файла.png)`.

После добавления таблиц проверить, нужны ли ещё картинки — при необходимости добавить по чеклисту выше.
