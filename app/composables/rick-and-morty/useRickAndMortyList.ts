import type { RickAndMortyCharactersApiResponse } from '~/composables/rick-and-morty/types'
import type {
  PageCharacterListHandlerResponse,
} from '~/types/PageCharacterList'
import { transformGetAllResults } from '../../transformers/rick-and-morty/rickAndMortyList.transformer'

export async function useRickAndMortyList(perPage: Ref<number>, page: Ref<number>): Promise<PageCharacterListHandlerResponse> {
  const query = computed(() => ({
    page: page.value,
  }))

  const { data: responseData, status, error }
    = await useRickAndMortyData(
      'character',
      {
        query,
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
