# Seabra Pequenos Ruminantes — Pacote de Documentação Comercial

Este pacote contém os documentos comerciais do sistema Seabra em três idiomas,
prontos para serem hospedados em qualquer site estático (WordPress, site
institucional, Cloudflare Pages, Vercel, Netlify, GitHub Pages, Apache, Nginx,
etc.).

## Conteúdo

| Arquivo                 | Idioma    | Propósito                       |
|-------------------------|-----------|---------------------------------|
| `apresentacao.html`     | Português | Apresentação institucional      |
| `apresentacao-es.html`  | Espanhol  | Apresentação institucional      |
| `apresentacao-en.html`  | Inglês    | Apresentação institucional      |
| `planos.html`           | Português | Planos e valores (R$)           |
| `planos-es.html`        | Espanhol  | Planos e valores (USD)          |
| `planos-en.html`        | Inglês    | Planos e valores (USD)          |
| `Logo_png.png`          | —         | Logo do sistema (referenciado por todos os HTMLs) |

**Total:** 7 arquivos. Todos os HTMLs referenciam `Logo_png.png` como caminho
relativo — basta manter na mesma pasta.

## Como hospedar

### Opção simples — qualquer servidor estático

Suba os 7 arquivos em uma pasta do seu site. Exemplos de URL final:

```
https://seu-site.com.br/docs/apresentacao.html
https://seu-site.com.br/docs/planos.html
```

O seletor de idioma (PT · ES · EN) no topo de cada documento já aponta para os
arquivos correspondentes via caminho relativo — funciona sem nenhuma
configuração adicional.

### URLs amigáveis (sem `.html`) — opcional

Se quiser URLs como `/apresentacao` em vez de `/apresentacao.html`, configure
rewrites no seu servidor:

- **Vercel** (`vercel.json`):
  ```json
  "rewrites": [
    { "source": "/apresentacao",    "destination": "/apresentacao.html" },
    { "source": "/apresentacao-es", "destination": "/apresentacao-es.html" },
    { "source": "/apresentacao-en", "destination": "/apresentacao-en.html" },
    { "source": "/planos",          "destination": "/planos.html" },
    { "source": "/planos-es",       "destination": "/planos-es.html" },
    { "source": "/planos-en",       "destination": "/planos-en.html" }
  ]
  ```
  E edite cada HTML para trocar `href="apresentacao.html"` por `href="/apresentacao"` etc.

- **Nginx**:
  ```nginx
  rewrite ^/apresentacao$     /apresentacao.html    last;
  rewrite ^/apresentacao-es$  /apresentacao-es.html last;
  # ... etc.
  ```

- **Apache** (`.htaccess`):
  ```apache
  RewriteRule ^apresentacao$    apresentacao.html    [L]
  RewriteRule ^apresentacao-es$ apresentacao-es.html [L]
  # ... etc.
  ```

Para a versão que você está recebendo agora, os links apontam para os
arquivos `.html` — a forma mais portável.

## Boas práticas de distribuição

Estes documentos foram desenhados para distribuição **controlada** — você envia
o link para o interessado, nada mais. Recomendações:

1. **Não linkar em menu, rodapé ou sitemap** do site institucional.
2. **`robots.txt`** — adicione no seu site:
   ```
   User-agent: *
   Disallow: /docs/
   ```
3. **Meta tags** — já estão em cada HTML:
   ```html
   <meta name="robots" content="noindex,nofollow,noarchive">
   <meta name="googlebot" content="noindex,nofollow">
   ```
4. **URL com hash opcional** — se quiser dificultar o "chute" da URL por
   concorrentes, coloque os arquivos em um subdiretório com hash, ex.:
   `/docs-a8f3e21b/apresentacao.html`

## Contato configurado nos HTMLs

- WhatsApp: **+55 (21) 9 9936-6784** (link `wa.me/5521999366784` com mensagem
  pré-preenchida)
- E-mail: **sistemaseabra@gmail.com** (link `mailto:` com assunto
  pré-preenchido)

Aparecem no CTA final da apresentação e no bloco de contato dos planos, nas
três versões de idioma.

## Placeholders ainda presentes

Antes de publicar, confirme ou edite nos arquivos:

| Campo | Onde está | Valor atual |
|-------|-----------|-------------|
| Threshold de associados | `planos*.html` (tabela de associação) | `[30]` |
| Valor da licença completa | Todos os `planos*.html` | "sob consulta" / "upon request" / "bajo consulta" |

## Exportar em PDF

Todos os documentos têm CSS de impressão configurado (A4, `@media print`).
Para gerar PDF:

1. Abra o HTML no navegador
2. `Cmd+P` (ou `Ctrl+P`)
3. Destino: **Salvar como PDF**
4. Tamanho: **A4**
5. Margens: **Padrão**

O seletor de idioma é automaticamente ocultado na impressão.

## Valores configurados

**Português (R$):**
- Produtor independente: R$ 150,00/mês por propriedade
- Associação até 30 associados: R$ 120,00/associado/mês
- Associação acima de 30: R$ 100,00/associado/mês
- Licença completa: sob consulta
- Customização sob demanda: sob consulta

**Espanhol e Inglês (US$):**
- Produtor independente: US$ 29/mês por propriedade
- Associação até 30 membros: US$ 23/membro/mês
- Associação acima de 30: US$ 19/membro/mês
- Licença completa: sob consulta
- Customização sob demanda: sob consulta

Para ajustar valores, edite os blocos `.plan-price` e as tabelas nos arquivos
`planos*.html`.
