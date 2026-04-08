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
  bitmex: 'https://www.bitmex.com/app/register/LcYXS3',
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

  // Bybit — универсальный баннер (основной для algo-trading)
  {
    id: 'bybit-general',
    title: 'Bybit: Crypto Exchange',
    subtitle: 'Spot, futures, low fees',
    cta: 'Sign up →',
    link: getReferralLink('bybit', 'ru'),
    languages: ['ru', 'en', 'es'],
    priority: 10,
    colors: {
      bgStart: '#1A1D26',    // Тёмный серо-чёрный
      bgEnd: '#0D0E12',      // Почти чёрный
      text: '#FFFFFF',       // Белый текст
      ctaBg: '#F7A600',      // Фирменный оранжевый
      ctaText: '#000000',    // Чёрный текст на оранжевом
      border: '#F7A600',     // Оранжевая рамка
    },
  },

  // Bybit — альтернативный баннер (для diversification)
  {
    id: 'bybit-alternative',
    title: 'Bybit: Trade Crypto',
    subtitle: 'Low fees, high liquidity',
    cta: 'Get started →',
    link: getReferralLink('bybit', 'ru'),
    languages: ['ru', 'en', 'es'],
    priority: 8,
    colors: {
      bgStart: '#0D0E12',    // Почти чёрный
      bgEnd: '#1A1D26',      // Тёмный серо-чёрный
      text: '#E5E5E5',       // Светло-серый текст
      ctaBg: '#F7A600',      // Оранжевый
      ctaText: '#000000',
      border: '#F7A600',
    },
  },

  // FinBazar — для фундаментального анализа (только RU, СНГ-аудитория)
  {
    id: 'finbazar-fundamental',
    title: 'FinBazar: On-Chain',
    subtitle: 'Analytics and signals for traders',
    cta: 'Инструменты →',
    link: getReferralLink('finbazar', 'ru'),
    categories: ['fundamental-analysis'],
    languages: ['ru'],  // Только русская аудитория!
    priority: 10,
    colors: {
      bgStart: '#064E3B',    // Тёмно-изумрудный
      bgEnd: '#022C22',      // Очень тёмный зелёный
      text: '#E5E5E5',       // Светло-серый
      ctaBg: '#10B981',      // Изумрудный
      ctaText: '#FFFFFF',
      border: '#34D399',     // Светло-изумрудная рамка
    },
  },

  // Bybit — универсальный баннер (для crypto и fallback)
  {
    id: 'bybit-crypto',
    title: 'Bybit: Crypto Exchange',
    subtitle: 'Spot, futures, low fees',
    cta: 'Sign up →',
    link: getReferralLink('bybit', 'ru'),
    categories: ['crypto'],
    languages: ['ru', 'en', 'es'],
    priority: 10,
    colors: {
      bgStart: '#1A1D26',    // Тёмный серо-чёрный
      bgEnd: '#0D0E12',      // Почти чёрный
      text: '#FFFFFF',       // Белый текст
      ctaBg: '#F7A600',      // Фирменный оранжевый
      ctaText: '#000000',    // Чёрный текст на оранжевом
      border: '#F7A600',     // Оранжевая рамка
    },
  },

  // BingX — для технического анализа
  {
    id: 'bingx-general',
    title: 'BingX: Crypto Exchange',
    subtitle: 'Social trading, low fees',
    cta: 'Get started →',
    link: getReferralLink('bingx', 'ru'),
    categories: ['technical-analysis'],
    languages: ['ru', 'en', 'es'],
    priority: 10,
    colors: {
      bgStart: '#0A0E27',    // Тёмно-синий
      bgEnd: '#1A237E',      // Насыщенный синий
      text: '#FFFFFF',       // Белый текст
      ctaBg: '#00D4FF',      // Ярко-голубой
      ctaText: '#0A0E27',    // Тёмный текст на голубом
      border: '#00B4D8',     // Голубая рамка
    },
  },

  // Bitget — универсальный fallback
  {
    id: 'bitget-general',
    title: 'Bitget: Crypto Exchange',
    subtitle: 'Futures, spot, copy trading',
    cta: 'Sign up →',
    link: getReferralLink('bitget', 'ru'),
    languages: ['ru', 'en', 'es'],
    priority: 5,
    colors: {
      bgStart: '#0B1E1A',    // Тёмный бирюзовый
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

// Переводы для баннеров (используются в JavaScript для автовставки)
export const BANNER_TRANSLATIONS: Record<string, {
  title: { ru: string; en: string; es: string };
  subtitle: { ru: string; en: string; es: string };
  cta: { ru: string; en: string; es: string };
  colors: AdBanner['colors'];
  link?: string | { ru: string; en: string; es: string };
}> = {
  'veles-algo': {
    title: { ru: 'Veles: Торговые боты', en: 'Veles: Trading Bots', es: 'Veles: Bots de Trading' },
    subtitle: { ru: 'Автоматизируй торговлю на криптобиржах', en: 'Automate trading on crypto exchanges', es: 'Automatiza el trading en criptobolsas' },
    cta: { ru: 'Попробовать', en: 'Try now', es: 'Probar' },
    link: 'https://veles.finance/invite/washmallay',
    colors: { bgStart: '#2D1B69', bgEnd: '#1A0F3D', text: '#E5E5E5', ctaBg: '#F97316', ctaText: '#FFFFFF', border: '#8B5CF6' }
  },
  'bybit-general': {
    title: { ru: 'Bybit: Криптобиржа', en: 'Bybit: Crypto Exchange', es: 'Bybit: Exchange Crypto' },
    subtitle: { ru: 'Спот, фьючерсы, низкие комиссии', en: 'Spot, futures, low fees', es: 'Spot, futuros, bajas comisiones' },
    cta: { ru: 'Регистрация', en: 'Sign up', es: 'Registrarse' },
    link: { ru: 'https://www.bybit.com/ru-RU/invite?ref=PWMD24', en: 'https://www.bybit.com/en/invite?ref=PWMD24', es: 'https://www.bybit.com/es/invite?ref=PWMD24' },
    colors: { bgStart: '#1A1D26', bgEnd: '#0D0E12', text: '#FFFFFF', ctaBg: '#F7A600', ctaText: '#000000', border: '#F7A600' }
  },
  'finbazar-fundamental': {
    title: { ru: 'FinBazar: On-Chain', en: 'FinBazar: On-Chain', es: 'FinBazar: On-Chain' },
    subtitle: { ru: 'Аналитика и сигналы для трейдеров', en: 'Analytics and signals for traders', es: 'Analítica y señales para traders' },
    cta: { ru: 'Инструменты', en: 'Tools', es: 'Herramientas' },
    link: 'https://finbazar.ru/profile/Hampfree/?ref=9483974260',
    colors: { bgStart: '#064E3B', bgEnd: '#022C22', text: '#E5E5E5', ctaBg: '#10B981', ctaText: '#FFFFFF', border: '#34D399' }
  },
  'bingx-general': {
    title: { ru: 'BingX: Криптобиржа', en: 'BingX: Crypto Exchange', es: 'BingX: Exchange Crypto' },
    subtitle: { ru: 'Социальный трейдинг, низкие комиссии', en: 'Social trading, low fees', es: 'Trading social, bajas comisiones' },
    cta: { ru: 'Начать', en: 'Get started', es: 'Comenzar' },
    link: 'https://bingxdao.com/invite/CUBDBG/',
    colors: { bgStart: '#0A0E27', bgEnd: '#1A237E', text: '#FFFFFF', ctaBg: '#00D4FF', ctaText: '#0A0E27', border: '#00B4D8' }
  },
  'bitget-general': {
    title: { ru: 'Bitget: Криптобиржа', en: 'Bitget: Crypto Exchange', es: 'Bitget: Exchange Crypto' },
    subtitle: { ru: 'Фьючерсы, спот, копи-трейдинг', en: 'Futures, spot, copy trading', es: 'Futuros, spot, copy trading' },
    cta: { ru: 'Регистрация', en: 'Sign up', es: 'Registrarse' },
    link: { ru: 'https://www.bitget.com/ru/referral/register?from=referral&clacCode=23EHR2VD', en: 'https://www.bitget.com/en/referral/register?from=referral&clacCode=23EHR2VD', es: 'https://www.bitget.com/es/referral/register?from=referral&clacCode=23EHR2VD' },
    colors: { bgStart: '#0B1E1A', bgEnd: '#051410', text: '#FFFFFF', ctaBg: '#00C9A7', ctaText: '#000000', border: '#14D0BB' }
  },

  // BitMEX — для Ginarea-статей (фьючерсы, мультибиржа)
  'bitmex-algo': {
    title: { ru: 'BitMEX: Криптобиржа', en: 'BitMEX: Crypto Exchange', es: 'BitMEX: Exchange Crypto' },
    subtitle: { ru: 'Фьючерсы, низкие комиссии, высокая ликвидность', en: 'Futures, low fees, high liquidity', es: 'Futuros, bajas comisiones, alta liquidez' },
    cta: { ru: 'Регистрация', en: 'Sign up', es: 'Registrarse' },
    link: 'https://www.bitmex.com/app/register/LcYXS3',
    colors: {
      bgStart: '#1A0A0A',     // Тёмный с красным оттенком
      bgEnd: '#0D0606',       // Почти чёрный с тёплым тоном
      text: '#FFFFFF',        // Белый текст
      ctaBg: '#FF0201',       // Фирменный красный BitMEX
      ctaText: '#FFFFFF',     // Белый текст на красном
      border: '#FF0201',      // Красная рамка (бренд BitMEX)
    }
  },

  'default-academy': {
    title: { ru: 'MarketLab Academy', en: 'MarketLab Academy', es: 'MarketLab Academy' },
    subtitle: { ru: 'Автоматизация, сигналы, аналитика', en: 'Automation, signals, analytics', es: 'Automatización, señales, analítica' },
    cta: { ru: 'Библиотека', en: 'Library', es: 'Biblioteca' },
    link: '/{lang}/library/',
    colors: { bgStart: '#2D3748', bgEnd: '#1A202C', text: '#E5E5E5', ctaBg: '#00D800', ctaText: '#1A202C', border: '#3CBCFC' }
  }
};

/**
 * Получить баннер для статьи с учётом категории, языка и slug
 * Используется для автовставки в BlogPost.astro
 */
export function getBannerForArticle(category: string, lang: string, slug: string) {
  // Логика выбора баннера с специальными правилами
  let bannerId = 'bybit-general'; // fallback

  if (category === 'algo-trading') {
    // Ginarea-статьи → BitMEX (они упоминают BitMEX как одну из бирж), Veles → Veles
    const isGinarea = slug.includes('ginarea');
    bannerId = isGinarea ? 'bitmex-algo' : 'veles-algo';
  } else if (category === 'fundamental-analysis' && lang === 'ru') {
    bannerId = 'finbazar-fundamental'; // Только для RU!
  } else if (category === 'fundamental-analysis' && (lang === 'en' || lang === 'es')) {
    bannerId = 'bybit-general'; // EN/ES → Bybit
  } else if (category === 'crypto') {
    // Баланс: 50% Bybit, 50% Bitget
    bannerId = (slug.includes('staking') || slug.includes('defi') || slug.includes('token'))
      ? 'bitget-general'
      : 'bybit-general';
  } else if (category === 'technical-analysis') {
    // Баланс: 50% BingX, 50% Bitget
    bannerId = (slug.includes('rsi') || slug.includes('macd') || slug.includes('bollinger'))
      ? 'bingx-general'
      : 'bitget-general';
  } else {
    // fallback: Bitget → Bybit → BingX
    bannerId = 'bitget-general';
  }

  const banner = BANNER_TRANSLATIONS[bannerId];
  if (!banner) {
    console.error(`[getBannerForArticle] Banner "${bannerId}" not found`);
    return getBannerForArticle('algo-trading', lang, slug); // fallback к algo-trading
  }

  const link = banner.link
    ? (typeof banner.link === 'string'
      ? banner.link
      : (banner.link[lang as 'ru' | 'en' | 'es'] || banner.link.ru))
    : '#';

  return {
    id: bannerId,
    title: banner.title[lang as 'ru' | 'en' | 'es'] || banner.title.ru,
    subtitle: banner.subtitle[lang as 'ru' | 'en' | 'es'] || banner.subtitle.ru,
    cta: banner.cta[lang as 'ru' | 'en' | 'es'] || banner.cta.ru,
    link: link,
    colors: banner.colors
  };
}
