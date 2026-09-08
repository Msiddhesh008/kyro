import { MONTHLY_BENEFITS } from '../../constants/monthlyGiving'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import styles from './WhyJoinSection.module.css'

const ICONS = ['affordable', 'community', 'transparent'] as const

function BenefitIcon({ kind }: { kind: (typeof ICONS)[number] }) {
  if (kind === 'affordable') {
    return (
      <svg viewBox="0 0 64 64" className={styles.icon} aria-hidden="true">
        <ellipse cx="32" cy="40" rx="18" ry="14" fill="#e8b4b8" />
        <circle cx="44" cy="22" r="8" fill="var(--color-gold)" />
        <path d="M40 22h8M44 18v8" stroke="#fff" strokeWidth="2" />
      </svg>
    )
  }
  if (kind === 'community') {
    return (
      <svg viewBox="0 0 64 64" className={styles.icon} aria-hidden="true">
        <circle cx="20" cy="34" r="8" fill="var(--color-sage)" />
        <circle cx="32" cy="28" r="9" fill="var(--color-sage-deep)" />
        <circle cx="44" cy="34" r="8" fill="var(--color-gold)" />
        <path
          d="M28 16c0-4 4-6 6-2 2-4 6-2 6 2 0 4-6 8-6 8s-6-4-6-8z"
          fill="#c45c6a"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 64 64" className={styles.icon} aria-hidden="true">
      <path
        d="M18 30c0-6 6-10 14-4 8-6 14-2 14 4 0 10-14 18-14 18S18 40 18 30z"
        fill="#c45c6a"
      />
      <path
        d="M12 38c4 2 8 2 12 0M40 38c4 2 8 2 12 0"
        stroke="var(--color-sage-deep)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function WhyJoinSection() {
  const { ref, visible } = useRevealOnScroll()
  const show = visible ? 'revealVisible' : ''

  return (
    <section
      ref={ref}
      className={styles.section}
      aria-labelledby="why-join-heading"
    >
      <div className="container">
        <div className={`reveal ${show}`}>
          <h2 id="why-join-heading" className={styles.title}>
            Why Join <span>Social Impact Plan</span>?
          </h2>
          <div className={styles.underline} aria-hidden="true" />
          <p className={styles.lead}>
            Every 2 minutes, a child dies because they can&apos;t afford medical
            aid. With <span>Social Impact Plan</span>, we are on a mission to
            make healthcare a reality for everyone.
          </p>
        </div>

        <div className={`${styles.media} reveal revealDelay ${show}`}>
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80"
            alt="Healthcare story preview"
          />
          <button type="button" className={styles.play} aria-label="Play story">
            ▶
          </button>
        </div>

        <ul className={`${styles.benefits} reveal revealDelay2 ${show}`}>
          {MONTHLY_BENEFITS.map((benefit, index) => (
            <li key={benefit.title} className={styles.benefit}>
              <BenefitIcon kind={ICONS[index]} />
              <div className={styles.underline} aria-hidden="true" />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
