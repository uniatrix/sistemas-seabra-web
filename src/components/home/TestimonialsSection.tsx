'use client';

import { useTranslations } from 'next-intl';
import { MessageSquareQuote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'João Carlos',
    role: 'Proprietário',
    farm: 'Capril Conquista',
    text: 'Antes do sistema, eu perdia horas anotando tudo em cadernos. Hoje, lanço os dados em minutos e tenho relatórios prontos. A produtividade do rebanho aumentou visivelmente.',
    rating: 5,
  },
  {
    name: 'Maria Helena',
    role: 'Gestora',
    farm: 'Fazenda Santa Rita',
    text: 'O que mais me impressionou foi funcionar offline. No campo, não temos internet, e o sistema continua funcionando perfeitamente. Quando chego em casa, sincroniza tudo.',
    rating: 5,
  },
  {
    name: 'Pedro Almeida',
    role: 'Veterinário',
    farm: 'Capril Cerro Alto',
    text: 'Como veterinário, preciso do histórico completo de cada animal. O sistema me dá isso em segundos. Facilita muito o diagnóstico e o acompanhamento reprodutivo.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <div className={`text-center space-y-4 mb-16 scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <MessageSquareQuote className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('badge')}</span>
          </div>

          <h2 className="heading-2 text-gray-900">
            {t('title')}
          </h2>
          <p className="body-large max-w-2xl mx-auto text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid gap-6 md:grid-cols-3 scroll-fade-up scroll-fade-up-delay-2 ${isVisible ? 'visible' : ''}`}>
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className={cn(
                  'relative p-6 rounded-2xl border border-gray-200 bg-white transition-all duration-300',
                  'hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5'
                )}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-600">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role} · {testimonial.farm}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
