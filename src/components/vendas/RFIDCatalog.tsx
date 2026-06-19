'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import {
  rfidProducts,
  rfidCategories,
  type RFIDProduct,
} from '@/data/rfid-products';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { useCart } from './cart/CartContext';

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function ProductCard({ product }: { product: RFIDProduct }) {
  const t = useTranslations('vendas.produtos');
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  const name = t(`items.${product.slug}.name`);
  const hasPrice = product.priceBRL != null;

  const quoteText = `${t('requestQuote')}: ${name}`;
  const quoteUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(quoteText)}`;

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-white mb-4">
          <Image
            src={product.image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, 300px"
            className="object-contain p-4"
          />
        </div>

        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground mt-1 mb-4">
          {t(`items.${product.slug}.desc`)}
        </p>

        <ul className="space-y-1.5 text-xs mb-5">
          {product.specs.map((s, i) => (
            <li key={i} className="flex justify-between gap-3">
              <span className="text-muted-foreground">{t(`specLabels.${s.labelKey}`)}</span>
              <span className="text-foreground/80 text-right">{s.value}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-3">
          {hasPrice ? (
            <p className="text-foreground">
              <span className="text-xl font-semibold">{formatBRL(product.priceBRL as number)}</span>{' '}
              <span className="text-xs text-muted-foreground">{t('perUnit')}</span>
            </p>
          ) : (
            <p className="text-sm font-medium text-muted-foreground">{t('priceOnRequest')}</p>
          )}

          {hasPrice ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-full border border-border shrink-0">
                <button
                  type="button"
                  aria-label="-"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="h-9 w-9 flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                  className="w-10 text-center bg-transparent text-sm text-foreground focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  type="button"
                  aria-label="+"
                  onClick={() => setQty((q) => q + 1)}
                  className="h-9 w-9 flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
              <Button
                onClick={() =>
                  add(
                    { slug: product.slug, name, unitPriceBRL: product.priceBRL as number },
                    qty
                  )
                }
                className="flex-1 rounded-full gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                {t('addToCart')}
              </Button>
            </div>
          ) : (
            <a href={quoteUrl} target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" className="w-full rounded-full">
                {t('requestQuote')}
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function RFIDCatalog() {
  const t = useTranslations('vendas.produtos');

  return (
    <section className="section-padding">
      <div className="container-wide space-y-14">
        {rfidCategories.map((category) => {
          const products = rfidProducts.filter((p) => p.category === category);
          if (products.length === 0) return null;
          return (
            <div key={category}>
              <h2 className="heading-3 font-display text-foreground mb-6">
                {t(`categories.${category}`)}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
