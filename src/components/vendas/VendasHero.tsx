'use client';

import { useTranslations } from 'next-intl';
import { ShoppingBag } from 'lucide-react';

export function VendasHero() {
  const t = useTranslations('vendas.hero');

  return (
    <section className="relative overflow-hidden pt-32 pb-16 bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.10),transparent_70%),radial-gradient(40%_40%_at_85%_90%,rgba(245,178,90,0.06),transparent_70%)]"
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      <div className="container-tight relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <ShoppingBag className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">{t('badge')}</span>
        </div>
        <h1 className="heading-display font-display text-foreground max-w-3xl mx-auto">
          {t('title')}
        </h1>
        <p className="body-large max-w-2xl mx-auto text-muted-foreground">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}
