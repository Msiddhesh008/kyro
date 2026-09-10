import { Link } from 'react-router-dom'

import { CampaignListItem } from '../components/campaigns/CampaignListItem'
import { CausesSection } from '../components/landing/CausesSection'
import { HowItWorksSection } from '../components/landing/HowItWorksSection'
import { LandingTrustStrip } from '../components/landing/LandingTrustStrip'
import { ManageOnTheGoSection } from '../components/landing/ManageOnTheGoSection'
import { MonthlyGivingShowcase } from '../components/landing/MonthlyGivingShowcase'
import { WhyKyroSection } from '../components/landing/WhyKyroSection'
import { APP_NAME, USE_MOCK } from '../constants'
import { useMockCampaigns } from '../hooks/useMockCampaigns'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useGetCampaignsQuery } from '../services/api'
import { getFeaturedCampaigns } from '../services/campaignService'
import styles from './LandingPage.module.css'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=80',
] as const

export function LandingPage() {
  useMockCampaigns()
  const { ref: featuredRef, visible: featuredVisible } = useRevealOnScroll()
  const featuredShow = featuredVisible ? 'revealVisible' : ''
  const apiQuery = useGetCampaignsQuery(undefined, { skip: USE_MOCK })
  const showcase = USE_MOCK
    ? getFeaturedCampaigns(3)
    : (() => {
        const data = apiQuery.data ?? []
        const featured = data.filter((c) => c.featured).slice(0, 3)
        return featured.length > 0 ? featured : data.slice(0, 3)
      })()

  return (
    <>
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroMedia} aria-hidden="true">
          {HERO_IMAGES.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              className={styles.heroSlide}
              style={{ animationDelay: `${index * 7}s` }}
            />
          ))}
          <div className={styles.heroScrim} />
        </div>
        <div className={styles.heroContent}>
          <p className={`${styles.brand} animate-fade-up`}>{APP_NAME}</p>
          <h1 className={`${styles.headline} animate-fade-up-delay`}>
            Raise funds when it matters most
          </h1>
          <p className={`${styles.support} animate-fade-up-delay-2`}>
            Start a medical or cause fundraiser, share your story, and receive
            support from people who care.
          </p>
          <div className={`${styles.ctaGroup} animate-fade-up-delay-2`}>
            <Link to="/campaigns" className="btn btn-primary">
              Browse campaigns
            </Link>
            <Link to="/campaigns/new" className="btn btn-secondary">
              Start a fundraiser
            </Link>
          </div>
        </div>
      </section>

      <MonthlyGivingShowcase />
     

      <section ref={featuredRef} className={styles.section}>
        <div className="container">
          <div
            className={`${styles.featuredHeader} reveal ${featuredShow}`}
          >
            <div>
              <h2 className={styles.sectionTitle}>Featured campaigns</h2>
              <p className={styles.sectionLead}>
                Stories that need attention right now.
              </p>
            </div>
            <Link to="/campaigns" className="btn btn-ghost">
              See all
            </Link>
          </div>
          <div
            className={`${styles.featuredList} reveal revealDelay ${featuredShow}`}
          >
            {showcase.map((campaign) => (
              <CampaignListItem key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </section>
      <HowItWorksSection />
      <ManageOnTheGoSection />
      <CausesSection />
      <WhyKyroSection />
      <LandingTrustStrip />
    </>
  )
}
