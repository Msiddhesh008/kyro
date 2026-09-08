import { useEffect, useState } from 'react'

interface RevealResult {
  ref: (node: HTMLElement | null) => void
  visible: boolean
}

export function useRevealOnScroll(): RevealResult {
  const [node, setNode] = useState<HTMLElement | null>(null)
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    if (!node || visible) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
    }
  }, [node, visible])

  return { ref: setNode, visible }
}
