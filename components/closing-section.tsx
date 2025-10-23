import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ClosingSection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="mb-6 text-balance text-3xl font-bold leading-tight md:text-5xl">
              Vou resumir para você o que é mais importante:
            </h2>

            <div className="space-y-4 text-pretty text-lg opacity-90 leading-relaxed">
              <p>
                Se você toca um instrumento há um tempo, mas continua travado na hora de improvisar — sempre caindo nos
                mesmos clichês, se sentindo inseguro em uma jam session e com vergonha dos seus solos sem personalidade
                —, a Academia da Improvisação é exatamente o que você precisa.
              </p>

              <p>
                Não estamos falando de decorar escalas ou licks soltos. Estamos falando de um método claro e direto que
                mostra como usar a música como uma linguagem real, explorando os segredos que os maiores improvisadores
                da história usam.
              </p>

              <p className="font-semibold text-xl">A ideia é simples:</p>

              <div className="bg-primary-foreground/10 rounded-lg p-6 space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <p>
                    Um método completo, com mais de 40 aulas gravadas, onde você aprende a pensar como um improvisador,
                    dominando o ritmo, a harmonia e, finalmente, encontrando sua voz musical.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <p>
                    O curso se baseia em A Tríade da Improvisação Autêntica, um sistema de 3 etapas que te leva do
                    "músico travado" ao "músico que domina o palco".
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <p>
                    E o melhor: você não precisa de horas por dia. Com apenas 20 a 30 minutos de estudo focado, já vai
                    começar a ver resultados significativos nos seus solos.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <p>Você terá acesso vitalício a todo o conteúdo do curso, incluindo bônus e atualizações.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <p>
                    E se por algum motivo você não gostar, tem 7 dias de garantia incondicional. É só pedir o reembolso.
                    Simples assim.
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl pt-4">Ao longo do curso, você vai:</p>

              <div className="space-y-2 text-left">
                <p>• Parar de travar nos solos e dominar o ritmo para criar frases únicas.</p>
                <p>• Deixar de ser só um "tocador de escalas" e desenvolver uma identidade musical autêntica.</p>
                <p>• Aprender a usar a teoria de forma prática, transformando conceitos em música de verdade.</p>
                <p>• Ganhar respeito e elogios de outros músicos pela sua criatividade e musicalidade.</p>
                <p>• Improvisar com confiança em qualquer situação, do blues ao jazz, do rock ao pop.</p>
              </div>

              <p className="pt-4">
                Assim que o pagamento for confirmado, você recebe um e-mail com todos os dados de acesso. O curso é 100%
                online, com uma plataforma simples de usar, e você pode assistir de onde quiser, quando quiser — seja no
                notebook, celular ou tablet.
              </p>
            </div>

            <div className="pt-8">
              <p className="text-2xl font-bold mb-6">Agora é com você.</p>
              <p className="text-xl mb-8">
                Vai continuar se sentindo travado ou vai se tornar o improvisador que sempre sonhou em ser?
              </p>

              <Button size="lg" variant="secondary" className="group h-16 w-full text-xl md:w-auto md:px-12">
                QUERO SAIR DO BÁSICO E TOCAR COM CONFIANÇA
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
