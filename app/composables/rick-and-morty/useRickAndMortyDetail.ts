import type { RickAndMortyCharacter } from '~/composables/rick-and-morty/types'
import type { PageCharacterHandlerResponse } from '~/types/PageCharacterId'
import { transformGetByIdResults } from '~/transformers/rick-and-morty/rickAndMortyDetail.transformer'

export async function useRickAndMortyDetail(id: string | number): Promise<PageCharacterHandlerResponse> {
  const { data: responseData, status, error }
    = await useRickAndMortyData(`character/${id}/`)

  const homogenizedData = computed(() => {
    if (status.value === 'success') {
      return transformGetByIdResults(responseData.value as RickAndMortyCharacter | undefined)
    }
    return undefined
  })

  return {
    status,
    data: homogenizedData,
    error,
  }
}
