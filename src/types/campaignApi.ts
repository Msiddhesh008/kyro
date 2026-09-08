import type { CampaignCategory } from '../constants'

/** Future API: POST /campaigns, PATCH /campaigns/:id, POST /campaigns/:id/publish */

export type CampaignStatus = 'draft' | 'pending_review' | 'published' | 'closed'

export interface CreateCampaignRequest {
  title: string
  summary: string
  story: string
  category: CampaignCategory
  goalAmount: number
  coverImageUrl: string
  imageUrls: string[]
}

export interface CampaignDetail extends CreateCampaignRequest {
  id: string
  raisedAmount: number
  donorCount: number
  organizerName: string
  organizerId: string
  organizerRole: 'donor' | 'fundraiser' | 'ngo' | 'admin'
  verifiedNgo: boolean
  status: CampaignStatus
  createdAt: string
  featured?: boolean
}
