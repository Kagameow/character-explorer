import type { StarWarsCharacter } from '~/composables/star-wars/types'
import type { CharacterDetails } from '~/types/PageCharacterDetails'

export function transformGetByIdResults(character: StarWarsCharacter | undefined, id: string | number): CharacterDetails | undefined {
  if (!character) {
    return undefined
  }

  return {
    name: character.name,
    images: [
      {
        alt: character.name,
        url: `https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/refs/heads/main/static/assets/img/people/${id}.jpg`,
      },
    ],
    fields: [
      { label: 'Birth Year', value: character.birth_year },
      { label: 'Gender', value: character.gender },
      { label: 'Height', value: character.height },
      { label: 'Mass', value: character.mass },
      { label: 'Hair Color', value: character.hair_color },
      { label: 'Skin Color', value: character.skin_color },
      { label: 'Eye Color', value: character.eye_color },
    ],
  }
}
