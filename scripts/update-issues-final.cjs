const https = require('https');
const fs = require('fs');
const token = fs.readFileSync('D:/Projects/HampfreeBlog-Private/.github-token', 'utf8').trim();

async function api(method, path, body) {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: 'api.github.com',
      path,
      method,
      headers: {
        'Authorization': `token ${token}`,
        'User-Agent': 'Node.js',
        'Content-Type': 'application/json'
      }
    }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function main() {
  // 1. Close Archive Issue (#38)
  console.log('Closing #38 (Archive)...');
  await api('PATCH', '/repos/Hampfree-hub/marketlab-academy/issues/38', { 
    state: 'closed',
    body: '## Status: COMPLETED\n- Архив реализован с поиском и фильтрами\n- Добавлен Lift-effect для карточек\n- Breadcrumbs локализованы на русский\n- Поиск исправлен (рамка внутри)'
  });

  // 2. Update Accessibility Issue (#40)
  console.log('Updating #40 (Accessibility/Quality)...');
  await api('PATCH', '/repos/Hampfree-hub/marketlab-academy/issues/40', {
    body: `## Description
- Добавить ARIA labels на оставшиеся элементы (DONE)
- Улучшить keyboard navigation (DONE)
- Проверить color contrast (WCAG 2.1 AA) (IN PROGRESS)
- Унифицировать CSS переменные для transitions (DONE)
- Добавить ESLint + Prettier (DONE)
- Focus indicators улучшить (DONE)
- Заменить иконки темы на символы терминала (DONE)
- Плавное мерцание курсора (DONE)

## Tasks
- [x] aria-label на все кнопки
- [x] aria-current="page" для активной ссылки
- [x] Keyboard navigation (Tab, Enter, Esc)
- [ ] Color contrast audit (Lighthouse)
- [x] Плавная анимация логотипа`
  });

  console.log('Done.');
}
main();








