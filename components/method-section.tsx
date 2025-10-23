import { Map, Music, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MethodSection() {
  const pillars = [
    {
      icon: Map,
      title: "1. A Análise do Mapa Musical",
      subtitle: "Onde você está?",
      description:
        "A maioria dos músicos improvisa sem entender o que está acontecendo. Por isso, travam. A primeira etapa é te dar o mapa: você vai entender a forma, os acordes e a lógica por trás de qualquer música. É aqui que o improviso deixa de ser sorte e passa a ser uma escolha consciente.",
    },
    {
      icon: Music,
      title: "2. A Maestria Rítmica",
      subtitle: "O que você faz?",
      description:
        "Um solo sem ritmo é só uma sequência de notas. Neste pilar, vamos muito além da teoria. Você vai dominar o ritmo, aprendendo a usar agrupamentos e deslocamentos rítmicos que vão dar vida às suas frases, fazendo com que você se destaque e soe como um profissional.",
    },
    {
      icon: User,
      title: "3. A Linguagem Pessoal",
      subtitle: "Como você se expressa?",
      description:
        "É aqui que a sua voz musical nasce. Com o conhecimento do mapa e o domínio do ritmo, você vai se libertar dos clichês e das fórmulas prontas para, finalmente, expressar sua própria identidade. Seu solo vai contar uma história, uma história sua.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-24 md:py-32">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20">
            O Método Comprovado
          </div>
          <h2 className="mb-6 text-balance text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Para te dar o atalho que eu não tive, criei um sistema que condensa toda a minha jornada em{" "}
            <span className="text-primary">três etapas</span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-xl text-muted-foreground">
            Não é um atalho, é o caminho direto para improvisar com liberdade e autenticidade.
          </p>
        </div>

        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 inline-block rounded-2xl border-2 border-primary bg-card p-8 shadow-xl">
            <p className="mb-2 text-3xl font-extrabold text-primary md:text-4xl">A Tríade da Improvisação Autêntica</p>
            <p className="text-lg font-semibold text-muted-foreground">O coração da Academia de Improvisação</p>
          </div>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-3xl">
            <Image
              src="/three-pillars-method-diagram.jpg"
              alt="Os Três Pilares da Improvisação Autêntica"
              width={1200}
              height={600}
              className="rounded-2xl border-2 border-primary/20 shadow-2xl"
            />
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl border-2 border-primary/20 bg-card p-6 shadow-lg transition-all hover:border-primary hover:shadow-xl lg:p-8"
            >
              <div className="mb-6 flex-shrink-0 rounded-xl bg-primary/10 p-4 transition-colors group-hover:bg-primary/20 w-fit">
                <pillar.icon className="h-8 w-8 text-primary lg:h-10 lg:w-10" />
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-extrabold lg:text-2xl">{pillar.title}</h3>
                <p className="mb-4 text-lg font-bold text-primary">{pillar.subtitle}</p>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground lg:text-base">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center shadow-xl md:p-12">
          <p className="mb-8 text-balance text-2xl font-extrabold leading-tight md:text-3xl">
            A Academia de Improvisação é o guia completo para dominar a Tríade e, de uma vez por todas, encontrar a sua
            voz no instrumento.
          </p>
          <Button size="lg" className="group h-14 px-8 text-lg font-bold shadow-lg hover:shadow-xl">
            QUERO DOMINAR A TRÍADE AGORA
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/3 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  )
}
