import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function OfferSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
              Here's Everything You Get Today
            </h2>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              A complete business transformation system delivered straight to your inbox
            </p>
          </div>

          {/* Main Offer */}
          <div className="mb-8 rounded-lg border bg-card p-8 shadow-lg md:p-12">
            <div className="mb-8 flex items-start gap-6">
              <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                <img src="/product-box-course-package.jpg" alt="Product" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="mb-2 text-balance text-2xl font-bold md:text-3xl">
                  The Complete Business Growth System
                </h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  The comprehensive training program that takes you from struggling entrepreneur to 7-figure business
                  owner in 12 months or less.
                </p>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-8 border-t pt-8">
              <div className="flex items-end gap-4">
                <div>
                  <div className="text-sm text-muted-foreground line-through">Regular Price: $2,997</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold md:text-5xl">$997</span>
                    <span className="text-muted-foreground">one-time payment</span>
                  </div>
                </div>
                <div className="rounded-full bg-destructive px-4 py-2 text-sm font-semibold text-destructive-foreground">
                  Save $2,000
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Or 3 payments of $397 (payment plan available at checkout)
              </p>
            </div>

            {/* CTA */}
            <Button size="lg" className="group h-14 w-full text-lg">
              Get Instant Access Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Guarantee */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              ✓ 30-Day Money Back Guarantee • ✓ Instant Digital Access • ✓ Lifetime Updates
            </div>
          </div>

          {/* Urgency/Scarcity */}
          <div className="rounded-lg bg-destructive/10 p-6 text-center">
            <p className="text-balance font-semibold text-foreground">
              ⚠️ This special pricing expires in 24 hours. After that, the price returns to $2,997.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
