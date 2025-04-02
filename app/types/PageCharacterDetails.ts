import type { AsyncDataRequestStatus, NuxtError } from '#app'

export interface CharacterDetails {
  name: string
  images: PageCharacterPicture[]
  fields: PageCharacterField[]
}

export interface PageCharacterField {
  label: string
  value: string | number
}

export interface PageCharacterPicture {
  alt: string
  url: string
}

export interface PageCharacterHandlerResponse {
  status: Ref<AsyncDataRequestStatus>
  data: ComputedRef<CharacterDetails | undefined>
  error: Ref<NuxtError | undefined>
}
