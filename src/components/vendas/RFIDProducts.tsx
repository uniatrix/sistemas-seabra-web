'use client';

import { CartProvider } from './cart/CartContext';
import { CartDrawer } from './cart/CartDrawer';
import { RFIDHero } from './RFIDHero';
import { RFIDCatalog } from './RFIDCatalog';

// Wrapper cliente: provê o carrinho para o catálogo e o drawer.
export function RFIDProducts() {
  return (
    <CartProvider>
      <RFIDHero />
      <RFIDCatalog />
      <CartDrawer />
    </CartProvider>
  );
}
