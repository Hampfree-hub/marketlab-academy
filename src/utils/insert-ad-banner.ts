// Автоматическая вставка реферального баннера после N-го H2
// Подключается в BlogPost.astro

export function initAdBannerInsertion(category: string, lang: string, h2Index = 1) {
  if (typeof document === 'undefined') return;
  
  // Ждём загрузки контента
  requestAnimationFrame(() => {
    const article = document.querySelector('article .prose');
    if (!article) return;
    
    // Находим все H2 в статье
    const h2s = article.querySelectorAll('h2');
    if (h2s.length <= h2Index) return; // Недостаточно H2
    
    const targetH2 = h2s[h2Index];
    
    // Создаём контейнер баннера
    const bannerContainer = document.createElement('div');
    bannerContainer.className = 'in-article-ad-container';
    bannerContainer.style.cssText = `
      width: 100%;
      max-width: 1200px;
      margin: 3rem auto;
      padding: 0 1rem;
    `;
    
    // Данные для баннера (можно расширить)
    const bannerData = getBannerForCategory(category, lang);
    
    bannerContainer.innerHTML = `
      <a
        href="${bannerData.link}"
        target="_blank"
        rel="nofollow sponsored"
        style="
          display: block;
          background: linear-gradient(135deg, ${bannerData.colors.bgStart}, ${bannerData.colors.bgEnd});
          border: 4px solid ${bannerData.colors.border};
          border-radius: 8px;
          padding: 2rem;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
        "
        onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.3)'"
        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'"
      >
        <div style="position: relative; z-index: 2; text-align: center;">
          <h3 style="
            font-family: 'Press Start 2P', monospace;
            font-size: clamp(1rem, 2vw + 0.5rem, 1.5rem);
            color: ${bannerData.colors.text};
            margin: 0 0 1rem 0;
            line-height: 1.4;
            text-transform: uppercase;
          ">${bannerData.title}</h3>
          <p style="
            font-family: 'JetBrains Mono', monospace;
            font-size: clamp(0.85rem, 1.5vw + 0.5rem, 1.1rem);
            color: ${bannerData.colors.text};
            margin: 0 0 1.5rem 0;
            opacity: 0.9;
            line-height: 1.5;
          ">${bannerData.subtitle}</p>
          <span style="
            display: inline-block;
            font-family: 'Press Start 2P', monospace;
            font-size: clamp(0.75rem, 1.2vw + 0.5rem, 1rem);
            background: ${bannerData.colors.ctaBg};
            color: ${bannerData.colors.ctaText};
            padding: 0.75rem 1.5rem;
            border: 2px solid #000;
            border-radius: 4px;
            box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
            text-transform: uppercase;
            font-weight: bold;
          ">${bannerData.cta}</span>
        </div>
        <div style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.05) 1px,
            transparent 1px,
            transparent 4px
          );
          pointer-events: none;
          z-index: 1;
        "></div>
      </a>
    `;
    
    // Вставляем баннер после целевого H2
    targetH2.parentNode?.insertBefore(bannerContainer, targetH2.nextSibling);
  });
}

// Простая функция выбора баннера по категории
function getBannerForCategory(category: string, lang: string) {
  // Veles для algo-trading
  if (category === 'algo-trading' && lang === 'ru') {
    return {
      title: 'Veles: Торговые боты для крипто',
      subtitle: 'Автоматизируй торговлю на Bybit, BingX, Bitget',
      cta: 'Попробовать Veles →',
      link: 'https://veles.finance/invite/washmallay',
      colors: {
        bgStart: '#1A1F2E',
        bgEnd: '#2D7A6E',
        text: '#FFFFFF',
        ctaBg: '#FFD966',
        ctaText: '#1A1F2E',
        border: '#FFB347',
      },
    };
  }
  
  // Bybit для остальных
  const bybitLinks: Record<string, string> = {
    ru: 'https://www.bybit.com/ru-RU/invite?ref=PWMD24',
    en: 'https://www.bybit.com/en/invite?ref=PWMD24',
    es: 'https://www.bybit.com/es/invite?ref=PWMD24',
  };
  
  return {
    title: 'Bybit: Торгуй крипто с низкими комиссиями',
    subtitle: 'Спот, фьючерсы, торговые боты. Ликвидность №1',
    cta: 'Регистрация на Bybit →',
    link: bybitLinks[lang] || bybitLinks.ru,
    colors: {
      bgStart: '#F83800',
      bgEnd: '#1E1E2F',
      text: '#FFFFFF',
      ctaBg: '#FCFC00',
      ctaText: '#000000',
      border: '#00D8FC',
    },
  };
}
