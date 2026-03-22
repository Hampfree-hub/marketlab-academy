// Конфигурация реферальных баннеров
// Все ссылки и параметры в одном месте для удобного обновления
// Цвета подобраны по брендбукам + адаптированы для 8-bit стиля блога

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

// Конфигурация всех баннеров (8-bit стиль, спокойные цвета)
export const AD_BANNERS: AdBanner[] = [
  // Veles — для статей по алготрейдингу (все языки)
  {
    id: 'veles-algo',
    title: 'Veles: Trading Bots',
    subtitle: 'Automate trading on crypto exchanges',
    cta: 'Try now →',
    link: getReferralLink('veles', 'ru'),
    categories: ['algo-trading'],
    languages: ['ru', 'en', 'es'],
    priority: 10,
    colors: {
      bgStart: '#2D1B69',    // Глубокий фиолетовый
      bgEnd: '#1A0F3D',      // Тёмный индиго
      text: '#E5E5E5',       // Светло-серый текст
      ctaBg: '#F97316',      // Приглушённый оранжевый
      ctaText: '#FFFFFF',    // Белый текст кнопки
      border: '#8B5CF6',     // Светло-фиолетовая рамка
    },
  },

  // Bybit — универсальный баннер
  {
    id: 'bybit-general',
    title: 'Bybit: Crypto Exchange',
    subtitle: 'Spot, futures, low fees',
    cta: 'Sign up →',
    link: getReferralLink('bybit', 'ru'),
    languages: ['ru', 'en', 'es'],
    priority: 5,
    colors: {
      bgStart: '#1A1D26',    // Тёмный серо-чёрный
      bgEnd: '#0D0E12',      // Почти чёрный
      text: '#FFFFFF',       // Белый текст
      ctaBg: '#F7A600',      // Фирменный оранжевый
      ctaText: '#000000',    // Чёрный текст на оранжевом
      border: '#F7A600',     // Оранжевая рамка
    },
  },

  // FinBazar — для фундаментального анализа
  {
    id: 'finbazar-fundamental',
    title: 'FinBazar: On-Chain',
    subtitle: 'Analytics and signals for traders',
    cta: 'Tools →',
    link: getReferralLink('finbazar', 'ru'),
    categories: ['fundamental-analysis', 'crypto'],
    languages: ['ru', 'en', 'es'],
    priority: 8,
    colors: {
      bgStart: '#064E3B',    // Тёмно-изумрудный
      bgEnd: '#022C22',      // Очень тёмный зелёный
      text: '#E5E5E5',       // Светло-серый
      ctaBg: '#10B981',      // Изумрудный
      ctaText: '#FFFFFF',
      border: '#34D399',     // Светло-изумрудная рамка
    },
  },

  // BingX — для копи-трейдинга
  {
    id: 'bingx-copy',
    title: 'BingX: Copy Trading',
    subtitle: 'Copy successful traders',
    cta: 'Start →',
    link: getReferralLink('bingx', 'ru'),
    categories: ['algo-trading', 'technical-analysis'],
    languages: ['ru', 'en', 'es'],
    priority: 7,
    colors: {
      bgStart: '#0A0E27',    // Тёмно-синий
      bgEnd: '#1A237E',      // Насыщенный синий
      text: '#FFFFFF',       // Белый текст
      ctaBg: '#00D4FF',      // Ярко-голубой
      ctaText: '#0A0E27',    // Тёмный текст на голубом
      border: '#00B4D8',     // Голубая рамка
    },
  },

  // Bitget — дополнительный баннер
  {
    id: 'bitget-copy',
    title: 'Bitget: Copy Trading',
    subtitle: 'Copy pro traders instantly',
    cta: 'Start →',
    link: getReferralLink('bitget', 'ru'),
    categories: ['algo-trading', 'technical-analysis'],
    languages: ['ru', 'en', 'es'],
    priority: 6,
    colors: {
      bgStart: '#0B1E1A',    // Тёмный бирюзовый фон
      bgEnd: '#051410',      // Очень тёмный
      text: '#FFFFFF',       // Белый текст
      ctaBg: '#00C9A7',      // Фирменный бирюзовый
      ctaText: '#000000',    // Чёрный текст
      border: '#14D0BB',     // Светло-бирюзовая рамка
    },
  },

  // Default — MarketLab Academy (fallback)
  {
    id: 'default-academy',
    title: 'MarketLab Academy',
    subtitle: 'Automation, signals, analytics',
    cta: 'Library →',
    link: '/{lang}/library/',
    priority: 0,
    languages: ['ru', 'en', 'es'],
    colors: {
      bgStart: '#2D3748',    // Тёмный серо-синий
      bgEnd: '#1A202C',      // Тёмный серый
      text: '#E5E5E5',       // Светло-серый
      ctaBg: '#00D800',      // NES зелёный
      ctaText: '#1A202C',
      border: '#3CBCFC',     // NES синий
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
