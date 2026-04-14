## 🇧🇷 Sistema Seabra — Site Institucional

Site institucional multi-idioma da **Sistema Seabra**, empresa focada em soluções de software para o agronegócio brasileiro — com destaque para o SeabraApp, plataforma de gestão de rebanho para associações de produtores rurais.

**Live:** https://www.sistemaseabra.com.br/

### Funcionalidades
- **Multi-idioma** — Português, Inglês e Espanhol via `next-intl`
- **Landing completa** — Hero, segmentos atendidos, sobre, processo, provas sociais, CTA
- **Páginas institucionais** — Serviços, Soluções, Cases, Blog, Contato
- **SEO otimizado** com metadata dinâmica por idioma
- **Deploy** na Vercel

### Stack
- **Next.js 16** (App Router com segment `[locale]`) + **React 19**
- **next-intl** para internacionalização
- **Tailwind CSS v4** + **Radix UI**
- **TypeScript**

### Estrutura
```
src/
├── app/[locale]/
│   ├── page.tsx           # Home
│   ├── blog/
│   ├── cases/
│   ├── contato/
│   ├── servicos/
│   └── solucoes/
├── components/home/       # HeroSection, LogosSection, etc.
└── messages/
    ├── pt.json
    ├── en.json
    └── es.json
```

### Rodar localmente
```bash
npm install
npm run dev
```

---

## 🇺🇸 Sistema Seabra — Institutional Site (English)

Multi-language institutional site for **Sistema Seabra**, a software company focused on solutions for Brazilian agribusiness — featuring SeabraApp, a livestock management platform for rural producer associations.

**Live:** https://www.sistemaseabra.com.br/

### Features
- Multi-language (Portuguese, English, Spanish) via `next-intl`
- Complete landing (Hero, served segments, about, process, social proof, CTA)
- Institutional pages (Services, Solutions, Cases, Blog, Contact)
- SEO-optimized with per-locale metadata
- Vercel deployment

### Stack
Next.js 16 (App Router with `[locale]` segment) · React 19 · next-intl · Tailwind CSS v4 · Radix UI · TypeScript

### Run locally
```bash
npm install
npm run dev
```
