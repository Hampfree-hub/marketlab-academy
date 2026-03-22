// Конфигурация реферальных баннеров
// Все ссылки и параметры в одном месте для удобного обновления

export type AdBanner = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
  categories?: string[]; // Если не указано — показывать везде
  languages?: ('ru' | 'en' | 'es')[]; // Если не указано — все языки
  priority?: number; // Чем выше, тем приоритетнее (default: 0)
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

// Получение локализованной ссылки
export function getReferralLink(platform: keyof typeof REFERRAL_LINKS, lang: string = 'ru'): string {
  const link = REFERRAL_LINKS[platform];
  if (typeof link === 'string') return link;
  return (link as Record<string, string>)[lang] || link.ru;
}

// Конфигурация всех баннеров
export const AD_BANNERS: AdBanner[] = [
  // 1. Veles — для статей по алготрейдингу (приоритет высокий)
  {
    id: 'veles-algo',
    title: 'Veles: Торговые боты для крипто',
    subtitle: 'Автоматизируй торговлю на Bybit, BingX, Bitget. Стратегии от MarketLab',
    cta: 'Попробовать Veles →',
    link: getReferralLink('veles', 'ru'),
    categories: ['algo-trading'],
    languages: ['ru'],
    priority: 10,
    colors: {
      bgStart: '#1A1F2E',
      bgEnd: '#2D7A6E',
      text: '#FFFFFF',
      ctaBg: '#FFD966',
      ctaText: '#1A1F2E',
      border: '#FFB347',
    },
  },
  
  // 2. Bybit — универсальный баннер
  {
    id: 'bybit-general',
    title: 'Bybit: Торгуй крипто с низкими комиссиями',
    subtitle: 'Спот, фьючерсы, торговые боты. Ликвидность №1',
    cta: 'Регистрация на Bybit →',
    link: getReferralLink('bybit', 'ru'),
    languages: ['ru', 'en', 'es'],
    priority: 5,
    colors: {
      bgStart: '#F83800',
      bgEnd: '#1E1E2F',
      text: '#FFFFFF',
      ctaBg: '#FCFC00',
      ctaText: '#000000',
      border: '#00D8FC',
    },
  },
  
  // 3. FinBazar — для фундаментального анализа
  {
    id: 'finbazar-fundamental',
    title: 'FinBazar: Ончейн-аналитика и сигналы',
    subtitle: 'Данные, которых нет в TradingView. От автора MarketLab',
    cta: 'Смотреть инструменты →',
    link: getReferralLink('finbazar', 'ru'),
    categories: ['fundamental-analysis', 'crypto'],
    languages: ['ru'],
    priority: 8,
    colors: {
      bgStart: '#0F2027',
      bgEnd: '#2C5364',
      text: '#FFFFFF',
      ctaBg: '#FFB347',
      ctaText: '#0F2027',
      border: '#FFD966',
    },
  },
  
  // 4. BingX — для копи-трейдинга
  {
    id: 'bingx-copy',
    title: 'BingX: Копируй сделки профи',
    subtitle: 'Социальный трейдинг. Стратегии с доходностью 35%+',
    cta: 'Начать копировать →',
    link: getReferralLink('bingx', 'ru'),
    categories: ['algo-trading', 'technical-analysis'],
    languages: ['ru', 'en', 'es'],
    priority: 7,
    colors: {
      bgStart: '#1A1F2E',
      bgEnd: '#2D7A6E',
      text: '#FFFFFF',
      ctaBg: '#FFD966',
      ctaText: '#1A1F2E',
      border: '#FFB347',
    },
  },
  
  // 5. Default — MarketLab Academy (fallback)
  {
    id: 'default-academy',
    title: 'MarketLab Academy: Умный трейдинг',
    subtitle: 'Автоматизация, сигналы, аналитика от практиков',
    cta: 'Изучить библиотеку →',
    link: '/{lang}/library/',
    priority: 0,
    colors: {
      bgStart: '#2D3748',
      bgEnd: '#1A202C',
      text: '#FFFFFF',
      ctaBg: '#00D8FC',
      ctaText: '#1A202C',
      border: '#FFB347',
    },
  },
];

// Выбор лучшего баннера для статьи
export function findBestAdBanner(
  category: string,
  lang: string = 'ru'
): AdBanner {
  // Фильтруем баннеры по языку
  const langBanners = AD_BANNERS.filter(banner => {
    if (!banner.languages) return true;
    return banner.languages.includes(lang as 'ru' | 'en' | 'es');
  });
  
  // Ищем баннеры по категории
  const categoryBanners = langBanners.filter(banner => {
    if (!banner.categories) return true;
    return banner.categories.includes(category);
  });
  
  // Возвращаем баннер с наивысшим приоритетом
  if (categoryBanners.length > 0) {
    return categoryBanners.sort((a, b) => (b.priority || 0) - (a.priority || 0))[0];
  }
  
  // Если нет по категории — возвращаем default или первый доступный
  const defaultBanner = langBanners.find(b => b.id === 'default-academy');
  if (defaultBanner) return defaultBanner;
  
  return langBanners[0] || AD_BANNERS[0];
}

// Получение локализованной ссылки для баннера
export function getBannerLink(banner: AdBanner, lang: string = 'ru'): string {
  if (banner.link.startsWith('/')) {
    return banner.link.replace('{lang}', lang);
  }
  return banner.link;
}
