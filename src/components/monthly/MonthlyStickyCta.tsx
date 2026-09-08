import { useEffect, useState } from 'react'

import styles from './MonthlyStickyCta.module.css'

export function MonthlyStickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={styles.bar} role="region" aria-label="Monthly giving call to action">
      <p>Join our community of monthly contributors providing urgent medical care.</p>
      <a href="#pledge" className={`btn btn-primary ${styles.cta}`}>
        Contribute Monthly
      </a>
    </div>
  )
}
