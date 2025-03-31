export interface CharacterDetails {
  name: string
  images: CharacterPicture[]
  fields: CharacterField[]
}

export interface CharacterField {
  label: string
  value: string | number
}

export interface CharacterPicture {
  alt: string
  url: string
}
