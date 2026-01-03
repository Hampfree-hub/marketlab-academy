const { execSync } = require('child_process');
const https = require('https');
const fs = require('fs');

const GITHUB_TOKEN_PATH = 'D:/Projects/HampfreeBlog-Private/.github-token';
const GITHUB_TOKEN = fs.readFileSync(GITHUB_TOKEN_PATH, 'utf8').trim();
const REPO = 'Hampfree-hub/marketlab-academy';

function runGit() {
    console.log('Starting git operations...');
    const commitMsg = `feat: design system и главная страница

- Тёмная (зелёный #32C854) и светлая (синий #0066B2) темы
- Header sticky с toggle темы
- Hero section с CTA кнопкой
- Категории с hover/активным состоянием
- Сетка статей 2x2 с тегами
- Newsletter блок с Brevo
- Footer 3 колонки
- Полная мобильная адаптивность
- CSS-переменные для всех цветов`;

    try {
        execSync('git add .', { cwd: 'D:/Projects/HampfreeBlog' });
        // Use a temporary file for the commit message to avoid shell encoding issues
        fs.writeFileSync('D:/Projects/HampfreeBlog/commit-msg.txt', commitMsg, 'utf8');
        execSync('git commit -F commit-msg.txt', { cwd: 'D:/Projects/HampfreeBlog' });
        fs.unlinkSync('D:/Projects/HampfreeBlog/commit-msg.txt');
        
        console.log('Pushing to GitHub...');
        const remoteUrl = `https://Hampfree-hub:${GITHUB_TOKEN}@github.com/${REPO}.git`;
        execSync(`git push ${remoteUrl} main`, { cwd: 'D:/Projects/HampfreeBlog', stdio: 'ignore' });
        console.log('Push successful!');
    } catch (err) {
        console.error('Git error:', err.message);
    }
}

async function createIssue(title, body, labels) {
    const data = JSON.stringify({ title, body, labels });
    return new Promise((resolve, reject) => {
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
            let resData = '';
            res.on('data', chunk => resData += chunk);
            res.on('end', () => {
                if (res.statusCode === 201) {
                    console.log(`Created issue: ${title}`);
                    resolve();
                } else {
                    console.error(`Failed to create issue: ${title}. Status: ${res.statusCode}`, resData);
                    resolve(); // Continue anyway
                }
            });
        });
        req.on('error', reject);
        req.write(Buffer.from(data, 'utf8'));
        req.end();
    });
}

async function main() {
    runGit();

    console.log('Creating issues...');
    const issues = [
        {
            title: '1. Интегрировать Brevo API для newsletter',
            body: '- POST endpoint для подписки\n- Обработка ошибок\n- Тестирование',
            labels: ['priority:high', 'enhancement']
        },
        {
            title: '2. Страница Архива (Archive)',
            body: '- Список всех постов\n- Фильтр по тегам + поиск\n- Пагинация\n- Breadcrumb',
            labels: ['priority:high', 'enhancement']
        },
        {
            title: '3. Layout отдельного поста',
            body: '- Header (название, дата, автор, reading time)\n- Sticky Table of Contents (слева на desktop)\n- Code blocks с syntax highlighting\n- Related posts внизу\n- Breadcrumb',
            labels: ['priority:high', 'enhancement']
        },
        {
            title: '4. TradingView графики для аналитики',
            body: 'Добавить виджеты TradingView для визуализации рыночных данных в статьях.',
            labels: ['priority:medium', 'enhancement']
        },
        {
            title: '5. n8n workflow для автоматизации рассылки',
            body: 'Создать ворклфоу в n8n для автоматического сбора постов и отправки дайджеста через Brevo.',
            labels: ['priority:medium', 'automation']
        },
        {
            title: '6. SEO оптимизация',
            body: '- Meta tags\n- Open Graph\n- sitemap.xml\n- robots.txt',
            labels: ['priority:medium', 'enhancement']
        },
        {
            title: '7. Analytics интеграция',
            body: 'Интеграция Google Analytics или Plausible для отслеживания посещаемости.',
            labels: ['priority:medium', 'enhancement']
        },
        {
            title: '8. Performance optimization',
            body: '- Оптимизация изображений\n- Bundle size\n- Проверка через Lighthouse',
            labels: ['priority:medium', 'enhancement']
        },
        {
            title: '9. Comments система',
            body: 'Рассмотреть варианты интеграции комментариев (Giscus, Disqus или др.).',
            labels: ['priority:low', 'enhancement']
        },
        {
            title: '10. Страница About',
            body: 'Создать страницу с описанием философии проекта MARKETLAB ACADEMY.',
            labels: ['priority:low', 'enhancement']
        }
    ];

    for (const issue of issues) {
        await createIssue(issue.title, issue.body, issue.labels);
    }
    console.log('All tasks completed.');
}

main();

