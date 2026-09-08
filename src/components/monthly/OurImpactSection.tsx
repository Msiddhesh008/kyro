import {
  MONTHLY_IMPACT_STATS,
  MONTHLY_MAP_CALLOUT,
  MONTHLY_TESTIMONIAL,
} from '../../constants/monthlyGiving'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import styles from './OurImpactSection.module.css'

const PIN_POSITIONS = [
  { top: '28%', left: '42%' },
  { top: '38%', left: '55%' },
  { top: '52%', left: '48%' },
  { top: '34%', left: '62%' },
]

export function OurImpactSection() {
  const { ref, visible } = useRevealOnScroll()
  const show = visible ? 'revealVisible' : ''

  return (
    <section
      ref={ref}
      className={styles.section}
      aria-labelledby="impact-heading"
    >
      <div className="container">
        <div className={`reveal ${show}`}>
          <h2 id="impact-heading" className={styles.title}>
            Our Impact
          </h2>
          <div className={styles.underline} aria-hidden="true" />

          <blockquote className={styles.quote}>
            <p>&ldquo;{MONTHLY_TESTIMONIAL.quote}&rdquo;</p>
            <footer>{MONTHLY_TESTIMONIAL.attribution}</footer>
          </blockquote>
        </div>

        <div className={`${styles.layout} reveal revealDelay ${show}`}>
          <div className={styles.mapWrap}>
            <svg
              className={styles.map}
              viewBox="0 0 200 240"
              role="img"
              aria-label="Map of India showing campaign support"
            >
              <path
                fill="var(--color-sage)"
                d="M100 12c18 4 38 18 48 36 8 14 18 22 28 40 6 12 8 28 2 42-4 10-14 18-18 30-6 16-4 28-14 40-12 14-28 18-42 20-16 2-30-6-42-16-10-8-22-10-28-22-8-14-6-30 0-44 4-10 2-22 8-32 10-18 24-28 36-42 8-10 14-22 22-32z"
              />
            </svg>
            {PIN_POSITIONS.map((pos, index) => (
              <span
                key={`${pos.top}-${pos.left}`}
                className={styles.pin}
                style={{ top: pos.top, left: pos.left }}
              >
                <img
                  src={`https://i.pravatar.cc/64?img=${index + 12}`}
                  alt=""
                />
              </span>
            ))}
            <aside className={styles.callout}>{MONTHLY_MAP_CALLOUT}</aside>
          </div>

          <ul className={styles.stats}>
            {MONTHLY_IMPACT_STATS.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
