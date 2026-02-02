import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { LogosSection } from '@/components/home/LogosSection';
import { SegmentsSection } from '@/components/home/SegmentsSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ProofsSection } from '@/components/home/ProofsSection';
import { CTASection } from '@/components/home/CTASection';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <LogosSection />
      <SegmentsSection />
      <ProcessSection />
      <ProofsSection />
      <CTASection />
    </>
  );
}
