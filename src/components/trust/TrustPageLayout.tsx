import type { ReactNode } from 'react'

import styles from './TrustPageLayout.module.css'

interface TrustPageLayoutProps {
  title: string
  lead: string
  children: ReactNode
}

export function TrustPageLayout({ title, lead, children }: TrustPageLayoutProps) {
  return (
    <article className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lead}>{lead}</p>
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </article>
  )
}
