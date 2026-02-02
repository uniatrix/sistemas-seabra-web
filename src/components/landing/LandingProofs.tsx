'use client';

import { useTranslations } from 'next-intl';
import { Play, Monitor, Smartphone, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LandingProofsProps {
  segmentSlug: string;
}

const proofs = [
  { type: 'image', icon: Monitor, label: 'Dashboard' },
  { type: 'image', icon: BarChart3, label: 'Analytics' },
  { type: 'image', icon: Smartphone, label: 'Mobile' },
  { type: 'video', icon: Play, label: 'Demo' },
];

export function LandingProofs({ segmentSlug }: LandingProofsProps) {
  const t = useTranslations('proofs');

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="heading-2 text-gradient-subtle">
            {t('title')}
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {proofs.map((proof, index) => (
            <div
              key={index}
              className={cn(
                'group relative aspect-video rounded-2xl overflow-hidden cursor-pointer',
                'bg-gradient-to-br from-white/[0.04] to-white/[0.01]',
                'border border-white/[0.06] hover:border-white/[0.15]',
                'transition-all duration-500',
                'hover:shadow-xl hover:shadow-black/20',
                'fade-in-up opacity-0'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center space-y-3">
                  <div
                    className={cn(
                      'h-14 w-14 mx-auto rounded-xl',
                      proof.type === 'video'
                        ? 'bg-primary/20 border border-primary/30'
                        : 'bg-white/[0.05] border border-white/[0.1]',
                      'flex items-center justify-center',
                      'group-hover:scale-110',
                      'transition-all duration-500'
                    )}
                  >
                    <proof.icon
                      className={cn(
                        'h-7 w-7',
                        proof.type === 'video'
                          ? 'text-primary ml-0.5'
                          : 'text-white/50 group-hover:text-white/70'
                      )}
                    />
                  </div>
                  <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
                    {proof.label}
                  </p>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 shine" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
