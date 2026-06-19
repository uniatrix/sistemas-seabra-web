'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, ShieldCheck, Dna, LineChart } from 'lucide-react';

const items = [
  { key: 's1', icon: Leaf },
  { key: 's2', icon: ShieldCheck },
  { key: 's3', icon: Dna },
  { key: 's4', icon: LineChart },
] as const;

export function ConsultoriaServicos() {
  const t = useTranslations('vendas.consultoria.servicos');

  return (
    <section className="section-padding bg-background border-y border-border">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-12">
          <h2 className="heading-2 font-display text-foreground">{t('title')}</h2>
          <p className="body-large max-w-2xl mx-auto text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {items.map(({ key, icon: Icon }) => (
            <Card key={key} className="h-full">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t(`${key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`${key}.desc`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
