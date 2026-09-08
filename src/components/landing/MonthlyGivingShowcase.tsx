import { Link } from 'react-router-dom'

import { APP_NAME } from '../../constants'
import styles from './MonthlyGivingShowcase.module.css'

const AMOUNTS = [300, 500, 1000] as const

export function MonthlyGivingShowcase() {
  return (
    <section
      className={styles.section}
      aria-labelledby="monthly-showcase-heading"
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Social impact plan</p>
          <h2 id="monthly-showcase-heading" className={styles.title}>
            Give once a month. Change a story all year.
          </h2>
          <p className={styles.lead}>
            Recurring support on {APP_NAME} keeps hospital bills, school kits,
            and emergency relief funded between viral moments—on web and the{' '}
            {APP_NAME} app.
          </p>
          <div className={styles.chips} role="group" aria-label="Suggested monthly amounts">
            {AMOUNTS.map((amount) => (
              <Link
                key={amount}
                to={`/campaigns/new?monthly=1&amount=${amount}`}
                className={styles.chip}
              >
                ₹{amount}/mo
              </Link>
            ))}
          </div>
          <Link
            to="/campaigns/new?monthly=1"
            className={`btn btn-primary ${styles.cta}`}
          >
            Start giving monthly
          </Link>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.orbit}>
            <span className={styles.pulse} />
            <div className={styles.calendar}>
              <span className={styles.calTop}>Every month</span>
              <span className={styles.calDay}>01</span>
              <span className={styles.calNote}>Your gift lands</span>
            </div>
          </div>
          <div className={`${styles.floatCard} ${styles.floatOne}`}>
            Medical care
          </div>
          <div className={`${styles.floatCard} ${styles.floatTwo}`}>
            Steady hope
          </div>
        </div>
      </div>
    </section>
  )
}
