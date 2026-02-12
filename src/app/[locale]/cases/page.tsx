import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Trophy, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageProps {
  params: Promise<{ locale: string }>;
}

// Placeholder cases - replace with actual data
const cases = [
  {
    id: 1,
    title: 'Fazenda Santa Maria',
    segment: 'Bovinos de Leite',
    result: '+30% produtividade',
    image: '/images/cases/case-1.jpg',
    color: 'blue',
  },
  {
    id: 2,
    title: 'Hacienda El Dorado',
    segment: 'Bovinos de Corte',
    result: 'Redução de 25% nos custos',
    image: '/images/cases/case-2.jpg',
    color: 'red',
  },
  {
    id: 3,
    title: 'Ranch Valley Farm',
    segment: 'Caprinos Leiteiros',
    result: 'Controle total do rebanho',
    image: '/images/cases/case-3.jpg',
    color: 'emerald',
  },
];

const colorClasses: Record<string, { bg: string; borderAccent: string; glowColor: string }> = {
  blue: {
    bg: 'bg-blue-500/10',
    borderAccent: 'group-hover:border-blue-500/30',
    glowColor: 'group-hover:shadow-blue-500/10',
  },
  red: {
    bg: 'bg-red-500/10',
    borderAccent: 'group-hover:border-red-500/30',
    glowColor: 'group-hover:shadow-red-500/10',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    borderAccent: 'group-hover:border-emerald-500/30',
    glowColor: 'group-hover:shadow-emerald-500/10',
  },
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cases' });

  return {
    title: `${t('title')} | Seabra Solutions`,
    description: t('subtitle'),
  };
}

export default async function CasesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'cases' });

  return (
    <div className="section-padding relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/0 pointer-events-none" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Trophy className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Casos de Sucesso</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t('title')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('subtitle')}
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseItem, index) => {
            const colors = colorClasses[caseItem.color];
            return (
              <Card
                key={caseItem.id}
                className={cn(
                  'group overflow-hidden border-gray-200 bg-white shadow-sm cursor-pointer',
                  'transition-all duration-300 ease-out',
                  'hover:scale-[1.02] hover:-translate-y-1',
                  'hover:shadow-xl',
                  colors.borderAccent,
                  colors.glowColor
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image placeholder with gradient */}
                <div className="aspect-video relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border-b border-gray-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className={cn(
                        'h-20 w-20 mx-auto rounded-2xl flex items-center justify-center',
                        'transition-all duration-300 group-hover:scale-110 group-hover:rotate-3',
                        colors.bg
                      )}>
                        <TrendingUp className="h-10 w-10 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">Case de Sucesso</p>
                    </div>
                  </div>

                  {/* Decorative gradient overlay on hover */}
                  <div className={cn(
                    'absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300',
                    colors.bg
                  )} />
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <span className="inline-block text-xs text-primary font-semibold uppercase tracking-wide px-2 py-1 rounded-md bg-primary/10">
                      {caseItem.segment}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {caseItem.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">{caseItem.result}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-primary font-medium pt-2">
                    <span>Ver case completo</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>

                  {/* Decorative corner accent */}
                  <div className={cn(
                    'absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-5 transition-opacity duration-300',
                    colors.bg
                  )} />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty state message */}
        {cases.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Nenhum case disponível ainda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
