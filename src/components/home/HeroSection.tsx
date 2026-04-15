'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Check, TrendingUp, Award, Code } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { type Locale } from '@/i18n/config';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// WhatsApp SVG Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale() as Locale;

  const whatsappUrl = buildWhatsAppUrl({ locale });
  const { ref, isVisible } = useScrollAnimation(0.1);

  const bullets = [t('bullet1'), t('bullet2'), t('bullet3')];

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20" ref={ref}>
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-6 scroll-fade-up ${isVisible ? 'visible' : ''}`}>
            <h1 className="heading-1 text-gray-900">
              {t('headline')}
            </h1>

            <p className="body-large max-w-lg">
              {t('subheadline')}
            </p>

            <ul className="space-y-3 pt-2">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-gray-600 text-sm">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                <Button className="rounded-full px-8 h-14 text-base gap-2 w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:-translate-y-0.5">
                  <WhatsAppIcon className="h-5 w-5" />
                  {t('cta')}
                </Button>
              </a>
              <p className="text-xs text-gray-500 mt-3">{t('responseTime')}</p>
            </div>
          </div>

          {/* Stats Cards (esconde no celular para acelerar above-the-fold) */}
          <div className={`relative hidden lg:flex justify-center lg:justify-end scroll-fade-up scroll-fade-up-delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">+30%</p>
                    <p className="text-sm text-gray-500">Produtividade média</p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-500">Funciona offline</p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Check className="h-6 w-6 text-emerald-500" />
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">&gt;15 anos</p>
                    <p className="text-sm text-gray-500">No mercado de pecuária</p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-purple-500" />
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">&gt;5 anos</p>
                    <p className="text-sm text-gray-500">Em desenvolvimento de sistemas/web</p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-cyan-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
