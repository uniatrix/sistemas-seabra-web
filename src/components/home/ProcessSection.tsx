'use client';

import { useTranslations } from 'next-intl';
import { Search, Rocket, Users, TrendingUp, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  { key: 'step1', icon: Search, number: '01', color: 'blue' },
  { key: 'step2', icon: Rocket, number: '02', color: 'emerald' },
  { key: 'step3', icon: Users, number: '03', color: 'purple' },
  { key: 'step4', icon: TrendingUp, number: '04', color: 'amber' },
];

const colorClasses: Record<string, { bg: string; hoverBg: string; icon: string; borderAccent: string; glowColor: string; numberBg: string }> = {
  blue: {
    bg: 'bg-blue-500/10',
    hoverBg: 'group-hover:bg-blue-500/20',
    icon: 'text-blue-500',
    borderAccent: 'group-hover:border-blue-500/30',
    glowColor: 'group-hover:shadow-blue-500/10',
    numberBg: 'bg-blue-500',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    hoverBg: 'group-hover:bg-emerald-500/20',
    icon: 'text-emerald-500',
    borderAccent: 'group-hover:border-emerald-500/30',
    glowColor: 'group-hover:shadow-emerald-500/10',
    numberBg: 'bg-emerald-500',
  },
  purple: {
    bg: 'bg-purple-500/10',
    hoverBg: 'group-hover:bg-purple-500/20',
    icon: 'text-purple-500',
    borderAccent: 'group-hover:border-purple-500/30',
    glowColor: 'group-hover:shadow-purple-500/10',
    numberBg: 'bg-purple-500',
  },
  amber: {
    bg: 'bg-amber-500/10',
    hoverBg: 'group-hover:bg-amber-500/20',
    icon: 'text-amber-500',
    borderAccent: 'group-hover:border-amber-500/30',
    glowColor: 'group-hover:shadow-amber-500/10',
    numberBg: 'bg-amber-500',
  },
};

export function ProcessSection() {
  const t = useTranslations('process');
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container-wide relative">
        <div className={`text-center space-y-4 mb-16 scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Settings className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Como Funciona</span>
          </div>

          <h2 className="heading-2 text-gray-900">
            {t('title')}
          </h2>
          <p className="body-large max-w-2xl mx-auto text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-4 scroll-fade-up scroll-fade-up-delay-2 ${isVisible ? 'visible' : ''}`}>
          {steps.map((step, index) => {
            const colors = colorClasses[step.color];
            return (
              <Card
                key={step.key}
                className={cn(
                  'group h-full border-gray-200 bg-white shadow-sm',
                  'transition-all duration-300 ease-out',
                  'hover:scale-[1.02] hover:-translate-y-1',
                  'hover:shadow-xl',
                  colors.borderAccent,
                  colors.glowColor
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  {/* Step label */}
                  <span className={cn(
                    'text-xs font-bold uppercase tracking-wider',
                    colors.icon
                  )}>
                    Passo {step.number}
                  </span>

                  {/* Icon */}
                  <div className="mt-4 mb-5">
                    <div
                      className={cn(
                        'h-14 w-14 rounded-2xl flex items-center justify-center',
                        'transition-all duration-300',
                        colors.bg,
                        colors.hoverBg,
                        'group-hover:scale-110'
                      )}
                    >
                      <step.icon
                        className={cn(
                          'h-7 w-7 transition-transform duration-300',
                          colors.icon,
                          'group-hover:scale-110'
                        )}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {t(`${step.key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`${step.key}.description`)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
