import type { CharacterDetails } from '~/types/PageCharacterId'

export function usePokemonDetail(id: string) {
  const { data: responseData, status, error }
    = usePokemonData(`/api/v2/pokemon/${id}/` as `/api/v2/pokemon/{id}/`)

  const parsePokemonStats = (stats: NonNullable<typeof responseData.value>['stats']) => {
    return stats.map(stat => ({
      label: stat.stat.name,
      value: stat.base_stat,
    }))
  }

  interface SpritePicture {
    alt: string
    url: string
  }

  function parsePokemonPictures(
    sprites: NonNullable<typeof responseData.value>['sprites'],
    prefix = '',
  ): SpritePicture[] {
    let pictures: SpritePicture[] = []

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
      // Build the current key path
      const currentKey = prefix ? `${prefix}.${key}` : key
      if (typeof value === 'string' && value.startsWith('http')) {
        pictures.push({ alt: currentKey, url: value })
      }
      else if (value !== null && typeof value === 'object') {
        // Recursively process nested objects; at this level the keys will be sorted
        pictures = pictures.concat(parsePokemonPictures(value, currentKey))
      }
    }
    return pictures
  }

  const transformGetAllResults = (data: typeof responseData.value) => {
    if (!data) {
      return {}
    }
    const filteredPokemonData: CharacterDetails = {
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
    return filteredPokemonData
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
