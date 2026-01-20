# 🔍 ДИАГНОСТИКА КАРТОЧЕК-ПРЕВЬЮ

**Дата:** 2026-01-20  
**Проблема:** Карточки-превью статей не отображаются на страницах

---

## 📋 ТЕКУЩАЯ РЕАЛИЗАЦИЯ

### Главная страница (`[lang]/index.astro`)

**Код:**
```astro
const posts = await getCollection(collectionName).catch(() => []);
const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
const featuredPosts = sortedPosts.slice(0, 4);

// ...

<div class="posts-grid">
  {featuredPosts.map(post => (
    <a href={translatePath(`library/${post.id}`)} class="post-card">
      <Banner 
        title={post.data.title} 
        subtitle={post.data.description}
        category={post.data.category} 
        type="preview" 
      />
      <div class="post-meta-wrap">
        <div class="post-meta">
          <span><FormattedDate date={post.data.pubDate} /></span>
        </div>
      </div>
      <div class="read-more-link">> {t('library.read_more')}</div>
    </a>
  ))}
</div>
```

**Проблема:** Если `getCollection` возвращает пустой массив или ошибку, `featuredPosts` будет пустым.

---

### Страница библиотеки (`[lang]/library/index.astro`)

**Код:**
```astro
const posts = await getCollection(collectionName);
const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

// ...

<div id="postsList" class="posts-list">
  {sortedPosts.map((post) => (
    <a href={`/marketlab-academy/${lang}/library/${post.id}/`} class="post-card">
      <Banner 
        title={post.data.title} 
        subtitle={post.data.description}
        category={post.data.category} 
        type="preview" 
      />
      <div class="post-meta-wrap">
        <div class="post-meta">
          <span><FormattedDate date={post.data.pubDate} /></span>
        </div>
      </div>
      <div class="read-more-link">> {t('library.read_more')}</div>
    </a>
  ))}
</div>
```

**Проблема:** Если `getCollection` возвращает пустой массив, карточки не будут отображаться.

---

## 🔍 ВОЗМОЖНЫЕ ПРИЧИНЫ

1. **Статьи не загружаются:**
   - Неправильное имя коллекции (`blog-${lang}`)
   - Статьи не в правильной папке
   - Проблемы с frontmatter

2. **Компонент Banner не рендерится:**
   - Ошибка в компоненте
   - Проблемы с пропсами

3. **Стили не применяются:**
   - CSS не загружается
   - Конфликт стилей

4. **Пустой массив статей:**
   - `getCollection` возвращает `[]`
   - Ошибка при загрузке

---

## ✅ РЕШЕНИЕ

### 1. Добавить проверку и логирование

**Главная страница:**
```astro
const posts = await getCollection(collectionName).catch(() => []);
console.log('Posts loaded:', posts.length);
const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
const featuredPosts = sortedPosts.slice(0, 4);
console.log('Featured posts:', featuredPosts.length);
```

**Страница библиотеки:**
```astro
const posts = await getCollection(collectionName);
console.log('Posts loaded:', posts.length);
const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
console.log('Sorted posts:', sortedPosts.length);
```

### 2. Добавить fallback для пустого состояния

**Главная страница:**
```astro
{featuredPosts.length > 0 ? (
  <div class="posts-grid">
    {featuredPosts.map(post => (
      // ... карточка
    ))}
  </div>
) : (
  <div class="no-posts">
    <p>Статьи не найдены</p>
  </div>
)}
```

**Страница библиотеки:**
```astro
{sortedPosts.length > 0 ? (
  <div id="postsList" class="posts-list">
    {sortedPosts.map((post) => (
      // ... карточка
    ))}
  </div>
) : (
  <div class="no-posts">
    <p>Статьи не найдены</p>
  </div>
)}
```

### 3. Проверить структуру статей

Убедиться, что все статьи имеют:
- Правильный frontmatter
- Корректные поля `title`, `description`, `pubDate`, `category`
- Правильный путь к файлу

---

## 🎯 СЛЕДУЮЩИЕ ШАГИ

1. Добавить логирование для диагностики
2. Проверить, что статьи загружаются
3. Добавить fallback для пустого состояния
4. Проверить компонент Banner
5. Проверить стили

---

**Нужно проверить в браузере, что именно не работает!**
