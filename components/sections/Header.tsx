import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/Logo'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.embelezaday.com.br'

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-primary-100/50">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center" aria-label="EmbelezaDay - início">
          <Logo priority className="h-9 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-burgundy-800/80">
          <a href="/#beneficios" className="hover:text-primary-600 transition-colors">Benefícios</a>
          <a href="/#funcionalidades" className="hover:text-primary-600 transition-colors">Funcionalidades</a>
          <a href="/#precos" className="hover:text-primary-600 transition-colors">Preços</a>
          <a href="/blog" className="hover:text-primary-600 transition-colors">Blog</a>
          <a href="/#perguntas" className="hover:text-primary-600 transition-colors">Perguntas</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button href={`${APP_URL}/auth`} variant="ghost" size="sm" external>
            Entrar
          </Button>
          <Button href={`${APP_URL}/auth?signup=1`} variant="primary" size="sm" external>
            Teste grátis
          </Button>
        </div>
      </div>
    </header>
  )
}
