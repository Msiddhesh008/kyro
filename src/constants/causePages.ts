export type {
  CauseSlug,
  CauseSection,
  CausePageContent,
} from './causePagesContent'
export { CAUSE_PAGES } from './causePagesContent'

import { CAUSE_PAGES } from './causePagesContent'
import type { CauseSlug } from './causePagesContent'

export const CAUSE_SLUGS = Object.keys(CAUSE_PAGES) as CauseSlug[]

export function isCauseSlug(value: string): value is CauseSlug {
  return value in CAUSE_PAGES
}
