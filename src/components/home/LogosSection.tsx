'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const logos = [
  { name: 'Faz. Bonito - Agropecuária Canziani', src: '/images/logos/faz-bonito.png' },
  { name: 'Minas Cabra', src: '/images/logos/minas-cabra.jpg' },
  { name: 'Fazenda Santa Rita - Capril Sanri', src: '/images/logos/santa-rita.jpg' },
  { name: 'Capril Conquista', src: '/images/logos/capril-conquista.jpg' },
  { name: 'Capril do Chaparral', src: '/images/logos/capril-chaparral.png' },
  { name: 'Capril Cerro Alto', src: '/images/logos/capril-cerro-alto.png' },
  { name: 'Caprigen', src: '/images/logos/caprigen.jpeg' },
  { name: '3 Irmãos', src: '/images/logos/3-irmaos.jpeg' },
  { name: 'Lá do Alto', src: '/images/logos/la-do-alto.jpeg' },
];

export function LogosSection() {
  const t = useTranslations('logos');

  // Duplicate logos for seamless infinite scroll
  const duplicated = [...logos, ...logos];

  return (
    <section className="py-12 overflow-hidden">
      <div className="container-wide">
        <p className="text-center text-xs text-white/40 uppercase tracking-widest mb-10">
          {t('title')}
        </p>
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll-logos">
          {duplicated.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-10 flex items-center justify-center"
            >
              <div className="relative h-20 w-48 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  loading="eager"
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
