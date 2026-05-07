import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Calendar, Link2, Users, MessageCircle, Clock, Sparkles } from 'lucide-react'

const FEATURES = [
  {
    icon: Calendar,
    title: 'Agenda visual e prática',
    description: 'Veja seu dia, semana ou mês em uma tela limpa. Arraste, edite e cancele em um clique.',
  },
  {
    icon: Link2,
    title: 'Link público de agendamento',
    description: 'Compartilhe um link no Instagram ou WhatsApp e seus clientes marcam horário sozinhos, sem chat.',
  },
  {
    icon: Users,
    title: 'Cadastro de clientes inteligente',
    description: 'Histórico de cada cliente, aniversário, status (ativa, em risco, atrasada) e contato direto.',
  },
  {
    icon: MessageCircle,
    title: 'Lembretes pelo WhatsApp',
    description: 'Mensagens prontas para confirmar agendamentos e reduzir faltas no dia.',
  },
  {
    icon: Clock,
    title: 'Horário de funcionamento e folgas',
    description: 'Define seu expediente uma vez. Folgas e feriados? Bloqueia em segundos.',
  },
  {
    icon: Sparkles,
    title: 'Personalização da marca',
    description: 'Logo, nome do salão e cor primária — sua agenda pública fica com a sua identidade.',
  },
]

export function Features() {
  return (
    <section id="funcionalidades" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Funcionalidades"
          title={<>Tudo que você precisa pra gerenciar a agenda <span className="text-primary-600">sem fricção</span></>}
          subtitle="Feito pra quem atende — não pra quem entende de tecnologia. Em 5 minutos você está usando."
        />

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(f => (
            <div
              key={f.title}
              className="bg-white border border-primary-100 rounded-2xl p-6 hover:border-primary-300 md:hover:shadow-lg md:hover:shadow-primary-500/5 md:transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-burgundy-900 mb-2">{f.title}</h3>
              <p className="text-sm text-burgundy-700/70 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
