import { readFile, writeFile, mkdir, readdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import React from 'react';

// Category translations (inline, no import needed)
const categoryTranslations = {
	ru: {
		'technical-analysis': 'ТЕХАНАЛИЗ',
		'crypto': 'КРИПТО',
		'algo-trading': 'АЛГО',
		'fundamental-analysis': 'ФУНДАМЕНТАЛЬНЫЙ',
		'general': 'ОБЩЕЕ',
	},
	en: {
		'technical-analysis': 'TECHNICAL',
		'crypto': 'CRYPTO',
		'algo-trading': 'ALGO',
		'fundamental-analysis': 'FUNDAMENTAL',
		'general': 'GENERAL',
	},
	es: {
		'technical-analysis': 'TÉCNICO',
		'crypto': 'CRIPTO',
		'algo-trading': 'ALGO',
		'fundamental-analysis': 'FUNDAMENTAL',
		'general': 'GENERAL',
	},
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ogDir = path.join(distDir, 'og');

// NES 8-bit color palette (matching Banner.astro styles)
const COLORS = {
	bgPrimary: '#050608',
	bgSecondary: '#0F1012',
	accentGreen: '#00D800',
	accentBlue: '#3CBCFC',
	accentYellow: '#F8E800',
	textPrimary: '#E5E5E5',
	textSecondary: '#B0B0B0',
	textTertiary: '#808080',
};

// Category background patterns (simplified for Satori)
const CATEGORY_COLORS = {
	'crypto': '#3CBCFC',
	'technical-analysis': '#00D800',
	'algo-trading': '#00D800',
	'fundamental-analysis': '#F8E800',
	'general': '#00D800',
};

// Background patterns
const getBackgroundPattern = (category = 'general') => {
	const patterns = {
		'crypto': `linear-gradient(135deg, ${COLORS.bgPrimary} 0%, rgba(60, 188, 252, 0.1) 50%, ${COLORS.bgPrimary} 100%)`,
		'technical-analysis': `${COLORS.bgPrimary}`,
		'algo-trading': `linear-gradient(135deg, ${COLORS.bgPrimary} 0%, rgba(0, 216, 0, 0.1) 50%, ${COLORS.bgPrimary} 100%)`,
		'fundamental-analysis': `${COLORS.bgPrimary}`,
		'general': `${COLORS.bgPrimary}`,
	};
	return patterns[category] || patterns['general'];
};

// OG Image Component (inline, no import needed)
function OGImageComponent({ title, subtitle, category = 'general', rubric }) {
	const bgPattern = getBackgroundPattern(category);
	const categoryColor = CATEGORY_COLORS[category] || CATEGORY_COLORS['general'];
	const displayRubric = rubric || category.toUpperCase();

	return React.createElement('div', {
		style: {
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			background: bgPattern,
			padding: '60px',
			position: 'relative',
			overflow: 'hidden',
		},
	}, [
		// Scanline overlay
		React.createElement('div', {
			key: 'scanline',
			style: {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				background: `repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 1px, transparent 1px, transparent 4px)`,
				pointerEvents: 'none',
				zIndex: 1,
			},
		}),
		// Grid pattern for technical-analysis
		category === 'technical-analysis' && React.createElement('div', {
			key: 'grid',
			style: {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				background: `repeating-linear-gradient(0deg, transparent, transparent 15px, rgba(0, 216, 0, 0.02) 15px, rgba(0, 216, 0, 0.02) 16px), repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(0, 216, 0, 0.02) 15px, rgba(0, 216, 0, 0.02) 16px)`,
				pointerEvents: 'none',
				zIndex: 1,
			},
		}),
		// Content
		React.createElement('div', {
			key: 'content',
			style: {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				zIndex: 2,
				flex: 1,
			},
		}, [
			React.createElement('h1', {
				key: 'title',
				style: {
					fontSize: '72px',
					fontWeight: 'bold',
					color: COLORS.accentGreen,
					margin: '0 0 20px 0',
					lineHeight: 1.4,
					textTransform: 'uppercase',
					fontFamily: 'Press Start 2P',
				},
			}, title),
			subtitle && React.createElement('p', {
				key: 'subtitle',
				style: {
					fontSize: '32px',
					fontWeight: 'bold',
					color: COLORS.accentBlue,
					margin: '0',
					opacity: 0.9,
					lineHeight: 1.5,
					fontFamily: 'JetBrains Mono',
					maxWidth: '900px',
				},
			}, subtitle),
		]),
		// Bottom section
		React.createElement('div', {
			key: 'bottom',
			style: {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
				marginTop: '40px',
				paddingTop: '30px',
				borderTop: '2px solid rgba(255, 255, 255, 0.05)',
				zIndex: 2,
			},
		}, [
			React.createElement('span', {
				key: 'tag',
				style: {
					fontSize: '24px',
					fontWeight: 'bold',
					padding: '12px 24px',
					backgroundColor: categoryColor,
					color: COLORS.bgPrimary,
					border: `2px solid ${COLORS.bgPrimary}`,
					boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.3)',
					textTransform: 'uppercase',
					fontFamily: 'Press Start 2P',
					whiteSpace: 'nowrap',
				},
			}, `[${displayRubric}]`),
			React.createElement('span', {
				key: 'watermark',
				style: {
					fontSize: '20px',
					color: COLORS.textTertiary,
					opacity: 0.9,
					fontFamily: 'JetBrains Mono',
					fontWeight: 600,
					whiteSpace: 'nowrap',
				},
			}, 'MARKETLAB ACADEMY'),
		]),
	].filter(Boolean));
}

// Load fonts from Google Fonts
async function loadFonts() {
	const fonts = [];

	// Check if fetch is available
	if (typeof fetch === 'undefined') {
		console.warn('[OG Images] fetch is not available, using system fonts');
		return fonts;
	}

	try {
		console.log('[OG Images] Loading Press Start 2P font...');
		// Try to get TTF from Google Fonts CSS first
		const cssResponse = await fetch('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
		if (cssResponse.ok) {
			const cssText = await cssResponse.text();
			// Extract TTF URL from CSS
			const ttfMatch = cssText.match(/url\(([^)]+\.ttf[^)]*)\)/);
			if (ttfMatch && ttfMatch[1]) {
				const ttfUrl = ttfMatch[1].replace(/['"]/g, '');
				const fontResponse = await fetch(ttfUrl);
				if (fontResponse.ok) {
					const fontData = await fontResponse.arrayBuffer();
					fonts.push({
						name: 'Press Start 2P',
						data: Buffer.from(fontData),
						weight: 400,
						style: 'normal',
					});
					console.log('[OG Images] Press Start 2P loaded successfully');
				} else {
					console.warn(`[OG Images] Press Start 2P TTF response not OK: ${fontResponse.status}`);
				}
			} else {
				console.warn('[OG Images] Could not extract TTF URL from CSS');
			}
		} else {
			console.warn(`[OG Images] Press Start 2P CSS response not OK: ${cssResponse.status}`);
		}
	} catch (error) {
		console.warn('[OG Images] Error loading Press Start 2P:', error.message);
	}

	try {
		console.log('[OG Images] Loading JetBrains Mono font...');
		// Get TTF from Google Fonts CSS
		const cssResponse = await fetch('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap');
		if (cssResponse.ok) {
			const cssText = await cssResponse.text();
			// Extract TTF URL from CSS (prefer TTF over WOFF2)
			const ttfMatch = cssText.match(/url\(([^)]+\.ttf[^)]*)\)/);
			if (ttfMatch && ttfMatch[1]) {
				const ttfUrl = ttfMatch[1].replace(/['"]/g, '');
				const fontResponse = await fetch(ttfUrl);
				if (fontResponse.ok) {
					const fontData = await fontResponse.arrayBuffer();
					fonts.push({
						name: 'JetBrains Mono',
						data: Buffer.from(fontData),
						weight: 400,
						style: 'normal',
					});
					console.log('[OG Images] JetBrains Mono loaded successfully');
				} else {
					console.warn(`[OG Images] JetBrains Mono TTF response not OK: ${fontResponse.status}`);
				}
			} else {
				console.warn('[OG Images] Could not extract TTF URL from CSS for JetBrains Mono');
			}
		} else {
			console.warn(`[OG Images] JetBrains Mono CSS response not OK: ${cssResponse.status}`);
		}
	} catch (error) {
		console.warn('[OG Images] Error loading JetBrains Mono:', error.message);
	}

	return fonts;
}

// Generate OG image
async function generateOGImage(data, fonts, outputPath) {
	try {
		const rubric = data.rubric || (() => {
			const catKey = (data.category || 'general').toLowerCase().trim();
			const translations = categoryTranslations[data.lang];
			if (translations && translations[catKey]) {
				return translations[catKey];
			}
			return data.category?.toUpperCase() || 'GENERAL';
		})();

		console.log(`[OG Images] Generating image for: ${data.slug} (${data.lang})`);

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

		const resvg = new Resvg(svg, {
			fitTo: {
				mode: 'width',
				value: 1200,
			},
		});

		const pngData = resvg.render();
		const pngBuffer = pngData.asPng();

		const dir = path.dirname(outputPath);
		if (!existsSync(dir)) {
			await mkdir(dir, { recursive: true });
		}

		await writeFile(outputPath, pngBuffer);
		return true;
	} catch (error) {
		console.error(`[OG Images] Error generating image for ${data.slug}:`, error);
		return false;
	}
}

// Read blog posts from content directories
async function getBlogPosts() {
	const posts = [];
	const langs = ['ru', 'en', 'es'];
	const contentDir = path.join(rootDir, 'src', 'content');

	for (const lang of langs) {
		const langDir = path.join(contentDir, `blog-${lang}`);
		if (!existsSync(langDir)) continue;

		const entries = await readdir(langDir, { withFileTypes: true });
		for (const entry of entries) {
			if (entry.isDirectory()) {
				const indexPath = path.join(langDir, entry.name, 'index.md');
				if (existsSync(indexPath)) {
					try {
						const content = await readFile(indexPath, 'utf-8');
						const frontmatter = content.match(/^---\n([\s\S]*?)\n---/);
						if (frontmatter) {
							const yaml = frontmatter[1];
							const titleMatch = yaml.match(/title:\s*['"](.*?)['"]/);
							const descMatch = yaml.match(/description:\s*['"](.*?)['"]/);
							const catMatch = yaml.match(/category:\s*['"]?(\w+)['"]?/);

							posts.push({
								lang,
								slug: entry.name,
								title: titleMatch ? titleMatch[1] : entry.name,
								description: descMatch ? descMatch[1] : '',
								category: catMatch ? catMatch[1] : 'general',
							});
						}
					} catch (error) {
						console.warn(`[OG Images] Error reading ${indexPath}:`, error);
					}
				}
			}
		}
	}

	return posts;
}

// Main function
async function main() {
	// Immediate output to verify script is running
	process.stdout.write('[OG Images] Script started\n');
	console.log('[OG Images] Starting OG image generation...');
	console.log(`[OG Images] distDir: ${distDir}`);
	console.log(`[OG Images] ogDir: ${ogDir}`);
	console.log(`[OG Images] Node version: ${process.version}`);

	if (!existsSync(distDir)) {
		console.error('[OG Images] dist/ directory not found. Run "npm run build" first.');
		process.exit(1);
	}

	console.log('[OG Images] Loading fonts...');
	const fonts = await loadFonts();
	console.log(`[OG Images] Loaded ${fonts.length} fonts`);

	console.log('[OG Images] Reading blog posts...');
	const posts = await getBlogPosts();
	console.log(`[OG Images] Found ${posts.length} posts`);

	let successCount = 0;
	let failCount = 0;

	// Generate images for posts
	for (const post of posts) {
		const outputPath = path.join(ogDir, `${post.lang}-${post.slug}.png`);
		const success = await generateOGImage(
			{
				title: post.title,
				subtitle: post.description,
				category: post.category,
				lang: post.lang,
				slug: post.slug,
			},
			fonts,
			outputPath
		);

		if (success) {
			successCount++;
		} else {
			failCount++;
		}
	}

	// Generate homepage image
	const homepagePath = path.join(ogDir, 'homepage.png');
	await generateOGImage(
		{
			title: 'MarketLab Academy',
			subtitle: 'Блог о трейдинге, криптовалюте и автоматизации торговли',
			category: 'general',
			lang: 'ru',
			slug: 'homepage',
		},
		fonts,
		homepagePath
	);

	console.log(`[OG Images] Generated ${successCount} images successfully, ${failCount} failed`);
	console.log('[OG Images] OG image generation complete!');
}

main().catch((error) => {
	console.error('[OG Images] Fatal error:', error);
	console.error('[OG Images] Stack:', error.stack);
	process.exit(1);
});
