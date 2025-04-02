import type { RickAndMortyCharacter } from '~/composables/rick-and-morty/types'
import type { CharacterDetails } from '~/types/PageCharacterDetails'

export function transformGetByIdResults(data: RickAndMortyCharacter | undefined): CharacterDetails | undefined {
  if (!data) {
    return undefined
  }
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
        label: 'Type',
        value: data.type || 'Unknown',
      },
      {
        label: 'Episode Count',
        value: data.episode.length,
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
