'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { GraduationCap, Award, MonitorSmartphone, CheckCircle2 } from 'lucide-react';
import { formacao, experiencia } from '@/data/consultoria';

// Troque pela foto real do Felipe quando enviar (mantenha o caminho ou edite aqui).
const CONSULTANT_PHOTO = '/images/consultoria/foto_felipe.jpg';

export function ConsultorProfile() {
  const t = useTranslations('vendas.consultoria.profile');

  return (
    <section className="section-padding bg-gray-50 border-y border-gray-200">
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-[340px_1fr] items-start max-w-5xl mx-auto">
          {/* Foto */}
          <div className="space-y-4 md:sticky md:top-28">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <Image
                src={CONSULTANT_PHOTO}
                alt={t('name')}
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">{t('name')}</p>
              <p className="text-sm text-muted-foreground">{t('role')}</p>
            </div>
          </div>

          {/* Formação + Experiência + Remota */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-gray-900">{t('formacaoTitle')}</h2>
              </div>
              <ul className="space-y-2.5">
                {formacao.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-gray-900">{t('experienciaTitle')}</h2>
              </div>
              <ul className="space-y-2.5">
                {experiencia.map((e, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MonitorSmartphone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('remotaTitle')}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t('remotaDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
