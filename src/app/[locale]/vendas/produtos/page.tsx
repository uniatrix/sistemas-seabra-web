import { setRequestLocale, getTranslations } from 'next-intl/server';
import { RFIDProducts } from '@/components/vendas/RFIDProducts';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vendas.produtos' });

  return {
    title: `${t('metaTitle')} | Seabra Solutions`,
    description: t('metaDescription'),
  };
}

export default async function ProdutosPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <RFIDProducts />;
}
