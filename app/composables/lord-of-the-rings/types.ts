export interface LotrCharactersApiResponse {
  docs: LotrCharacter[]
  total: number
  limit: number
  page: number
  pages: number
}

export interface LotrCharacter {
  _id: string
  name: string
  birth: string | null
  death: string | null
  gender: string | null
  hair: string | null
  height: string | null
  race: string | null
  realm: string | null
  spouse: string | null
  wikiUrl: string | null
}
