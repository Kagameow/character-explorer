import { useRoute, useRouter } from 'nuxt/app'

export async function useQueryPagination(initialPage = 1) {
  const route = useRoute()
  const router = useRouter()

  const currentPage = ref<number>(
    route.query.page ? Number.parseInt(route.query.page as string) : initialPage,
  )

  watch(currentPage, async (newValue) => {
    const query = { ...route.query, page: newValue.toString() }
    await router.replace({ query })
  })

  if (!route.query.page) {
    await router.replace({
      query: {
        ...route.query,
        page: currentPage.value.toString(),
      },
    })
  }

  return {
    page: currentPage,
  }
}
