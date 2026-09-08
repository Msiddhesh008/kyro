import { Link } from 'react-router-dom'

import { TrustPageLayout } from '../components/trust/TrustPageLayout'
import { SUCCESS_STORIES } from '../constants/trustContent'
import styles from './SuccessStoriesPage.module.css'

export function SuccessStoriesPage() {
  return (
    <TrustPageLayout
      title="Success stories"
      lead="Real campaigns where community support helped families and causes move forward. Explore a few highlights from Kyro."
    >
      <ul className={styles.list}>
        {SUCCESS_STORIES.map((story) => (
          <li key={story.campaignId} className={styles.card}>
            <p className={styles.raised}>{story.raisedLabel}</p>
            <h2 className={styles.cardTitle}>{story.title}</h2>
            <p className={styles.summary}>{story.summary}</p>
            <Link to={`/campaigns/${story.campaignId}`} className={styles.link}>
              View campaign
            </Link>
          </li>
        ))}
      </ul>
    </TrustPageLayout>
  )
}
