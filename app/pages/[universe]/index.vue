<script setup lang="ts">
import { PageUniverseViewGrid, PageUniverseViewList } from '#components'
import { KNOWN_UNIVERSES_CONFIG } from '~/constants'

definePageMeta({
  middleware: 'validate-universe',
})

const route = useRoute('universe')
const universeInfo = KNOWN_UNIVERSES_CONFIG.get(route.params.universe)

const page = ref(1)
const perPage = ref(6)
const { status, data, error } = await universeInfo!.handlers.list(perPage, page)
const total = ref(0)

watch(() => data.value, (newData) => {
  if (newData?.total) {
    total.value = newData.total
  }
}, { immediate: true })

const isLoading = computed(() => status.value === 'pending')
const isError = computed(() => status.value === 'error')
const hasData = computed(() => !!data.value && Object.keys(data.value).length)

const viewMode = ref<'list' | 'grid'>('list')
const isListView = computed(() => viewMode.value === 'list')
const isGridView = computed(() => viewMode.value === 'grid')
</script>

<template>
  <UContainer class="py-8">
    <header class="flex items-center justify-between border-b mb-8 py-2 text-xl">
      <h1>
        {{ universeInfo?.name }} characters explorer
      </h1>
      <div class="flex items-center space-x-4">
        <UPagination
          v-model:page="page"
          :per-page="perPage"
          :total="total"
        />
        <UButton
          icon="i-lucide-grid"
          :disabled="isGridView"
          @click="viewMode = 'grid'"
        >
          Grid
        </UButton>
        <UButton
          icon="i-lucide-list"
          :disabled="isListView"
          @click="viewMode = 'list'"
        >
          List
        </UButton>
      </div>
    </header>
    <UProgress v-if="isLoading" />
    <div v-if="isError">
      Error: {{ error?.message }}
    </div>
    <component
      :is="isGridView ? PageUniverseViewGrid : PageUniverseViewList"
      v-if="hasData"
      :characters="data.results || []"
      :universe-route="route.params.universe"
    />
  </UContainer>
</template>
