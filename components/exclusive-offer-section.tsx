import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExclusiveOfferSection() {
  const benefits = [
    "+ de 50 aulas em qualidade cinematográfica",
    "Aula exclusiva para que você aprenda a timbrar como um verdadeiro bluesman",
    "Repertório completo com performances variadas de Blues.",
    "Contato direto com Artur Menezes para tirar suas dúvidas através da comunidade de alunos.",
    "Aula de teoria musical descomplicada e sem enrolação",
    "Músicas e referências que todo blueseiro precisa conhecer.",
    "Certificado oficial autenticado pelo Artur Menezes.",
    "Acesso vitalício",
  ]

  return (
    <section className="bg-[#1a1f2e] py-20 md:py-32 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Main Card */}
          <div className="rounded-3xl bg-[#f5f1e8] p-8 shadow-2xl md:p-12">
            {/* Title */}
            <h2 className="mb-12 text-balance text-center text-3xl leading-tight text-green-700 md:text-5xl font-extrabold">
              Aproveite esta Oferta Exclusiva!
            </h2>

            {/* Benefits Grid */}
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 font-normal">
                  <Check className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                  <span className="text-base leading-relaxed text-gray-700 md:text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Pricing Section */}
            <div className="mb-8 text-center">
              {/* Original Price */}
              <div className="mb-2 text-2xl font-bold text-red-600 line-through md:text-3xl">DE R$ 997,00</div>

              {/* "For Only" Text */}
              <div className="mb-3 text-xl font-semibold text-gray-700 md:text-2xl">POR APENAS</div>

              {/* Installment Price */}
              <div className="mb-3 text-5xl text-green-700 md:text-7xl font-black">12 x R$ 24,70</div>

              {/* Cash Price */}
              <div className="text-lg text-gray-600 md:text-3xl">ou R$ 247,00 à vista</div>
            </div>

            {/* CTA Button */}
            <div className="mb-6 text-center">
              <Button
                size="lg"
                className="h-auto rounded-xl bg-green-600 px-12 py-6 text-xl font-bold uppercase tracking-wide text-white shadow-xl transition-all hover:scale-105 hover:bg-green-700 hover:shadow-2xl md:text-2xl"
              >
                PARTICIPE AGORA COM DESCONTO!
              </Button>
            </div>

            {/* Guarantee Text */}
            <div className="text-center text-base font-bold uppercase tracking-wide text-gray-900 md:text-lg">
              ACESSO VITALÍCIO E 7 DIAS DE GARANTIA!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
