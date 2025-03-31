<script setup lang="ts">
import type { CharacterPicture } from '~/types/PageCharacterId'
import { KNOWN_UNIVERSES_CONFIG } from '~/constants'

definePageMeta({
  middleware: 'validate-universe',
})

const route = useRoute('universe-id')
const universeInfo = KNOWN_UNIVERSES_CONFIG.get(route.params.universe)

const { status, data, error } = await universeInfo!.handlers.details(route.params.id)

const isLoading = computed(() => status.value === 'pending')
const isError = computed(() => status.value === 'error')
const hasData = computed(() => !!data.value && Object.keys(data.value).length)
</script>

<template>
  <UContainer class="py-8">
    <UBreadcrumb
      :items="[
        { label: 'Home', to: '/' },
        { label: universeInfo?.name, to: { name: 'universe', params: { universe: route.params.universe } } },
        { label: data?.name || route.params.id },
      ]"
      class="mb-4"
    />
    <UCard v-if="hasData">
      <template #header>
        <h2 class="text-xl font-semibold">
          Character Details
        </h2>
      </template>
      <UCarousel
        v-slot="{ item }"
        :items="data.images as CharacterPicture[]" class="w-full max-w-xs mx-auto"
        arrows
      >
        <img
          :src="item.url"
          :alt="item.alt"
          loading="lazy"
          width="320"
          height="320"
          class="rounded-lg"
        >
      </UCarousel>
      <ul class="space-y-4">
        <li
          v-for="field in data?.fields || []"
          :key="field.label"
          class="flex items-start"
        >
          <div>
            <p class="text-sm text-gray-500 capitalize">
              {{ field?.label }}
            </p>
            <p class="font-medium capitalize">
              {{ field?.value || 'Unknown' }}
            </p>
          </div>
        </li>
      </ul>
    </UCard>
    <UProgress v-if="isLoading" />
    <div v-if="isError">
      Error: {{ error?.message }}
    </div>
  </UContainer>
</template>
