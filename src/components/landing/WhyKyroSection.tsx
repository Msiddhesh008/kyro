import { APP_NAME } from '../../constants'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import styles from './WhyKyroSection.module.css'

interface FeatureItem {
  label: string
  icon: 'success' | 'community' | 'tools' | 'payments' | 'support' | 'dashboard' | 'withdraw' | 'global'
}

const FEATURES: FeatureItem[] = [
  {
    icon: 'success',
    label: 'Strong fundraising outcomes for medical and cause campaigns',
  },
  {
    icon: 'community',
    label: 'Built for donors and organisers across India',
  },
  {
    icon: 'tools',
    label: 'Easy tools to launch, share, and manage your campaign',
  },
  {
    icon: 'payments',
    label: 'Donate with popular Indian payment options',
  },
  {
    icon: 'support',
    label: 'Guidance when you need help getting started',
  },
  {
    icon: 'dashboard',
    label: 'Clear progress dashboard for every fundraiser',
  },
  {
    icon: 'withdraw',
    label: 'Straightforward withdrawals when payouts go live',
  },
  {
    icon: 'global',
    label: 'Web and mobile app so supporters can give anywhere',
  },
]

function FeatureIcon({ name }: { name: FeatureItem['icon'] }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: '0 0 40 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true as const,
    className: styles.icon,
  }

  switch (name) {
    case 'success':
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M14 20.5 18 24.5 26 15.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'community':
      return (
        <svg {...common}>
          <circle cx="20" cy="14" r="4" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M11 28c1.5-4 4.5-6 9-6s7.5 2 9 6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="10" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="30" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'tools':
      return (
        <svg {...common}>
          <path
            d="M14 26 26 14M16 12l2.5 5L24 14M26 28l-5-2.5L28 18"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'payments':
      return (
        <svg {...common}>
          <rect
            x="8"
            y="14"
            width="24"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path d="M8 19h24" stroke="currentColor" strokeWidth="1.75" />
          <path d="M12 25h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      )
    case 'support':
      return (
        <svg {...common}>
          <path
            d="M12 16c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3-1.6 5.6-4 7v3H16v-3c-2.4-1.4-4-4-4-7Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M18 30h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      )
    case 'dashboard':
      return (
        <svg {...common}>
          <rect x="8" y="10" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M12 24v-6M17 24v-9M22 24v-4M27 24v-8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      )
    case 'withdraw':
      return (
        <svg {...common}>
          <circle cx="20" cy="16" r="6" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M18 16h4M20 13.5v5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 28c2-3 5-4.5 8-4.5S26 25 28 28"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'global':
      return (
        <svg {...common}>
          <rect x="9" y="12" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
          <rect x="17" y="10" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M14 27h4M22 25h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

export function WhyKyroSection() {
  const { ref, visible } = useRevealOnScroll()
  const show = visible ? 'revealVisible' : ''

  return (
    <section
      ref={ref}
      className={styles.section}
      aria-labelledby="why-kyro-heading"
    >
      <div className="container">
        <h2
          id="why-kyro-heading"
          className={`${styles.title} reveal ${show}`}
        >
          Why {APP_NAME}?
        </h2>
        <ul className={`${styles.grid} reveal revealDelay ${show}`}>
          {FEATURES.map((feature) => (
            <li key={feature.label} className={styles.item}>
              <FeatureIcon name={feature.icon} />
              <span className={styles.rule} aria-hidden="true" />
              <p className={styles.label}>{feature.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
