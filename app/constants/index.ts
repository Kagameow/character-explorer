import { usePokemonDetail } from '../composables/usePokemonDetail'
import { usePokemonList } from '../composables/usePokemonList'

export const appName = 'Universe Explorer'
export const appDescription = 'Great app to explore different universes.'

export const KNOWN_UNIVERSES_CONFIG = new Map<string, {
  name: string
  description: string
  handlers: any
}>(
  [
    [
      'rick-and-morty',
      {
        name: 'Rick and Morty',
        description: 'Explore the universe of Rick and Morty.',
        handlers: {
          list: usePokemonList,
          details: usePokemonDetail,
        },
      },
    ],
    [
      'pokemon',
      {
        name: 'Pokemon',
        description: 'Explore the world of Pokemon.',
        handlers: {
          list: usePokemonList,
          details: usePokemonDetail,
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
