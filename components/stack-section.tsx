import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function StackSection() {
  const stackItems = [
    {
      title: "O método completo, com mais de 40 aulas gravadas",
      description:
        "Organizadas em um passo a passo claro e direto para você dominar o seu improviso com liberdade, musicalidade e confiança.",
      value: "R$ 797,00",
      isFree: false,
    },
    {
      title: "Bônus 1: O Segredo da Fluidez e Precisão",
      description: "O método para você adicionar um groove sofisticado e profissional aos seus solos.",
      value: "R$ 97,00",
      isFree: true,
    },
    {
      title: "Bônus 2: Mente Criativa, Solos Infinitos",
      description: "O guia para você criar melodias que realmente se conectam e contam uma história.",
      value: "R$ 97,00",
      isFree: true,
    },
    {
      title: "Bônus 3: Velocidade com Clareza e Música",
      description: "O método definitivo para você tocar rápido e com precisão, sem sacrificar a musicalidade.",
      value: "R$ 97,00",
      isFree: true,
    },
    {
      title: "Bônus 4 e 5: Vocabulário para Improvisar em Qualquer Situação",
      description:
        "Um arsenal de padrões essenciais para você ir além dos clichês e ter ideias novas sempre que encostar na guitarra.",
      value: "R$ 109,00",
      isFree: true,
    },
  ]

  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
              A Oferta Completa que Você Sempre Quis
            </h2>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              A Academia da Improvisação não é só um curso. É a síntese de toda a minha jornada, o atalho que eu não
              tive, condensado em um único método.
            </p>
          </div>

          {/* Stack Items */}
          <div className="mb-8 space-y-4">
            <p className="text-center text-lg font-semibold mb-6">
              Veja o quanto você pagaria para ter acesso a todo este conhecimento de forma separada:
            </p>

            {stackItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 rounded-lg border bg-card p-6 shadow-sm">
                <div className="mt-1 rounded-full bg-primary/10 p-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-start justify-between gap-4">
                    <h3 className="text-balance font-semibold leading-tight">{item.title}</h3>
                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className={`flex-shrink-0 font-bold ${item.isFree ? "text-muted-foreground line-through text-sm" : "text-primary"}`}
                      >
                        {item.value}
                      </span>
                      {item.isFree && (
                        <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-extrabold text-accent-foreground">
                          GRÁTIS
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total Value */}
          <div className="mb-8 rounded-lg border-2 border-primary bg-card p-8">
            <div className="mb-6 flex items-center justify-between border-b pb-4">
              <span className="text-xl font-semibold">VALOR TOTAL DE TUDO:</span>
              <span className="text-3xl font-bold text-primary">R$ 1.197,00</span>
            </div>

            <p className="text-center text-lg mb-6">Mas relaxa... Você não precisa investir nem perto disso.</p>

            <div className="text-center mb-6">
              <p className="text-2xl font-bold mb-4">Chegou a Sua Hora de Destravar</p>
              <p className="text-muted-foreground mb-4">
                Por um tempo limitado, você pode levar a Academia da Improvisação e todos os seus bônus exclusivos por
                um valor especial.
              </p>

              <div className="my-6">
                <div className="text-lg text-muted-foreground line-through mb-2">De R$ 1.197,00</div>
                <div className="text-xl mb-2">Por apenas:</div>
                <div className="text-5xl font-bold text-primary mb-2">12x de R$ 29,70</div>
                <div className="text-xl">ou R$ 297,00 à vista</div>
              </div>
            </div>

            <Button size="lg" className="group h-14 w-full text-lg mb-6">
              QUERO SAIR DO BÁSICO E TOCAR COM CONFIANÇA
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <div className="space-y-2 text-center text-sm text-muted-foreground">
              <p>✓ Acesso Vitalício: Assista às aulas no seu ritmo, quando quiser, para sempre.</p>
              <p>
                ✓ Garantia de 7 Dias: Seu investimento está 100% seguro. Se você não gostar, devolvemos seu dinheiro sem
                burocracia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
