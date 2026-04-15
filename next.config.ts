import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      { source: '/apresentacao',    destination: '/docs-seabra/apresentacao.html' },
      { source: '/apresentacao-es', destination: '/docs-seabra/apresentacao-es.html' },
      { source: '/apresentacao-en', destination: '/docs-seabra/apresentacao-en.html' },
      { source: '/planos',          destination: '/docs-seabra/planos.html' },
      { source: '/planos-es',       destination: '/docs-seabra/planos-es.html' },
      { source: '/planos-en',       destination: '/docs-seabra/planos-en.html' },
    ];
  },
};

export default withNextIntl(nextConfig);
