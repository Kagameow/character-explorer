import type { AsyncDataRequestStatus, NuxtError } from '#app'

export interface PageCharacterListData {
  total: number
  results: PageCharacterShortInfo[]
}

export interface PageCharacterShortInfo {
  name: string
  id: string
  image: string
  gridViewText?: string
}

export interface PageCharacterListPaginationQuery {
  page?: Ref<number>
  perPage?: Ref<number>
}

export interface PageCharacterListHandlerResponse {
  status: Ref<AsyncDataRequestStatus>
  data: ComputedRef<PageCharacterListData | undefined>
  error: Ref<NuxtError | undefined>
}
