import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/hero-guitar-stage-performance.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        </div>

        <div className="container mx-auto px-4 w-full">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent border border-accent/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                </span>
                Vagas Limitadas - Inscrições Abertas
              </div>
            </div>

            <div className="mb-8 flex justify-center">
              <Image
                src="/logo-academia-improvisacao.jpg"
                alt="Academia de Improvisação"
                width={300}
                height={100}
                className="h-auto w-auto max-w-[250px] md:max-w-[300px]"
                priority
              />
            </div>

            <h1 className="mb-8 text-balance text-center text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
              Da vergonha na jam session ao{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                aplauso no palco
              </span>
              : o método passo a passo para se tornar um improvisador de alto nível
            </h1>

            <p className="mb-10 text-center text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Toque com total confiança e desenvolva sua identidade musical autêntica
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <Button
                size="lg"
                className="group h-16 px-10 text-lg font-bold shadow-lg hover:shadow-xl transition-all md:text-xl animate-pulse-glow"
              >
                QUERO SAIR DO BÁSICO E TOCAR COM CONFIANÇA
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-muted-foreground">
                ✓ Acesso imediato • ✓ Garantia de 7 dias • ✓ Suporte completo
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border-2 border-primary/20 bg-card p-8 shadow-xl md:p-10">
              <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
                Com a Academia de Improvisação, você vai...
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Parar de travar nos solos, mesmo em jams com músicos que você nunca viu na vida.",
                  "Dominar o ritmo e o tempo para criar frases únicas e cheias de personalidade.",
                  "Nunca mais depender da sorte: entenda a lógica por trás da música e construa melodias de verdade.",
                  "Deixar de ser só um 'tocador de escalas' e desenvolver uma identidade musical autêntica.",
                  "Usar a teoria de forma prática, transformando conceitos em frases que soam musicais de verdade.",
                  "Ser o músico que os outros querem chamar pro palco — e não o contrário.",
                  "Ganhar respeito e elogios de colegas e público pela sua criatividade e musicalidade.",
                  "Improvisar com confiança em qualquer estilo, do jazz ao rock, do blues ao pop.",
                  "Acelerar sua evolução em semanas, enquanto a maioria leva anos tentando descobrir sozinho.",
                  "Se sentir preparado em qualquer situação musical: de rodas entre amigos até palcos profissionais.",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                    <p className="text-pretty leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
