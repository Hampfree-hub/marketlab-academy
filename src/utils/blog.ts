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

/** Временные папки article-1, article-2, … — только для структуры, не в прод и не в списках */
export const TEMP_ARTICLE_SLUG = /^article-\d+$/;
export const isTempArticle = (id: string) => TEMP_ARTICLE_SLUG.test(id);

// Helper: получить коллекцию по языку
function getCollectionByLang(lang: 'ru' | 'en' | 'es'): 'blog-ru' | 'blog-en' | 'blog-es' {
	return `blog-${lang}` as 'blog-ru' | 'blog-en' | 'blog-es';
}

/**
 * Получить все посты из коллекции blog
 * Сортирует по дате (новые сначала)
 * Исключает draft статьи и временные article-*
 */
export async function getPosts(): Promise<CollectionEntry<'blog-ru' | 'blog-en' | 'blog-es'>[]> {
	const ruPosts = await getCollection('blog-ru');
	const enPosts = await getCollection('blog-en');
	const esPosts = await getCollection('blog-es');
	
	const allPosts = [...ruPosts, ...enPosts, ...esPosts].filter(
		post => !isTempArticle(post.id) && !post.data.draft
	);
	
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
 */
export async function getPostsByCategory(category: string): Promise<CollectionEntry<'blog-ru' | 'blog-en' | 'blog-es'>[]> {
	const posts = await getPosts();
	return posts.filter(post => post.data.category === category);
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
 * @param lang - Язык для фильтрации (обязательно)
 */
export async function getRelatedPosts(
	currentPostId: string,
	category?: string,
	limit: number = 3,
	lang?: 'ru' | 'en' | 'es'
): Promise<CollectionEntry<'blog-ru' | 'blog-en' | 'blog-es'>[]> {
	// Получаем посты только для текущего языка
	const collectionName = lang ? `blog-${lang}` as 'blog-ru' | 'blog-en' | 'blog-es' : null;
	if (!collectionName) {
		console.warn('getRelatedPosts: lang not provided, returning empty array');
		return [];
	}
	
	const posts = await getCollection(collectionName);
	
	// Исключаем текущую статью, временные article-* и draft статьи
	const filteredPosts = posts.filter(
		post => post.id !== currentPostId && !isTempArticle(post.id) && !post.data.draft
	);
	
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
