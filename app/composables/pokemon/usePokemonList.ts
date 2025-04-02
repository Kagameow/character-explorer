import type { PageCharacterListHandlerResponse } from '~/types/PageCharacterList'
import { transformGetAllResults } from '../../transformers/pokemon/pokemonList.transformer'

export async function usePokemonList(perPage: Ref<number>, page: Ref<number>): Promise<PageCharacterListHandlerResponse> {
  const query = computed(() => ({
    limit: perPage.value,
    offset: ((page.value ?? 1) - 1) * perPage.value,
  }))

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
