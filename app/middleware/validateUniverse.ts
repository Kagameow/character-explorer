import { createError, defineNuxtRouteMiddleware } from '#app'
import { KNOWN_UNIVERSES } from '~/constants'

interface RouteParams {
  universe?: typeof KNOWN_UNIVERSES[number] | string
  id?: string
}

export default defineNuxtRouteMiddleware((to) => {
  const params = to.params as RouteParams
  const universe = params.universe
  if (typeof universe === 'string' && !KNOWN_UNIVERSES.includes(universe)) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Universe not found',
    })
  }

  return true
})
