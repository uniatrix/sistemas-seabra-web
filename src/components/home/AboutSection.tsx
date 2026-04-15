'use client';

import { useTranslations } from 'next-intl';
import { Building2, Calendar, Wifi, WifiOff, Headset } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const highlights = [
  { icon: Calendar, value: '2011', labelKey: 'highlightExperience' },
  { icon: WifiOff, value: '100%', labelKey: 'highlightOffline' },
  { icon: Headset, value: '24h', labelKey: 'highlightSupport' },
];

export function AboutSection() {
  const t = useTranslations('about');
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden bg-gray-50 border-y border-gray-200" id="about" ref={ref}>
      <div className="container-wide relative">
        <div className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t('badge')}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="heading-2 text-gray-900 text-center mb-12">
            {t('title')}
          </h2>

          {/* Two-column layout: text left, cards stacked right */}
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Left: Text content */}
            <div className="flex-1 space-y-6">
              <p className="body-large text-muted-foreground leading-relaxed text-justify">
                {t('p1')}
              </p>
              <p className="body-large text-muted-foreground leading-relaxed text-justify">
                {t('p2')}
              </p>
              <p className="body-large text-muted-foreground leading-relaxed text-justify">
                {t('p3')}
              </p>
            </div>

            {/* Right: Cards stacked vertically */}
            <div className={`flex flex-col gap-3 md:shrink-0 scroll-fade-up scroll-fade-up-delay-2 ${isVisible ? 'visible' : ''}`}>
              {highlights.map((item) => (
                <div
                  key={item.labelKey}
                  className="inline-flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900 leading-tight">{item.value}</p>
                    <p className="text-[11px] text-gray-500">{t(item.labelKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
