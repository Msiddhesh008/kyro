import { useMemo, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { useAppSelector } from '../hooks/redux'
import { useMockCampaigns } from '../hooks/useMockCampaigns'
import { markOrganizerCampaignsVerified } from '../services/campaignService'
import {
  approveMockNgoApplication,
  getMockNgoApplications,
} from '../services/ngoMockService'
import formStyles from '../styles/forms.module.css'
import styles from './CampaignsPage.module.css'

export function AdminNgoPage() {
  const user = useAppSelector((state) => state.auth.user)
  const isAdmin =
    user?.role === 'admin' || user?.email === 'admin@kyro.test'
  useMockCampaigns()
  const [apps, setApps] = useState(() => getMockNgoApplications())
  const [notice, setNotice] = useState('')

  const pending = useMemo(
    () => apps.filter((app) => app.status === 'submitted'),
    [apps],
  )

  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  const onApprove = (id: string, organizationName: string) => {
    const updated = approveMockNgoApplication(id)
    if (!updated) {
      setNotice('Application not found.')
      return
    }
    const byOrg = markOrganizerCampaignsVerified(organizationName)
    const byApplicant = markOrganizerCampaignsVerified(updated.applicantName)
    const verifiedCount = byOrg + byApplicant
    setApps(getMockNgoApplications())
    setNotice(
      verifiedCount > 0
        ? `Approved ${organizationName}. Verified badge applied to ${verifiedCount} campaign(s).`
        : `Approved ${organizationName}. New campaigns from this applicant will show as verified.`,
    )
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>NGO applications</h1>
          <p className={styles.lead}>
            Preview admin review. Approve to grant a verified nonprofit badge.
          </p>
        </header>

        {notice ? <p className={formStyles.hint}>{notice}</p> : null}

        {pending.length === 0 ? (
          <p className={styles.empty}>
            No pending applications.{' '}
            <Link to="/ngo/apply">Submit one</Link> while logged in as a
            fundraiser, then return here as admin@kyro.test.
          </p>
        ) : (
          <div className={styles.list}>
            {pending.map((app) => (
              <article key={app.id} className={formStyles.banner}>
                <strong>{app.organizationName}</strong>
                <p className={formStyles.hint}>
                  {app.city} · {app.cause} · {app.registrationType}
                </p>
                <p className={formStyles.hint}>
                  Founders: {app.founderNames} · Applicant: {app.applicantName} (
                  {app.applicantEmail})
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    onApprove(app.id, app.organizationName)
                  }}
                >
                  Approve
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
