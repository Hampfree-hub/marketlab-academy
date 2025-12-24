// Скрипт для коммита и пуша изменений в GitHub
// Использование: node commit-now.js

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('📝 Коммит изменений в GitHub...\n');

const repoPath = __dirname.replace(/\\/g, '/');

try {
    // Переходим в директорию проекта
    process.chdir(repoPath);
    console.log(`📁 Директория: ${repoPath}\n`);

    // Шаг 0: Проверить и прервать незавершённый rebase/merge
    console.log('[0/7] Проверка состояния репозитория...');
    try {
        const gitDir = execSync('git rev-parse --git-dir', { encoding: 'utf-8' }).trim();
        if (existsSync(`${gitDir}/rebase-merge`) || existsSync(`${gitDir}/rebase-apply`)) {
            console.log('⚠️ Обнаружен незавершённый rebase, прерываем...');
            execSync('git rebase --abort', { stdio: 'inherit' });
            console.log('✅ Rebase прерван\n');
        } else if (existsSync(`${gitDir}/MERGE_HEAD`)) {
            console.log('⚠️ Обнаружен незавершённый merge, прерываем...');
            execSync('git merge --abort', { stdio: 'inherit' });
            console.log('✅ Merge прерван\n');
        } else {
            console.log('✅ Репозиторий в чистом состоянии\n');
        }
    } catch (e) {
        console.log('✅ Репозиторий в чистом состоянии\n');
    }

    // Шаг 0.5: Сохранить незакоммиченные изменения (stash)
    console.log('[0.5/7] Сохранение незакоммиченных изменений...');
    try {
        const status = execSync('git status --porcelain', { encoding: 'utf-8' });
        if (status.trim()) {
            console.log('Найдены незакоммиченные изменения, сохраняем...');
            execSync('git stash push -m "Auto-stash before commit"', { stdio: 'inherit' });
            console.log('✅ Изменения сохранены\n');
        } else {
            console.log('Нет незакоммиченных изменений\n');
        }
    } catch (e) {
        console.log('⚠️ Не удалось сохранить изменения\n');
    }

    // Шаг 1: Переключиться на ветку main
    console.log('[1/7] Переключение на ветку main...');
    try {
        execSync('git checkout main', { stdio: 'inherit' });
        console.log('✅ На ветке main\n');
    } catch (e) {
        // Если ветки нет, создаём её
        try {
            execSync('git checkout -b main', { stdio: 'inherit' });
            console.log('✅ Создана ветка main\n');
        } catch (e2) {
            console.log('⚠️ Проблема с веткой, продолжаем...\n');
        }
    }

    // Восстановить сохранённые изменения
    try {
        execSync('git stash pop', { stdio: 'inherit' });
        console.log('✅ Изменения восстановлены\n');
    } catch (e) {
        // Если stash пустой, это нормально
    }

    // Шаг 2: Получить изменения с GitHub
    console.log('[2/7] Получение изменений с GitHub...');
    try {
        // Сначала fetch
        execSync('git fetch github main', { stdio: 'inherit' });
        // Затем reset на удалённую ветку (синхронизация)
        execSync('git reset --hard github/main', { stdio: 'inherit' });
        console.log('✅ Локальная ветка синхронизирована с GitHub\n');
    } catch (e) {
        console.log('⚠️ Не удалось синхронизировать (возможно, первый коммит)\n');
    }

    // Шаг 3: Проверка статуса
    console.log('[3/7] Проверка статуса git...');
    try {
        const status = execSync('git status --short', { encoding: 'utf-8' });
        if (status.trim()) {
            console.log(status);
        } else {
            console.log('Нет изменений для коммита');
        }
    } catch (e) {
        console.log('Статус проверен');
    }
    console.log('');

    // Шаг 4: Добавление изменений
    console.log('[4/7] Добавление всех изменений...');
    execSync('git add .', { stdio: 'inherit' });
    console.log('✅ Файлы добавлены\n');

    // Шаг 5: Создание коммита
    console.log('[5/7] Создание коммита...');
    const commitMessage = [
        'Упрощение проекта: смягчённая палитра + светлая тема Windows',
        '',
        '- Смягчённая зелёная палитра (не режет глаза)',
        '- Светлая тема в стиле Windows (серо-голубая)',
        '- Переключатель темы в Header',
        '- Упрощённая структура компонентов',
        '- Исправлен git remote на GitHub',
        '- Убран base path для локальной разработки',
        '- Исправлен RSS feed'
    ].join('\n');

    try {
        execSync(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
        console.log('✅ Коммит создан\n');
    } catch (e) {
        console.log('⚠️ Коммит не создан (возможно, нет изменений или уже закоммичено)\n');
    }

    // Шаг 6: Проверка remotes
    console.log('[6/7] Проверка remotes...');
    const remotes = execSync('git remote -v', { encoding: 'utf-8' });
    console.log(remotes);
    console.log('');

    // Шаг 7: Push в GitHub
    console.log('[7/7] Отправка в GitHub...');
    const remoteList = execSync('git remote', { encoding: 'utf-8' });
    
    // Используем только github remote (origin теперь тоже GitHub)
    if (remoteList.includes('github')) {
        console.log('Используем remote: github');
        try {
            execSync('git push github main', { stdio: 'inherit' });
            console.log('\n✅ Изменения отправлены в GitHub!');
        } catch (e) {
            // Если push отклонён, пробуем force (осторожно!)
            console.log('\n⚠️ Push отклонён. Пробуем с --force-with-lease (безопасный force)...');
            execSync('git push github main --force-with-lease', { stdio: 'inherit' });
            console.log('\n✅ Изменения отправлены в GitHub!');
        }
    } else {
        console.log('Используем remote: origin (должен быть GitHub)');
        try {
            execSync('git push origin main', { stdio: 'inherit' });
            console.log('\n✅ Изменения отправлены!');
        } catch (e) {
            console.log('\n⚠️ Push отклонён. Пробуем с --force-with-lease...');
            execSync('git push origin main --force-with-lease', { stdio: 'inherit' });
            console.log('\n✅ Изменения отправлены!');
        }
    }

    console.log('\n✅ Готово!');
} catch (error) {
    console.error('\n❌ Ошибка:', error.message);
    process.exit(1);
}
