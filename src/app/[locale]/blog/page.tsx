import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar } from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

// Placeholder posts - replace with actual data
const posts = [
  {
    id: 1,
    title: 'Como aumentar a produtividade do seu rebanho leiteiro',
    excerpt: 'Descubra as melhores práticas para maximizar a produção de leite na sua fazenda.',
    date: '2024-01-15',
    image: '/images/blog/post-1.jpg',
    category: 'Produtividade',
  },
  {
    id: 2,
    title: 'Tecnologia na pecuária: tendências para 2024',
    excerpt: 'As principais inovações tecnológicas que estão transformando o setor pecuário.',
    date: '2024-01-10',
    image: '/images/blog/post-2.jpg',
    category: 'Tecnologia',
  },
  {
    id: 3,
    title: 'Manejo reprodutivo: guia completo',
    excerpt: 'Tudo o que você precisa saber sobre manejo reprodutivo em bovinos.',
    date: '2024-01-05',
    image: '/images/blog/post-3.jpg',
    category: 'Manejo',
  },
];

function formatDate(dateString: string, locale: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });

  return {
    title: `${t('title')} | Seabra Solutions`,
    description: t('subtitle'),
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'blog' });

  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t('title')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('subtitle')}
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-border hover:border-primary/50 transition-colors cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="aspect-video relative bg-card border-b border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="h-16 w-16 mx-auto rounded bg-muted flex items-center justify-center">
                      <span className="text-3xl">📰</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Post image</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="text-primary font-medium uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date, locale)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center text-sm text-primary">
                  <span>Ler artigo</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state message */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Nenhum artigo disponível ainda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
