import { readFile, writeFile, mkdir, readdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

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

// Map category to background pattern (matching Banner.astro)
const bgPatterns = {
	'crypto': 'gradient-electric',
	'technical-analysis': 'grid',
	'algo-trading': 'gradient-analysis',
	'fundamental-analysis': 'solid-dark',
	'general': 'solid-dark'
};

// Map category to rubric color (matching Banner.astro CSS variables)
const rubricColors = {
	'crypto': '#F97316',
	'technical-analysis': '#14B8A6',
	'algo-trading': '#EAB308',
	'fundamental-analysis': '#EF4444',
	'general': '#00D800'
};

// Generate OG image using Puppeteer
async function generateOGImage(data, browser, outputPath) {
	try {
		const rubric = data.rubric || (() => {
			const catKey = (data.category || 'general').toLowerCase().trim();
			const translations = categoryTranslations[data.lang];
			if (translations && translations[catKey]) {
				return translations[catKey];
			}
			const enTranslations = categoryTranslations['en'];
			if (enTranslations && enTranslations[catKey]) {
				return enTranslations[catKey];
			}
			return data.category?.toUpperCase() || 'GENERAL';
		})();

		console.log(`[OG Images] Generating image for: ${data.slug} (${data.lang}), rubric: ${rubric}`);

		const templatePath = path.join(__dirname, 'og-banner-template.html');
		let html = await readFile(templatePath, 'utf-8');

		const category = data.category || 'general';
		const pattern = bgPatterns[category] || 'solid-dark';
		const rubricColor = rubricColors[category] || '#00D800';

		html = html
			.replace(/\{\{TITLE\}\}/g, data.title || '')
			.replace(/\{\{SUBTITLE\}\}/g, data.subtitle || '')
			.replace(/\{\{RUBRIC\}\}/g, rubric)
			.replace(/\{\{PATTERN\}\}/g, pattern);

		html = html.replace('<style>', `<style>
		:root { --rubric-color: ${rubricColor}; }
	`);

		const page = await browser.newPage();
		await page.setViewport({ width: 1200, height: 630 });
		await page.setContent(html, { waitUntil: 'networkidle0' });
		await page.evaluateHandle(() => document.fonts.ready);

		const screenshot = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
		await page.close();

		const dir = path.dirname(outputPath);
		if (!existsSync(dir)) { await mkdir(dir, { recursive: true }); }
		await writeFile(outputPath, screenshot);
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
						const frontmatter = content.match(/^---
([\s\S]*?)
---/);
						if (frontmatter) {
							const yaml = frontmatter[1];
							const titleMatch = yaml.match(/title:\s*['"](.*?)['"]/);
							const descMatch = yaml.match(/description:\s*['"](.*?)['"]/);
							const catMatch = yaml.match(/category:\s*['"]?([\w-]+)['"]?/);
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

async function main() {
	console.log('[OG Images] Starting OG image generation...');
	if (!existsSync(distDir)) {
		console.error('[OG Images] dist/ directory not found. Run "npm run build" first.');
		process.exit(1);
	}

	const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });

	try {
		const posts = await getBlogPosts();
		for (const post of posts) {
			const outputPath = path.join(ogDir, `${post.lang}-${post.slug}.png`);
			await generateOGImage({
				title: post.title,
				subtitle: post.description,
				category: post.category,
				lang: post.lang,
				slug: post.slug,
			}, browser, outputPath);
		}

		// Homepage Images (Multilingual)
		const homeConfigs = [
			{ lang: 'ru', title: 'MarketLab Academy', subtitle: 'Блог о трейдинге, криптовалюте и автоматизации торговли' },
			{ lang: 'en', title: 'MarketLab Academy', subtitle: 'Blog about trading, cryptocurrency and trading automation' },
			{ lang: 'es', title: 'MarketLab Academy', subtitle: 'Blog sobre trading, criptomonedas y automatización de trading' }
		];

		for (const config of homeConfigs) {
			await generateOGImage({
				...config,
				category: 'general',
				slug: 'homepage'
			}, browser, path.join(ogDir, `${config.lang}-homepage.png`));
			
			// Legacy fallback for root
			if (config.lang === 'ru') {
				await generateOGImage({ ...config, category: 'general', slug: 'homepage' }, browser, path.join(ogDir, 'homepage.png'));
			}
		}

		// About Page Images (Multilingual)
		const aboutConfigs = [
			{ lang: 'ru', title: 'О проекте', subtitle: 'MarketLab Academy — блог о трейдинге, где главное — люди и их опыт.' },
			{ lang: 'en', title: 'About Project', subtitle: 'MarketLab Academy — a trading blog where people and their experience come first.' },
			{ lang: 'es', title: 'Sobre el proyecto', subtitle: 'MarketLab Academy — un blog de trading donde las personas y su experiencia son lo primero.' }
		];

		for (const config of aboutConfigs) {
			await generateOGImage({
				...config,
				category: 'general',
				slug: 'about'
			}, browser, path.join(ogDir, `${config.lang}-about.png`));
		}

	} finally {
		await browser.close();
		console.log('[OG Images] Complete!');
	}
}

main().catch(console.error);
