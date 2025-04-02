import type { UniverseConfig } from '../types/universeConfig'
import { useStarWarsDetail } from '../composables/star-wars/useStarWarsDetail'
import { useStarWarsList } from '../composables/star-wars/useStarWarsList'

export const STAR_WARS_UNIVERSE_KEY = 'star-wars'

export const STAR_WARS_UNIVERSE_CONFIG: UniverseConfig = {
  name: 'Star Wars',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg',
  icon: 'https://upload.wikimedia.org/wikipedia/commons/2/22/StormtrooperHelmetIcon.svg',
  description: 'Explore the galaxy far, far away.',
  handlers: {
    list: useStarWarsList,
    details: useStarWarsDetail,
  },
  defaultQueryParams: {
    page: 1,
    perPage: 10,
  },
  apiPartyEndpoint: {
    url: 'https://swapi.dev/api',
  },
}
