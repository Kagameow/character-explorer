import type { ModuleOptions } from 'nuxt-api-party'
import { process } from 'std-env'
import { useLordOfTheRingsDetail } from '../composables/lord-of-the-rings/useLordOfTheRingsDetail'
import { useLordOfTheRingsList } from '../composables/lord-of-the-rings/useLordOfTheRingsList'
import { usePokemonDetail } from '../composables/pokemon/usePokemonDetail'
import { usePokemonList } from '../composables/pokemon/usePokemonList'
import { useRickAndMortyDetail } from '../composables/rick-and-morty/useRickAndMortyDetail'
import { useRickAndMortyList } from '../composables/rick-and-morty/useRickAndMortyList'

export const appName = 'Universe Explorer'
export const appDescription = 'Great app to explore different universes.'

type EndpointConfiguration = NonNullable<ModuleOptions['endpoints']>[string]

export const KNOWN_UNIVERSES_CONFIG = new Map<string, {
  name: string
  logo?: string
  icon?: string
  description: string
  handlers: any
  defaultQueryParams?: {
    page: number
    perPage?: number
  }
  apiPartyEndpoint?: EndpointConfiguration
}>(
  [
    [
      'rick-and-morty',
      {
        name: 'Rick and Morty',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg',
        icon: 'https://static.wikia.nocookie.net/rickandmorty/images/4/4a/Site-favicon.ico',
        description: 'Explore the universe of Rick and Morty.',
        handlers: {
          list: useRickAndMortyList,
          details: useRickAndMortyDetail,
        },
        defaultQueryParams: {
          page: 1,
          perPage: 20,
        },
        apiPartyEndpoint: {
          url: 'https://rickandmortyapi.com/api',
        },
      },
    ],
    [
      'pokemon',
      {
        name: 'Pokemon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg',
        description: 'Explore the world of Pokemon.',
        handlers: {
          list: usePokemonList,
          details: usePokemonDetail,
        },
        defaultQueryParams: {
          page: 1,
          perPage: 18,
        },
        apiPartyEndpoint: {
          url: 'https://pokeapi.co',
          schema: 'https://raw.githubusercontent.com/PokeAPI/pokeapi/refs/heads/master/openapi.yml',
        },
      },
    ],
    [
      'lord-of-the-rings',
      {
        name: 'Lord of the Rings',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/El_Se%C3%B1or_de_los_Anillos_lectura.jpg/320px-El_Se%C3%B1or_de_los_Anillos_lectura.jpg',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/One_Ring_Blender_Render.png/64px-One_Ring_Blender_Render.png',
        description: 'Explore the world of Lord of the Rings.',
        handlers: {
          list: useLordOfTheRingsList,
          details: useLordOfTheRingsDetail,
        },
        defaultQueryParams: {
          page: 1,
          perPage: 18,
        },
        apiPartyEndpoint: {
          url: 'https://the-one-api.dev/v2',
          token: process.env.NUXT_PUBLIC_API_PARTY_LOTR_TOKEN,
        },
      },
    ],
  ],
)

export const KNOWN_UNIVERSES = Array.from(KNOWN_UNIVERSES_CONFIG.keys())

export const API_PARTY_ENDPOINTS = Object.fromEntries(
  Array.from(KNOWN_UNIVERSES_CONFIG.entries())
    .filter(([_, config]) => config.apiPartyEndpoint)
    .map(([key, config]) => [key, config.apiPartyEndpoint!]),
) as Record<string, EndpointConfiguration>
