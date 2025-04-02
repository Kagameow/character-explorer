<script setup lang="ts">
import type { BreadcrumbItem } from '#ui/components/Breadcrumb.vue'
import type { PageCharacterHandlerResponse } from '~/types/PageCharacterDetails'
import { KNOWN_UNIVERSES_CONFIG } from '~/config/universes'

definePageMeta({
  middleware: 'validate-universe',
})

const route = useRoute('universe-id')
const universeInfo = KNOWN_UNIVERSES_CONFIG.get(route.params.universe)

const { status, data, error } = await universeInfo!.handlers.details(route.params.id) as PageCharacterHandlerResponse

const isLoading = computed(() => status.value === 'pending')
const isError = computed(() => status.value === 'error')
const hasData = computed(() => !!data.value && Object.keys(data.value).length)

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', to: '/' },
  { label: universeInfo?.name, to: { name: 'universe', params: { universe: route.params.universe } } },
  { label: data.value?.name || route.params.id },
]
</script>

<template>
  <UContainer class="py-8">
    <UBreadcrumb
      :items="breadcrumbItems"
      class="mb-4"
    />
    <UProgress v-if="isLoading" />
    <PageCharacterDetailView
      v-if="hasData"
      :character="data!"
    />
    <UAlert
      v-if="isError"
      title="Something went wrong"
      :description="error!.message"
    />
  </UContainer>
</template>
