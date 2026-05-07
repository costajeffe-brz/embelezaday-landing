import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Check } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.embelezaday.com.br'

interface Plan {
  id: string
  name: string
  description: string
  price: string
  features: string[]
  comingSoon?: boolean
  highlight?: boolean
}

const PLANS: Plan[] = [
  {
    id: 'essencial',
    name: 'Essencial',
    description: 'Ideal pra quem está começando.',
    price: '39,90',
    highlight: true,
    features: [
      'Até 100 clientes cadastrados',
      'Agenda online com link público',
      'Lembretes manuais por WhatsApp',
      'Relatórios semanais',
    ],
  },
  {
    id: 'profissional',
    name: 'Profissional',
    description: 'Para salões de até 3 profissionais.',
    price: '79,90',
    comingSoon: true,
    features: [
      'Clientes ilimitados',
      'Lembretes automáticos por WhatsApp',
      'Identidade visual personalizada',
      'Histórico completo e financeiro',
      'Suporte prioritário',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Estúdios em crescimento que querem escalar.',
    price: '149,90',
    comingSoon: true,
    features: [
      'Tudo do Profissional',
      'Múltiplos profissionais com agenda separada',
      'Integração com Google Calendar',
      'Relatórios avançados de faturamento',
      'Gerente de conta dedicado',
    ],
  },
]

export function Pricing() {
  return (
    <section id="precos" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Preços"
          title={<>Comece gratis. Mude de plano <span className="text-primary-600">quando precisar</span></>}
          subtitle="14 dias grátis em qualquer plano. Sem fidelidade. Cancela quando quiser."
        />

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {PLANS.map(plan => {
            const disabled = !!plan.comingSoon
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl border p-6 md:p-7 flex flex-col ${
                  plan.highlight
                    ? 'border-primary-300 ring-1 ring-primary-200 md:scale-[1.02]'
                    : 'border-primary-100'
                }`}
              >
                {plan.comingSoon ? (
                  <span className="absolute -top-2 right-4 bg-accent-500 text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                    Em breve
                  </span>
                ) : plan.highlight && (
                  <span className="absolute -top-2 right-4 bg-primary-500 text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                    Mais popular
                  </span>
                )}

                <h3 className="text-xl font-bold text-burgundy-900">{plan.name}</h3>
                <p className="text-sm text-burgundy-700/60 mt-1 min-h-[2.5rem]">{plan.description}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-sm font-medium text-burgundy-700/60">R$</span>
                  <span className="text-4xl font-bold text-burgundy-900">{plan.price}</span>
                  <span className="text-sm text-burgundy-700/60">/mês</span>
                </div>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-burgundy-800/80">
                      <Check size={16} className="text-primary-500 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  {disabled ? (
                    <button
                      disabled
                      className="w-full py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-400 cursor-not-allowed"
                    >
                      Em breve
                    </button>
                  ) : (
                    <Button
                      href={`${APP_URL}/auth?signup=1&plan=${plan.id}`}
                      variant={plan.highlight ? 'primary' : 'secondary'}
                      size="md"
                      external
                    >
                      Começar grátis
                    </Button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
