import { useEffect, useState } from 'react'

import styles from './CampaignImageCarousel.module.css'

interface CampaignImageCarouselProps {
  images: string[]
  title: string
}

const AUTO_MS = 4000

export function CampaignImageCarousel({
  images,
  title,
}: CampaignImageCarouselProps) {
  const slides = images.length > 0 ? images : []
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const safeIndex = slides.length === 0 ? 0 : index % slides.length
  const showControls = slides.length > 1

  useEffect(() => {
    setIndex(0)
  }, [title, slides.length])

  useEffect(() => {
    if (!showControls || paused) {
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, AUTO_MS)
    return () => {
      window.clearInterval(timer)
    }
  }, [showControls, paused, slides.length])

  if (slides.length === 0) {
    return (
      <div className={styles.cover} aria-hidden="true">
        <div className={styles.frame} />
      </div>
    )
  }

  const goPrev = () => {
    setIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    setIndex((current) => (current + 1) % slides.length)
  }

  return (
    <div
      className={styles.cover}
      onMouseEnter={() => {
        setPaused(true)
      }}
      onMouseLeave={() => {
        setPaused(false)
      }}
      onFocusCapture={() => {
        setPaused(true)
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <div className={styles.frame}>
        <img
          src={slides[safeIndex]}
          alt={`${title} — photo ${safeIndex + 1} of ${slides.length}`}
        />
      </div>
      <div className={styles.coverScrim} aria-hidden="true" />
      {showControls ? (
        <>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.prev}`}
            aria-label="Previous photo"
            onClick={goPrev}
          >
            ‹
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.next}`}
            aria-label="Next photo"
            onClick={goNext}
          >
            ›
          </button>
          <div className={styles.dots} role="tablist" aria-label="Photos">
            {slides.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                role="tab"
                aria-selected={i === safeIndex}
                aria-label={`Show photo ${i + 1}`}
                className={`${styles.dot} ${
                  i === safeIndex ? styles.dotActive : ''
                }`}
                onClick={() => {
                  setIndex(i)
                }}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
