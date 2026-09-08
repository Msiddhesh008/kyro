/** Future API: POST /ngo/applications, GET /admin/ngo-applications */

export type NgoRegistrationType =
  | 'trust'
  | 'society'
  | 'section8'
  | 'not_registered'

export type NgoCause =
  | 'Children'
  | 'Education'
  | 'Women & Girls'
  | 'Medical'
  | 'Sports'
  | 'Animals'
  | 'Senior Citizens'
  | 'Disability'
  | 'Environment'
  | 'Disaster Relief'
  | 'Rural Development'
  | 'Community Development'
  | 'Arts, Music & Culture'
  | 'Food & Hunger'
  | 'Healthcare'
  | 'Skill Development'

export interface NgoApplicationRequest {
  registrationType: NgoRegistrationType
  organizationName: string
  registeredAddress: string
  city: string
  cause: NgoCause
  founderNames: string
  founderLinkedIn?: string
}

export type NgoApplicationStatus = 'submitted' | 'approved' | 'rejected'

export interface NgoApplication extends NgoApplicationRequest {
  id: string
  status: NgoApplicationStatus
  createdAt: string
}
