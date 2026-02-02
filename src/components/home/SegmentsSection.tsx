'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, Milk, Beef, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

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
    key: 'smallRuminantsDairy',
    href: '/solucoes/pequenos-ruminantes/leite',
    icon: Milk,
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
    hoverBg: 'group-hover:bg-emerald-500/20',
    borderAccent: 'group-hover:border-emerald-500/30',
    glowColor: 'group-hover:shadow-emerald-500/10',
  },
  {
    key: 'smallRuminantsBeef',
    href: '/solucoes/pequenos-ruminantes/corte',
    icon: Beef,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
    hoverBg: 'group-hover:bg-orange-500/20',
    borderAccent: 'group-hover:border-orange-500/30',
    glowColor: 'group-hover:shadow-orange-500/10',
  },
];

export function SegmentsSection() {
  const t = useTranslations();

  return (
    <section className="section-padding relative overflow-hidden" id="segments">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/0 pointer-events-none" />

      <div className="container-wide relative">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Soluções Especializadas</span>
          </div>

          <h2 className="heading-2 text-white">
            {t('segmentsSection.title')}
          </h2>
          <p className="body-large max-w-2xl mx-auto text-muted-foreground">
            {t('segmentsSection.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment, index) => (
            <Link
              key={segment.key}
              href={segment.href}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card
                className={cn(
                  'h-full border-border/50 bg-card/50 backdrop-blur-sm',
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
