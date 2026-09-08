import type { NgoApplicationRequest } from '../types/ngo'

export interface MockNgoApplication extends NgoApplicationRequest {
  id: string
  status: 'submitted' | 'approved' | 'rejected'
  createdAt: string
  applicantEmail: string
  applicantName: string
}

const STORAGE_KEY = 'kyro_mock_ngo_applications'
const APPROVED_ORGS_KEY = 'kyro_mock_approved_orgs'

function readApplications(): MockNgoApplication[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as MockNgoApplication[]) : []
  } catch {
    return []
  }
}

function writeApplications(apps: MockNgoApplication[]) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(apps))
}

export function getMockNgoApplications(): MockNgoApplication[] {
  return readApplications()
}

export function submitMockNgoApplication(
  form: NgoApplicationRequest,
  applicant: { email: string; name: string },
): MockNgoApplication {
  const application: MockNgoApplication = {
    ...form,
    id: `ngo-${Date.now()}`,
    status: 'submitted',
    createdAt: new Date().toISOString(),
    applicantEmail: applicant.email,
    applicantName: applicant.name,
  }
  const next = [application, ...readApplications()]
  writeApplications(next)
  return application
}

export function approveMockNgoApplication(id: string): MockNgoApplication | null {
  const apps = readApplications()
  const index = apps.findIndex((app) => app.id === id)
  if (index < 0) {
    return null
  }
  const updated: MockNgoApplication = { ...apps[index], status: 'approved' }
  const next = [...apps.slice(0, index), updated, ...apps.slice(index + 1)]
  writeApplications(next)

  const approved = getApprovedOrgNames()
  const nextNames = new Set(approved)
  nextNames.add(updated.organizationName)
  nextNames.add(updated.applicantName)
  sessionStorage.setItem(APPROVED_ORGS_KEY, JSON.stringify([...nextNames]))

  return updated
}

export function getApprovedOrgNames(): string[] {
  try {
    const raw = sessionStorage.getItem(APPROVED_ORGS_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export function isOrgApproved(organizationName: string): boolean {
  const name = organizationName.trim().toLowerCase()
  return getApprovedOrgNames().some((org) => org.trim().toLowerCase() === name)
}
