import { HowItWorksCarousel } from '../components/monthly/HowItWorksCarousel'
import { MonthlyFaqSection } from '../components/monthly/MonthlyFaqSection'
import { MonthlyPledgeHero } from '../components/monthly/MonthlyPledgeHero'
import { MonthlyStickyCta } from '../components/monthly/MonthlyStickyCta'
import { OurImpactSection } from '../components/monthly/OurImpactSection'
import { WhoWeAreSection } from '../components/monthly/WhoWeAreSection'
import { WhyJoinSection } from '../components/monthly/WhyJoinSection'

export function MonthlyGivingPage() {
  return (
    <>
      <MonthlyPledgeHero />
      <WhyJoinSection />
      <HowItWorksCarousel />
      <OurImpactSection />
      <WhoWeAreSection />
      <MonthlyFaqSection />
      <MonthlyStickyCta />
    </>
  )
}
