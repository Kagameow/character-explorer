import type { LotrCharactersApiResponse } from '~/composables/lord-of-the-rings/types'
import type {
  PageCharacterListHandlerResponse,
} from '~/types/PageCharacterList'
import { transformGetAllResults } from '../../transformers/lord-of-the-rings/lordOfTheRingsList.transformer'

export async function useLordOfTheRingsList(perPage: Ref<number>, page: Ref<number>): Promise<PageCharacterListHandlerResponse> {
  const query = computed(() => ({
    page: page.value,
    limit: perPage.value,
  }))

  const { data: responseData, status, error }
    = await useLordOfTheRingsData(
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
      return transformGetAllResults(responseData.value as LotrCharactersApiResponse | undefined)
    }
    return undefined
  })

  return {
    status,
    data: homogenizedData,
    error,
  }
}
