import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		bannerImage: z.string().optional(),
		previewImage: z.string().optional(),
		pinned: z.boolean().optional(),
		category: z.string().optional(),
	}),
});

export const collections = {
	'blog-ru': blogCollection,
	'blog-en': blogCollection,
	'blog-es': blogCollection,
};
