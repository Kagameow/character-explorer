import type { PageCharacterListViewMode } from '~/types/PageCharacterList'
import { useCookie, useRoute, useRouter } from 'nuxt/app'

export async function useStoreViewMode(universeKey: string) {
  const route = useRoute()
  const router = useRouter()

  const viewModeCookie = useCookie<PageCharacterListViewMode>(`${universeKey}-view-mode`, {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    default: () => 'grid',
  })

  const viewMode = ref<PageCharacterListViewMode>(
    route.query.view as PageCharacterListViewMode || viewModeCookie.value,
  )

  watch(viewMode, async (newValue) => {
    viewModeCookie.value = newValue
    const query = { ...route.query, view: newValue }
    await router.replace({ query })
  })

  if (!route.query.view) {
    await router.replace({
      query: {
        ...route.query,
        view: viewMode.value,
      },
    })
  }

  return {
    viewMode,
  }
}
