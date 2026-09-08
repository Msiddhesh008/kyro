import { APP_NAME } from '../../constants'
import { MONTHLY_TRUST_STATS } from '../../constants/monthlyGiving'
import styles from './WhoWeAreSection.module.css'

export function WhoWeAreSection() {
  return (
    <section className={styles.section} aria-labelledby="who-heading">
      <div className={styles.banner}>
        <div className="container">
          <p className={styles.eyebrow}>Who Are We?</p>
          <h2 id="who-heading" className={styles.title}>
            {APP_NAME} is a crowdfunding platform based out of India.
          </h2>
          <p className={styles.lead}>
            We believe in &ldquo;Healthcare for All&rdquo; &amp; we&apos;re on a
            journey to make that a reality.
          </p>
        </div>
      </div>

      <div className={`container ${styles.cardWrap}`}>
        <ul className={styles.card}>
          {MONTHLY_TRUST_STATS.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
