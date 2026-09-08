/** Future API: POST /campaigns/:id/donations, webhook /payments/razorpay */

export type DonationStatus = 'created' | 'paid' | 'failed'

export interface CreateDonationRequest {
  campaignId: string
  amount: number
  donorName: string
  donorEmail: string
  isAnonymous: boolean
}

export interface Donation {
  id: string
  campaignId: string
  amount: number
  donorName: string
  status: DonationStatus
  createdAt: string
}
