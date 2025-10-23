import { BookOpen, Zap, Music, TrendingUp, Target, Award, Lightbulb, Sparkles, Trophy, Gift } from "lucide-react"

export function ModulesSection() {
  const modules = [
    {
      number: "01",
      icon: Target,
      title: "O Fim do 'Guitarrista Travado'",
      description:
        "Antes de sair tocando, você precisa mudar a sua forma de pensar. Neste módulo, você vai identificar e eliminar os 5 principais hábitos que te impedem de evoluir. Vamos te ensinar a enxergar a improvisação como uma conversa, a organizar suas ideias musicais e a seguir um método de estudo que realmente funciona.",
      image: "/guitarist-thinking-and-learning-mindset.jpg",
    },
    {
      number: "02",
      icon: BookOpen,
      title: "O Idioma da Improvisação",
      description:
        "Chega de decorar formas! Aqui, você vai entender o idioma da música, aprendendo o papel de cada tipo de acorde e como eles se relacionam. Ao invés de apenas tocar notas, você vai começar a dar sentido às suas frases, sabendo exatamente o que cada som expressa.",
      image: "/music-theory-chords-and-harmony-language.jpg",
    },
    {
      number: "03",
      icon: Music,
      title: "O Segredo do Groove Perfeito",
      description:
        "Se você já se perguntou por que as frases dos grandes mestres têm tanto 'swing' e 'pegada', a resposta está aqui. Vamos te dar as ferramentas para dominar a rítmica, criando licks com tensão, relaxamento e fluidez. Você vai parar de se preocupar com a velocidade e focar em como fazer cada nota 'cair de pé'.",
      image: "/rhythm-groove-and-timing-in-music.jpg",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "A Arte de Colorir Seus Solos",
      description:
        "Você vai aprender a usar o acorde maior não como um limite, mas como um universo de possibilidades. Vamos te ensinar a 'colorir' suas frases com notas de passagem e arpejos, transformando melodias simples em solos expressivos e cheios de personalidade.",
      image: "/colorful-expressive-guitar-solo.jpg",
    },
    {
      number: "05",
      icon: TrendingUp,
      title: "Expandindo Suas Possibilidades",
      description:
        "A pentatônica é a sua casa, e neste módulo vamos te mostrar como explorar o bairro inteiro. Você vai aprender a usar a pentatônica maior, arpejos e até cromatismo para adicionar novas cores e tensões aos seus solos. O resultado? Suas frases vão soar mais sofisticadas, modernas e com uma sonoridade única.",
      image: "/pentatonic-scale-expansion-guitar-fretboard.jpg",
    },
    {
      number: "06",
      icon: Lightbulb,
      title: "A Profundidade da Emoção",
      description:
        "Prepare-se para ir fundo na expressão musical. Vamos desmistificar o acorde menor, te mostrando como usar cada nota para criar solos mais melancólicos, intensos e com uma carga emocional real. Você vai aprender a usar cromatismo e outros dispositivos para se conectar com a harmonia.",
      image: "/emotional-expressive-guitar-playing.jpg",
    },
    {
      number: "07",
      icon: Music,
      title: "Conectando com a Raiz do Blues e do Jazz",
      description:
        "Aumente seu vocabulário musical e toque com o vocabulário dos grandes. Neste módulo, você vai descobrir como usar a pentatônica menor, a sexta maior e a sétima maior para dar aquele sabor de blues e jazz aos seus solos. Você vai aprender a soar autêntico e a improvisar com a mesma profundidade de lendas como B.B. King e Miles Davis.",
      image: "/blues-and-jazz-guitar-improvisation.jpg",
    },
    {
      number: "08",
      icon: Zap,
      title: "A Magia da Resolução",
      description:
        "O segredo de um solo memorável é a sua capacidade de criar tensão e resolução. Neste módulo, você vai dominar os acordes dominantes, aprendendo a usar as notas certas para construir frases que direcionam e surpreendem. Você vai aprender a pensar como um compositor.",
      image: "/tension-and-resolution-in-music-composition.jpg",
    },
    {
      number: "09",
      icon: Award,
      title: "Elevando Sua Linguagem de Improvisação",
      description:
        "Este módulo é a chave para ir além do básico, te ensinando a usar sons mais complexos para criar um estilo de improvisação avançado e único. Chegou a hora de ir para o próximo nível. Aqui, você vai aprender a usar dispositivos avançados como o acorde diminuto e a escala Mixolídia b9 b13.",
      image: "/advanced-jazz-guitar-improvisation-techniques.jpg",
    },
    {
      number: "10",
      icon: Trophy,
      title: "O Ponto de Virada",
      description:
        "O último módulo não é uma conclusão, é o começo da sua nova jornada como músico. Este módulo é o seu guia para aplicar tudo que aprendeu, ligando os acordes de forma fluida e se movendo pelo braço da guitarra com total liberdade. Você vai aprender a transcrever solos lendários e a usar as notas certas para ligar ideias.",
      image: "/guitar-mastery-freedom-on-fretboard.jpg",
    },
  ]

  const bonuses = [
    {
      title: "Bônus 1: O Segredo da Fluidez e Precisão",
      subtitle: "Dominando o Ritmo com Tercinas",
      value: "R$ 97,00",
      description:
        "Você já se perguntou como alguns guitarristas tocam com uma fluidez tão natural? A resposta está na sua capacidade de 'sentir' e aplicar variações rítmicas. Neste bônus, você vai aprender a usar as tercinas para adicionar um groove sofisticado e profissional aos seus solos.",
    },
    {
      title: "Bônus 2: Mente Criativa, Solos Infinitos",
      subtitle: "Como Criar Melodias Memoráveis com Agrupamentos Rítmicos",
      value: "R$ 97,00",
      description:
        "Chega de tocar notas aleatórias. Neste conteúdo, você vai descobrir o segredo para criar melodias que realmente se conectam. Vamos te mostrar como agrupar as notas de forma inteligente para que seus solos contem uma história, gerem expectativa e surpreendam o ouvinte.",
    },
    {
      title: "Bônus 3: Velocidade com Clareza e Música",
      subtitle: "O Método Definitivo para Tocar Rápido",
      value: "R$ 97,00",
      description:
        "Tocar rápido não é um talento, é uma técnica. Neste bônus, você vai aprender os exercícios e as estratégias exatas para aumentar sua velocidade e precisão, sem sacrificar a clareza ou a musicalidade. Não é sobre apenas fazer os dedos se moverem, é sobre tocar passagens rápidas de forma limpa, controlada e com intenção.",
    },
    {
      title: "Bônus 4 e 5: Vocabulário para Improvisar em Qualquer Situação",
      subtitle: "Padrões Essenciais para Escalas Diatônicas e Pentatônicas",
      value: "R$ 109,00",
      description:
        "Não basta saber as notas, você precisa saber como usá-las. Nestes bônus, vamos te dar um arsenal de padrões e ideias para enriquecer seus solos em qualquer estilo. Você vai aprender a ir além dos clichês, criar frases novas e ter um vocabulário vasto para se expressar com liberdade.",
    },
  ]

  return (
    <section className="bg-muted/30 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20">
            Conteúdo Completo
          </div>
          <h2 className="mb-6 text-balance text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            O Que Você Vai Aprender na Academia da Improvisação
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-xl text-muted-foreground">
            Começamos pela base, que vai te dar a estrutura necessária para improvisar com liberdade
          </p>
        </div>

        <div className="mb-20 space-y-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border-2 border-border bg-card shadow-lg transition-all hover:border-primary hover:shadow-xl"
            >
              <div className="grid gap-0 md:grid-cols-5">
                {/* Module Image with Number Badge */}
                <div className="relative md:col-span-2">
                  <img
                    src={module.image || "/placeholder.svg"}
                    alt={module.title}
                    className="h-full w-full object-cover min-h-[250px] md:min-h-[300px]"
                  />
                  {/* Small Number Badge */}
                  <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-lg">
                    <span className="text-2xl font-extrabold text-primary-foreground">{module.number}</span>
                  </div>
                  {/* Icon Badge */}
                  <div className="absolute right-4 top-4 rounded-lg bg-background/90 backdrop-blur-sm p-2.5 shadow-md">
                    <module.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Module Content */}
                <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-8">
                  <h3 className="mb-4 text-2xl font-extrabold leading-tight md:text-3xl">{module.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{module.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 to-primary/5 p-8 shadow-xl md:p-12">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-primary/20 p-4">
              <Gift className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h3 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
            Bônus Exclusivos que Vão Transformar o Seu Play
          </h3>
          <p className="mb-10 text-center text-lg text-muted-foreground">
            Os bônus não são apenas lições extras. Eles são a prova de que a Academia da Improvisação vai muito além do
            básico e te prepara para qualquer desafio.
          </p>

          <div className="space-y-4">
            {bonuses.map((bonus, index) => (
              <div key={index} className="rounded-xl border-2 border-primary/30 bg-card p-6 shadow-md">
                <div className="mb-3 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h4 className="mb-1 text-lg font-extrabold">{bonus.title}</h4>
                    <p className="text-sm font-semibold text-primary">{bonus.subtitle}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-lg font-bold text-muted-foreground line-through">{bonus.value}</span>
                    <span className="rounded-full bg-accent px-4 py-1.5 text-sm font-extrabold text-accent-foreground shadow-md">
                      GRÁTIS
                    </span>
                  </div>
                </div>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
