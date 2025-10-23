import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { StorySection } from "@/components/story-section"
import { MethodSection } from "@/components/method-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { AuthorSection } from "@/components/author-section"
import { ModulesSection } from "@/components/modules-section"
import { StackSection } from "@/components/stack-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FaqSection } from "@/components/faq-section"
import { ClosingSection } from "@/components/closing-section"
import { Footer } from "@/components/footer"

export default function SalesPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <StorySection />
      <MethodSection />
      <SocialProofSection />
      <AuthorSection />
      <ModulesSection />
      <StackSection />
      <GuaranteeSection />
      <FaqSection />
      <ClosingSection />
      <Footer />
    </main>
  )
}
