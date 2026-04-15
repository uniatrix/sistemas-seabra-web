'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { type Locale } from '@/i18n/config';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function ProofsSection() {
  const t = useTranslations('proofs');
  const locale = useLocale() as Locale;
  const { ref, isVisible } = useScrollAnimation();

  const whatsappUrl = buildWhatsAppUrl({
    locale,
    utm: { utm_source: 'site', utm_campaign: 'demo' },
  });

  return (
    <section className="section-padding" id="demo" ref={ref}>
      <div className="container-wide">
        <div className={`text-center space-y-4 mb-12 scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="heading-2 text-gray-900">{t('title')}</h2>
          <p className="body-large max-w-2xl mx-auto text-muted-foreground">{t('subtitle')}</p>
        </div>

        <div
          className={`max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.3fr,1fr] items-center scroll-fade-up scroll-fade-up-delay-2 ${
            isVisible ? 'visible' : ''
          }`}
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg">
            <Image
              src="/images/logo.png"
              alt={t('imageAlt')}
              fill
              className="object-contain p-12"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>

          <div className="space-y-6">
            <h3 className="heading-3 text-gray-900">{t('ctaTitle')}</h3>
            <p className="body-large text-muted-foreground">{t('ctaMessage')}</p>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <Button className="rounded-full px-8 h-14 text-base gap-2 w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:-translate-y-0.5">
                <WhatsAppIcon className="h-5 w-5" />
                {t('ctaButton')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>

            <p className="text-xs text-gray-500">{t('ctaNote')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
