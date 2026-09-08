import { MONTHLY_HERO_IMAGES } from '../../constants/monthlyGiving'
import { MonthlyPledgeForm } from './MonthlyPledgeForm'
import styles from './MonthlyPledgeHero.module.css'

const FRAME_CLASS = [
  styles.frame1,
  styles.frame2,
  styles.frame3,
  styles.frame4,
] as const

export function MonthlyPledgeHero() {
  return (
    <section className={styles.section} aria-label="Start giving monthly">
      <div className={`container ${styles.grid}`}>
        <div className={styles.collage} aria-hidden="true">
          {MONTHLY_HERO_IMAGES.map((image, index) => (
            <figure
              key={image.src}
              className={`${styles.frame} ${FRAME_CLASS[index]}`}
            >
              <img src={image.src} alt="" />
            </figure>
          ))}
        </div>
        <MonthlyPledgeForm />
      </div>
    </section>
  )
}
