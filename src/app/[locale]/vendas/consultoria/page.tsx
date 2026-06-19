import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ConsultoriaHero } from '@/components/vendas/ConsultoriaHero';
import { ConsultorProfile } from '@/components/vendas/ConsultorProfile';
import { ConsultoriaServicos } from '@/components/vendas/ConsultoriaServicos';
import { VendasCTA } from '@/components/vendas/VendasCTA';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vendas.consultoria' });

  return {
    title: `${t('metaTitle')} | Seabra Solutions`,
    description: t('metaDescription'),
  };
}

export default async function ConsultoriaPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ConsultoriaHero />
      <ConsultorProfile />
      <ConsultoriaServicos />
      <VendasCTA />
    </>
  );
}
