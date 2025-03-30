import type { RouteParams } from '~/middleware/types'
import { createError, defineNuxtRouteMiddleware } from '#app'
import { KNOWN_UNIVERSES } from '~/constants'

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
