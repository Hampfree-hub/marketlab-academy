import type { AstroIntegration } from 'astro';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { OGImageComponent } from '../utils/og-image.tsx';
import { ui } from '../i18n/ui';

interface OGImageData {
	title: string;
	subtitle?: string;
	category?: string;
	rubric?: string;
	lang: string;
	slug: string;
}

// Load fonts (Press Start 2P and JetBrains Mono)
async function loadFonts() {
	const fonts = [];

	// Try to load Press Start 2P from Google Fonts
	try {
		const pressStart2PResponse = await fetch('https://fonts.gstatic.com/s/pressstart2p/v14/e3t4euO8T-267oIAQAu6jDQyK3nVivM.ttf');
		if (pressStart2PResponse.ok) {
			const fontData = await pressStart2PResponse.arrayBuffer();
			fonts.push({
				name: 'Press Start 2P',
				data: Buffer.from(fontData),
				weight: 400,
				style: 'normal',
			});
		}
	} catch (error) {
		console.warn('[OG Images] Error loading Press Start 2P from Google Fonts:', error);
	}

	// Try to load JetBrains Mono from Google Fonts
	try {
		const jetbrainsMonoResponse = await fetch('https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOlOV.woff2');
		if (jetbrainsMonoResponse.ok) {
			const fontData = await jetbrainsMonoResponse.arrayBuffer();
			fonts.push({
				name: 'JetBrains Mono',
				data: Buffer.from(fontData),
				weight: 400,
				style: 'normal',
			});
		}
	} catch (error) {
		console.warn('[OG Images] Error loading JetBrains Mono from Google Fonts:', error);
	}

	// Fallback: use system fonts if custom fonts not available
	if (fonts.length === 0) {
		console.warn('[OG Images] No custom fonts loaded, using system fonts');
	}

	return fonts;
}

// Generate OG image from data
async function generateOGImage(data: OGImageData, fonts: any[], outputPath: string) {
	try {
		// Get rubric translation
		const rubric = data.rubric || (() => {
			const catKey = (data.category || 'general').toLowerCase().trim();
			const translations = ui[data.lang as keyof typeof ui];
			if (translations && 'cat' in translations) {
				const catTranslations = (translations as any).cat;
				return catTranslations?.[catKey] || data.category?.toUpperCase() || 'GENERAL';
			}
			return data.category?.toUpperCase() || 'GENERAL';
		})();

		// Generate SVG using Satori
		const svg = await satori(
			OGImageComponent({
				title: data.title,
				subtitle: data.subtitle,
				category: data.category || 'general',
				rubric,
			}),
			{
				width: 1200,
				height: 630,
				fonts: fonts.length > 0 ? fonts : undefined,
			}
		);

		// Convert SVG to PNG using Resvg
		const resvg = new Resvg(svg, {
			fitTo: {
				mode: 'width',
				value: 1200,
			},
		});

		const pngData = resvg.render();
		const pngBuffer = pngData.asPng();

		// Ensure directory exists
		const dir = path.dirname(outputPath);
		if (!existsSync(dir)) {
			await mkdir(dir, { recursive: true });
		}

		// Write PNG file
		await writeFile(outputPath, pngBuffer);

		return true;
	} catch (error) {
		console.error(`[OG Images] Error generating image for ${data.slug}:`, error);
		return false;
	}
}

export function ogImagesIntegration(): AstroIntegration {
	return {
		name: 'og-images',
		hooks: {
			'astro:build:generated': async ({ dir }) => {
				console.log('[OG Images] Starting OG image generation...');

				// Load fonts
				const fonts = await loadFonts();

				// Dynamically import getCollection (can't import astro:content at top level)
				const { getCollection } = await import('astro:content');

				// Get all blog posts from all language collections
				const [postsRu, postsEn, postsEs] = await Promise.all([
					getCollection('blog-ru').catch(() => []),
					getCollection('blog-en').catch(() => []),
					getCollection('blog-es').catch(() => []),
				]);

				const allPosts = [
					...postsRu.map(p => ({ ...p, lang: 'ru' })),
					...postsEn.map(p => ({ ...p, lang: 'en' })),
					...postsEs.map(p => ({ ...p, lang: 'es' })),
				];

				// Generate OG images for each post
				const ogDir = path.join(dir.pathname, 'og');
				let successCount = 0;
				let failCount = 0;

				for (const post of allPosts) {
					const ogData: OGImageData = {
						title: post.data.title,
						subtitle: post.data.description,
						category: post.data.category || 'general',
						lang: post.lang,
						slug: post.id,
					};

					const outputPath = path.join(ogDir, `${post.lang}-${post.id}.png`);

					const success = await generateOGImage(ogData, fonts, outputPath);
					if (success) {
						successCount++;
					} else {
						failCount++;
					}
				}

				// Generate OG image for homepage
				const homepageData: OGImageData = {
					title: 'MarketLab Academy',
					subtitle: 'Блог о трейдинге, криптовалюте и автоматизации торговли',
					category: 'general',
					lang: 'ru',
					slug: 'homepage',
				};

				const homepagePath = path.join(ogDir, 'homepage.png');
				await generateOGImage(homepageData, fonts, homepagePath);

				console.log(`[OG Images] Generated ${successCount} images successfully, ${failCount} failed`);
				console.log('[OG Images] OG image generation complete!');
			},
		},
	};
}
