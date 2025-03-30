export async function usePokemonList(perPage: Ref<number>, page: Ref<number>) {
  const query = computed(() => ({
    limit: perPage.value,
    offset: ((page.value ?? 1) - 1) * perPage.value,
  }))

  const { data: responseData, status, error, clear }
    = await usePokemonData(
      '/api/v2/pokemon/',
      {
        query,
        cache: false,
      },
    )

  const extractPokemonIdFromUrl = (url: string) => {
    const regex = /\/(\d+)\//
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const generatePokemonImageUrl = (id: string) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }

  const transformGetAllResults = (data: typeof responseData.value) => {
    if (!data || !data.results) {
      return {}
    }
    return {
      total: data.count,
      results: data.results.map((item) => {
        const id = extractPokemonIdFromUrl(item.url) ?? '1'
        return {
          name: item.name,
          id,
          image: generatePokemonImageUrl(id),
        }
      }),
    }
  }

  const homogenizedData = computed(() => {
    if (status.value === 'success') {
      return transformGetAllResults(responseData.value)
    }
    return {}
  })

  return {
    status,
    data: homogenizedData,
    error,
    clear,
  }
}
