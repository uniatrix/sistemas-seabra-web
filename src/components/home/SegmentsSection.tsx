'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, Layers, Beef, Sprout, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const journeys = [
  {
    key: 'smallRuminants',
    href: '/pequenos-ruminantes',
    icon: Sprout,
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
    hoverBg: 'group-hover:bg-emerald-500/20',
    borderAccent: 'group-hover:border-emerald-500/40',
    glowColor: 'group-hover:shadow-emerald-500/15',
  },
  {
    key: 'beefCattle',
    href: '/bovinos-corte',
    icon: Beef,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-500/10',
    hoverBg: 'group-hover:bg-red-500/20',
    borderAccent: 'group-hover:border-red-500/40',
    glowColor: 'group-hover:shadow-red-500/15',
  },
];

export function SegmentsSection() {
  const t = useTranslations();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden" id="segments" ref={ref}>
      <div className="container-wide relative">
        <div className={`text-center space-y-4 mb-12 scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('journey.badge')}</span>
          </div>

          <h2 className="heading-2 text-gray-900">{t('journey.title')}</h2>
          <p className="body-large max-w-2xl mx-auto text-muted-foreground">
            {t('journey.subtitle')}
          </p>
        </div>

        <div
          className={`grid gap-6 md:grid-cols-2 max-w-4xl mx-auto scroll-fade-up scroll-fade-up-delay-2 ${
            isVisible ? 'visible' : ''
          }`}
        >
          {journeys.map((journey) => (
            <Link key={journey.key} href={journey.href} className="group">
              <Card
                className={cn(
                  'h-full border-gray-200 bg-white shadow-sm',
                  'transition-all duration-300 ease-out',
                  'hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl',
                  journey.borderAccent,
                  journey.glowColor
                )}
              >
                <CardContent className="p-8 flex flex-col h-full min-h-[260px]">
                  <div className="mb-6">
                    <div
                      className={cn(
                        'relative h-16 w-16 rounded-2xl flex items-center justify-center',
                        'transition-all duration-300',
                        journey.iconBg,
                        journey.hoverBg,
                        'group-hover:scale-110 group-hover:rotate-3'
                      )}
                    >
                      <journey.icon
                        className={cn(
                          'h-8 w-8 relative z-10 transition-transform duration-300',
                          journey.iconColor,
                          'group-hover:scale-110'
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {t(`journey.${journey.key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {t(`journey.${journey.key}.subtitle`)}
                    </p>

                    <div className="mt-auto flex items-center gap-2 text-sm text-primary font-medium">
                      <span>{t(`journey.${journey.key}.cta`)}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Web development as separate, distinct block */}
        <div
          className={`mt-12 max-w-4xl mx-auto scroll-fade-up scroll-fade-up-delay-3 ${
            isVisible ? 'visible' : ''
          }`}
        >
          <Link href="/servicos" className="group block">
            <Card className="border-gray-200 bg-gradient-to-br from-cyan-500/5 via-white to-white hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <Code2 className="h-6 w-6 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">
                    {t('journey.webDev.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('journey.webDev.subtitle')}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-cyan-600 font-medium shrink-0">
                  <span>{t('journey.webDev.cta')}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
