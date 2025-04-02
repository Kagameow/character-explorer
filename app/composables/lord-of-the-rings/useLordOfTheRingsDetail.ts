import type { LotrCharactersApiResponse } from '~/composables/lord-of-the-rings/types'
import type { PageCharacterHandlerResponse } from '~/types/PageCharacterId'
import { transformGetByIdResults } from '../../transformers/lord-of-the-rings/lordOfTheRingsDetail.transformer'

export async function useLordOfTheRingsDetail(id: string | number): Promise<PageCharacterHandlerResponse> {
  const { data: responseData, status, error }
    = await useLordOfTheRingsData(`character/${id}/`)

  const homogenizedData = computed(() => {
    if (status.value === 'success') {
      return transformGetByIdResults(responseData.value as LotrCharactersApiResponse | undefined)
    }
    return undefined
  })

  return {
    status,
    data: homogenizedData,
    error,
  }
}
