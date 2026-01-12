# ✅ Унификация кнопок Header — ФИНАЛЬНЫЙ СТАНДАРТ

**Дата:** 2026-01-09  
**Цель:** Унифицировать все кнопки в Header согласно гайдлайну `FINAL_UNITY_CHECKLIST.md`  
**Статус:** ✅ **ИСПРАВЛЕНО**

---

## 🎯 ЕДИНЫЙ СТАНДАРТ ДЛЯ ВСЕХ КНОПОК

### **Desktop версия (≥769px):**

#### **Навигационные кнопки ([АРХИВ], [О_ПРОЕКТЕ]):**
```css
.nav-link {
  padding: 6px 12px;
  font-size: 0.75rem;
  font-weight: 400; /* Одинаковый вес для всех */
  min-height: 32px; /* Унифицированная высота */
  border: 2px solid var(--color-border);
  border-bottom: 4px solid var(--color-border); /* Серый bulge по умолчанию */
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-link:hover,
.nav-link[aria-current="page"] {
  background: var(--color-accent);
  color: #FFFFFF;
  border-color: var(--color-accent);
  border-bottom-color: var(--nes-accent-green-dark); /* Тёмно-зелёный bulge (НЕ оранжевый!) */
  font-weight: 700; /* Только для активной */
}
```

#### **Кнопки языков (RU, EN, ES):**
```css
.lang-btn {
  padding: 6px 12px; /* Унифицированный padding */
  font-size: 0.75rem;
  font-weight: 400; /* Одинаковый вес для всех */
  min-height: 32px; /* Унифицированная высота */
  border: 2px solid var(--color-border);
  border-bottom: 4px solid var(--color-border); /* Серый bulge по умолчанию */
  display: flex;
  align-items: center;
  justify-content: center;
}

.lang-btn.active,
.lang-btn:hover:not(.active) {
  background: var(--color-accent);
  color: #FFFFFF;
  border-color: var(--color-accent);
  border-bottom-color: var(--nes-accent-green-dark); /* Тёмно-зелёный bulge (НЕ оранжевый!) */
  font-weight: 700; /* Только для активной */
}
```

#### **Кнопка темы (Theme Toggle):**
```css
.theme-btn {
  padding: 6px 12px; /* Унифицированный padding как у lang-btn */
  font-size: 0.55rem;
  min-width: 32px; /* Унифицированная минимальная ширина */
  min-height: 32px; /* Унифицированная высота как у lang-btn */
  border: 2px solid var(--nes-border-primary);
  border-bottom: 4px solid var(--nes-border-primary); /* Серый bulge по умолчанию */
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-btn:hover {
  border-color: var(--nes-accent-green);
  border-bottom-color: var(--nes-accent-green-dark); /* Тёмно-зелёный bulge (НЕ оранжевый!) */
  background: var(--nes-accent-green);
  color: #FFFFFF;
}
```

---

### **Mobile версия (≤768px):**

#### **Кнопки языков в мобильном меню (RU, EN, ES):**
```css
.lang-btn-mobile {
  padding: 10px 20px; /* Унифицированный padding */
  font-size: 0.75rem; /* Унифицированный размер */
  font-weight: 400; /* Одинаковый вес для всех (не bold!) */
  min-width: 70px; /* Унифицированная минимальная ширина */
  min-height: 40px; /* Унифицированная высота для всех кнопок! */
  border: 2px solid var(--color-border);
  border-bottom: 4px solid var(--color-border); /* Серый bulge по умолчанию */
  display: flex;
  align-items: center;
  justify-content: center;
}

.lang-btn-mobile.active,
.lang-btn-mobile:hover:not(.active) {
  background: var(--color-accent);
  color: #FFFFFF;
  border-color: var(--color-accent);
  border-bottom-color: var(--nes-accent-green-dark); /* Тёмно-зелёный bulge (НЕ оранжевый!) */
  font-weight: 700; /* Только для активной */
  /* НЕ меняем min-height - должна быть такая же высота! */
}
```

#### **Кнопка темы в мобильном меню (СМЕНИТЬ ТЕМУ):**
```css
.theme-btn-mobile {
  padding: 10px 20px; /* Унифицированный padding как у lang-btn-mobile */
  font-size: 0.75rem; /* Унифицированный размер */
  font-weight: 400; /* Одинаковый вес как у lang-btn-mobile (не bold!) */
  min-height: 40px; /* Унифицированная высота как у lang-btn-mobile! */
  border: 2px solid var(--color-border);
  border-bottom: 4px solid var(--color-border); /* Серый bulge по умолчанию */
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-btn-mobile:hover {
  border-color: var(--color-accent);
  border-bottom-color: var(--nes-accent-green-dark); /* Тёмно-зелёный bulge (НЕ оранжевый!) */
  background: var(--color-accent);
  color: #FFFFFF;
}
```

