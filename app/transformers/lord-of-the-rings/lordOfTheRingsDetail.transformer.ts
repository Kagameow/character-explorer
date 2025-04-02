import type { LotrCharactersApiResponse } from '~/composables/lord-of-the-rings/types'
import type { CharacterDetails } from '~/types/PageCharacterId'

export function transformGetByIdResults(data: LotrCharactersApiResponse | undefined): CharacterDetails | undefined {
  const character = data?.docs?.[0]
  if (!character) {
    return undefined
  }
  return {
    name: character.name,
    images: [
      {
        alt: character.name,
        url: `https://ui-avatars.com/api/?name=${encodeURIComponent(character.name)}&background=random&size=256`,
      },
    ],
    fields: [
      {
        label: 'Gender',
        value: character.gender ?? 'Unknown',
      },
      {
        label: 'Race',
        value: character.race ?? 'Unknown',
      },
      {
        label: 'Spouse',
        value: character.spouse ?? 'None',
      },
      {
        label: 'Birth',
        value: character.birth ?? 'Unknown',
      },
      {
        label: 'Death',
        value: character.death ?? 'Unknown',
      },
      {
        label: 'Realm',
        value: character.realm ?? 'Unknown',
      },
    ],
  }
}
