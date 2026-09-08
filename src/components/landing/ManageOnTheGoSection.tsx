import { APP_NAME } from '../../constants'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import styles from './ManageOnTheGoSection.module.css'

const FEATURES = [
  {
    title: 'Access a personalized dashboard',
    icon: 'dashboard',
  },
  {
    title: 'Withdraw your funds faster',
    icon: 'withdraw',
  },
  {
    title: 'Keep track of all your contributions received',
    icon: 'track',
  },
  {
    title: 'Start fundraisers within seconds',
    icon: 'start',
  },
] as const

const DONORS = [
  { name: 'Roshni', amount: '₹ 5,000', img: 32 },
  { name: 'Dave', amount: '₹ 12,000', img: 12 },
] as const

function FeatureIcon({ kind }: { kind: (typeof FEATURES)[number]['icon'] }) {
  if (kind === 'dashboard') {
    return (
      <svg viewBox="0 0 40 40" className={styles.icon} aria-hidden="true">
        <rect x="8" y="10" width="14" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="15" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M26 14h8M26 20h8M26 26h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }
  if (kind === 'withdraw') {
    return (
      <svg viewBox="0 0 40 40" className={styles.icon} aria-hidden="true">
        <rect x="10" y="8" width="20" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 18h8M16 22h8M18 14v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="20" cy="26" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }
  if (kind === 'track') {
    return (
      <svg viewBox="0 0 40 40" className={styles.icon} aria-hidden="true">
        <ellipse cx="20" cy="24" rx="11" ry="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 20c2-6 10-8 14-2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="20" cy="24" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 40 40" className={styles.icon} aria-hidden="true">
      <path
        d="M12 22c0-5 5-8 8-4 3-4 8-1 8 4 0 7-8 12-8 12s-8-5-8-12z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M20 10v6M17 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function ManageOnTheGoSection() {
  const { ref, visible } = useRevealOnScroll()
  const show = visible ? 'revealVisible' : ''

  return (
    <section
      ref={ref}
      className={styles.section}
      aria-labelledby="manage-on-go-heading"
    >
      <div className={`container ${styles.card}`}>
        <div
          className={`${styles.phoneCol} reveal ${show}`}
          aria-hidden="true"
        >
          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <p className={styles.phoneEyebrow}>Manage Fundraiser</p>
              <p className={styles.campaignTitle}>
                Help Us Distribute Food To D…
              </p>
              <div className={styles.progressMeta}>
                <span>₹ 5,00,000 raised</span>
                <span>Goal: ₹ 14,00,000</span>
              </div>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} />
              </div>
              <div className={styles.moneyRow}>
                <div>
                  <span>Available</span>
                  <strong>₹ 25,00,000</strong>
                </div>
                <div>
                  <span>Withdraw</span>
                  <strong>₹ 1,00,000</strong>
                </div>
              </div>
              <button type="button" className={styles.withdrawBtn} tabIndex={-1}>
                ↓ Withdraw
              </button>
              <ul className={styles.donors}>
                {DONORS.map((donor) => (
                  <li key={donor.name}>
                    <img
                      src={`https://i.pravatar.cc/48?img=${donor.img}`}
                      alt=""
                    />
                    <span>
                      {donor.name} donated {donor.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={`${styles.copy} reveal revealDelay ${show}`}>
          <h2 id="manage-on-go-heading" className={styles.title}>
            Manage your fundraisers on the go
          </h2>
          <ul className={styles.features}>
            {FEATURES.map((feature) => (
              <li key={feature.title}>
                <FeatureIcon kind={feature.icon} />
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
          <p className={styles.appLead}>
            Crowdfund on the go with the {APP_NAME} app
          </p>
          <div className={styles.stores}>
            <a
              href="#coming-soon"
              className={styles.storeBtn}
              aria-label="Get it on Google Play — coming soon"
            >
              <svg viewBox="0 0 24 24" className={styles.storeIcon} aria-hidden="true">
                <path
                  fill="#EA4335"
                  d="M3.6 2.4 13.2 12 3.6 21.6A2 2 0 0 1 3 20.1V3.9a2 2 0 0 1 .6-1.5z"
                />
                <path
                  fill="#FBBC04"
                  d="m13.2 12 2.7-2.7 4.4 2.5a1.6 1.6 0 0 1 0 2.8l-4.4 2.5L13.2 12z"
                />
                <path
                  fill="#4285F4"
                  d="M13.2 12 3.6 2.4l9.1 5.2L13.2 12z"
                />
                <path
                  fill="#34A853"
                  d="M13.2 12 12.7 16.4 3.6 21.6 13.2 12z"
                />
              </svg>
              <span>
                <small>GET IT ON</small>
                Google Play
              </span>
            </a>
            <a
              href="#coming-soon"
              className={styles.storeBtn}
              aria-label="Download on the App Store — coming soon"
            >
              <svg viewBox="0 0 24 24" className={styles.storeIcon} aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M16.4 12.8c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.2-.8-2.2-3.8zM14.2 6.8c.6-.7 1-1.7.9-2.8-1 .1-2.1.7-2.7 1.5-.6.7-1.1 1.8-.9 2.8 1 .1 2-.6 2.7-1.5z"
                />
              </svg>
              <span>
                <small>Available on the</small>
                App Store
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
