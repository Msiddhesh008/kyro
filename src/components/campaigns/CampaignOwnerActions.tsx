import { useState, type FormEvent } from 'react'

import { CAMPAIGN_CATEGORIES, type CampaignCategory } from '../../constants'
import {
  updateMockCampaign,
  type UpdateCampaignInput,
} from '../../services/campaignService'
import formStyles from '../../styles/forms.module.css'
import type { Campaign } from '../../types/campaign'
import { CampaignImageUploader } from './CampaignImageUploader'
import styles from './CampaignOwnerActions.module.css'

interface CampaignOwnerActionsProps {
  campaign: Campaign
  onDeleted: () => void
}

function galleryFromCampaign(campaign: Campaign): string[] {
  if (campaign.imageUrls?.length) {
    return campaign.imageUrls
  }
  return campaign.coverImageUrl ? [campaign.coverImageUrl] : []
}

export function CampaignOwnerActions({
  campaign,
  onDeleted,
}: CampaignOwnerActionsProps) {
  const [editing, setEditing] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState<UpdateCampaignInput>(() => ({
    title: campaign.title,
    summary: campaign.summary,
    story: campaign.story,
    category: campaign.category,
    goalAmount: campaign.goalAmount,
    coverImageUrl: campaign.coverImageUrl,
    imageUrls: galleryFromCampaign(campaign),
  }))

  const update = <K extends keyof UpdateCampaignInput>(
    key: K,
    value: UpdateCampaignInput[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const loadFormFromCampaign = () => {
    setForm({
      title: campaign.title,
      summary: campaign.summary,
      story: campaign.story,
      category: campaign.category,
      goalAmount: campaign.goalAmount,
      coverImageUrl: campaign.coverImageUrl,
      imageUrls: galleryFromCampaign(campaign),
    })
  }

  const onSave = (event: FormEvent) => {
    event.preventDefault()
    if (!form.title?.trim()) {
      setError('Title is required.')
      return
    }
    if (!form.summary?.trim()) {
      setError('Summary is required.')
      return
    }
    if (!form.story?.trim()) {
      setError('Story is required.')
      return
    }
    if ((form.goalAmount ?? 0) < 1000) {
      setError('Goal must be at least ₹1,000.')
      return
    }
    const saved = updateMockCampaign(campaign.id, {
      ...form,
      imageUrls: form.imageUrls ?? [],
    })
    if (!saved) {
      setError('Could not update campaign.')
      return
    }
    setError('')
    setEditing(false)
  }

  const onDelete = () => {
    const confirmed = window.confirm(
      `Delete “${campaign.title}”? This cannot be undone in preview.`,
    )
    if (!confirmed) {
      return
    }
    onDeleted()
  }

  if (!editing) {
    return (
      <div className={styles.actions}>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            loadFormFromCampaign()
            setError('')
            setEditing(true)
          }}
        >
          Edit
        </button>
        <button type="button" className="btn btn-ghost" onClick={onDelete}>
          Delete
        </button>
      </div>
    )
  }

  return (
    <form className={styles.editForm} onSubmit={onSave} noValidate>
      <div className={formStyles.field}>
        <label htmlFor={`edit-title-${campaign.id}`}>Title</label>
        <input
          id={`edit-title-${campaign.id}`}
          value={form.title ?? ''}
          onChange={(event) => {
            update('title', event.target.value)
          }}
        />
      </div>
      <div className={formStyles.field}>
        <label htmlFor={`edit-category-${campaign.id}`}>Category</label>
        <select
          id={`edit-category-${campaign.id}`}
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
        <label htmlFor={`edit-summary-${campaign.id}`}>Summary</label>
        <textarea
          id={`edit-summary-${campaign.id}`}
          value={form.summary ?? ''}
          maxLength={200}
          onChange={(event) => {
            update('summary', event.target.value)
          }}
        />
      </div>
      <div className={formStyles.field}>
        <label htmlFor={`edit-story-${campaign.id}`}>Story</label>
        <textarea
          id={`edit-story-${campaign.id}`}
          value={form.story ?? ''}
          onChange={(event) => {
            update('story', event.target.value)
          }}
        />
      </div>
      <div className={formStyles.field}>
        <label htmlFor={`edit-goal-${campaign.id}`}>Goal (INR)</label>
        <input
          id={`edit-goal-${campaign.id}`}
          type="number"
          min={1000}
          step={500}
          value={form.goalAmount ?? 1000}
          onChange={(event) => {
            update('goalAmount', Number(event.target.value))
          }}
        />
      </div>
      <CampaignImageUploader
        images={form.imageUrls ?? []}
        onChange={(imageUrls) => {
          update('imageUrls', imageUrls)
          update('coverImageUrl', imageUrls[0] ?? '')
        }}
      />
      {error ? <p className={formStyles.error}>{error}</p> : null}
      <div className={styles.actions}>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            setEditing(false)
            setError('')
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
