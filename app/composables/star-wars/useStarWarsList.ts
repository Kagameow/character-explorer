import type { StarWarsCharactersApiResponse } from '~/composables/star-wars/types'
import type { PageCharacterListHandlerResponse, PageCharacterListPaginationQuery } from '~/types/PageCharacterList'
import { transformGetAllResults } from '../../transformers/star-wars/starWarsList.transformer'

export async function useStarWarsList(queryData: PageCharacterListPaginationQuery): Promise<PageCharacterListHandlerResponse> {
  const query = computed(() => ({
    page: queryData.page!.value,
  }))

  const { data: responseData, status, error } = await useStarWarsData('/people', {
    query,
    lazy: true,
  })

  const homogenizedData = computed(() => {
    if (status.value === 'success') {
      return transformGetAllResults(responseData.value as StarWarsCharactersApiResponse | undefined)
    }
    return undefined
  })

  return {
    status,
    data: homogenizedData,
    error,
  }
}
