'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, Milk, Beef, Layers, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const segments = [
  {
    key: 'cattleDairy',
    href: '/solucoes/bovinos/leite',
    icon: Milk,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    hoverBg: 'group-hover:bg-blue-500/20',
    borderAccent: 'group-hover:border-blue-500/30',
    glowColor: 'group-hover:shadow-blue-500/10',
  },
  {
    key: 'cattleBeef',
    href: '/solucoes/bovinos/corte',
    icon: Beef,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-500/10',
    hoverBg: 'group-hover:bg-red-500/20',
    borderAccent: 'group-hover:border-red-500/30',
    glowColor: 'group-hover:shadow-red-500/10',
  },
  {
    key: 'goatDairy',
    href: '/solucoes/caprinos/leite',
    icon: Milk,
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
    hoverBg: 'group-hover:bg-emerald-500/20',
    borderAccent: 'group-hover:border-emerald-500/30',
    glowColor: 'group-hover:shadow-emerald-500/10',
  },
  {
    key: 'goatBeef',
    href: '/solucoes/caprinos/corte',
    icon: Beef,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
    hoverBg: 'group-hover:bg-orange-500/20',
    borderAccent: 'group-hover:border-orange-500/30',
    glowColor: 'group-hover:shadow-orange-500/10',
  },
  {
    key: 'sheepDairy',
    href: '/solucoes/ovinos/leite',
    icon: Milk,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/10',
    hoverBg: 'group-hover:bg-purple-500/20',
    borderAccent: 'group-hover:border-purple-500/30',
    glowColor: 'group-hover:shadow-purple-500/10',
  },
  {
    key: 'sheepBeef',
    href: '/solucoes/ovinos/corte',
    icon: Beef,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-500/10',
    hoverBg: 'group-hover:bg-amber-500/20',
    borderAccent: 'group-hover:border-amber-500/30',
    glowColor: 'group-hover:shadow-amber-500/10',
  },
  {
    key: 'webDev',
    href: '/servicos',
    icon: Globe,
    iconColor: 'text-cyan-500',
    iconBg: 'bg-cyan-500/10',
    hoverBg: 'group-hover:bg-cyan-500/20',
    borderAccent: 'group-hover:border-cyan-500/30',
    glowColor: 'group-hover:shadow-cyan-500/10',
  },
];

export function SegmentsSection() {
  const t = useTranslations();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden" id="segments" ref={ref}>
      <div className="container-wide relative">
        <div className={`text-center space-y-4 mb-16 scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Soluções Especializadas</span>
          </div>

          <h2 className="heading-2 text-gray-900">
            {t('segmentsSection.title')}
          </h2>
          <p className="body-large max-w-2xl mx-auto text-muted-foreground">
            {t('segmentsSection.subtitle')}
          </p>
        </div>

        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 scroll-fade-up scroll-fade-up-delay-2 ${isVisible ? 'visible' : ''}`}>
          {segments.map((segment, index) => (
            <Link
              key={segment.key}
              href={segment.href}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card
                className={cn(
                  'h-full border-gray-200 bg-white shadow-sm',
                  'transition-all duration-300 ease-out',
                  'hover:scale-[1.02] hover:-translate-y-1',
                  'hover:shadow-xl',
                  segment.borderAccent,
                  segment.glowColor
                )}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon container with enhanced effects */}
                  <div className="mb-6">
                    <div
                      className={cn(
                        'relative h-14 w-14 rounded-2xl flex items-center justify-center',
                        'transition-all duration-300',
                        segment.iconBg,
                        segment.hoverBg,
                        'group-hover:scale-110 group-hover:rotate-3'
                      )}
                    >
                      {/* Glow effect behind icon */}
                      <div className={cn(
                        'absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300',
                        segment.iconBg
                      )} />

                      <segment.icon
                        className={cn(
                          'h-7 w-7 relative z-10 transition-transform duration-300',
                          segment.iconColor,
                          'group-hover:scale-110'
                        )}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {t(`segments.${segment.key}`)}
                    </h3>

                    {/* CTA with enhanced animation */}
                    <div className="mt-auto flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-all duration-300">
                      <span className="font-medium">Ver solução</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={cn(
                    'absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-5 transition-opacity duration-300',
                    segment.iconBg
                  )} />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
