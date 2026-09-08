import { Link } from 'react-router-dom'

import type { Campaign } from '../../types/campaign'
import type { CampaignDetail } from '../../types/campaignApi'
import {
  formatINR,
  getDaysLeft,
  getOrganizerInitials,
  getProgressPercent,
} from '../../utils/format'
import styles from './CampaignListItem.module.css'

interface CampaignListItemProps {
  campaign: Campaign | CampaignDetail
}

function getEndsAt(campaign: Campaign | CampaignDetail): string | undefined {
  return 'endsAt' in campaign ? campaign.endsAt : undefined
}

export function CampaignListItem({ campaign }: CampaignListItemProps) {
  const detailPath = `/campaigns/${campaign.id}`
  const percent = getProgressPercent(campaign.raisedAmount, campaign.goalAmount)
  const daysLeft = getDaysLeft(getEndsAt(campaign))
  const initials = getOrganizerInitials(campaign.organizerName)
  const verified =
    'verifiedNgo' in campaign ? Boolean(campaign.verifiedNgo) : false

  return (
    <Link
      to={detailPath}
      className={styles.item}
      aria-label={campaign.title}
    >
      <div className={styles.media}>
        <img src={campaign.coverImageUrl} alt="" />
      </div>
      <div className={styles.body}>
        <span className={styles.category}>{campaign.category}</span>
        <h3 className={styles.title}>{campaign.title}</h3>

        <div className={styles.creator}>
          <span className={styles.avatar} aria-hidden="true">
            {initials}
          </span>
          <p className={styles.organizer}>
            by {campaign.organizerName}
            {verified ? <span className={styles.badge}>Verified</span> : null}
          </p>
        </div>

        <p className={styles.summary}>{campaign.summary}</p>

        <p className={styles.fundingLine}>
          <strong>{formatINR(campaign.raisedAmount)}</strong>
          <span> raised out of {formatINR(campaign.goalAmount)}</span>
        </p>
        <div
          className={styles.track}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Fundraising progress"
        >
          <div className={styles.fill} style={{ width: `${percent}%` }} />
        </div>

        <div className={styles.stats}>
          <span className={styles.stat}>
            <span className={styles.statIcon} aria-hidden="true">
              ◷
            </span>
            {daysLeft > 0 ? `${daysLeft} Days Left` : 'Ended'}
          </span>
          <span className={styles.stat}>
            <span className={styles.statIcon} aria-hidden="true">
              ♥
            </span>
            {campaign.donorCount.toLocaleString('en-IN')} Supporters
          </span>
        </div>
      </div>
    </Link>
  )
}
