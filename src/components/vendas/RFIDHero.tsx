'use client';

import { useTranslations } from 'next-intl';
import { Cpu } from 'lucide-react';

export function RFIDHero() {
  const t = useTranslations('vendas.produtos');

  return (
    <section className="relative pt-32 pb-12 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="container-tight relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
          <Cpu className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">{t('hero.badge')}</span>
        </div>
        <h1 className="heading-display text-gray-900 max-w-3xl mx-auto">{t('hero.title')}</h1>
        <p className="body-large max-w-2xl mx-auto text-muted-foreground">{t('hero.subtitle')}</p>
      </div>
    </section>
  );
}
