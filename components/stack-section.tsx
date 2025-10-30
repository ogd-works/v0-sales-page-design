import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function StackSection() {
  const bonuses = [
    {
      title: "Aulas de teoria básica",
      description:
        "Teoria musical é o calcanhar de aquiles de muitos guitarristas, porém, fique tranquilo... preparamos uma aula especial que vai te ajudar a se familiarizar com este assunto tão temido.",
      image: "/bonus-teoria-musical.jpg",
    },
    {
      title: "Equipamentos e timbre",
      description:
        "Não basta saber tocar BLUES. Você precisa saber tirar um SOM DE BLUES e é isso que você aprenderá nesta aula.",
      image: "/bonus-equipamentos-timbre.jpg",
    },
    {
      title: "Playalongs exclusivos",
      description:
        "Bases de acompanhamento profissionais para você praticar tudo que aprendeu e desenvolver sua improvisação com confiança.",
      image: "/bonus-playalongs.jpg",
    },
    {
      title: "Repertório completo",
      description:
        "Performances variadas de Blues para você estudar, analisar e se inspirar nos diferentes estilos e abordagens do gênero.",
      image: "/bonus-repertorio.jpg",
    },
  ]

  return (
    <section className="bg-[#2d3e2d] py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="mb-16 text-center font-heading text-4xl font-bold leading-tight text-white md:text-7xl tracking-normal leading-[0em]">
          E ainda receberá estes bônus especiais gratuitamente...
        </h2>

        {/* Bonus Cards */}
        <div className="mx-auto max-w-6xl space-y-8">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 rounded-2xl bg-[#f5f1e8] p-8 shadow-lg md:flex-row md:gap-8 md:p-10"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative h-48 w-64 overflow-hidden rounded-xl border-4 border-[#3d4e3d] shadow-xl md:h-56 md:w-80">
                  <img
                    src={bonus.image || "/placeholder.svg"}
                    alt={bonus.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
                {/* Badge */}
                <div className="flex-shrink-0 rounded-lg bg-[#4a5f4a] px-6 py-4 shadow-md">
                  <h3 className="font-heading text-xl font-bold text-white md:text-2xl">{bonus.title}</h3>
                </div>

                {/* Description */}
                <p className="text-lg leading-relaxed text-[#2d3e2d] md:text-xl">{bonus.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="group h-auto bg-primary px-8 py-6 text-xl font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-primary/90 md:px-12 md:py-8 md:text-2xl"
          >
            QUERO RECEBER TODOS OS BÔNUS AGORA
            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1 md:h-7 md:w-7" />
          </Button>
        </div>
      </div>
    </section>
  )
}
