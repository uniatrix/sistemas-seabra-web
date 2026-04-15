import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

// Cases reais ainda em produção — rota removida temporariamente do site público.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CasesPage({ params }: PageProps) {
  const { locale } = await params;
  redirect(`/${locale}`);
}
