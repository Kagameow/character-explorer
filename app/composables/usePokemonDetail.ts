export function usePokemonDetail(id: string) {
  const { data: responseData, status, error }
    = usePokemonData(`/api/v2/pokemon/${id}/` as `/api/v2/pokemon/{id}/`)

  const transformGetAllResults = (data: typeof responseData.value) => {
    if (!data) {
      return {}
    }
    return data
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
  }
}
