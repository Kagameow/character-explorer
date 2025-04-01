import type { RickAndMortyCharactersApiResponse } from '~/composables/rick-and-morty/types'
import type { PageCharacterListData, PageCharacterShortInfo } from '~/types/PageCharacterList'

export function transformGetAllResults(data: RickAndMortyCharactersApiResponse | undefined): PageCharacterListData | undefined {
  if (!data) {
    return undefined
  }
  return {
    total: data.info.count,
    results: data.results.map((item): PageCharacterShortInfo => {
      return {
        name: item.name,
        id: item.id.toString(),
        image: item.image,
        gridViewText: `Status: ${item.status}`,
      }
    }),
  }
}
