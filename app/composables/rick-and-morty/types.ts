export interface RickAndMortyPageInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface RickAndMortyLocationInfo {
  name: string
  url: string
}

export interface RickAndMortyCharacter {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string | ''
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: RickAndMortyLocationInfo
  location: RickAndMortyLocationInfo
  image: string
  episode: string[]
  url: string
  created: string
}

export interface RickAndMortyCharactersApiResponse {
  info: RickAndMortyPageInfo
  results: RickAndMortyCharacter[]
}
