import type { operations } from '#nuxt-api-party/pokemon'
import type { CharacterDetails, PageCharacterPicture } from '~/types/PageCharacterDetails'

type PokemonIdResponse = operations['pokemon_retrieve']['responses']['200']['content']['application/json']

function parsePokemonStats(stats: NonNullable<PokemonIdResponse['stats']>) {
  return stats.map(stat => ({
    label: stat.stat.name,
    value: stat.base_stat,
  }))
}

// Prioritize front-facing sprites — no unsolicited Bulbasaur’s rear shots ( ͡° ͜ʖ ͡°)
function rankSpriteKey(key: string): number {
  const lower = key.toLowerCase()
  if (lower.includes('front'))
    return 0
  if (lower.includes('back'))
    return 1
  return 2
}

function sortSpriteKeys(sprites: NonNullable<PokemonIdResponse>['sprites']) {
  return Object.keys(sprites).sort((a, b) => rankSpriteKey(a) - rankSpriteKey(b))
}

function parsePokemonPictures(
  sprites: NonNullable<PokemonIdResponse>['sprites'],
  prefix = '',
): PageCharacterPicture[] {
  return sortSpriteKeys(sprites).flatMap((key): PageCharacterPicture[] => {
    const value = sprites[key]
    const currentKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string' && value.startsWith('http')) {
      return [{ alt: currentKey, url: value }]
    }
    if (value !== null && typeof value === 'object') {
      return parsePokemonPictures(value, currentKey)
    }
    return []
  })
}

export function transformGetByIdResults(data: PokemonIdResponse | null): CharacterDetails | undefined {
  if (!data) {
    return undefined
  }
  return {
    name: capitalizeFirstLetter(data.name),
    images: parsePokemonPictures(data.sprites),
    fields: [
      {
        label: 'ID',
        value: `#${data.id}`,
      },
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
