# Подготовка к переносу статьи ELDER 2.0 и индикаторов

**Дата:** 2026-02-09  
**Цель:** Болванки и структура для завтрашней выгрузки статьи ELDER из Veles в MarketLab Academy.

---

## Статья ELDER в Veles

- **Путь (RU):** `Veles Blog/website/src/content/blog-ru/the-elder-2/index.mdx`
- **Название (RU):** «Спотовая стратегия «ELDER 2.0» и усреднение по индикаторам»
- **Автор в Veles:** Hampfree
- **Суть:** Усреднение по сигналам индикаторов (CMO, Bollinger Bands, Stochastic), спотовая стратегия с сеткой ордеров, бэктесты UNI и SATS.

---

## Три индикатора ELDER 2.0

| Индикатор | В MarketLab | Статус | Путь болванки |
|-----------|-------------|--------|----------------|
| **Bollinger Bands** | Есть | Готово | `blog-{ru,en,es}/bollinger-bands/` |
| **Chande Momentum Oscillator (CMO)** | Не было | Создана заглушка | `blog-{ru,en,es}/chande-momentum-oscillator/` |
| **Stochastic Oscillator** | Не было | Создана заглушка | `blog-{ru,en,es}/stochastic-oscillator/` |

Все новые статьи — с `draft: true`, в прод не попадают.

---

## Параметры индикаторов в ELDER (из статьи Veles)

- **CMO:** таймфрейм M15. Покупка при CMO < -50.
- **Bollinger Bands:** M15. Покупка при выходе цены за нижнюю полосу.
- **Stochastic:** M5 — вход (покупка при пересечении 20 снизу вверх, продажа при пересечении 80 сверху вниз). M15 — выход из сделки (пересечение 80 сверху вниз = закрытие позиции).

---

## Статьи о споте (болванки)

Созданы две стартовые темы, все с `draft: true`:

1. **Что такое спотовая торговля**
   - RU: `blog-ru/what-is-spot-trading/`
   - EN: `blog-en/what-is-spot-trading/`
   - ES: `blog-es/what-is-spot-trading/`

2. **Спот vs фьючерсы и маржа**
   - RU: `blog-ru/spot-trading-vs-futures-margin/`
   - EN: `blog-en/spot-trading-vs-futures-margin/`
   - ES: `blog-es/spot-trading-vs-futures-margin/`

Контент — заглушки со структурой и ссылками на смежные материалы. Источник текста для заполнения «Что такое спот» — статья Veles «Что такое спотовая торговля криптовалютами, ее особенности».

---

## Что сделать завтра

1. **Перенести текст ELDER** из `the-elder-2/index.mdx` (RU/EN/UK → RU/EN/ES) в новую статью MarketLab (отдельная страница «ELDER 2.0» или раздел в библиотеке — по решению).
2. **Заполнить статьи по индикаторам:** CMO и Stochastic — по структуре в болванках и описанию из ELDER; Bollinger Bands уже есть, при необходимости добавить блок «Использование в ELDER».
3. **Заполнить спотовые статьи** по структуре в болванках и тексту из Veles (спотовая торговля, сравнение с маржой/фьючерсами).
4. **Внутренние ссылки:** после публикации CMO и Stochastic обновить ссылки в ELDER и в статьях друг на друга (сейчас в заглушках уже прописаны пути).
5. **Снять draft** только с тех статей, которые готовы к публикации.

---

## Файлы Veles для копирования

- Текст ELDER RU: `Veles Blog/website/src/content/blog-ru/the-elder-2/index.mdx`
- Текст ELDER EN: `Veles Blog/website/src/content/blog-en/the-elder-2/index.mdx`
- Изображения ELDER: `the-elder-2/assets/` (Uni_settings_r, Uni_cummulative_r, Sats_*, Spot_20ELDER.png и т.д.)

---

## Чек-лист перед публикацией

- [ ] Контент переведён в обезличенный стиль (без «я», «мы», «вы» по CONTENT_INTEGRATION_GUIDE).
- [ ] Внешние ссылки на veles.finance заменены на внутренние (library) или оставлены осознанно.
- [ ] Добавлены/проверены ссылки на CMO, Stochastic, Bollinger Bands, спот, риск-менеджмент.
- [ ] В frontmatter: `draft: true` снят только у готовых статей.
- [ ] Изображения перенесены в `assets/` соответствующих статей, пути в markdown обновлены.
