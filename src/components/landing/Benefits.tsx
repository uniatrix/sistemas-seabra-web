'use client';

import { useTranslations } from 'next-intl';
import { Check, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export function Benefits() {
  const t = useTranslations('landing.benefits');

  const benefits = [
    t('benefit1'),
    t('benefit2'),
    t('benefit3'),
    t('benefit4'),
    t('benefit5'),
  ];

  return (
    <section className="section-padding relative overflow-hidden">

      <div className="container-tight relative">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Vantagens</span>
          </div>

          <h2 className="heading-2 text-gray-900">
            {t('title')}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={cn(
                'group h-full border-gray-200 bg-white shadow-sm',
                'transition-all duration-300 ease-out',
                'hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5',
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
                      'bg-primary/10',
                      'group-hover:bg-primary/20',
                      'group-hover:scale-110 group-hover:rotate-3'
                    )}
                  >
                    {/* Glow effect behind icon */}
                    <div className={cn(
                      'absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300',
                      'bg-primary/20'
                    )} />

                    <Check
                      className={cn(
                        'h-6 w-6 relative z-10 transition-transform duration-300',
                        'text-primary',
                        'group-hover:scale-110'
                      )}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {benefit}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className={cn(
                  'absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-5 transition-opacity duration-300',
                  'bg-primary/20'
                )} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
