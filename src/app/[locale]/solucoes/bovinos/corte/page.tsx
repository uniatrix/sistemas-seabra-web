import { redirect } from 'next/navigation';

// URL canônica do hub de bovinos de corte é /bovinos-corte.
// Esta rota fica como fallback para links antigos.
interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BovinosCorteRedirect({ params }: PageProps) {
  const { locale } = await params;
  redirect(`/${locale}/bovinos-corte`);
}
