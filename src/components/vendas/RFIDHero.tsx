'use client';

import { useTranslations } from 'next-intl';
import { Cpu } from 'lucide-react';

export function RFIDHero() {
  const t = useTranslations('vendas.produtos.hero');

  return (
    <section className="relative overflow-hidden pt-32 pb-12 bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]"
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      <div className="container-tight relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
          <Cpu className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-400">{t('badge')}</span>
        </div>
        <h1 className="heading-display font-display text-foreground max-w-3xl mx-auto">
          {t('title')}
        </h1>
        <p className="body-large max-w-2xl mx-auto text-muted-foreground">{t('subtitle')}</p>
      </div>
    </section>
  );
}
