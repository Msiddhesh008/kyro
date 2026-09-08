import { useSyncExternalStore } from 'react'

import {
  getCampaignSnapshot,
  getCampaigns,
  subscribeCampaignStore,
  type CampaignFilters,
} from '../services/campaignService'

export function useMockCampaigns(filters: CampaignFilters = {}) {
  useSyncExternalStore(subscribeCampaignStore, getCampaignSnapshot)
  return getCampaigns(filters)
}
