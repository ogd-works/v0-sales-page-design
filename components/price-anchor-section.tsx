import { Check } from "lucide-react"

export function PriceAnchorSection() {
  const items = [
    { name: "MAIS DE 8 HORAS E MEIA DE CONTEÚDO PURO", price: "R$ 297,00" },
    { name: "Playalongs", price: "R$ 197,00" },
    { name: "Materiais em PDF", price: "R$ 97,00" },
    { name: "Performances", price: "R$ 247,00" },
    { name: "Acesso vitalício", price: "R$ 159,00" },
    { name: "Garantia incondicional de 7 dias", price: "R$ 159,00" },
  ]

  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <h2 className="mb-12 text-balance text-center text-3xl leading-tight md:text-5xl font-black">
            Veja quanto você pagaria para ter acesso a tudo isso:
          </h2>

          {/* Price Items */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl bg-card p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-base font-medium md:text-lg">{item.name}</span>
                </div>
                <span className="text-lg font-bold text-red-600 md:text-xl">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Total Value */}
          <div className="mt-6 rounded-xl bg-red-600 p-8 text-center text-white shadow-lg">
            <div className="mb-2 text-lg md:text-4xl font-extrabold">VALOR TOTAL:</div>
            <div className="mb-1 opacity-90 leading-7 text-xl">(sem desconto)</div>
            <div className="text-4xl font-bold md:text-5xl line-through">R$ 997,00</div>
          </div>

          {/* Transition Text */}
          <div className="mt-12 text-center">
            <p className="mb-4 font-semibold text-muted-foreground text-4xl">Mas fique tranquilo...</p>
            <h3 className="text-balance leading-tight text-red-600 text-6xl font-black leading-3">
              Você não vai precisar pagar R$ 997,00 e nem metade deste valor!
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
