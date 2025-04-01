import type { PageCharacterHandlerResponse } from '~/types/PageCharacterId'
import { transformGetByIdResults } from '../../transformers/pokemon/pokemonDetail.transformer'

export async function usePokemonDetail(id: string | number): Promise<PageCharacterHandlerResponse> {
  const { data: responseData, status, error }
    = await usePokemonData(`/api/v2/pokemon/${id}/` as `/api/v2/pokemon/{id}/`)

  const homogenizedData = computed(() => {
    if (status.value === 'success') {
      return transformGetByIdResults(responseData.value)
    }
    return undefined
  })

  return {
    status,
    data: homogenizedData,
    error,
  }
}
