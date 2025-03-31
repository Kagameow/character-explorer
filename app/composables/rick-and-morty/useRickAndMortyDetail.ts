import type { RickAndMortyCharacter } from '~/composables/rick-and-morty/types'
import type { CharacterDetails } from '~/types/PageCharacterId'

export async function useRickAndMortyDetail(id: string) {
  const { data: responseData, status, error }
    = await useRickAndMortyData(`character/${id}/`)

  const transformGetAllResults = (data: RickAndMortyCharacter): CharacterDetails => {
    return {
      name: data.name,
      images: [
        {
          alt: 'Main Image',
          url: data.image,
        },
      ],
      fields: [
        {
          label: 'Gender',
          value: data.gender,
        },
        {
          label: 'Status',
          value: data.status,
        },
        {
          label: 'Species',
          value: data.species,
        },
        {
          label: 'Origin',
          value: data.origin.name,
        },
        {
          label: 'Current Location',
          value: data.location.name,
        },
      ],
    }
  }

  const homogenizedData = computed(() => {
    if (status.value === 'success') {
      return transformGetAllResults(responseData.value as RickAndMortyCharacter)
    }
    return {}
  })

  return {
    status,
    data: homogenizedData,
    error,
  }
}
