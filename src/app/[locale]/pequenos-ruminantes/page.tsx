import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ArrowRight, Sprout } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LandingCTA } from '@/components/landing/LandingCTA';
import { LogosSection } from '@/components/home/LogosSection';
import { GoatIcon, SheepIcon } from '@/components/icons/AnimalIcons';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hubs.smallRuminants' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

const products = [
  { slug: 'caprinos-leite', href: '/solucoes/caprinos/leite', key: 'goatDairy', icon: GoatIcon, accent: 'emerald' },
  { slug: 'caprinos-corte', href: '/solucoes/caprinos/corte', key: 'goatBeef', icon: GoatIcon, accent: 'orange' },
  { slug: 'ovinos-leite', href: '/solucoes/ovinos/leite', key: 'sheepDairy', icon: SheepIcon, accent: 'purple' },
  { slug: 'ovinos-corte', href: '/solucoes/ovinos/corte', key: 'sheepBeef', icon: SheepIcon, accent: 'amber' },
] as const;

const accentMap: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'group-hover:border-emerald-500/40' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-600', border: 'group-hover:border-orange-500/40' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'group-hover:border-purple-500/40' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'group-hover:border-amber-500/40' },
};

export default async function PequenosRuminantesHub({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="container-tight relative z-10 text-center space-y-6">
          <Badge
            variant="outline"
            className="px-4 py-1.5 rounded-full border-emerald-200 bg-emerald-50 text-emerald-700 font-medium"
          >
            <Sprout className="h-3.5 w-3.5 mr-2" />
            {t('hubs.smallRuminants.badge')}
          </Badge>
          <h1 className="heading-display text-gray-900 max-w-3xl mx-auto">
            {t('hubs.smallRuminants.title')}
          </h1>
          <p className="body-large max-w-2xl mx-auto text-muted-foreground">
            {t('hubs.smallRuminants.subtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="heading-2 text-gray-900">{t('hubs.smallRuminants.productsTitle')}</h2>
            <p className="body-large max-w-2xl mx-auto text-muted-foreground">
              {t('hubs.smallRuminants.productsSubtitle')}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {products.map((product) => {
              const accent = accentMap[product.accent];
              const Icon = product.icon;
              return (
                <Link key={product.slug} href={product.href} className="group">
                  <Card className={`h-full border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${accent.border}`}>
                    <CardContent className="p-6 flex flex-col h-full min-h-[180px]">
                      <div className={`h-12 w-12 rounded-xl ${accent.bg} flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${accent.text}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {t(`segments.${product.key}`)}
                      </h3>
                      <div className="mt-auto flex items-center gap-2 text-sm font-medium text-primary">
                        <span>{t('hubs.viewSolution')}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <LogosSection />
      <LandingCTA segmentSlug="caprinos-corte" />
    </>
  );
}
