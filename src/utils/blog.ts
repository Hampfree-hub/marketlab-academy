/*
  ═══════════════════════════════════════════════════════════════
  BLOG UTILITIES
  ═══════════════════════════════════════════════════════════════
  
  Утилиты для работы с постами блога.
  Используется в компонентах и страницах для единообразной работы с контентом.
  
  Created: 2026-01-09
  ═══════════════════════════════════════════════════════════════
*/

import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

/**
 * Получить все посты из коллекции blog
 * Сортирует по дате (новые сначала)
 * 
 * Note: Astro Content Collections не поддерживает draft в schema,
 * поэтому фильтрация по draft не применяется
 */
export async function getPosts(): Promise<CollectionEntry<'blog-ru' | 'blog-en' | 'blog-es'>[]> {
	const ruPosts = await getCollection('blog-ru');
	const enPosts = await getCollection('blog-en');
	const esPosts = await getCollection('blog-es');
	
	const allPosts = [...ruPosts, ...enPosts, ...esPosts];
	
	return allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Получить отранжированные посты для главной страницы
 * Сначала идут pinned: true, затем остальные по дате
 */
export async function getRankedPosts(): Promise<CollectionEntry<'blog-ru' | 'blog-en' | 'blog-es'>[]> {
	const posts = await getPosts();
	
	return posts.sort((a, b) => {
		// Сначала сравниваем по pinned
		if (a.data.pinned && !b.data.pinned) return -1;
		if (!a.data.pinned && b.data.pinned) return 1;
		
		// Если оба pinned или оба не pinned, сравниваем по дате
		return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
	});
}

/**
 * Получить посты по категории
 * @param category - Категория поста
 * 
 * Note: Category field не добавлен в schema, поэтому функция возвращает все посты
 * Добавь category в src/content/config.ts если нужна фильтрация
 */
export async function getPostsByCategory(category: string): Promise<CollectionEntry<'blog-ru' | 'blog-en' | 'blog-es'>[]> {
	const posts = await getPosts();
	// TODO: Добавить category в schema если нужна фильтрация
	// return posts.filter(post => post.data.category === category);
	return posts; // Пока возвращаем все посты
}

/**
 * Форматировать дату для отображения
 * @param date - Дата для форматирования
 * @param locale - Локаль (по умолчанию 'ru-RU')
 */
export function formatDate(date: Date, locale: string = 'ru-RU'): string {
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(date);
}

/**
 * Оценить время чтения статьи
 * @param content - Текст статьи (Markdown или HTML)
 * @param wordsPerMinute - Количество слов в минуту (по умолчанию 200)
 */
export function estimateReadTime(content: string, wordsPerMinute: number = 200): number {
	const wordCount = content.split(/\s+/).length;
	return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Получить последние N постов
 * @param limit - Количество постов (по умолчанию 5)
 */
export async function getLatestPosts(limit: number = 5): Promise<CollectionEntry<'blog-ru' | 'blog-en' | 'blog-es'>[]> {
	const posts = await getPosts();
	return posts.slice(0, limit);
}

/**
 * Получить связанные статьи (Topic Clusters)
 * Сначала пытается найти статьи из той же категории, затем - последние статьи
 * @param currentPostId - ID текущей статьи (будет исключена из результатов)
 * @param category - Категория текущей статьи (опционально)
 * @param limit - Количество статей (по умолчанию 3)
 */
export async function getRelatedPosts(
	currentPostId: string,
	category?: string,
	limit: number = 3
): Promise<CollectionEntry<'blog-ru' | 'blog-en' | 'blog-es'>[]> {
	const posts = await getPosts();
	
	// Исключаем текущую статью
	const filteredPosts = posts.filter(post => post.id !== currentPostId);
	
	// Если есть категория, пытаемся найти статьи из той же категории
	if (category) {
		const sameCategoryPosts = filteredPosts.filter(post => post.data.category === category);
		if (sameCategoryPosts.length > 0) {
			return sameCategoryPosts.slice(0, limit);
		}
	}
	
	// Если нет категории или не нашли статьи из той же категории, возвращаем последние
	return filteredPosts.slice(0, limit);
}
