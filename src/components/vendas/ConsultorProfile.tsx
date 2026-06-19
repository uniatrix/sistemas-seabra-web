'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Troque pelos arquivos reais quando enviar as fotos (mantenha os caminhos ou edite aqui).
const CONSULTANT_PHOTO = '/images/consultoria/placeholder.svg';
const GALLERY = [
  '/images/consultoria/placeholder.svg',
  '/images/consultoria/placeholder.svg',
  '/images/consultoria/placeholder.svg',
];

export function ConsultorProfile() {
  const t = useTranslations('vendas.consultoria.profile');

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-[320px_1fr] items-start max-w-5xl mx-auto">
          {/* Foto principal */}
          <div className="relative aspect-[5/6] rounded-2xl overflow-hidden border border-border bg-card">
            <Image
              src={CONSULTANT_PHOTO}
              alt={t('name')}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
          </div>

          {/* Bio + currículo */}
          <div className="space-y-6">
            <div>
              <h2 className="heading-2 font-display text-foreground">{t('name')}</h2>
              <p className="text-primary font-medium mt-1">{t('role')}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{t('bioTitle')}</h3>
              <p className="body-large text-muted-foreground">{t('bio')}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{t('curriculumTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('curriculum')}</p>
            </div>
          </div>
        </div>

        {/* Galeria (2-3 fotos) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto mt-10">
          {GALLERY.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
