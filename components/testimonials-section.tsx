import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Founder",
      image: "/professional-woman-entrepreneur.png",
      rating: 5,
      result: "Scaled from $50K to $2.1M in 18 months",
      quote:
        "I was skeptical at first, but this system completely transformed my business. The frameworks are so clear and actionable. Within 6 months, I had tripled my revenue and finally had the freedom I'd been dreaming of.",
    },
    {
      name: "Michael Chen",
      role: "SaaS Entrepreneur",
      image: "/professional-entrepreneur.png",
      rating: 5,
      result: "Reduced customer acquisition cost by 73%",
      quote:
        "The funnel strategies alone paid for the course 10x over. I went from spending $200 per customer to just $54. My profit margins have never been better, and I'm finally able to scale profitably.",
    },
    {
      name: "Jessica Martinez",
      role: "Digital Marketing Agency Owner",
      image: "/professional-woman-business-owner.png",
      rating: 5,
      result: "Hit first $1M year in just 9 months",
      quote:
        "This is the most comprehensive business training I've ever taken. Everything is laid out step-by-step with no fluff. I implemented the strategies and hit my first million-dollar year faster than I ever thought possible.",
    },
    {
      name: "David Thompson",
      role: "Info Product Creator",
      image: "/professional-man-coach.png",
      rating: 5,
      result: "Increased conversion rate from 2% to 18%",
      quote:
        "The conversion optimization techniques are pure gold. I applied them to my sales page and watched my conversion rate jump from 2% to 18% overnight. That's 9x more customers from the same traffic!",
    },
    {
      name: "Amanda Foster",
      role: "Consulting Business Owner",
      image: "/professional-woman-consultant.png",
      rating: 5,
      result: "Built a team and now works 20 hours/week",
      quote:
        "Not only did my revenue increase, but I finally have my life back. The systems and automation strategies helped me build a team and step out of the day-to-day. I now work 20 hours a week instead of 60.",
    },
    {
      name: "Robert Kim",
      role: "Online Course Creator",
      image: "/professional-man-teacher.png",
      rating: 5,
      result: "Launched and scaled to $500K in first year",
      quote:
        "I had the knowledge but didn't know how to package and sell it. This system gave me the exact blueprint to launch my course and scale it to $500K in the first year. Best investment I've ever made.",
    },
  ]

  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
              Real Results From Real People
            </h2>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Don't just take our word for it - hear from entrepreneurs who've transformed their businesses
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Result Badge */}
                <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {testimonial.result}
                </div>

                {/* Quote */}
                <p className="mb-6 flex-1 text-pretty leading-relaxed text-muted-foreground">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
