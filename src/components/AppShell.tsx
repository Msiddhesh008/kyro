import { Outlet } from 'react-router-dom'

import { SiteFooter } from './layout/SiteFooter'
import { SiteHeader } from './layout/SiteHeader'
import styles from './AppShell.module.css'

export function AppShell() {
  return (
    <div className={styles.shell}>
      <SiteHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
