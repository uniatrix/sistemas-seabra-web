'use client';

import { useTranslations } from 'next-intl';
import { Building2 } from 'lucide-react';

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section className="section-padding relative overflow-hidden" id="about">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/0 pointer-events-none" />

      <div className="container-tight relative">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Building2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('badge')}</span>
          </div>

          {/* Title */}
          <h2 className="heading-2 text-white">
            {t('title')}
          </h2>

          {/* Body paragraphs */}
          <div className="space-y-6">
            <p className="body-large text-muted-foreground leading-relaxed">
              {t('p1')}
            </p>
            <p className="body-large text-muted-foreground leading-relaxed">
              {t('p2')}
            </p>
            <p className="body-large text-muted-foreground leading-relaxed">
              {t('p3')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
