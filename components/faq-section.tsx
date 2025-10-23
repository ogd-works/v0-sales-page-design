import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "A Academia da Improvisação é para mim, mesmo se eu for iniciante ou já tocar há anos?",
      answer:
        "Sim. A Academia da Improvisação é o método que guia você do básico ao avançado. Se você já toca, mas se sente travado, ela vai te dar a clareza e o método que faltam. Se está começando, vai aprender a pensar como um improvisador desde o início, evitando os erros que a maioria comete.",
    },
    {
      question: "Qual é a carga horária da Academia e quanto tempo por dia preciso estudar?",
      answer:
        "A Academia da Improvisação é um método direto, focado na prática real. São mais de 40 aulas para você fazer no seu ritmo, de acordo com a sua rotina. Mesmo com 20 a 30 minutos de estudo focado por dia, você já vai ver uma evolução significativa em poucas semanas.",
    },
    {
      question: "O curso serve para violão e outros instrumentos harmônicos?",
      answer:
        "Sim. Embora os exemplos sejam em sua maioria para a guitarra, os conceitos de harmonia, ritmo e construção de frases da Academia da Improvisação se aplicam a qualquer instrumento harmônico, como violão, piano, baixo ou saxofone. A Tríade da Improvisação Autêntica é um método universal para músicos.",
    },
    {
      question: "O acesso à Academia é vitalício?",
      answer:
        "Sim. Ao se matricular, você ganha acesso vitalício a todo o conteúdo, incluindo todos os bônus e futuras atualizações. Você pode assistir às aulas quantas vezes quiser e no seu próprio ritmo, sem qualquer pressa.",
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer:
        "A Academia da Improvisação oferece uma garantia de satisfação total. Se, por qualquer motivo, você não gostar do curso ou achar que ele não é para você, basta solicitar o reembolso completo dentro de 7 dias, direto pela plataforma. Sem perguntas, sem burocracia. O risco é todo meu.",
    },
    {
      question: "Já fiz outros cursos, mas continuo travado. Qual é o diferencial da Academia?",
      answer:
        "A grande maioria dos cursos foca em 'o que tocar' (escalas, licks e shapes). A Academia da Improvisação vai além, focando em 'como pensar'. Você vai aprender o mapa musical, o domínio do ritmo e a sua linguagem pessoal, quebrando os padrões que te prendem e te dando a liberdade para se expressar de verdade.",
    },
    {
      question: "Quais são as formas de pagamento para a Academia da Improvisação?",
      answer:
        "Você pode pagar com cartão de crédito (parcelando em até 12x), Pix ou boleto bancário. A plataforma é 100% segura.",
    },
  ]

  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold leading-tight md:text-5xl">Perguntas Frequentes</h2>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Tudo o que você precisa saber antes de começar
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-pretty leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
