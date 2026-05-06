# EmbelezaDay — Landing

Landing page e blog do SaaS [EmbelezaDay](https://app.embelezaday.com.br) — agenda online para salões e profissionais autônomas de beleza.

## Stack

- **Next.js 16** (App Router + Turbopack)
- **Tailwind CSS 4** (CSS-first config)
- **TypeScript**
- **Resend** para envio do formulário de contato
- Hospedado na **Vercel**

## Estrutura

```
app/
├── layout.tsx           Root layout, metadata, GTM
├── page.tsx             Landing (homepage)
├── globals.css          Brand tokens (primary, accent, burgundy)
└── api/contact/route.ts Endpoint do formulário → Resend

components/
├── Logo.tsx             Wrapper do <Image> da logo
├── ui/                  Primitivos (Button, Container, SectionHeader)
└── sections/            Seções da landing (Header, Hero, Features, etc.)

public/
├── logo.png             Lockup horizontal (2000×2000, transparente)
├── icon.png             Ícone quadrado (512×512)
├── icon-192.png         PWA / Android Chrome
├── icon-512.png         PWA / Android Chrome
└── apple-touch-icon.png iOS
```

## Variáveis de ambiente

Copia o `.env.example` pra `.env.local` em desenvolvimento:

```bash
cp .env.example .env.local
```

| Variável | Obrigatório? | Descrição |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sim | URL pública do site (metadata, OG, sitemap) |
| `NEXT_PUBLIC_APP_URL` | Sim | URL do app SaaS (botões "Entrar" / "Teste grátis") |
| `NEXT_PUBLIC_GTM_ID` | Não | ID do Google Tag Manager. Sem ele, GTM não é injetado |
| `RESEND_API_KEY` | Não | API key do Resend. Sem ela, `/api/contact` apenas loga |
| `CONTACT_EMAIL_TO` | Não | Email destinatário do formulário (default: costajeffe@gmail.com) |
| `CONTACT_EMAIL_FROM` | Não | Email remetente (default: `EmbelezaDay <onboarding@resend.dev>`) |

## Comandos

```bash
npm run dev     # dev server em http://localhost:3000
npm run build   # build de produção
npm run start   # serve build de produção
npm run lint    # ESLint
```

## Deploy

Push em `main` → Vercel deploy automático.

Configurar todas as envs em Project → Settings → Environment Variables (Production e Preview).

## Brand tokens

Definidos em `app/globals.css` via `@theme`:

- `primary-50 → 900` — paleta rose/mauve (espelhada do app SaaS)
- `accent-50 → 600` — peach extraído da logo
- `burgundy-700/800/900` — cor profunda da marca, headings e texto
