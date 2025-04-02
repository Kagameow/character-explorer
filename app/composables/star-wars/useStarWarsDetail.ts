import type { StarWarsCharacter } from '~/composables/star-wars/types'
import type { PageCharacterHandlerResponse } from '~/types/PageCharacterDetails'
import { transformGetByIdResults } from '../../transformers/star-wars/starWarsDetail.transformer'

export async function useStarWarsDetail(id: string | number): Promise<PageCharacterHandlerResponse> {
  const { data: responseData, status, error }
    = await useStarWarsData(`/people/${id}/`)

  const homogenizedData = computed(() => {
    if (status.value === 'success') {
      return transformGetByIdResults(responseData.value as StarWarsCharacter | undefined, id)
    }
    return undefined
  })

  return {
    status,
    data: homogenizedData,
    error,
  }
}
