/** Frontend-first: mock data/UI until API wiring phase. */
export const USE_MOCK =
  (import.meta.env.VITE_USE_MOCK ?? 'true').toLowerCase() !== 'false'

export const APP_NAME = 'Kyro'

export const API_BASE_URL =
  import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export const CAMPAIGN_CATEGORIES = [
  'Medical',
  'Education',
  'Emergency',
  'Animals',
] as const

export type CampaignCategory = (typeof CAMPAIGN_CATEGORIES)[number]

export const CAMPAIGN_LOCATIONS = [
  'Mumbai',
  'Delhi',
  'Chennai',
  'Assam',
  'Bihar',
  'Pune',
  'Odisha',
] as const

export type CampaignLocation = (typeof CAMPAIGN_LOCATIONS)[number]

export type CampaignSort = 'trending' | 'funded' | 'newest'
