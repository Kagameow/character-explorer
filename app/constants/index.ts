import { usePokemonDetail } from '../composables/pokemon/usePokemonDetail'
import { usePokemonList } from '../composables/pokemon/usePokemonList'
import { useRickAndMortyDetail } from '../composables/rick-and-morty/useRickAndMortyDetail'
import { useRickAndMortyList } from '../composables/rick-and-morty/useRickAndMortyList'

export const appName = 'Universe Explorer'
export const appDescription = 'Great app to explore different universes.'

export const KNOWN_UNIVERSES_CONFIG = new Map<string, {
  name: string
  logo?: string
  description: string
  handlers: any
  defaultQueryParams?: {
    page: number
    perPage?: number
  }
}>(
  [
    [
      'rick-and-morty',
      {
        name: 'Rick and Morty',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg',
        description: 'Explore the universe of Rick and Morty.',
        handlers: {
          list: useRickAndMortyList,
          details: useRickAndMortyDetail,
        },
        defaultQueryParams: {
          page: 1,
          perPage: 20,
        },
      },
    ],
    [
      'pokemon',
      {
        name: 'Pokemon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg',
        description: 'Explore the world of Pokemon.',
        handlers: {
          list: usePokemonList,
          details: usePokemonDetail,
        },
        defaultQueryParams: {
          page: 1,
          perPage: 18,
        },
      },
    ],
    [
      'nature-animals',
      {
        name: 'Nature Animals',
        description: 'Explore the world of nature and animals.',
        handlers: {
          list: usePokemonList,
          details: usePokemonDetail,
        },
      },
    ],
  ],
)

export const KNOWN_UNIVERSES = Array.from(KNOWN_UNIVERSES_CONFIG.keys())
