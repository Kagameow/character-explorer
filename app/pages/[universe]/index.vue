<script setup lang="ts">
import type { PageCharacterListHandlerResponse } from '~/types/PageCharacterList'
import { PageUniverseViewGrid, PageUniverseViewList } from '#components'
import { KNOWN_UNIVERSES_CONFIG } from '~/config/universes'

definePageMeta({
  middleware: 'validate-universe',
})

const route = useRoute('universe')
const universeInfo = KNOWN_UNIVERSES_CONFIG.get(route.params.universe)
const { viewMode } = await useStoreViewMode(route.params.universe)

const defaultPage = universeInfo?.defaultQueryParams?.page || 1
const perPage = ref(universeInfo?.defaultQueryParams?.perPage || 20)
const { page } = await useQueryPagination(defaultPage)

const { status, data, error } = await universeInfo!.handlers.list(perPage, page) as PageCharacterListHandlerResponse
const total = ref(0)

watch(() => data.value, (newData) => {
  if (newData?.total) {
    total.value = newData.total
  }
}, { immediate: true })

const isLoading = computed(() => status.value === 'pending')
const isError = computed(() => status.value === 'error')
const hasData = computed(() => !!data.value && Object.keys(data.value).length)

const pageUniverseViewComponent = computed(() => {
  return viewMode.value === 'grid' ? PageUniverseViewGrid : PageUniverseViewList
})
</script>

<template>
  <UContainer class="py-8">
    <header class="flex items-center justify-between border-b mb-8 py-2 text-xl">
      <h1>
        {{ universeInfo?.name }} characters
      </h1>
      <div class="flex items-center space-x-4">
        <UPagination
          v-model:page="page"
          :items-per-page="perPage"
          :total="total"
        />
        <PageUniverseViewSelect v-model="viewMode" />
      </div>
    </header>
    <UProgress v-if="isLoading" />
    <UAlert
      v-if="isError"
      title="Failed to load characters list"
      :description="error!.message"
    />
    <component
      :is="pageUniverseViewComponent"
      v-if="hasData"
      :characters="data?.results || []"
      :universe="route.params.universe"
    />
  </UContainer>
</template>
