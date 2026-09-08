import { useRef, useState } from 'react'

import { MONTHLY_STEPS } from '../../constants/monthlyGiving'
import styles from './HowItWorksCarousel.module.css'

const TONE_CLASS = {
  blue: styles.blue,
  green: styles.green,
  gold: styles.gold,
} as const

export function HowItWorksCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index] as HTMLElement | undefined
    if (!card) return
    card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    setActive(index)
  }

  const onScroll = () => {
    const track = trackRef.current
    if (!track || track.children.length === 0) return
    const mid = track.scrollLeft + track.clientWidth / 2
    let best = 0
    let bestDist = Number.POSITIVE_INFINITY
    Array.from(track.children).forEach((child, index) => {
      const el = child as HTMLElement
      const center = el.offsetLeft + el.offsetWidth / 2
      const dist = Math.abs(center - mid)
      if (dist < bestDist) {
        bestDist = dist
        best = index
      }
    })
    setActive(best)
  }

  return (
    <section className={styles.section} aria-labelledby="how-monthly-heading">
      <div className="container">
        <h2 id="how-monthly-heading" className={styles.title}>
          How it works
        </h2>
        <div className={styles.underline} aria-hidden="true" />

        <div
          ref={trackRef}
          className={styles.track}
          onScroll={onScroll}
          tabIndex={0}
          aria-label="Monthly giving steps"
        >
          {MONTHLY_STEPS.map((step) => (
            <article
              key={step.step}
              className={`${styles.card} ${TONE_CLASS[step.tone]}`}
            >
              <div className={styles.copy}>
                <p className={styles.stepLabel}>Step {step.step}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <a href="#pledge" className={`btn ${styles.cta}`}>
                  {step.cta}
                </a>
              </div>
              <div className={styles.visual}>
                <img src={step.image} alt="" />
              </div>
            </article>
          ))}
        </div>

        <div className={styles.dots} role="tablist" aria-label="Steps">
          {MONTHLY_STEPS.map((step, index) => (
            <button
              key={step.step}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={active === index ? styles.dotActive : styles.dot}
              onClick={() => {
                scrollToIndex(index)
              }}
            >
              <span className="visually-hidden">Step {step.step}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
