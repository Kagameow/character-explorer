import type { NavigationLink } from '~/types'
import { KNOWN_UNIVERSES_CONFIG } from '~/config/universes'

const universesLinks: NavigationLink[] = Array.from(KNOWN_UNIVERSES_CONFIG.entries())
  .map(([key, universe]) => ({
    to: `/${key}`,
    avatar: universe.icon
      ? {
          src: universe.icon,
        }
      : undefined,
    label: universe.name,
  }))

export const HEADER_LINKS = [
  {
    to: '/',
    icon: 'i-lucide-home',
  },
  ...universesLinks,
]
