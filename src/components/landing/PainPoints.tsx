'use client';

import { useTranslations } from 'next-intl';
import { X, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export function PainPoints() {
  const t = useTranslations('landing.pains');

  const pains = [
    t('pain1'),
    t('pain2'),
    t('pain3'),
    t('pain4'),
    t('pain5'),
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/0 pointer-events-none" />

      <div className="container-tight relative">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium text-red-500">Desafios</span>
          </div>

          <h2 className="heading-2 text-white">
            {t('title')}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain, index) => (
            <Card
              key={index}
              className={cn(
                'group h-full border-border/50 bg-card/50 backdrop-blur-sm',
                'transition-all duration-300 ease-out',
                'hover:scale-[1.02] hover:-translate-y-1',
                'hover:shadow-xl',
                'hover:border-red-500/30',
                'group-hover:shadow-red-500/10',
                'fade-in-up opacity-0'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex items-start gap-4">
                {/* Icon container with enhanced effects */}
                <div className="flex-shrink-0">
                  <div
                    className={cn(
                      'relative h-12 w-12 rounded-2xl flex items-center justify-center',
                      'transition-all duration-300',
                      'bg-red-500/10',
                      'group-hover:bg-red-500/20',
                      'group-hover:scale-110 group-hover:rotate-3'
                    )}
                  >
                    {/* Glow effect behind icon */}
                    <div className={cn(
                      'absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300',
                      'bg-red-500/20'
                    )} />

                    <X
                      className={cn(
                        'h-6 w-6 relative z-10 transition-transform duration-300',
                        'text-red-500',
                        'group-hover:scale-110'
                      )}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {pain}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className={cn(
                  'absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-5 transition-opacity duration-300',
                  'bg-red-500/20'
                )} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
