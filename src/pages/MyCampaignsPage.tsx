import { Link } from 'react-router-dom'

import { CampaignListItem } from '../components/campaigns/CampaignListItem'
import { CampaignOwnerActions } from '../components/campaigns/CampaignOwnerActions'
import ownerStyles from '../components/campaigns/CampaignOwnerActions.module.css'
import { useAppSelector } from '../hooks/redux'
import { useMockCampaigns } from '../hooks/useMockCampaigns'
import {
  deleteMockCampaign,
  getCampaignsByOrganizer,
} from '../services/campaignService'
import styles from './CampaignsPage.module.css'

export function MyCampaignsPage() {
  const user = useAppSelector((state) => state.auth.user)
  const isAdmin =
    user?.role === 'admin' || user?.email === 'admin@kyro.test'
  useMockCampaigns()
  const campaigns = user
    ? getCampaignsByOrganizer(user.name)
    : []

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>My campaigns</h1>
          <p className={styles.lead}>
            Fundraisers you have started on Kyro.
            {isAdmin
              ? ' As admin, you can edit or delete your own campaigns here.'
              : ''}
          </p>
          {isAdmin || campaigns.length > 0 ? (
            <p className={ownerStyles.actions}>
              <Link to="/campaigns/new" className="btn btn-primary">
                Create campaign
              </Link>
            </p>
          ) : null}
        </header>

        {campaigns.length === 0 ? (
          <div className={styles.empty}>
            <p>You have not created a campaign yet.</p>
            <Link to="/campaigns/new" className="btn btn-primary">
              Start a fundraiser
            </Link>
          </div>
        ) : (
          <>
            <p className={styles.count}>
              {campaigns.length} campaign{campaigns.length === 1 ? '' : 's'}
            </p>
            <div className={styles.list}>
              {campaigns.map((campaign) => (
                <div key={campaign.id} className={ownerStyles.row}>
                  <CampaignListItem campaign={campaign} />
                  {isAdmin ? (
                    <CampaignOwnerActions
                      campaign={campaign}
                      onDeleted={() => {
                        deleteMockCampaign(campaign.id)
                      }}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
