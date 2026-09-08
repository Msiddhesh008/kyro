import styles from './TrustBadges.module.css'

export function TrustBadges() {
  return (
    <div className={styles.row}>
      <img
        className={styles.securedCard}
        src={`${import.meta.env.BASE_URL}footer-secured-card.png`}
        alt="Accepted payments: Visa, Mastercard, American Express, RuPay, Net Banking, UPI. Secured checkout — 100% Secure."
        width={247}
        height={70}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
