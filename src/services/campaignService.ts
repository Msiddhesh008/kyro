import { MOCK_CAMPAIGNS } from '../constants/mockCampaigns'
import type { CampaignCategory } from '../constants'
import type { Campaign } from '../types/campaign'
import type { CreateCampaignRequest } from '../types/campaignApi'

export interface CampaignFilters {
  category?: CampaignCategory | 'All'
  query?: string
  location?: string | 'All'
  sort?: 'trending' | 'funded' | 'newest'
}

let runtimeCampaigns: Campaign[] = [...MOCK_CAMPAIGNS]
const listeners = new Set<() => void>()

function notify() {
  listeners.forEach((listener) => {
    listener()
  })
}

export function subscribeCampaignStore(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function getCampaignSnapshot(): Campaign[] {
  return runtimeCampaigns
}

function matchesFilters(
  campaign: Campaign,
  filters: CampaignFilters,
): boolean {
  const {
    category = 'All',
    query = '',
    location = 'All',
  } = filters
  const normalisedQuery = query.trim().toLowerCase()
  const matchesCategory = category === 'All' || campaign.category === category
  const matchesLocation =
    location === 'All' ||
    (campaign.location ?? '').toLowerCase() === location.toLowerCase()
  const matchesQuery =
    normalisedQuery.length === 0 ||
    campaign.title.toLowerCase().includes(normalisedQuery) ||
    campaign.summary.toLowerCase().includes(normalisedQuery) ||
    campaign.organizerName.toLowerCase().includes(normalisedQuery)
  return matchesCategory && matchesLocation && matchesQuery
}

function sortCampaigns(
  campaigns: Campaign[],
  sort: CampaignFilters['sort'] = 'trending',
): Campaign[] {
  const next = [...campaigns]
  if (sort === 'funded') {
    next.sort((a, b) => b.raisedAmount - a.raisedAmount)
    return next
  }
  if (sort === 'newest') {
    next.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    return next
  }
  next.sort((a, b) => b.donorCount - a.donorCount)
  return next
}

export function getCampaigns(filters: CampaignFilters = {}): Campaign[] {
  const filtered = runtimeCampaigns.filter((campaign) =>
    matchesFilters(campaign, filters),
  )
  return sortCampaigns(filtered, filters.sort)
}

export function getCampaignById(id: string): Campaign | undefined {
  return runtimeCampaigns.find((campaign) => campaign.id === id)
}

export function getFeaturedCampaigns(limit = 3): Campaign[] {
  const featured = runtimeCampaigns.filter((campaign) => campaign.featured)
  if (featured.length >= limit) {
    return featured.slice(0, limit)
  }
  return runtimeCampaigns.slice(0, limit)
}

const DEFAULT_COVER =
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80'

function resolveGallery(imageUrls: string[] | undefined, coverFallback: string): {
  imageUrls: string[]
  coverImageUrl: string
} {
  const cleaned = (imageUrls ?? [])
    .map((url) => url.trim())
    .filter((url) => url.length > 0)
  if (cleaned.length > 0) {
    return { imageUrls: cleaned, coverImageUrl: cleaned[0] }
  }
  const cover = coverFallback.trim() || DEFAULT_COVER
  return { imageUrls: [cover], coverImageUrl: cover }
}

export function createMockCampaign(
  input: CreateCampaignRequest,
  organizerName: string,
  options?: { verifiedNgo?: boolean },
): Campaign {
  const id = `mock-${Date.now()}`
  const gallery = resolveGallery(input.imageUrls, input.coverImageUrl)
  const createdAt = new Date().toISOString().slice(0, 10)
  const ends = new Date()
  ends.setDate(ends.getDate() + 45)
  const campaign: Campaign = {
    id,
    title: input.title.trim(),
    summary: input.summary.trim(),
    story: input.story.trim(),
    category: input.category,
    goalAmount: input.goalAmount,
    raisedAmount: 0,
    donorCount: 0,
    coverImageUrl: gallery.coverImageUrl,
    imageUrls: gallery.imageUrls,
    organizerName,
    createdAt,
    endsAt: ends.toISOString().slice(0, 10),
    featured: false,
    verifiedNgo: options?.verifiedNgo ?? false,
  }
  runtimeCampaigns = [campaign, ...runtimeCampaigns]
  notify()
  return campaign
}

export function applyMockDonation(campaignId: string, amount: number): boolean {
  const index = runtimeCampaigns.findIndex((c) => c.id === campaignId)
  if (index < 0) {
    return false
  }
  const current = runtimeCampaigns[index]
  runtimeCampaigns = [
    ...runtimeCampaigns.slice(0, index),
    {
      ...current,
      raisedAmount: current.raisedAmount + amount,
      donorCount: current.donorCount + 1,
    },
    ...runtimeCampaigns.slice(index + 1),
  ]
  notify()
  return true
}

export function getCampaignsByOrganizer(organizerName: string) {
  const name = organizerName.trim().toLowerCase()
  return runtimeCampaigns.filter(
    (campaign) => campaign.organizerName.trim().toLowerCase() === name,
  )
}

export type UpdateCampaignInput = Partial<
  Pick<
    Campaign,
    | 'title'
    | 'summary'
    | 'story'
    | 'category'
    | 'goalAmount'
    | 'coverImageUrl'
    | 'imageUrls'
  >
>

export function updateMockCampaign(
  campaignId: string,
  input: UpdateCampaignInput,
): Campaign | null {
  const index = runtimeCampaigns.findIndex((c) => c.id === campaignId)
  if (index < 0) {
    return null
  }
  const current = runtimeCampaigns[index]
  const gallery =
    input.imageUrls !== undefined
      ? resolveGallery(input.imageUrls, input.coverImageUrl ?? '')
      : input.coverImageUrl !== undefined
        ? resolveGallery(
            [input.coverImageUrl],
            input.coverImageUrl,
          )
        : {
            imageUrls: current.imageUrls,
            coverImageUrl: current.coverImageUrl,
          }
  const updated: Campaign = {
    ...current,
    title: input.title?.trim() ?? current.title,
    summary: input.summary?.trim() ?? current.summary,
    story: input.story?.trim() ?? current.story,
    category: input.category ?? current.category,
    goalAmount: input.goalAmount ?? current.goalAmount,
    coverImageUrl: gallery.coverImageUrl,
    imageUrls: gallery.imageUrls,
  }
  runtimeCampaigns = [
    ...runtimeCampaigns.slice(0, index),
    updated,
    ...runtimeCampaigns.slice(index + 1),
  ]
  notify()
  return updated
}

export function deleteMockCampaign(campaignId: string): boolean {
  const next = runtimeCampaigns.filter((c) => c.id !== campaignId)
  if (next.length === runtimeCampaigns.length) {
    return false
  }
  runtimeCampaigns = next
  notify()
  return true
}

export function setCampaignVerifiedNgo(
  campaignId: string,
  verified: boolean,
): boolean {
  const index = runtimeCampaigns.findIndex((c) => c.id === campaignId)
  if (index < 0) {
    return false
  }
  const current = runtimeCampaigns[index]
  runtimeCampaigns = [
    ...runtimeCampaigns.slice(0, index),
    { ...current, verifiedNgo: verified },
    ...runtimeCampaigns.slice(index + 1),
  ]
  notify()
  return true
}

export function markOrganizerCampaignsVerified(organizerName: string): number {
  const name = organizerName.trim().toLowerCase()
  let count = 0
  runtimeCampaigns = runtimeCampaigns.map((campaign) => {
    if (campaign.organizerName.trim().toLowerCase() !== name) {
      return campaign
    }
    count += 1
    return { ...campaign, verifiedNgo: true }
  })
  if (count > 0) {
    notify()
  }
  return count
}
