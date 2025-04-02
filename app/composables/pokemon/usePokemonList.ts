import type { PageCharacterListHandlerResponse, PageCharacterListPaginationQuery } from '~/types/PageCharacterList'
import { prepareQuery, transformGetAllResults } from '../../transformers/pokemon/pokemonList.transformer'

export async function usePokemonList(queryData: PageCharacterListPaginationQuery): Promise<PageCharacterListHandlerResponse> {
  const query = computed(() => prepareQuery(queryData))

  const { data: responseData, status, error }
    = await usePokemonData(
      '/api/v2/pokemon/',
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
      return transformGetAllResults(responseData.value)
    }
    return undefined
  })

  return {
    status,
    data: homogenizedData,
    error,
  }
}
