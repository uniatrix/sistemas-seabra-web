// Catálogo de microchips + leitores RFID vendidos no setor /vendas/produtos.
// Segue a convenção de src/data/blog-posts.ts: array tipado exportado de src/data/.
//
// COMO PREENCHER (Felipe): substitua os exemplos abaixo pela sua tabela real.
//  - Fatos do SKU (specs, preço) ficam AQUI.
//  - Nome/descrição traduzíveis ficam em src/messages/{pt,en,es}.json
//    sob `vendas.produtos.items.<slug>.{name,desc}` (referenciados por nameKey/descKey).
//  - Imagens em /public/images/produtos/<arquivo>.png|webp.
//  - priceBRL: número (preço por unidade) habilita "Adicionar ao carrinho".
//    null => mostra "Sob cotação" e NÃO entra no carrinho (só botão de cotação).

export type RFIDCategory = 'microchip' | 'leitor';

export interface RFIDProduct {
  /** id estável, ex.: 'microchip-fdx-b-2x12' */
  slug: string;
  category: RFIDCategory;
  /** chave i18n: t(`vendas.produtos.items.${slug}.name`) — use o slug como chave */
  nameKey: string;
  /** chave i18n: t(`vendas.produtos.items.${slug}.desc`) */
  descKey: string;
  /** caminho da imagem em /public */
  image: string;
  /** specs com rótulo traduzível + valor neutro (ex.: "134.2 kHz", "ISO 11784/11785") */
  specs: { labelKey: string; value: string }[];
  /** preço por unidade em BRL; null => "Sob cotação" (sem carrinho) */
  priceBRL: number | null;
  /** unidade de venda exibida (ex.: 'unidade', 'cento') — default 'unidade' */
  unit?: string;
  /** destaque visual ("mais vendido") */
  highlighted?: boolean;
}

// ⚠️ EXEMPLOS PROVISÓRIOS — trocar pela tabela real do Felipe (SKUs/specs/preços/fotos).
export const rfidProducts: RFIDProduct[] = [
  {
    slug: 'microchip-fdx-b',
    category: 'microchip',
    nameKey: 'microchip-fdx-b',
    descKey: 'microchip-fdx-b',
    image: '/images/produtos/placeholder.svg',
    specs: [
      { labelKey: 'frequency', value: '134.2 kHz' },
      { labelKey: 'protocol', value: 'ISO 11784/11785 (FDX-B)' },
      { labelKey: 'size', value: '2.12 × 12 mm' },
    ],
    priceBRL: null, // definir preço por unidade quando a tabela chegar
    unit: 'unidade',
    highlighted: true,
  },
  {
    slug: 'leitor-bastao-bluetooth',
    category: 'leitor',
    nameKey: 'leitor-bastao-bluetooth',
    descKey: 'leitor-bastao-bluetooth',
    image: '/images/produtos/placeholder.svg',
    specs: [
      { labelKey: 'protocol', value: 'ISO 11784/11785 (FDX-B / HDX)' },
      { labelKey: 'range', value: 'até 30 cm' },
      { labelKey: 'connectivity', value: 'Bluetooth + USB' },
      { labelKey: 'battery', value: 'recarregável' },
    ],
    priceBRL: null,
    unit: 'unidade',
  },
];

export const rfidCategories: RFIDCategory[] = ['microchip', 'leitor'];

export function getProductsByCategory(category: RFIDCategory): RFIDProduct[] {
  return rfidProducts.filter((p) => p.category === category);
}
