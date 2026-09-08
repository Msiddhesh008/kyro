import { Link } from 'react-router-dom'

import { APP_NAME } from '../../constants'
import styles from './HowItWorksSection.module.css'

const STEPS = [
  {
    title: 'Start your fundraiser',
    body: `Create an online crowdfunding campaign on ${APP_NAME} in minutes. Tell your medical, education, or emergency story, set a fundraising goal in INR, and add photos so donors understand the need.`,
  },
  {
    title: 'Share your fundraiser',
    body: `Share your campaign link with family, friends, and communities—or from the ${APP_NAME} mobile app. Support can start pouring in from people who care, on web or phone.`,
    note: 'Share directly from your dashboard and social channels.',
  },
  {
    title: 'Receive support',
    body: `Track donations and progress in real time as contributors give toward your goal. Withdraw raised funds to your bank account when payouts go live—hassle-free for families and organisers across India.`,
    note: 'Stay updated on every contribution from the web or the Kyro app.',
  },
] as const

export function HowItWorksSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="how-it-works-heading"
    >
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 id="how-it-works-heading" className={styles.title}>
            Start a crowdfunding fundraiser in three simple steps
          </h2>
          <p className={styles.lead}>
            Raise money online in India for medical bills, education,
            emergencies, and verified NGO causes—on {APP_NAME} web or the{' '}
            {APP_NAME} mobile app.
          </p>
        </header>

        <div className={styles.layout}>
          <ol className={styles.steps}>
            {STEPS.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.marker} aria-hidden="true">
                  {index + 1}
                </span>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.body}</p>
                  {'note' in step && step.note ? (
                    <p className={styles.stepNote}>{step.note}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          <aside className={styles.aside} aria-label={`${APP_NAME} mobile app`}>
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.successMark} aria-hidden="true">
                  <span className={styles.pulse} />
                  <span className={styles.check}>✓</span>
                </div>
                <p className={styles.phoneCopy}>
                  And just like that, your fundraiser is live on {APP_NAME}—web
                  and mobile.
                </p>
              </div>
            </div>
            <p className={styles.appLead}>
              Crowdfund on the go with the {APP_NAME} app
            </p>
            <div className={styles.badges}>
              <a
                href="#coming-soon"
                className={styles.badge}
                aria-label="Download on the App Store — coming soon"
              >
                <span className={styles.badgeStore}>App Store</span>
                <span className={styles.badgeSoon}>Coming soon</span>
              </a>
              <a
                href="#coming-soon"
                className={styles.badge}
                aria-label="Get it on Google Play — coming soon"
              >
                <span className={styles.badgeStore}>Google Play</span>
                <span className={styles.badgeSoon}>Coming soon</span>
              </a>
            </div>
          </aside>
        </div>

        <div className={styles.ctaRow}>
          <Link to="/campaigns/new" className={`btn btn-primary ${styles.cta}`}>
            Start a fundraiser for free
          </Link>
        </div>
      </div>
    </section>
  )
}
