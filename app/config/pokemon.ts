import type { UniverseConfig } from '../types/universeConfig'
import { usePokemonDetail } from '../composables/pokemon/usePokemonDetail'
import { usePokemonList } from '../composables/pokemon/usePokemonList'

export const POKEMON_UNIVERSE_KEY = 'pokemon'
export const POKEMON_UNIVERSE_CONFIG: UniverseConfig = {
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
}
