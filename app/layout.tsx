import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://embelezaday.com.br'
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'EmbelezaDay — Agenda online para salões e profissionais da beleza',
    template: '%s · EmbelezaDay',
  },
  description:
    'Agenda online com link público para seus clientes agendarem sozinhos. Menos WhatsApp, mais clientes atendidos. Teste grátis por 14 dias.',
  keywords: [
    'agenda online salão',
    'agenda salão de beleza',
    'agendamento online',
    'sistema para salão',
    'gestão de salão',
    'agenda manicure',
    'link de agendamento',
  ],
  authors: [{ name: 'EmbelezaDay' }],
  creator: 'EmbelezaDay',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    title: 'EmbelezaDay — Agenda online para salões e profissionais da beleza',
    description:
      'Compartilhe um link e seus clientes agendam direto na sua agenda — sem confusão, sem sobreposição, sem perder tempo no WhatsApp.',
    siteName: 'EmbelezaDay',
    // Imagem OG é gerada automaticamente via app/opengraph-image.tsx (1200x630)
    // e por app/blog/[slug]/opengraph-image.tsx para cada artigo.
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EmbelezaDay — Agenda online para salões',
    description: 'Seu cliente preenche sozinho. Você atende em paz.',
    // Imagem twitter:image é resolvida pela mesma convenção de opengraph-image.
  },
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        {GTM_ID && (
          <Script
            id="gtm-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body className="min-h-full flex flex-col">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  )
}
