import type { RickAndMortyCharactersApiResponse } from '~/composables/rick-and-morty/types'

export async function useRickAndMortyList(perPage: Ref<number>, page: Ref<number>) {
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

  const transformGetAllResults = (data: RickAndMortyCharactersApiResponse | undefined) => {
    if (!data || !data.results) {
      return {}
    }
    return {
      total: data.info.count,
      results: data.results.map((item) => {
        return {
          name: item.name,
          id: item.id,
          image: item.image,
        }
      }),
    }
  }

  const homogenizedData = computed(() => {
    if (status.value === 'success') {
      return transformGetAllResults(responseData.value as RickAndMortyCharactersApiResponse | undefined)
    }
    return {}
  })

  return {
    status,
    data: homogenizedData,
    error,
  }
}
