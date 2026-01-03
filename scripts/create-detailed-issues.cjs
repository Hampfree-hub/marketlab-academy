const https = require('https');
const fs = require('fs');

const GITHUB_TOKEN_PATH = 'D:/Projects/HampfreeBlog-Private/.github-token';
const GITHUB_TOKEN = fs.readFileSync(GITHUB_TOKEN_PATH, 'utf8').trim();
const REPO = 'Hampfree-hub/marketlab-academy';

async function createIssue(title, body, labels) {
    const data = JSON.stringify({ title, body, labels });
    return new Promise((resolve) => {
        const req = https.request({
            hostname: 'api.github.com',
            path: `/repos/${REPO}/issues`,
            method: 'POST',
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'User-Agent': 'Node.js',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }, (res) => {
            if (res.statusCode === 201) console.log(`Created: ${title}`);
            else console.log(`Failed: ${title} (${res.statusCode})`);
            resolve();
        });
        req.write(Buffer.from(data, 'utf8'));
        req.end();
    });
}

const issues = [
    {
        title: 'Интегрировать Brevo API для рассылки',
        labels: ['priority:high', 'backend', 'email', 'automation'],
        body: `## Description
- Подключить Brevo API в Astro
- Создать POST endpoint для подписки на newsletter
- Сохранять email и tags в Brevo
- Обработка ошибок и валидация
- Тестирование отправки писем
- Welcome email при подписке (опционально)

## Tasks
- [ ] Получить API ключ Brevo и создать список
- [ ] Создать Astro endpoint (src/pages/api/subscribe.ts или .js)
- [ ] Валидация email на клиенте и сервере
- [ ] Обработка ошибок (duplicate, invalid, etc)
- [ ] Success/error messages в UI
- [ ] Тестирование`
    },
    {
        title: 'Реализовать страницу архива постов',
        labels: ['priority:high', 'frontend', 'pages'],
        body: `## Description
- Список всех постов в хронологическом порядке
- Фильтрация по категориям/тегам (интерактивная)
- Поиск по названию и описанию
- Пагинация или infinite scroll
- Breadcrumb навигация (Home > Архив)
- Полная мобильная адаптация

## Design
- Заголовок "АРХИВ"
- Search bar + Tag filter
- Post grid/list
- Pagination controls
- Sticky header при скролле (опционально)

## Tasks
- [ ] Создать src/pages/archive.astro
- [ ] Реализовать компонент ArchiveList
- [ ] Fetch all posts + сортировка по дате
- [ ] Фильтрация по тегам (работает как активные категории)
- [ ] Search функция
- [ ] Пагинация (10 постов на страницу)
- [ ] Breadcrumb
- [ ] Mobile адаптация`
    },
    {
        title: 'Реализовать page layout для отдельного поста',
        labels: ['priority:high', 'frontend', 'pages'],
        body: `## Description
- Полная статья с правильной разметкой
- Header: название, дата, автор, время чтения
- Sticky Table of Contents (слева на desktop, dropdown на мобиле)
- Основной контент с правильной типографией (h1-h6)
- Code blocks с syntax highlighting
- Quotes/highlights с левой зелёной границей
- Таблицы адаптивные
- Related posts внизу (3-4 похожие)
- CTA блок перед footer (newsletter, youtube, telegram)
- Breadcrumb навигация
- Progress bar в header при скролле

## Design
- Responsive Typography (16px body, 1.6 line-height)
- Max-width контента 800-900px
- Sticky header с прогресс-баром
- Sticky ToC (исчезает на мобиле)
- Хороший контраст (WCAG AA)

## Tasks
- [ ] Создать src/layouts/PostLayout.astro
- [ ] Implement Table of Contents генерация
- [ ] Syntax highlighting для кода (Shiki)
- [ ] Blockquote и outros элементы стилизовать
- [ ] Progress bar на scroll
- [ ] Related posts logic
- [ ] CTA блок дизайн
- [ ] Mobile адаптация (ToC → dropdown)
- [ ] Testing на разных экранах`
    },
    {
        title: 'Улучшить accessibility и code style (Доп. правки)',
        labels: ['priority:medium', 'frontend', 'accessibility', 'refactor'],
        body: `## Description
- Добавить ARIA labels на оставшиеся элементы
- Улучшить keyboard navigation
- Проверить color contrast (WCAG 2.1 AA)
- Унифицировать CSS переменные для transitions
- Добавить ESLint + Prettier (DONE)
- Focus indicators улучшить (DONE)

## Tasks
- [ ] aria-label на все кнопки
- [ ] aria-current="page" для активной ссылки
- [ ] Keyboard navigation (Tab, Enter, Esc)
- [ ] Color contrast audit (Lighthouse)`
    }
];

async function main() {
    for (const issue of issues) {
        await createIssue(issue.title, issue.body, issue.labels);
    }
}
main();

