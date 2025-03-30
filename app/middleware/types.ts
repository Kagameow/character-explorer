import type { KNOWN_UNIVERSES } from '~/constants'

export interface RouteParams {
  universe?: typeof KNOWN_UNIVERSES[number] | string
  id?: string
}
