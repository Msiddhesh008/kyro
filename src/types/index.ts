export interface HealthResponse {
  status: string
}

export type { Campaign } from './campaign'
export type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
  UserRole,
} from './auth'
export type {
  CampaignDetail,
  CampaignStatus,
  CreateCampaignRequest,
} from './campaignApi'
export type {
  CreateDonationRequest,
  Donation,
  DonationStatus,
} from './donation'
export type {
  NgoApplication,
  NgoApplicationRequest,
  NgoApplicationStatus,
  NgoCause,
  NgoRegistrationType,
} from './ngo'
