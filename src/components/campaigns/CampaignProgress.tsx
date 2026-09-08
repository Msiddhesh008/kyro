import { formatINR, getProgressPercent } from '../../utils/format'
import styles from './CampaignProgress.module.css'

interface CampaignProgressProps {
  raisedAmount: number
  goalAmount: number
  donorCount: number
}

export function CampaignProgress({
  raisedAmount,
  goalAmount,
  donorCount,
}: CampaignProgressProps) {
  const percent = getProgressPercent(raisedAmount, goalAmount)

  return (
    <div>
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
      <div className={styles.meta}>
        <span className={styles.raised}>
          {formatINR(raisedAmount)} raised of {formatINR(goalAmount)}
        </span>
        <span>
          {percent}% · {donorCount} donors
        </span>
      </div>
    </div>
  )
}
