import type { UniverseConfig } from '../types/universeConfig'
import { process } from 'std-env'
import { useLordOfTheRingsDetail } from '../composables/lord-of-the-rings/useLordOfTheRingsDetail'
import { useLordOfTheRingsList } from '../composables/lord-of-the-rings/useLordOfTheRingsList'

export const LORD_OF_THE_RINGS_UNIVERSE_KEY = 'lord-of-the-rings'
export const LORD_OF_THE_RINGS_UNIVERSE_CONFIG: UniverseConfig = {
  name: 'Lord of the Rings',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/El_Se%C3%B1or_de_los_Anillos_lectura.jpg/320px-El_Se%C3%B1or_de_los_Anillos_lectura.jpg',
  icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/One_Ring_Blender_Render.png/64px-One_Ring_Blender_Render.png',
  description: 'Explore the world of Lord of the Rings.',
  handlers: {
    list: useLordOfTheRingsList,
    details: useLordOfTheRingsDetail,
  },
  defaultQueryParams: {
    page: 1,
    perPage: 18,
  },
  apiPartyEndpoint: {
    url: 'https://the-one-api.dev/v2',
    token: process.env.NUXT_PUBLIC_API_PARTY_LOTR_TOKEN,
  },
}
