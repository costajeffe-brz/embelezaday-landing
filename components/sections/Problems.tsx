import { Container } from '@/components/ui/Container'

const PROBLEMS = [
  {
    emoji: '📱',
    title: 'WhatsApp lotado de "tem horário?"',
    description: 'Você passa o dia respondendo a mesma pergunta em vez de focar no atendimento.',
  },
  {
    emoji: '😵',
    title: 'Agenda em caderno e na cabeça',
    description: 'Risca, apaga, esquece, agenda duas pessoas no mesmo horário. Perdeu cliente sem saber.',
  },
  {
    emoji: '👻',
    title: 'Clientes que somem no dia',
    description: 'Sem confirmação automática, no-show vira rotina e seu dia fica com buracos sem ninguém pra pagar.',
  },
  {
    emoji: '💸',
    title: 'Não sabe quanto faturou',
    description: 'Sem registro centralizado, é difícil ver quem é cliente fiel, quem sumiu e quanto entrou no mês.',
  },
]

export function Problems() {
  return (
    <section className="py-16 md:py-24 bg-burgundy-900 text-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-300 mb-3">
            Você se reconhece?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Gerenciar salão sem ferramenta certa{' '}
            <span className="text-accent-300">consome seu tempo</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {PROBLEMS.map(p => (
            <div
              key={p.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6"
            >
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
