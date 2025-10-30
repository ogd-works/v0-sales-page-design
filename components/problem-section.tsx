import { AlertCircle } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      title: "You're working harder, not smarter",
      description:
        "Spending 60+ hours a week but revenue stays flat. You're trapped in the day-to-day operations with no time to scale.",
    },
    {
      title: "Marketing that doesn't convert",
      description:
        "You're getting traffic and leads, but they're not turning into paying customers. Your conversion rate is stuck below 2%.",
    },
    {
      title: "Inconsistent revenue",
      description:
        "Some months are great, others are terrible. You can't predict your income or plan for growth with confidence.",
    },
    {
      title: "Expensive customer acquisition",
      description:
        "You're spending $100+ to acquire a customer who only spends $50. The math doesn't work and you're bleeding money.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive border border-destructive/20">
              <AlertCircle className="h-4 w-4" />O Problema Real
            </div>
            <h2 className="mb-6 text-balance text-3xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Você toca a MESMA pentatônica chata desde 2018 e continua soando igual a 10 mil guitarristas no YouTube? 
            </h2>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Muitos músicos passam anos estudando, assistindo vídeos e praticando — mas continuam sentindo que estão
              presos, travados e repetitivos.
            </p>
          </div>

          <div className="mb-12 space-y-8 rounded-2xl border-2 border-destructive/20 bg-card p-8 md:p-10">
            <p className="text-pretty text-lg leading-relaxed">
              Mesmo depois de decorar os shapes das escalas, ainda falta direção. Na hora de tocar, as frases não soam
              musicais. E quando sobra um tempo pra praticar, a dúvida aparece:
            </p>

            <div className="rounded-lg bg-destructive/5 p-6 md:p-8">
              <p className="text-balance text-center text-xl font-bold italic text-foreground md:text-2xl">
                "Por onde eu começo? Como eu aplico isso na música real?"
              </p>
            </div>

            <p className="text-center text-lg font-semibold leading-relaxed">
              Essa sensação de travamento não acontece por falta de talento — e sim por{" "}
              <span className="text-destructive">falta de clareza e de um método prático</span>.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {problems.map((problem, index) => (
              <div key={index} className="rounded-lg border border-destructive/20 bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-start gap-3">
                  <div className="rounded-full bg-destructive/10 p-2">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="text-balance text-xl font-semibold">{problem.title}</h3>
                </div>
                <p className="text-pretty leading-relaxed text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center md:p-10">
            <p className="mb-6 text-balance text-2xl font-bold leading-tight md:text-3xl">
              E se existisse um caminho claro, testado e comprovado para você finalmente destravar seu improviso?
            </p>
            <p className="text-lg text-muted-foreground">
              Um método que elimina a confusão e te coloca no caminho certo desde o primeiro dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
