export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getProgressPercent(raised: number, goal: number): number {
  if (goal <= 0) {
    return 0
  }
  return Math.min(100, Math.round((raised / goal) * 100))
}

export function getOrganizerInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) {
    return '?'
  }
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase()
  }
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

/** Days remaining until endsAt (UTC date). Returns 0 if ended or missing. */
export function getDaysLeft(endsAt?: string): number {
  if (!endsAt) {
    return 0
  }
  const end = new Date(`${endsAt}T23:59:59`)
  if (Number.isNaN(end.getTime())) {
    return 0
  }
  const ms = end.getTime() - Date.now()
  if (ms <= 0) {
    return 0
  }
  return Math.ceil(ms / (1000 * 60 * 60 * 24))
}
