'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { type Locale } from '@/i18n/config';
import { WhatsAppIcon } from './WhatsAppIcon';

export function VendasCTA() {
  const t = useTranslations('vendas.cta');
  const locale = useLocale() as Locale;
  const whatsappUrl = buildWhatsAppUrl({ locale });

  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_120%_at_50%_0%,rgba(59,130,246,0.18),transparent_70%),radial-gradient(40%_80%_at_50%_100%,rgba(245,178,90,0.08),transparent_70%)]"
      />
      <div className="container-tight relative">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="heading-1 font-display text-foreground">{t('title')}</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            {t('subtitle')}
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-base gap-3 bg-[#25D366] text-white hover:bg-[#20BD5A] ring-1 ring-white/10 shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {t('button')}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
