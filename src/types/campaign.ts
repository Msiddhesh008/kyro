import type { CampaignCategory } from '../constants'

export interface Campaign {
  id: string
  title: string
  summary: string
  story: string
  category: CampaignCategory
  goalAmount: number
  raisedAmount: number
  donorCount: number
  coverImageUrl: string
  imageUrls: string[]
  organizerName: string
  createdAt: string
  /** ISO date when the campaign ends (for “days left”). */
  endsAt?: string
  location?: string
  featured?: boolean
  verifiedNgo?: boolean
}
