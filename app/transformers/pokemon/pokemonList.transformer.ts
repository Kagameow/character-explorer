import type { operations } from '#nuxt-api-party/pokemon'
import type { PageCharacterListData, PageCharacterListPaginationQuery } from '~/types/PageCharacterList'

export function prepareQuery(query: PageCharacterListPaginationQuery) {
  return {
    limit: query.perPage!.value,
    offset: ((query.page!.value ?? 1) - 1) * query.perPage!.value,
  }
}

// Okay, I know it's kinda weird, but this is much more fun than using type 'any' (=^･^=)
type PokemonListResponse = operations['pokemon_list']['responses']['200']['content']['application/json']

function extractPokemonIdFromUrl(url: string) {
  const regex = /\/(\d+)\//
  const match = url.match(regex)
  return match ? match[1] : null
}

// I don't like the idea of hardcoding links like this, but other option is to make multiple requests
function generatePokemonImageUrl(id: string) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

export function transformGetAllResults(data: PokemonListResponse | null): PageCharacterListData | undefined {
  if (!data || !data.results || !data.count) {
    return undefined
  }
  return {
    total: data.count,
    results: data.results.map((item) => {
      const id = extractPokemonIdFromUrl(item.url) ?? '1'
      return {
        name: item.name,
        id,
        image: generatePokemonImageUrl(id),
        gridViewText: `ID: #${id}`,
      }
    }),
  }
}
