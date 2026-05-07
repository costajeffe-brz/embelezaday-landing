import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { HeroMockup } from '@/components/HeroMockup'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.embelezaday.com.br'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-24">
      {/* Soft gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50/60 via-white to-white"
      />
      <div
        aria-hidden
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] -z-10 rounded-full opacity-30 blur-3xl bg-gradient-to-br from-accent-200 to-primary-300"
      />

      <Container size="wide">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            Gestão para salões e profissionais da beleza
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-burgundy-900 leading-[1.05] tracking-tight">
            A agenda online que seus{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              clientes preenchem sozinhos
            </span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-burgundy-800/70 leading-relaxed max-w-2xl mx-auto">
            Pare de responder &ldquo;tem horário sexta?&rdquo; no WhatsApp.
            Compartilhe um link e seus clientes agendam direto na sua agenda — sem sobreposição, sem confusão.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href={`${APP_URL}/auth?signup=1`} variant="primary" size="lg" external>
              Começar grátis por 14 dias
            </Button>
            <Button href="#funcionalidades" variant="ghost" size="lg">
              Ver como funciona
            </Button>
          </div>

          <p className="mt-4 text-sm text-burgundy-700/60">
            Sem cartão de crédito · Cancela quando quiser · 5 minutos pra configurar
          </p>
        </div>

        {/* Mockup ilustrativo — pode ser substituído por screenshot real do app */}
        <div className="mt-14 md:mt-20 relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary-200/40 to-accent-200/40 blur-2xl rounded-3xl" aria-hidden />
          <div className="relative">
            <HeroMockup />
          </div>
        </div>
      </Container>
    </section>
  )
}
