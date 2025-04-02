import type { ModuleOptions } from 'nuxt-api-party'
import type { PageCharacterHandlerResponse } from './PageCharacterDetails'
import type { PageCharacterListHandlerResponse } from './PageCharacterList'

type EndpointConfiguration = NonNullable<ModuleOptions['endpoints']>[string]

interface UniverseHandlers {
  list: (perPage: Ref<number>, page: Ref<number>) => Promise<PageCharacterListHandlerResponse>
  details: (id: string | number) => Promise<PageCharacterHandlerResponse>
}

export interface UniverseConfig {
  name: string
  logo?: string
  icon?: string
  description: string
  handlers: UniverseHandlers
  defaultQueryParams?: {
    page: number
    perPage?: number
  }
  apiPartyEndpoint?: EndpointConfiguration
}
