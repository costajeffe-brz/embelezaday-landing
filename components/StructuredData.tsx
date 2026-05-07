const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.embelezaday.com.br'

const FAQS = [
  {
    q: 'Preciso de cartão de crédito pra testar?',
    a: 'Não. Os 14 dias grátis são liberados na hora do cadastro, sem cartão e sem cobrança automática ao final do período.',
  },
  {
    q: 'Como meus clientes agendam?',
    a: 'Você recebe um link único pra colar no Instagram, WhatsApp ou imprimir como QR Code. O cliente abre, escolhe o serviço, vê seus horários disponíveis e confirma o agendamento direto na sua agenda.',
  },
  {
    q: 'Funciona no celular?',
    a: 'Sim, 100%. O EmbelezaDay foi pensado pra rodar bem no celular, tanto pra você gerenciar quanto pra seus clientes agendarem.',
  },
  {
    q: 'Preciso instalar alguma coisa?',
    a: 'Não. Tudo roda no navegador. Abre o site, faz login e está dentro. Funciona em qualquer celular ou computador.',
  },
  {
    q: 'O que acontece se eu não pagar depois dos 14 dias?',
    a: 'Sua conta entra em modo só-leitura. Os dados ficam preservados por 60 dias caso você queira voltar. Não cobramos automaticamente sem sua autorização.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. Sem fidelidade, sem multa. Cancela direto pelo painel a qualquer momento.',
  },
]

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EmbelezaDay',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    'Agenda online para salões e profissionais da beleza. Compartilhe um link e seus clientes agendam direto na sua agenda.',
  sameAs: [],
}

const softwareApplicationLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'EmbelezaDay',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: SITE_URL,
  description:
    'Agenda online com link público para clientes agendarem sozinhos. Cadastro de clientes, lembretes WhatsApp, link de marcação personalizado.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Plano Essencial',
      price: '39.90',
      priceCurrency: 'BRL',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '39.90',
        priceCurrency: 'BRL',
        billingDuration: 'P1M',
      },
    },
  ],
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
}

export function HomepageStructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  )
}
