/**
 * Отслеживание кликов по внешним ссылкам для GA4
 * 
 * Использование:
 * import { initOutboundTracking } from '../utils/outbound-tracking';
 * initOutboundTracking();
 */

/**
 * Инициализация отслеживания кликов по внешним ссылкам
 */
export function initOutboundTracking(): void {
  // Ждём загрузки DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupTracking);
  } else {
    setupTracking();
  }
}

/**
 * Настройка отслеживания кликов
 */
function setupTracking(): void {
  // Находим все внешние ссылки
  const externalLinks = document.querySelectorAll<HTMLAnchorElement>(
    'a[href^="http"]:not([href*="' + window.location.hostname + '"])'
  );

  // Добавляем обработчик кликов
  externalLinks.forEach((link) => {
    link.addEventListener('click', handleOutboundClick, { capture: true });
  });
}

/**
 * Обработчик клика по внешней ссылке
 */
function handleOutboundClick(event: MouseEvent): void {
  const link = event.currentTarget as HTMLAnchorElement;
  if (!link) return;

  const href = link.href;
  const text = link.textContent?.trim() || '';
  const domain = extractDomain(href);

  // Определяем тип ссылки
  const linkType = getLinkType(href, text);

  // Отправляем событие в GA4
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: 'outbound',
      event_label: 'link',
      link_url: href,
      link_text: text,
      link_domain: domain,
      link_type: linkType,
      non_interaction: false
    });
  }

  // Для внешних ссылок — открываем в новой вкладке (если не указано иное)
  if (!link.target || link.target === '_self') {
    // Не блокируем переход, но даём время на отправку события
    // GA4 отправляет события beacon'ом, так что переход не прервётся
  }
}

/**
 * Извлечение домена из URL
 */
function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return 'unknown';
  }
}

/**
 * Определение типа ссылки (реферальная, социальная, другая)
 */
function getLinkType(href: string, text: string): string {
  const referralDomains = [
    'bybit.com',
    'bingx.com',
    'bitget.com',
    'finbazar.ru',
    'veles.finance',
    'binance.com',
    'okx.com',
    'kucoin.com'
  ];

  const socialDomains = [
    'telegram.org',
    't.me',
    'twitter.com',
    'x.com',
    'youtube.com',
    'vk.com',
    'dzen.ru'
  ];

  // Проверяем реферальные ссылки
  for (const domain of referralDomains) {
    if (href.includes(domain)) {
      return 'referral';
    }
  }

  // Проверяем социальные сети
  for (const domain of socialDomains) {
    if (href.includes(domain)) {
      return 'social';
    }
  }

  // Остальные внешние ссылки
  return 'external';
}

// Автоматическая инициализация при загрузке модуля
// (можно отключить, если нужна ручная инициализация)
if (typeof window !== 'undefined') {
  initOutboundTracking();
}
