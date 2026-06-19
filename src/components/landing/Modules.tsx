'use client';

import { useTranslations } from 'next-intl';
import {
  ClipboardList,
  BarChart3,
  Calendar,
  DollarSign,
  Users,
  FileText,
  Package,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const modules = [
  { icon: ClipboardList, title: 'Cadastro de Animais', description: 'Registro completo de cada animal com histórico de vida.' },
  { icon: BarChart3, title: 'Controle de Produção', description: 'Acompanhamento diário de produção e indicadores.' },
  { icon: Calendar, title: 'Manejo Reprodutivo', description: 'Gestão de cobertura, gestação e partos.' },
  { icon: DollarSign, title: 'Controle Financeiro', description: 'Custos, receitas e análise de rentabilidade.' },
  { icon: Users, title: 'Gestão de Equipe', description: 'Controle de tarefas e produtividade.' },
  { icon: FileText, title: 'Relatórios', description: 'Relatórios automáticos personalizados.' },
];

export function Modules() {
  const t = useTranslations('landing.modules');

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide relative">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Package className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Recursos Completos</span>
          </div>

          <h2 className="heading-2 text-gray-900">{t('title')}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Card
              key={index}
              className={cn(
                'group h-full border-gray-200 bg-white shadow-sm',
                'transition-all duration-300 ease-out',
                'hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5'
              )}
            >
              <CardContent className="p-6">
                <div className="mb-5">
                  <div className="h-12 w-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/5 group-hover:border-primary/20">
                    <module.icon className="h-6 w-6 text-gray-700 transition-colors duration-300 group-hover:text-primary" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
