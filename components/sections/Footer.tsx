import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/Logo'
import { ContactForm } from './ContactForm'

export function Footer() {
  return (
    <footer className="bg-burgundy-900 text-white pt-16 md:pt-20 pb-10">
      <Container>
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16">
          {/* Brand + nav */}
          <div>
            <Logo
              variant="full"
              className="h-10 w-auto brightness-0 invert opacity-90"
            />
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
              Agenda online para salões e profissionais autônomas.
              Menos WhatsApp, mais clientes atendidas.
            </p>

            <nav className="mt-8 grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
              <a href="#funcionalidades" className="text-white/70 hover:text-white transition-colors">Funcionalidades</a>
              <a href="#precos" className="text-white/70 hover:text-white transition-colors">Preços</a>
              <a href="#perguntas" className="text-white/70 hover:text-white transition-colors">Perguntas</a>
              <a href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</a>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-1">Fale com a gente</h3>
            <p className="text-sm text-white/60 mb-5">
              Dúvidas, sugestões ou parceria? Manda uma mensagem.
            </p>
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} EmbelezaDay. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="/termos" className="hover:text-white transition-colors">Termos de uso</a>
            <a href="/privacidade" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
