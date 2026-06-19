'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import {
  Lightbulb,
  Stethoscope,
  VenusAndMars,
  Leaf,
  Milk,
  GraduationCap,
  Network,
  Ruler,
  Dna,
  LayoutDashboard,
} from 'lucide-react';

const items = [
  { key: 'projetos', icon: Lightbulb },
  { key: 'clinica', icon: Stethoscope },
  { key: 'reproducao', icon: VenusAndMars },
  { key: 'nutricao', icon: Leaf },
  { key: 'qualidadeLeite', icon: Milk },
  { key: 'treinamentos', icon: GraduationCap },
  { key: 'regGenealogico', icon: Network },
  { key: 'avLinear', icon: Ruler },
  { key: 'melhoramento', icon: Dna },
  { key: 'gestao', icon: LayoutDashboard },
] as const;

export function ConsultoriaServicos() {
  const t = useTranslations('vendas.consultoria.servicos');

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-12">
          <h2 className="heading-2 text-gray-900">{t('title')}</h2>
          <p className="body-large max-w-2xl mx-auto text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {items.map(({ key, icon: Icon }) => (
            <Card
              key={key}
              className="border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-gray-900">{t(`items.${key}`)}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
