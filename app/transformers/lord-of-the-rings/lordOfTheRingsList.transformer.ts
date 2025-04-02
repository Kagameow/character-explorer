import type { LotrCharactersApiResponse } from '~/composables/lord-of-the-rings/types'
import type { PageCharacterListData } from '~/types/PageCharacterList'

export function transformGetAllResults(data: LotrCharactersApiResponse | undefined): PageCharacterListData | undefined {
  if (!data) {
    return undefined
  }
  return {
    total: data.total,
    results: data.docs.map(character => ({
      id: character._id,
      name: character.name,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(character.name)}&background=random&size=256`,
      gridViewText: character.race ?? 'Unknown Race',
    })),
  }
}
