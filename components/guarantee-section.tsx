import { Shield, CheckCircle2 } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border-4 border-primary bg-gradient-to-br from-card to-primary/5 p-8 shadow-2xl md:p-12">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-primary/20 p-6 shadow-lg">
                <Shield className="h-20 w-20 text-primary" />
              </div>
            </div>

            <h2 className="mb-8 text-balance text-center text-3xl font-extrabold leading-tight md:text-5xl">
              Garantia Incondicional de <span className="text-primary">7 Dias</span>
            </h2>

            <div className="mb-8 space-y-6 text-pretty text-center leading-relaxed">
              <p className="text-xl font-semibold">
                A Academia da Improvisação oferece uma{" "}
                <span className="text-primary">garantia de satisfação total</span>.
              </p>

              <p className="text-lg text-muted-foreground">
                Se, por qualquer motivo, você não gostar do curso ou achar que ele não é para você, basta solicitar o
                reembolso completo dentro de 7 dias, direto pela plataforma.
              </p>

              <div className="mx-auto max-w-2xl rounded-xl bg-primary/10 p-6">
                <p className="text-xl font-extrabold text-foreground">
                  Sem perguntas, sem burocracia. O risco é todo meu.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg bg-card p-4">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-sm font-semibold">Reembolso em até 7 dias</p>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-card p-4">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-sm font-semibold">100% do seu dinheiro de volta</p>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-card p-4">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-sm font-semibold">Sem perguntas ou burocracia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
