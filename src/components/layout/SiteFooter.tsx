import { Link } from 'react-router-dom'

import { APP_NAME, USE_MOCK } from '../../constants'
import styles from './SiteFooter.module.css'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>{APP_NAME}</p>
          <p className={styles.meta}>
            Crowdfunding for medical needs, education, and urgent causes across
            India.
          </p>
        </div>
        <div className={styles.links}>
          <Link to="/campaigns">Browse campaigns</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="container">
        <p className={styles.copy}>
          © {year} {APP_NAME}. Crowdfunding for causes that matter.
          {USE_MOCK ? ' Preview data.' : ''}
        </p>
      </div>
    </footer>
  )
}
