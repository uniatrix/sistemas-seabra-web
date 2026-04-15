import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

// Sistema Bovinos Leiteiros ainda não está pronto — rota oculta da indexação
// e redirecionada para a home. Reativar quando o sistema estiver disponível.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BovinosLeitePage({ params }: PageProps) {
  const { locale } = await params;
  redirect(`/${locale}`);
}
