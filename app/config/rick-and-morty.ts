import type { UniverseConfig } from '../types/universeConfig'
import { useRickAndMortyDetail } from '../composables/rick-and-morty/useRickAndMortyDetail'
import { useRickAndMortyList } from '../composables/rick-and-morty/useRickAndMortyList'

export const RICK_AND_MORTY_UNIVERSE_KEY = 'rick-and-morty'
export const RICK_AND_MORTY_UNIVERSE_CONFIG: UniverseConfig = {
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
}
