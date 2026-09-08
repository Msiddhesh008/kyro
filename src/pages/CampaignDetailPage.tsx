import { useSyncExternalStore, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CampaignProgress } from '../components/campaigns/CampaignProgress'
import { CampaignImageCarousel } from '../components/campaigns/CampaignImageCarousel'
import { DonateModal } from '../components/donations/DonateModal'
import { USE_MOCK } from '../constants'
import { useGetCampaignQuery } from '../services/api'
import {
  getCampaignById,
  getCampaignSnapshot,
  subscribeCampaignStore,
} from '../services/campaignService'
import { shareCampaign } from '../utils/shareCampaign'
import styles from './CampaignDetailPage.module.css'

export function CampaignDetailPage() {
  const { id = '' } = useParams()
  useSyncExternalStore(subscribeCampaignStore, getCampaignSnapshot)
  const apiQuery = useGetCampaignQuery(id, { skip: USE_MOCK || !id })
  const mockCampaign = USE_MOCK ? getCampaignById(id) : undefined
  const campaign = USE_MOCK ? mockCampaign : apiQuery.data
  const isLoading = !USE_MOCK && apiQuery.isLoading
  const isMissing = USE_MOCK ? !mockCampaign : apiQuery.isError || !apiQuery.data

  const [notice, setNotice] = useState('')
  const [donateOpen, setDonateOpen] = useState(false)

  if (isLoading) {
    return (
      <div className={`container ${styles.missing}`}>
        <p>Loading campaign…</p>
      </div>
    )
  }

  if (isMissing || !campaign) {
    return (
      <div className={`container ${styles.missing}`}>
        <h1>Campaign not found</h1>
        <p>This fundraiser may have been removed or the link is incorrect.</p>
        <Link to="/campaigns" className="btn btn-primary">
          Back to campaigns
        </Link>
      </div>
    )
  }

  const verifiedNgo =
    'verifiedNgo' in campaign ? Boolean(campaign.verifiedNgo) : false

  const onShare = () => {
    shareCampaign(campaign.title, campaign.summary, window.location.href)
      .then((message) => {
        if (message) {
          setNotice(message)
        }
      })
      .catch(() => {
        setNotice('Unable to share right now.')
      })
  }

  const gallery =
    'imageUrls' in campaign && Array.isArray(campaign.imageUrls) && campaign.imageUrls.length > 0
      ? campaign.imageUrls
      : [campaign.coverImageUrl]

  return (
    <article className={styles.page}>
      <CampaignImageCarousel images={gallery} title={campaign.title} />

      <div className={styles.content}>
        <span className={styles.category}>{campaign.category}</span>
        <h1 className={`${styles.title} animate-fade-up`}>{campaign.title}</h1>
        <p className={styles.organizer}>
          Organised by {campaign.organizerName}
          {verifiedNgo ? (
            <span className={styles.badge}>Verified nonprofit</span>
          ) : null}
        </p>

        <div className={styles.progressBlock}>
          <CampaignProgress
            raisedAmount={campaign.raisedAmount}
            goalAmount={campaign.goalAmount}
            donorCount={campaign.donorCount}
          />
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setDonateOpen(true)
            }}
          >
            Donate
          </button>
          <button type="button" className="btn btn-ghost" onClick={onShare}>
            Share
          </button>
        </div>
        {notice ? <p className={styles.notice}>{notice}</p> : null}

        <h2 className={styles.storyTitle}>Story</h2>
        <div className={styles.story}>
          {campaign.story
            .split(/\n\n+/)
            .map((paragraph) => paragraph.trim())
            .filter(Boolean)
            .map((paragraph, index) => (
              <p key={`story-p-${index}`}>{paragraph}</p>
            ))}
        </div>
      </div>

      {donateOpen ? (
        <DonateModal
          campaignId={campaign.id}
          campaignTitle={campaign.title}
          onClose={() => {
            setDonateOpen(false)
          }}
        />
      ) : null}
    </article>
  )
}
