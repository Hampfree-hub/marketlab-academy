// Конфигурация реферальных баннеров
// Все ссылки и параметры в одном месте для удобного обновления

export type AdBanner = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
  categories?: string[];
  languages?: ('ru' | 'en' | 'es')[];
  priority?: number;
  colors: {
    bgStart: string;
    bgEnd: string;
    text: string;
    ctaBg: string;
    ctaText: string;
    border: string;
  };
};

// Реферальные ссылки с локализацией
export const REFERRAL_LINKS = {
  bybit: {
    ru: 'https://www.bybit.com/ru-RU/invite?ref=PWMD24',
    en: 'https://www.bybit.com/en/invite?ref=PWMD24',
    es: 'https://www.bybit.com/es/invite?ref=PWMD24',
  },
  bitget: {
    ru: 'https://www.bitget.com/ru/referral/register?from=referral&clacCode=23EHR2VD',
    en: 'https://www.bitget.com/en/referral/register?from=referral&clacCode=23EHR2VD',
    es: 'https://www.bitget.com/es/referral/register?from=referral&clacCode=23EHR2VD',
  },
  bingx: 'https://bingxdao.com/invite/CUBDBG/',
  veles: 'https://veles.finance/invite/washmallay',
  finbazar: 'https://finbazar.ru/profile/Hampfree/?ref=9483974260',
};

export function getReferralLink(platform: keyof typeof REFERRAL_LINKS, lang: string = 'ru'): string {
  const link = REFERRAL_LINKS[platform];
  if (typeof link === 'string') return link;
  return (link as Record<string, string>)[lang] || link.ru;
}

// Конфигурация всех баннеров (компактные 728×150, спокойные цвета)
export const AD_BANNERS: AdBanner[] = [
  // Veles — для статей по алготрейдингу (RU)
  {
    id: 'veles-algo',
    title: 'Veles: Торговые боты',
    subtitle: 'Автоматизируй торговлю на криптобиржах',
    cta: 'Попробовать →',
    link: getReferralLink('veles', 'ru'),
    categories: ['algo-trading'],
    languages: ['ru'],
    priority: 10,
    colors: {
      bgStart: '#1A1F2E',
      bgEnd: '#2D7A6E',
      text: '#E5E5E5',
      ctaBg: '#00D800',
      ctaText: '#1A202C',
      border: '#3CBCFC',
    },
  },

  // Bybit — универсальный баннер
  {
    id: 'bybit-general',
    title: 'Bybit: Криптобиржа',
    subtitle: 'Спот, фьючерсы, низкие комиссии',
    cta: 'Регистрация →',
    link: getReferralLink('bybit', 'ru'),
    languages: ['ru', 'en', 'es'],
    priority: 5,
    colors: {
      bgStart: '#1E1E2F',
      bgEnd: '#2D3748',
      text: '#E5E5E5',
      ctaBg: '#3CBCFC',
      ctaText: '#1A202C',
      border: '#00D800',
    },
  },

  // FinBazar — для фундаментального анализа
  {
    id: 'finbazar-fundamental',
    title: 'FinBazar: Ончейн',
    subtitle: 'Аналитика и сигналы для трейдера',
    cta: 'Инструменты →',
    link: getReferralLink('finbazar', 'ru'),
    categories: ['fundamental-analysis', 'crypto'],
    languages: ['ru'],
    priority: 8,
    colors: {
      bgStart: '#0F2027',
      bgEnd: '#2C5364',
      text: '#E5E5E5',
      ctaBg: '#FFB347',
      ctaText: '#0F2027',
      border: '#FFD966',
    },
  },

  // BingX — для копи-трейдинга
  {
    id: 'bingx-copy',
    title: 'BingX: Копитрейдинг',
    subtitle: 'Копируй сделки успешных трейдеров',
    cta: 'Начать →',
    link: getReferralLink('bingx', 'ru'),
    categories: ['algo-trading', 'technical-analysis'],
    languages: ['ru', 'en', 'es'],
    priority: 7,
    colors: {
      bgStart: '#1A1F2E',
      bgEnd: '#2D7A6E',
      text: '#E5E5E5',
      ctaBg: '#FFD966',
      ctaText: '#1A202C',
      border: '#3CBCFC',
    },
  },

  // Default — MarketLab Academy (fallback)
  {
    id: 'default-academy',
    title: 'MarketLab Academy',
    subtitle: 'Автоматизация, сигналы, аналитика',
    cta: 'Библиотека →',
    link: '/{lang}/library/',
    priority: 0,
    languages: ['ru', 'en', 'es'],
    colors: {
      bgStart: '#2D3748',
      bgEnd: '#1A202C',
      text: '#E5E5E5',
      ctaBg: '#00D800',
      ctaText: '#1A202C',
      border: '#3CBCFC',
    },
  },
];

export function findBestAdBanner(category: string, lang: string = 'ru'): AdBanner {
  const langBanners = AD_BANNERS.filter(banner => {
    if (!banner.languages) return true;
    return banner.languages.includes(lang as 'ru' | 'en' | 'es');
  });

  const categoryBanners = langBanners.filter(banner => {
    if (!banner.categories) return true;
    return banner.categories.includes(category);
  });

  if (categoryBanners.length > 0) {
    return categoryBanners.sort((a, b) => (b.priority || 0) - (a.priority || 0))[0];
  }

  const defaultBanner = langBanners.find(b => b.id === 'default-academy');
  if (defaultBanner) return defaultBanner;

  return langBanners[0] || AD_BANNERS[0];
}

export function getBannerLink(banner: AdBanner, lang: string = 'ru'): string {
  if (banner.link.startsWith('/')) {
    return banner.link.replace('{lang}', lang);
  }
  return banner.link;
}
