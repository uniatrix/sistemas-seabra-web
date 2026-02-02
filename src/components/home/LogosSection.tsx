'use client';

import { useTranslations } from 'next-intl';

const logos = [
  { name: 'Fazenda Santa Maria', initials: 'FSM' },
  { name: 'Agropecuária Vale', initials: 'AV' },
  { name: 'Rancho Dourado', initials: 'RD' },
  { name: 'Pecuária Premium', initials: 'PP' },
  { name: 'Hacienda El Sol', initials: 'HES' },
  { name: 'Farm Solutions', initials: 'FS' },
];

export function LogosSection() {
  const t = useTranslations('logos');

  return (
    <section className="py-12">
      <div className="container-wide">
        <p className="text-center text-xs text-white/40 uppercase tracking-widest mb-8">
          {t('title')}
        </p>

        <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
            >
              <div className="h-8 w-8 rounded bg-white/[0.06] flex items-center justify-center text-xs font-medium text-white/40">
                {logo.initials}
              </div>
              <span className="text-xs text-white/30 hidden sm:block">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
