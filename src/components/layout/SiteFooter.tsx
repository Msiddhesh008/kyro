import { Link } from 'react-router-dom'

import { APP_NAME, USE_MOCK } from '../../constants'
import {
  FOOTER_COLUMNS,
  FOOTER_DISCLAIMER,
  FOOTER_LEGAL_LINKS,
  TRUST_CONTACT,
  TRUST_SOCIAL,
} from '../../constants/trustContent'
import { TrustBadges } from '../trust/TrustBadges'
import styles from './SiteFooter.module.css'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <p className={styles.brand}>{APP_NAME}</p>
          <p className={styles.mission}>
            Crowdfunding for medical needs, education, and urgent causes across
            India.
          </p>
          <ul className={styles.social} aria-label="Social links">
            {TRUST_SOCIAL.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.followers}>{TRUST_CONTACT.followersLabel}</p>
          <p className={styles.contact}>
            <a href={`mailto:${TRUST_CONTACT.email}`}>{TRUST_CONTACT.email}</a>
            <span aria-hidden="true"> · </span>
            <a href={`tel:${TRUST_CONTACT.phone.replace(/\s/g, '')}`}>
              {TRUST_CONTACT.phone}
            </a>
          </p>
        </div>

        <div className={styles.columns}>
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className={styles.colTitle}>{column.title}</h2>
              <ul className={styles.colLinks}>
                {column.links.map((link) => (
                  <li key={link.to + link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className={`container ${styles.badgesWrap}`}>
        <TrustBadges />
      </div>

      <div className={`container ${styles.legal}`}>
        <p className={styles.entity}>
          © {year} Kyro Online Ventures Pvt Ltd{USE_MOCK ? ' (demo)' : ''}.
        </p>
        <ul className={styles.legalLinks}>
          {FOOTER_LEGAL_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <p className={styles.disclaimer}>{FOOTER_DISCLAIMER}</p>
      </div>
    </footer>
  )
}
