import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogSchema = ({ image }) =>
	z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		bannerImage: z.string().optional(),
		previewImage: z.string().optional(),
		category: z.string().optional(),
		tags: z.array(z.string()).optional(),
		pinned: z.boolean().optional(),
		heroImage: image().optional(), // Оставляем для совместимости со старыми темами
	});

const blogRu = defineCollection({
	loader: glob({ base: './src/content/blog-ru', pattern: '**/*.{md,mdx}' }),
	schema: blogSchema,
});

const blogEn = defineCollection({
	loader: glob({ base: './src/content/blog-en', pattern: '**/*.{md,mdx}' }),
	schema: blogSchema,
});

const blogEs = defineCollection({
	loader: glob({ base: './src/content/blog-es', pattern: '**/*.{md,mdx}' }),
	schema: blogSchema,
});

export const collections = {
	'blog-ru': blogRu,
	'blog-en': blogEn,
	'blog-es': blogEs,
};
