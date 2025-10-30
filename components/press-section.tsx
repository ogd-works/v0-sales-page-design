import Image from "next/image"

export function PressSection() {
  const pressItems = [
    {
      image: "/joe-bonamassa-photo.jpg",
      quote: "Artur é um rockstar que precisa ser descoberto. Ele é um guitarrista destemido.",
      source: "Joe Bonamassa",
      isPhoto: true,
    },
    {
      image: "/guitar-player-logo.jpg",
      quote:
        "As composições de Menezes brilham ao alternar entre o blues e treinos com sabor de funk, e seus vocais canalizam o conteúdo emocional profundo de suas músicas tão efetivamente quanto sua guitarra.",
      source: "GuitarPlayer Magazine",
      isPhoto: false,
    },
    {
      image: "/blues-blast-logo.jpg",
      quote:
        "Artur Menezes é uma deliciosa combinação da era digital entre Carlos Santana e Rod Stewart. Ele tem o estilo musical picante do primeiro e o espírito trabalhador e pé no chão do segundo.",
      source: "Blues Blast Magazine",
      isPhoto: false,
    },
    {
      image: "/brr-logo.jpg",
      quote:
        "A voz de Menezes é um verdadeiro trunfo, uma ótima voz de rock com o toque certo de imprudência do blues.",
      source: "Blues Rock Review",
      isPhoto: false,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-foreground">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center font-heading text-3xl font-bold text-white md:text-5xl">
          O que estão dizendo sobre Artur Menezes
        </h2>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {pressItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center rounded-2xl bg-neutral-900 p-6 md:p-8">
              {/* Logo/Image */}
              <div className="mb-6 flex h-20 w-full items-center justify-center">
                <div className="relative h-full w-full max-w-[150px]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.source}
                    fill
                    className={`object-contain ${item.isPhoto ? "rounded-lg" : ""}`}
                  />
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1">
                <div className="mb-3 text-3xl font-bold text-green-500">"</div>
                <p className="text-center italic leading-relaxed text-white text-lg">{item.quote}</p>
                <div className="mt-3 text-right text-3xl font-bold text-green-500">"</div>
              </div>

              {/* Source */}
              <p className="mt-4 text-center text-sm font-semibold text-green-500">{item.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
