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
                'bg-gradient-to-br from-gray-50 to-white',
                'border border-gray-200 hover:border-gray-300',
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
                        : 'bg-gray-100 border border-gray-200',
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
                          : 'text-gray-500 group-hover:text-gray-600'
                      )}
                    />
                  </div>
                  <p className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
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
