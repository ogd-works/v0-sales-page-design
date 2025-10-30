import { HeroSection } from "@/components/hero-section"
import { PressSection } from "@/components/press-section"
import { ProblemSection } from "@/components/problem-section"
import { StorySection } from "@/components/story-section"
import { MethodSection } from "@/components/method-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { AuthorSection } from "@/components/author-section"
import { ModulesSection } from "@/components/modules-section"
import { PriceAnchorSection } from "@/components/price-anchor-section"
import { ExclusiveOfferSection } from "@/components/exclusive-offer-section"
import { StackSection } from "@/components/stack-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FaqSection } from "@/components/faq-section"
import { ClosingSection } from "@/components/closing-section"
import { Footer } from "@/components/footer"

export default function SalesPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PressSection />
      <ProblemSection />
      <StorySection />
      <MethodSection />
      <SocialProofSection />
      <AuthorSection />
      <ModulesSection />
      <PriceAnchorSection />
      <ExclusiveOfferSection />
      <StackSection />
      <GuaranteeSection />
      <FaqSection />
      <ClosingSection />
      <Footer />
    </main>
  )
}
