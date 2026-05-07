import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.embelezaday.com.br'

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-burgundy-900 via-primary-700 to-burgundy-800 px-6 py-12 md:px-12 md:py-16 text-center">
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent-300/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-400/30 blur-3xl"
          />

          <h2 className="relative text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto">
            Bora deixar a agenda{' '}
            <span className="bg-gradient-to-r from-accent-200 to-white bg-clip-text text-transparent">
              trabalhar por você?
            </span>
          </h2>
          <p className="relative mt-4 text-white/80 text-lg max-w-xl mx-auto">
            14 dias grátis. Sem cartão, sem fidelidade. Em 5 minutos seu primeiro cliente já pode agendar.
          </p>
          <div className="relative mt-8">
            <Button href={`${APP_URL}/auth?signup=1`} variant="primary" size="lg" external>
              Criar minha conta grátis
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
