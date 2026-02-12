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
  { icon: ClipboardList, title: 'Cadastro de Animais', description: 'Registro completo de cada animal com histórico de vida.', color: 'blue' },
  { icon: BarChart3, title: 'Controle de Produção', description: 'Acompanhamento diário de produção e indicadores.', color: 'emerald' },
  { icon: Calendar, title: 'Manejo Reprodutivo', description: 'Gestão de cobertura, gestação e partos.', color: 'purple' },
  { icon: DollarSign, title: 'Controle Financeiro', description: 'Custos, receitas e análise de rentabilidade.', color: 'amber' },
  { icon: Users, title: 'Gestão de Equipe', description: 'Controle de tarefas e produtividade.', color: 'rose' },
  { icon: FileText, title: 'Relatórios', description: 'Relatórios automáticos personalizados.', color: 'cyan' },
];

const colorClasses: Record<string, { bg: string; hoverBg: string; icon: string; borderAccent: string; glowColor: string }> = {
  blue: {
    bg: 'bg-blue-500/10',
    hoverBg: 'group-hover:bg-blue-500/20',
    icon: 'text-blue-500',
    borderAccent: 'group-hover:border-blue-500/30',
    glowColor: 'group-hover:shadow-blue-500/10',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    hoverBg: 'group-hover:bg-emerald-500/20',
    icon: 'text-emerald-500',
    borderAccent: 'group-hover:border-emerald-500/30',
    glowColor: 'group-hover:shadow-emerald-500/10',
  },
  purple: {
    bg: 'bg-purple-500/10',
    hoverBg: 'group-hover:bg-purple-500/20',
    icon: 'text-purple-500',
    borderAccent: 'group-hover:border-purple-500/30',
    glowColor: 'group-hover:shadow-purple-500/10',
  },
  amber: {
    bg: 'bg-amber-500/10',
    hoverBg: 'group-hover:bg-amber-500/20',
    icon: 'text-amber-500',
    borderAccent: 'group-hover:border-amber-500/30',
    glowColor: 'group-hover:shadow-amber-500/10',
  },
  rose: {
    bg: 'bg-rose-500/10',
    hoverBg: 'group-hover:bg-rose-500/20',
    icon: 'text-rose-500',
    borderAccent: 'group-hover:border-rose-500/30',
    glowColor: 'group-hover:shadow-rose-500/10',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    hoverBg: 'group-hover:bg-cyan-500/20',
    icon: 'text-cyan-500',
    borderAccent: 'group-hover:border-cyan-500/30',
    glowColor: 'group-hover:shadow-cyan-500/10',
  },
};

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

          <h2 className="heading-2 text-gray-900">
            {t('title')}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => {
            const colors = colorClasses[module.color];
            return (
              <Card
                key={index}
                className={cn(
                  'group h-full border-gray-200 bg-white shadow-sm',
                  'transition-all duration-300 ease-out',
                  'hover:scale-[1.02] hover:-translate-y-1',
                  'hover:shadow-xl',
                  colors.borderAccent,
                  colors.glowColor,
                  'fade-in-up opacity-0'
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Icon container with enhanced effects */}
                  <div className="mb-6">
                    <div
                      className={cn(
                        'relative h-14 w-14 rounded-2xl flex items-center justify-center',
                        'transition-all duration-300',
                        colors.bg,
                        colors.hoverBg,
                        'group-hover:scale-110 group-hover:rotate-3'
                      )}
                    >
                      {/* Glow effect behind icon */}
                      <div className={cn(
                        'absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300',
                        colors.bg
                      )} />

                      <module.icon
                        className={cn(
                          'h-7 w-7 relative z-10 transition-transform duration-300',
                          colors.icon,
                          'group-hover:scale-110'
                        )}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {module.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={cn(
                    'absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-5 transition-opacity duration-300',
                    colors.bg
                  )} />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
