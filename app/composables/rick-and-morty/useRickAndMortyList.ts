import type { RickAndMortyCharactersApiResponse } from '~/composables/rick-and-morty/types'
import type {
  PageCharacterListHandlerResponse,
  PageCharacterListPaginationQuery,
} from '~/types/PageCharacterList'
import { transformGetAllResults } from '../../transformers/rick-and-morty/rickAndMortyList.transformer'

export async function useRickAndMortyList(queryData: PageCharacterListPaginationQuery): Promise<PageCharacterListHandlerResponse> {
  const query = computed(() => ({
    page: queryData.page?.value ?? 1,
  }))

  const { data: responseData, status, error }
    = await useRickAndMortyData(
      'character',
      {
        query,
        lazy: true,
        /*
        Had to set cache to false because of a bug in nuxt-api-party
        https://github.com/johannschopplich/nuxt-api-party/issues/91
         */
        cache: false,
      },
    )

  const homogenizedData = computed(() => {
    if (status.value === 'success') {
      return transformGetAllResults(responseData.value as RickAndMortyCharactersApiResponse | undefined)
    }
    return undefined
  })

  return {
    status,
    data: homogenizedData,
    error,
  }
}
