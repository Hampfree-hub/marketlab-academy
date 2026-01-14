import Fuse from 'fuse.js';
import type { CollectionEntry } from 'astro:content';

export type SearchItem = {
    id: string;
    slug: string;
    collection: string;
    data: {
        title: string;
        description: string;
        pubDate: Date;
        bannerImage?: string;
    };
};

export function createSearchIndex(posts: CollectionEntry<'blog-ru' | 'blog-en' | 'blog-es'>[]) {
    const options = {
        keys: [
            { name: 'data.title', weight: 0.5 },
            { name: 'data.description', weight: 0.3 },
            { name: 'body', weight: 0.2 }
        ],
        threshold: 0.3, // Чувствительность к опечаткам
        includeMatches: true,
        minMatchCharLength: 2
    };

    return new Fuse(posts, options);
}
