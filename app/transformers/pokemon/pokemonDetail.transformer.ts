import type { operations } from '#nuxt-api-party/pokemon'
import type { CharacterDetails, PageCharacterPicture } from '~/types/PageCharacterId'

type PokemonIdResponse = operations['pokemon_retrieve']['responses']['200']['content']['application/json']

function parsePokemonStats(stats: NonNullable<PokemonIdResponse['stats']>) {
  return stats.map(stat => ({
    label: stat.stat.name,
    value: stat.base_stat,
  }))
}

function parsePokemonPictures(
  sprites: NonNullable<PokemonIdResponse>['sprites'],
  prefix = '',
): PageCharacterPicture[] {
  let pictures: PageCharacterPicture[] = []

  const keys = Object.keys(sprites).sort((a, b) => {
    const rank = (key: string): number => {
      const lower = key.toLowerCase()
      if (lower.includes('front'))
        return 0
      if (lower.includes('back'))
        return 1
      return 2
    }
    return rank(a) - rank(b)
  })

  for (const key of keys) {
    const value = sprites[key]
    const currentKey = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'string' && value.startsWith('http')) {
      pictures.push({ alt: currentKey, url: value })
    }
    else if (value !== null && typeof value === 'object') {
      pictures = pictures.concat(parsePokemonPictures(value, currentKey))
    }
  }
  return pictures
}

export function transformGetByIdResults(data: PokemonIdResponse | null): CharacterDetails | undefined {
  if (!data) {
    return undefined
  }
  return {
    name: data.name,
    images: parsePokemonPictures(data.sprites),
    fields: [
      {
        label: 'Abilities',
        value: data.abilities.map(ability => ability.ability.name).join(', '),
      },
      {
        label: 'Types',
        value: data.types.map(type => type.type.name).join(', '),
      },
      ...parsePokemonStats(data.stats),
    ],
  }
}
