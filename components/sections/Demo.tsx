import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'

const STEPS = [
  {
    number: '01',
    title: 'Configura seu salão',
    description: 'Cadastra serviços, horários e folgas. Em menos de 5 minutos sua agenda está pronta pra receber clientes.',
  },
  {
    number: '02',
    title: 'Compartilha o link público',
    description: 'Cola no bio do Instagram, manda no status do WhatsApp ou imprime um QR Code. As clientes marcam direto.',
  },
  {
    number: '03',
    title: 'Atende e acompanha',
    description: 'Vê quem agendou, quem confirmou e quem sumiu. Tudo num painel limpo no celular ou computador.',
  },
]

export function Demo() {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50/30">
      <Container>
        <SectionHeader
          eyebrow="Como funciona"
          title={<>Em 3 passos a sua agenda já está <span className="text-primary-600">vendendo sozinha</span></>}
        />

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-10">
          {STEPS.map(step => (
            <div key={step.number} className="relative">
              <div className="text-7xl font-bold text-primary-200/80 leading-none mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-burgundy-900 mb-2">{step.title}</h3>
              <p className="text-burgundy-700/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
