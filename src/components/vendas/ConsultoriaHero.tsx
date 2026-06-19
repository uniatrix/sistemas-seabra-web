'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Stethoscope } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { type Locale } from '@/i18n/config';
import { WhatsAppIcon } from './WhatsAppIcon';

export function ConsultoriaHero() {
  const t = useTranslations('vendas.consultoria.hero');
  const locale = useLocale() as Locale;
  const whatsappUrl = buildWhatsAppUrl({ locale, service: 'consultoria' });

  return (
    <section className="relative overflow-hidden pt-32 pb-16 bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.10),transparent_70%),radial-gradient(40%_40%_at_15%_90%,rgba(245,178,90,0.06),transparent_70%)]"
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      <div className="container-tight relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <Stethoscope className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">{t('badge')}</span>
        </div>
        <h1 className="heading-display font-display text-foreground max-w-3xl mx-auto">
          {t('title')}
        </h1>
        <p className="body-large max-w-2xl mx-auto text-muted-foreground">{t('subtitle')}</p>
        <div className="pt-2">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button
              size="lg"
              className="rounded-full px-8 h-14 text-base gap-2 bg-[#25D366] text-white hover:bg-[#20BD5A] ring-1 ring-white/10 shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {t('cta')}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
