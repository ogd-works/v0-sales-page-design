import { Check } from "lucide-react"

export function SolutionSection() {
  const benefits = [
    "Scale to $1M+ without hiring a massive team or working 80-hour weeks",
    "Predictable, consistent revenue that grows month after month",
    "Marketing funnels that convert at 15%+ (7x industry average)",
    "Customer acquisition costs that are 70% lower than your competitors",
    "A business that runs without you - true freedom and flexibility",
    "Proven frameworks used by Fortune 500 companies, adapted for entrepreneurs",
  ]

  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
              Introducing The Complete Business Growth System
            </h2>
            <p className="text-pretty text-lg opacity-90 md:text-xl">
              The exact step-by-step framework that's generated over $50M in revenue and helped 10,000+ entrepreneurs
              build thriving, scalable businesses.
            </p>
          </div>

          {/* Benefits List */}
          <div className="mb-12 space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary-foreground/20 p-1">
                  <Check className="h-5 w-5" />
                </div>
                <p className="text-pretty text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Key Differentiator */}
          <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-8">
            <h3 className="mb-4 text-balance text-2xl font-bold">What Makes This Different?</h3>
            <p className="text-pretty leading-relaxed opacity-90">
              Unlike other courses that teach outdated tactics or generic advice, this system is based on real data from
              over 10,000 successful implementations. Every strategy, every template, every framework has been tested
              and proven to work in the real world. You're not getting theory - you're getting a battle-tested blueprint
              for success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
