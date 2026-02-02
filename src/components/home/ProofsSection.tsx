'use client';

import { useTranslations } from 'next-intl';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProofsSection() {
  const t = useTranslations('proofs');

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="heading-1 text-gradient-subtle">
            {t('title')}
          </h2>
          <p className="body-large text-white/60 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Main Video - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div
              className={cn(
                'group relative h-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden',
                'glass-card border-white/[0.08]',
                'hover:border-white/[0.15] transition-all duration-500'
              )}
            >
              {/* Placeholder for video */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div
                    className={cn(
                      'mb-6 h-24 w-24 rounded-full',
                      'bg-primary/20 backdrop-blur-xl border border-primary/30',
                      'flex items-center justify-center',
                      'group-hover:bg-primary/30 group-hover:scale-110',
                      'transition-all duration-500 cursor-pointer',
                      'shadow-lg shadow-primary/20'
                    )}
                  >
                    <Play className="h-12 w-12 text-primary ml-1.5" />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-xl font-semibold text-white">
                      Demonstração Completa do Sistema
                    </p>
                    <p className="text-sm text-white/50">
                      Veja como funciona na prática • 3 min
                    </p>
                  </div>
                </div>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Screenshot 1 */}
          <div className="min-h-[240px] md:min-h-0">
            <div
              className={cn(
                'group relative h-full rounded-2xl overflow-hidden',
                'glass-card border-white/[0.06]',
                'hover:border-white/[0.12] transition-all duration-500',
                'hover:-translate-y-1'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] to-transparent">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full aspect-video rounded-lg bg-white/[0.03] border border-white/[0.06] mb-4" />
                  <p className="text-sm text-white/60 font-medium">Dashboard Principal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot 2 */}
          <div className="min-h-[240px] md:min-h-0">
            <div
              className={cn(
                'group relative h-full rounded-2xl overflow-hidden',
                'glass-card border-white/[0.06]',
                'hover:border-white/[0.12] transition-all duration-500',
                'hover:-translate-y-1'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.08] to-transparent">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full aspect-video rounded-lg bg-white/[0.03] border border-white/[0.06] mb-4" />
                  <p className="text-sm text-white/60 font-medium">Controle de Produção</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot 3 */}
          <div className="min-h-[240px] md:min-h-0">
            <div
              className={cn(
                'group relative h-full rounded-2xl overflow-hidden',
                'glass-card border-white/[0.06]',
                'hover:border-white/[0.12] transition-all duration-500',
                'hover:-translate-y-1'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.08] to-transparent">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full aspect-video rounded-lg bg-white/[0.03] border border-white/[0.06] mb-4" />
                  <p className="text-sm text-white/60 font-medium">Relatórios</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot 4 */}
          <div className="min-h-[240px] md:min-h-0 md:col-span-2 lg:col-span-1">
            <div
              className={cn(
                'group relative h-full rounded-2xl overflow-hidden',
                'glass-card border-white/[0.06]',
                'hover:border-white/[0.12] transition-all duration-500',
                'hover:-translate-y-1'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.08] to-transparent">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full aspect-video rounded-lg bg-white/[0.03] border border-white/[0.06] mb-4" />
                  <p className="text-sm text-white/60 font-medium">App Mobile</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA text */}
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm">
            Substitua os placeholders por prints reais do sistema • Adicione o vídeo de demonstração
          </p>
        </div>
      </div>
    </section>
  );
}
