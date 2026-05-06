'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Preciso de cartão de crédito pra testar?',
    a: 'Não. Os 14 dias grátis são liberados na hora do cadastro, sem cartão e sem cobrança automática ao final do período.',
  },
  {
    q: 'Como minhas clientes agendam?',
    a: 'Você recebe um link único (ex: embelezaday.com.br/agenda/seusalao) pra colar no Instagram, WhatsApp ou imprimir como QR Code. A cliente abre, escolhe o serviço, vê seus horários disponíveis e confirma o agendamento direto na sua agenda.',
  },
  {
    q: 'Funciona no celular?',
    a: 'Sim, 100%. O EmbelezaDay foi pensado pra rodar bem no celular, tanto pra você gerenciar quanto pra suas clientes agendarem.',
  },
  {
    q: 'E se eu já uso outra agenda?',
    a: 'Você pode usar em paralelo enquanto migra. Se quiser, importa seus clientes manualmente — vamos lançar importação por planilha em breve.',
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

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="perguntas" className="py-16 md:py-24 bg-primary-50/40">
      <Container size="narrow">
        <SectionHeader
          eyebrow="Perguntas frequentes"
          title="Dúvidas que costumam aparecer"
        />

        <div className="mt-10 space-y-2">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="bg-white border border-primary-100 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left md:hover:bg-primary-50/50 md:transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-burgundy-900">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-primary-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-burgundy-800/75 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