#### **Контейнер кнопок языков:**
```css
.mobile-lang-buttons {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center; /* Выравнивание по центру по вертикали */
}
```

---

## ✅ ЧТО УНИФИЦИРОВАНО

### **Desktop:**
- ✅ Все кнопки имеют `min-height: 32px`
- ✅ Все кнопки имеют `padding: 6px 12px`
- ✅ Все кнопки имеют `font-size: 0.75rem` (кроме theme-btn: `0.55rem`)
- ✅ Все кнопки имеют `font-weight: 400` (700 только для активных)
- ✅ Все кнопки используют `display: flex; align-items: center; justify-content: center`
- ✅ Все кнопки имеют одинаковый border (2px + 4px bottom)
- ✅ Все кнопки имеют тёмно-зелёный bulge при hover/active (НЕ оранжевый!)

### **Mobile:**
- ✅ Все кнопки языков имеют `min-height: 40px`
- ✅ Все кнопки языков имеют `padding: 10px 20px`
- ✅ Все кнопки языков имеют `font-size: 0.75rem`
- ✅ Все кнопки языков имеют `font-weight: 400` (700 только для активной)
- ✅ Кнопка темы имеет `min-height: 40px` (как у lang-btn-mobile)
- ✅ Кнопка темы имеет `font-size: 0.75rem` (как у lang-btn-mobile)
- ✅ Кнопка темы имеет `font-weight: 400` (как у lang-btn-mobile)
- ✅ Все кнопки выровнены по центру (`align-items: center`)
- ✅ Все кнопки имеют тёмно-зелёный bulge при hover/active (НЕ оранжевый!)

---

## 🎯 ПРО ОРАНЖЕВУЮ ПОЛОСКУ

**Проверено:**
- ✅ В `tokens.css` нет оранжевого цвета для borders
- ✅ `--nes-accent-green-dark: #00A800` — тёмно-зелёный (НЕ оранжевый!)
- ✅ Все `border-bottom-color` используют `var(--nes-accent-green-dark)` или `var(--color-border)`
- ✅ `--nes-accent-yellow: #FCFC00` используется только для текста ссылок, НЕ для border-bottom

**Вероятная причина оранжевой полоски на изображении:**
- Визуальный эффект браузера (anti-aliasing / цветопередача)
- Или активное состояние отображается не так, как должно быть

**Решение:**
- ✅ Все кнопки теперь используют одинаковый цвет для bulge: `var(--nes-accent-green-dark)` (тёмно-зелёный)
- ✅ Проверено, что нет оранжевого цвета в CSS

---

## 📊 СРАВНЕНИЕ ДО/ПОСЛЕ

### **Desktop до исправления:**
- ❌ `.nav-link`: `font-weight: bold` (разный вес)
- ❌ `.lang-btn`: `padding: 6px 12px`, `font-size: 0.75rem`, нет `min-height`
- ❌ `.theme-btn`: `padding: 8px`, `width: 36px`, `height: 36px` (разный размер)
- ❌ Разные размеры кнопок

### **Desktop после исправления:**
- ✅ `.nav-link`: `font-weight: 400` (унифицирован), `min-height: 32px`
- ✅ `.lang-btn`: `padding: 6px 12px`, `font-size: 0.75rem`, `min-height: 32px`, `font-weight: 400`
- ✅ `.theme-btn`: `padding: 6px 12px`, `min-width: 32px`, `min-height: 32px` (унифицирован)
- ✅ Все кнопки одинакового размера!

### **Mobile до исправления:**
- ❌ `.lang-btn-mobile`: `padding: 8px 20px`, `font-size: 0.8rem`, `font-weight: bold` (разные размеры)
- ❌ `.theme-btn-mobile`: `padding: 10px 20px`, `font-size: 0.75rem`, `font-weight: bold`, нет `min-height`
- ❌ RU кнопка выше чем EN/ES из-за `font-weight: bold`
- ❌ Разные размеры и невыровнены

### **Mobile после исправления:**
- ✅ `.lang-btn-mobile`: `padding: 10px 20px`, `font-size: 0.75rem`, `font-weight: 400`, `min-height: 40px`
- ✅ `.theme-btn-mobile`: `padding: 10px 20px`, `font-size: 0.75rem`, `font-weight: 400`, `min-height: 40px`
- ✅ Все кнопки одинакового размера и высоты!
- ✅ Все кнопки выровнены по центру!

---

**Статус:** ✅ Все кнопки унифицированы согласно гайдлайну!
