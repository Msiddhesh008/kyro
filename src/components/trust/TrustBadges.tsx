import { TRUST_PAYMENT_METHODS } from '../../constants/trustContent'
import styles from './TrustBadges.module.css'

export function TrustBadges() {
  return (
    <div className={styles.row} aria-label="Payment and security">
      <ul className={styles.methods}>
        {TRUST_PAYMENT_METHODS.map((method) => (
          <li key={method}>{method}</li>
        ))}
      </ul>
      <p className={styles.secure}>
        <span className={styles.lock} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <rect
              x="5"
              y="11"
              width="14"
              height="10"
              rx="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M8 11V8a4 4 0 0 1 8 0v3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
        100% Secure
      </p>
    </div>
  )
}
