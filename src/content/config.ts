import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		// ✅ НОВОЕ: индикатор языка статьи
		language: z.enum(['ru', 'en', 'es']).default('ru'),
	}),
});

export const collections = { blog };
