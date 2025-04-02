import { createError, defineNuxtRouteMiddleware } from '#app'
import { ALLOWED_UNIVERSES_KEYS } from '~/config/universes'

interface RouteParams {
  universe?: typeof ALLOWED_UNIVERSES_KEYS[number] | string
  id?: string
}

export default defineNuxtRouteMiddleware((to) => {
  const params = to.params as RouteParams
  const universe = params.universe
  if (typeof universe === 'string' && !ALLOWED_UNIVERSES_KEYS.includes(universe)) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Universe not found',
    })
  }

  return true
})
