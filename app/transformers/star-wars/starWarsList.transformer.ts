import type { StarWarsCharacter, StarWarsCharactersApiResponse } from '~/composables/star-wars/types'
import type { PageCharacterListData, PageCharacterShortInfo } from '~/types/PageCharacterList'

export function transformGetAllResults(response: StarWarsCharactersApiResponse | undefined): PageCharacterListData | undefined {
  if (!response || !response.results) {
    return undefined
  }

  function extractIdFromUrl(url: string): string | undefined {
    const match = url.match(/\/people\/(\d+)\//)
    return match ? match[1] : ''
  }

  return {
    total: response.count,
    results: response.results.map((character: StarWarsCharacter): PageCharacterShortInfo => {
      const id = extractIdFromUrl(character.url) ?? '1'
      return {
        id,
        name: character.name,
        // Api doesn't provide image, but some nice person made a collection of images with matching ids
        image: `https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/refs/heads/main/static/assets/img/people/${id}.jpg`,
        gridViewText: `Gender: ${character.gender}`,
      }
    }),
  }
}
