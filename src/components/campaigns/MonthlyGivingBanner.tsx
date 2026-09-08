import { Link } from 'react-router-dom'

import { APP_NAME } from '../../constants'
import styles from './MonthlyGivingBanner.module.css'

export function MonthlyGivingBanner() {
  return (
    <aside className={styles.banner} aria-labelledby="monthly-banner-title">
      <div className={styles.copy}>
        <h2 id="monthly-banner-title" className={styles.title}>
          Start monthly contributions to save lives
        </h2>
        <p className={styles.lead}>
          Join steady givers on {APP_NAME}—small monthly support that keeps
          medical and cause campaigns moving.
        </p>
      </div>
      <Link to="/monthly" className={`btn btn-primary ${styles.cta}`}>
        Start monthly giving
      </Link>
    </aside>
  )
}
