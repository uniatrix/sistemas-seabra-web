'use client';

import { useTranslations } from 'next-intl';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function ProofsSection() {
  const t = useTranslations('proofs');
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding" id="demo" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <div className={`text-center space-y-4 mb-16 scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="heading-1 text-gradient-subtle">
            {t('title')}
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 scroll-fade-up scroll-fade-up-delay-2 ${isVisible ? 'visible' : ''}`}>
          {/* Main Video - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div
              className={cn(
                'group relative h-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden',
                'bg-white border border-gray-200 shadow-sm',
                'hover:border-gray-300 hover:shadow-md transition-all duration-500'
              )}
            >
              {/* Placeholder for video */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div
                    className={cn(
                      'mb-6 h-24 w-24 rounded-full',
                      'bg-primary/10 border border-primary/20',
                      'flex items-center justify-center',
                      'group-hover:bg-primary/20 group-hover:scale-110',
                      'transition-all duration-500 cursor-pointer',
                      'shadow-lg shadow-primary/10'
                    )}
                  >
                    <Play className="h-12 w-12 text-primary ml-1.5" />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Demonstração Completa do Sistema
                    </p>
                    <p className="text-sm text-gray-500">
                      Veja como funciona na prática • 3 min
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot 1 */}
          <div className="min-h-[240px] md:min-h-0">
            <div
              className={cn(
                'group relative h-full rounded-2xl overflow-hidden',
                'bg-white border border-gray-200 shadow-sm',
                'hover:border-gray-300 hover:shadow-md transition-all duration-500',
                'hover:-translate-y-1'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full aspect-video rounded-lg bg-gray-100 border border-gray-200 mb-4" />
                  <p className="text-sm text-gray-600 font-medium">Dashboard Principal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot 2 */}
          <div className="min-h-[240px] md:min-h-0">
            <div
              className={cn(
                'group relative h-full rounded-2xl overflow-hidden',
                'bg-white border border-gray-200 shadow-sm',
                'hover:border-gray-300 hover:shadow-md transition-all duration-500',
                'hover:-translate-y-1'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full aspect-video rounded-lg bg-gray-100 border border-gray-200 mb-4" />
                  <p className="text-sm text-gray-600 font-medium">Controle de Produção</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot 3 */}
          <div className="min-h-[240px] md:min-h-0">
            <div
              className={cn(
                'group relative h-full rounded-2xl overflow-hidden',
                'bg-white border border-gray-200 shadow-sm',
                'hover:border-gray-300 hover:shadow-md transition-all duration-500',
                'hover:-translate-y-1'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full aspect-video rounded-lg bg-gray-100 border border-gray-200 mb-4" />
                  <p className="text-sm text-gray-600 font-medium">Relatórios</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot 4 */}
          <div className="min-h-[240px] md:min-h-0 md:col-span-2 lg:col-span-1">
            <div
              className={cn(
                'group relative h-full rounded-2xl overflow-hidden',
                'bg-white border border-gray-200 shadow-sm',
                'hover:border-gray-300 hover:shadow-md transition-all duration-500',
                'hover:-translate-y-1'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full aspect-video rounded-lg bg-gray-100 border border-gray-200 mb-4" />
                  <p className="text-sm text-gray-600 font-medium">App Mobile</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA text */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Substitua os placeholders por prints reais do sistema • Adicione o vídeo de demonstração
          </p>
        </div>
      </div>
    </section>
  );
}
