# Sistema Seabra — Guia para Claude

Site institucional multi-idioma da **Sistema Seabra**, empresa de software para o agronegócio. Apresenta o **SeabraApp** (gestão de rebanho de caprinocultura leiteira) como produto principal, além de páginas de serviços, soluções, cases, blog e contato. Deploy em produção: https://www.sistemaseabra.com.br.

## Tech Stack

- **Framework**: Next.js 16 (App Router, segmento dinâmico `[locale]`)
- **UI**: React 19 + Tailwind CSS v4 + Radix UI (estilo shadcn via `components.json`)
- **i18n**: `next-intl` — locales `pt`, `en`, `es` em `src/messages/*.json`
- **Ícones**: `lucide-react`
- **TypeScript** estrito
- **Deploy**: Vercel

## Comandos

```bash
npm run dev      # Dev server (http://localhost:3000)
npm run build    # Build produção
npm run start    # Servir build
npm run lint     # ESLint
```

## Estrutura

```
src/
├── app/[locale]/       # Páginas por locale (home, blog, cases, contato, servicos, solucoes)
├── components/         # Seções reutilizáveis (HeroSection, LogosSection, etc.)
├── data/               # Conteúdo estático tipado
├── hooks/              # React hooks customizados
├── i18n/               # Configuração next-intl
├── lib/                # Utilitários
├── messages/           # Traduções (pt.json, en.json, es.json)
└── middleware.ts       # Roteamento de locale
```

## Ecossistema Sistema Seabra

Projetos relacionados que compõem o sistema. Ao trabalhar em um, verificar se alterações impactam os outros. Esta tabela é **idêntica** no `CLAUDE.md` de cada projeto — qualquer sessão Claude Code entende o ecossistema ao abrir qualquer um deles.

| Projeto | Caminho Local | Stack | Papel |
|---------|--------------|-------|-------|
| **SeabraApp** | `d:\Coding\Flutter\seabra-app-main` | Flutter + Supabase + FlutterFlow | App mobile de gestão de caprinocultura (produto principal) |
| **Site Institucional** | `C:\Coding\Web\React\sistemas-seabra-web` | Next.js 16 + React 19 + next-intl + Tailwind v4 + Radix UI | Landing + institucional pt/en/es (sistemaseabra.com.br) |

**Branch padrão**: `main` em todos. **Sem PRs** para projetos próprios — push direto salvo indicação explícita.

### Coordenação cross-projeto

- **Features/funcionalidades do SeabraApp** → verificar se `src/messages/{pt,en,es}.json`, `src/data/` e seções relevantes do site (solucoes, servicos, home) precisam refletir
- **Branding, copy, posicionamento comercial** → fonte de verdade é o **site**; app deve alinhar textos de onboarding/descrição
- **Funcionalidades do produto** → fonte de verdade é o **SeabraApp**; site descreve o que app entrega

### Checklist: alteração de feature/produto do SeabraApp
1. Implementar no app (`d:\Coding\Flutter\seabra-app-main`)
2. Se impacta mensagem externa, atualizar aqui:
   - `src/messages/pt.json`, `en.json`, `es.json`
   - Seção correspondente em `src/data/` ou `src/components/home/`
   - Página `[locale]/solucoes` ou `[locale]/servicos` se for nova solução/serviço

### Checklist: alteração de branding/copy no site
1. Atualizar `src/messages/*.json` para os 3 locales
2. Verificar onboarding/textos do SeabraApp para consistência tonal

## Convenções do projeto

- **Textos de UI**: sempre em `src/messages/{pt,en,es}.json` — **nunca hardcode**
- **Server/Client**: default Server Components; usar `"use client"` só quando necessário (hooks, eventos)
- **SEO**: metadata por locale em `src/app/[locale]/*/page.tsx`
- **Conteúdo de seções**: dados tipados em `src/data/` quando variável; direto em `messages/*.json` quando curto
- **Componentes shadcn-style**: adicionados via `components.json` em `src/components/ui/`

## Referências

- Deploy live: https://www.sistemaseabra.com.br
- Produto principal: SeabraApp (ver tabela de ecossistema)
