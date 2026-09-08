import { Link } from 'react-router-dom'

import styles from './LandingTrustStrip.module.css'

const POINTS = [
  {
    title: 'Verified campaigns',
    body: 'Document checks for medical and NGO fundraisers when needed.',
  },
  {
    title: 'Secure payments',
    body: 'UPI and card-ready flows with encrypted processing.',
  },
  {
    title: 'Transparent updates',
    body: 'Progress, stories, and disbursal clarity for donors.',
  },
] as const

export function LandingTrustStrip() {
  return (
    <section className={styles.section} aria-labelledby="landing-trust-heading">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 id="landing-trust-heading" className={styles.title}>
            Built for trust
          </h2>
          <p className={styles.lead}>
            Clear processes for organisers and donors—from campaign review to
            secure giving.
          </p>
        </header>
        <ul className={styles.grid}>
          {POINTS.map((point) => (
            <li key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Link to="/trust-safety" className="btn btn-ghost">
            Trust &amp; Safety
          </Link>
          <Link to="/help" className="btn btn-primary">
            Help Center
          </Link>
        </div>
      </div>
    </section>
  )
}
