export function SocialProofSection() {
  const stats = [
    {
      number: "10,000+",
      label: "Students Enrolled",
      description: "Entrepreneurs from 47 countries",
    },
    {
      number: "$50M+",
      label: "Revenue Generated",
      description: "By our students collectively",
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      description: "From 2,847 verified reviews",
    },
    {
      number: "87%",
      label: "Success Rate",
      description: "Hit their revenue goals in 12 months",
    },
  ]

  const logos = ["Forbes", "Entrepreneur", "Inc. Magazine", "Business Insider", "TechCrunch", "Fast Company"]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
              Resultados Reais de Alunos Reais
            </h2>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Junte-se a centenas de músicos que já transformaram sua forma de improvisar
            </p>
          </div>

          {/* Placeholder for testimonials/results */}
          <div className="bg-muted/30 rounded-lg p-12 text-center">
            <p className="text-xl text-muted-foreground">
              [Depoimentos e resultados dos alunos serão adicionados aqui]
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold md:text-5xl">{stat.number}</div>
                <div className="mb-1 text-lg font-semibold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Featured In */}
          <div>
            <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              As Featured In
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {logos.map((logo, index) => (
                <div key={index} className="text-xl font-bold text-muted-foreground/60 md:text-2xl">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
