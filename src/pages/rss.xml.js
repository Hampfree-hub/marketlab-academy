import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	// Get posts from all language collections
	const [postsRu, postsEn, postsEs] = await Promise.all([
		getCollection('blog-ru').catch(() => []),
		getCollection('blog-en').catch(() => []),
		getCollection('blog-es').catch(() => []),
	]);
	
	// Combine all posts and sort by date
	const allPosts = [...postsRu, ...postsEn, ...postsEs].sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
	
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: allPosts.map((post) => {
			// Determine language from collection name
			const lang = post.collection === 'blog-ru' ? 'ru' : 
			            post.collection === 'blog-en' ? 'en' : 'es';
			return {
				...post.data,
				link: `/marketlab-academy/${lang}/library/${post.id}/`,
			};
		}),
	});
}
