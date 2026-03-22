/**
 * Astro интеграция для генерации реферальных баннеров
 * Автоматически генерирует PNG при сборке
 */

import { defineIntegration } from 'astro/integration';
import { AD_BANNERS } from '../config/ad-banners';

export interface Options {
  /** Директория для сохранения баннеров (относительно public/) */
  outputDir?: string;
  /** Генерировать ли баннеры при билде */
  generateOnBuild?: boolean;
}

export default defineIntegration<Options>(({ name = 'ad-banners', options }) => {
  const outputDir = options?.outputDir ?? 'og/ad';
  const generateOnBuild = options?.generateOnBuild ?? true;
  
  return {
    name,
    hooks: {
      'astro:build:setup': async ({ command }) => {
        // Генерируем только при build, не при dev
        if (command === 'build' && generateOnBuild) {
          try {
            const { generateAllBanners } = await import('./scripts/generate-ad-banners.mjs');
            console.log('🎨 Generating ad banners...');
            await generateAllBanners();
          } catch (error) {
            console.warn('⚠️  Ad banner generation failed:', error.message);
            console.warn('   Continuing build without ad banners...');
          }
        }
      },
    },
  };
});
