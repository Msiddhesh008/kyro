import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { CAMPAIGN_CATEGORIES, USE_MOCK, type CampaignCategory } from '../constants'
import { CampaignImageUploader } from '../components/campaigns/CampaignImageUploader'
import { useAppSelector } from '../hooks/redux'
import {
  useCreateCampaignMutation,
  usePublishCampaignMutation,
} from '../services/api'
import { createMockCampaign } from '../services/campaignService'
import { isOrgApproved } from '../services/ngoMockService'
import formStyles from '../styles/forms.module.css'
import type { CreateCampaignRequest } from '../types/campaignApi'

const STEPS = ['Basics', 'Story', 'Goal'] as const

const emptyForm: CreateCampaignRequest = {
  title: '',
  summary: '',
  story: '',
  category: 'Medical',
  goalAmount: 100000,
  coverImageUrl: '',
  imageUrls: [],
}

function validateStep(step: number, form: CreateCampaignRequest): string | null {
  if (step === 0) {
    if (!form.title.trim()) {
      return 'Enter a campaign title.'
    }
    if (!form.summary.trim()) {
      return 'Add a short summary for browse cards.'
    }
    return null
  }
  if (step === 1) {
    if (!form.story.trim()) {
      return 'Tell the full story before continuing.'
    }
    return null
  }
  if (form.goalAmount < 1000) {
    return 'Goal must be at least ₹1,000.'
  }
  return null
}

export function CreateCampaignPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<CreateCampaignRequest>(emptyForm)
  const [notice, setNotice] = useState('')
  const token = useAppSelector((state) => state.auth.accessToken)
  const user = useAppSelector((state) => state.auth.user)
  const [createCampaign, { isLoading: creating }] = useCreateCampaignMutation()
  const [publishCampaign, { isLoading: publishing }] =
    usePublishCampaignMutation()
  const navigate = useNavigate()

  const update = <K extends keyof CreateCampaignRequest>(
    key: K,
    value: CreateCampaignRequest[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const goNext = () => {
    setStep((current) => Math.min(current + 1, STEPS.length - 1))
  }

  const goBack = () => {
    setStep((current) => Math.max(current - 1, 0))
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const stepError = validateStep(step, form)
    if (stepError) {
      setNotice(stepError)
      return
    }
    if (step < STEPS.length - 1) {
      setNotice('')
      goNext()
      return
    }
    if (!token) {
      setNotice('Please log in as a fundraiser before creating a campaign.')
      return
    }
    setNotice('')

    const organizerName = user?.name ?? 'You'

    if (USE_MOCK) {
      const created = createMockCampaign(form, organizerName, {
        verifiedNgo: isOrgApproved(organizerName),
      })
      navigate(`/campaigns/${created.id}`)
      return
    }

    createCampaign(form)
      .unwrap()
      .then((campaign) => publishCampaign(campaign.id).unwrap())
      .then((published) => {
        navigate(`/campaigns/${published.id}`)
      })
      .catch(() => {
        setNotice(
          'Could not create campaign. Log in as a fundraiser and try again.',
        )
      })
  }

  return (
    <div className={formStyles.page}>
      <div className={formStyles.wide}>
        <h1 className={formStyles.title}>Start a fundraiser</h1>
        <p className={formStyles.lead}>
          Tell your story in a few steps. Publish when you are ready to share.
        </p>

        <ol className={formStyles.steps}>
          {STEPS.map((label, index) => (
            <li
              key={label}
              className={`${formStyles.step} ${
                index === step ? formStyles.stepActive : ''
              } ${index < step ? formStyles.stepDone : ''}`}
            >
              {index + 1}. {label}
            </li>
          ))}
        </ol>

        <form className={formStyles.form} onSubmit={onSubmit} noValidate>
          {step === 0 ? (
            <>
              <div className={formStyles.field}>
                <label htmlFor="campaign-title">Campaign title</label>
                <input
                  id="campaign-title"
                  value={form.title}
                  onChange={(event) => {
                    update('title', event.target.value)
                  }}
                />
              </div>
              <div className={formStyles.field}>
                <label htmlFor="campaign-category">Category</label>
                <select
                  id="campaign-category"
                  value={form.category}
                  onChange={(event) => {
                    update('category', event.target.value as CampaignCategory)
                  }}
                >
                  {CAMPAIGN_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className={formStyles.field}>
                <label htmlFor="campaign-summary">Short summary</label>
                <textarea
                  id="campaign-summary"
                  value={form.summary}
                  onChange={(event) => {
                    update('summary', event.target.value)
                  }}
                  maxLength={200}
                />
                <p className={formStyles.hint}>Shown on browse cards (max 200).</p>
              </div>
            </>
          ) : null}

          {step === 1 ? (
            <>
              <div className={formStyles.field}>
                <label htmlFor="campaign-story">Full story</label>
                <textarea
                  id="campaign-story"
                  value={form.story}
                  onChange={(event) => {
                    update('story', event.target.value)
                  }}
                />
              </div>
              <CampaignImageUploader
                images={form.imageUrls}
                onChange={(imageUrls) => {
                  update('imageUrls', imageUrls)
                  update('coverImageUrl', imageUrls[0] ?? '')
                }}
              />
            </>
          ) : null}

          {step === 2 ? (
            <div className={formStyles.field}>
              <label htmlFor="campaign-goal">Goal amount (INR)</label>
              <input
                id="campaign-goal"
                type="number"
                min={1000}
                step={500}
                value={form.goalAmount}
                onChange={(event) => {
                  update('goalAmount', Number(event.target.value))
                }}
              />
            </div>
          ) : null}

          <div className={formStyles.actions}>
            {step > 0 ? (
              <button type="button" className="btn btn-ghost" onClick={goBack}>
                Back
              </button>
            ) : null}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={creating || publishing}
            >
              {step === STEPS.length - 1
                ? creating || publishing
                  ? 'Submitting…'
                  : 'Submit & publish'
                : 'Continue'}
            </button>
            <Link to="/campaigns" className="btn btn-ghost">
              Cancel
            </Link>
          </div>
          {notice ? <p className={formStyles.error}>{notice}</p> : null}
        </form>
      </div>
    </div>
  )
}
