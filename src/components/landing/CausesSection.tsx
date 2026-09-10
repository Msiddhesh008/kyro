import { Link } from 'react-router-dom'

import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import styles from './CausesSection.module.css'

type CauseIcon =
  | 'medical'
  | 'memorial'
  | 'children'
  | 'education'
  | 'animal'
  | 'others'

interface CauseItem {
  label: string
  icon: CauseIcon
  to: string
}

const CAUSES: CauseItem[] = [
  { label: 'Medical', icon: 'medical', to: '/causes/medical' },
  { label: 'Memorial', icon: 'memorial', to: '/causes/memorial' },
  { label: 'Children', icon: 'children', to: '/causes/children' },
  { label: 'Education', icon: 'education', to: '/causes/education' },
  { label: 'Animal', icon: 'animal', to: '/causes/animal' },
  { label: 'Others', icon: 'others', to: '/causes/others' },
]

function CauseIconSvg({ name }: { name: CauseIcon }) {
  const common = {
    className: styles.icon,
    viewBox: '0 0 48 48',
    fill: 'none',
    'aria-hidden': true as const,
  }

  if (name === 'medical') {
    return (
      <svg {...common}>
        <rect x="12" y="16" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M18 16v-3a6 6 0 0 1 12 0v3" stroke="currentColor" strokeWidth="2" />
        <path d="M24 22v8M20 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'memorial') {
    return (
      <svg {...common}>
        <path
          d="M16 38V18c0-2 2-6 8-6s8 4 8 6v20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M14 38h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 20v8M20 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'children') {
    return (
      <svg {...common}>
        <circle cx="24" cy="22" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M18 24c1.2 2 3.5 3.2 6 3.2S28.8 26 30 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="1.2" fill="currentColor" />
        <circle cx="28" cy="20" r="1.2" fill="currentColor" />
        <path d="M22 12c1-3 4-3 5 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'education') {
    return (
      <svg {...common}>
        <path
          d="M8 20 24 12l16 8-16 8L8 20Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M14 23v7c0 2 4.5 5 10 5s10-3 10-5v-7"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M40 20v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'animal') {
    return (
      <svg {...common}>
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="26" r="3.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="26" r="3.5" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="24" cy="30" rx="7" ry="8" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path
        d="M14 28c0-6 5-10 10-6 5-4 10 0 10 6 0 8-10 14-10 14S14 36 14 28Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 22c2-6 7-8 10-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CausesSection() {
  const { ref, visible } = useRevealOnScroll()
  const show = visible ? 'revealVisible' : ''

  return (
    <section
      ref={ref}
      className={styles.section}
      aria-labelledby="causes-heading"
    >
      <div className="container">
        <header className={`${styles.header} reveal ${show}`}>
          <h2 id="causes-heading" className={styles.title}>
            Causes you can raise funds for
          </h2>
          <p className={styles.lead}>
            Be it for a personal need, social cause or a creative idea – you can
            count on us for the project that you want to raise funds for.
          </p>
        </header>

        <ul className={`${styles.grid} reveal revealDelay ${show}`}>
          {CAUSES.map((cause) => (
            <li key={cause.label}>
              <Link to={cause.to} className={styles.card}>
                <CauseIconSvg name={cause.icon} />
                <span className={styles.label}>{cause.label}</span>
                <span className={styles.underline} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
