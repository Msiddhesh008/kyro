export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${String(value)}`)
}

export { formatINR, getProgressPercent } from './format'
