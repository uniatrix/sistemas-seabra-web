'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const logos = [
  { name: 'Minas Cabra', src: '/images/logos/minas-cabra.png' },
  { name: 'Fazenda Santa Rita - Capril Sanri', src: '/images/logos/santa-rita.png' },
  { name: 'Capril Conquista', src: '/images/logos/capril-conquista.png' },
  { name: 'Capril do Chaparral', src: '/images/logos/capril-chaparral.png' },
  { name: 'Capril Cerro Alto', src: '/images/logos/capril-cerro-alto.png' },
  { name: 'Caprigen', src: '/images/logos/caprigen.png' },
  { name: '3 Irmãos', src: '/images/logos/3-irmaos.png' },
  { name: 'Lá do Alto', src: '/images/logos/la-do-alto.png' },
  { name: 'Bonito', src: '/images/logos/bonito.png' },
];

export function LogosSection() {
  const t = useTranslations('logos');

  // Duplicate logos for seamless infinite scroll
  const duplicated = [...logos, ...logos];

  return (
    <section className="py-16 overflow-hidden bg-gray-50 border-y border-gray-200">
      <div className="container-wide">
        <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-10 font-medium">
          {t('title')}
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll-logos">
          {duplicated.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <div className="relative h-24 w-56 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center px-6 transition-shadow duration-300 hover:shadow-md">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  loading="eager"
                  className="object-contain p-5"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
