import { Locale } from '@/i18n/config';

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface WhatsAppMessageConfig {
  locale: Locale;
  segment?: string;
  utm?: UTMParams;
}

export const WHATSAPP_NUMBER = '5521999366784';

const messages: Record<Locale, { default: string; segment: string }> = {
  pt: {
    default: 'Olá! Quero saber mais sobre as soluções da Seabra Solutions.',
    segment:
      'Olá! Quero uma demonstração da solução para {segment}. {origin}',
  },
  es: {
    default: '¡Hola! Quiero saber más sobre las soluciones de Seabra Solutions.',
    segment:
      '¡Hola! Quiero una demostración de la solución para {segment}. {origin}',
  },
  en: {
    default: 'Hello! I want to know more about Seabra Solutions.',
    segment: 'Hello! I want a demo of the {segment} solution. {origin}',
  },
};

const segmentNames: Record<Locale, Record<string, string>> = {
  pt: {
    'bovinos-leite': 'Bovinos Leiteiros',
    'bovinos-corte': 'Bovinos de Corte',
    'caprinos-leite': 'Caprinos Leiteiros',
    'caprinos-corte': 'Caprinos de Corte',
    'ovinos-leite': 'Ovinos Leiteiros',
    'ovinos-corte': 'Ovinos de Corte',
  },
  es: {
    'bovinos-leite': 'Bovinos de Leche',
    'bovinos-corte': 'Bovinos de Carne',
    'caprinos-leite': 'Caprinos Lecheros',
    'caprinos-corte': 'Caprinos de Carne',
    'ovinos-leite': 'Ovinos Lecheros',
    'ovinos-corte': 'Ovinos de Carne',
  },
  en: {
    'bovinos-leite': 'Dairy Cattle',
    'bovinos-corte': 'Beef Cattle',
    'caprinos-leite': 'Dairy Goats',
    'caprinos-corte': 'Meat Goats',
    'ovinos-leite': 'Dairy Sheep',
    'ovinos-corte': 'Meat Sheep',
  },
};

function formatOrigin(utm?: UTMParams, locale?: Locale): string {
  if (!utm?.utm_source) return '';

  const labels: Record<Locale, string> = {
    pt: 'Origem',
    es: 'Origen',
    en: 'Source',
  };

  const label = labels[locale || 'pt'];
  const parts = [utm.utm_source];
  if (utm.utm_campaign) parts.push(utm.utm_campaign);

  return `${label}: ${parts.join(' / ')}`;
}

export function buildWhatsAppMessage(config: WhatsAppMessageConfig): string {
  const { locale, segment, utm } = config;

  if (!segment) {
    return messages[locale].default;
  }

  const segmentName = segmentNames[locale][segment] || segment;
  const origin = formatOrigin(utm, locale);

  return messages[locale].segment
    .replace('{segment}', segmentName)
    .replace('{origin}', origin)
    .trim();
}

export function buildWhatsAppUrl(config: WhatsAppMessageConfig): string {
  const message = buildWhatsAppMessage(config);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getUTMFromUrl(): UTMParams {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_content: params.get('utm_content') || undefined,
    utm_term: params.get('utm_term') || undefined,
  };
}
