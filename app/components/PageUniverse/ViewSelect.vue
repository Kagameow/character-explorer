<script setup lang="ts">
import type { PageCharacterListViewMode } from '~/types/PageCharacterList'

const viewMode = defineModel<PageCharacterListViewMode>()

const modes: { icon: string, label: string, value: PageCharacterListViewMode }[] = [
  { icon: 'i-lucide-grid', label: 'Grid', value: 'grid' },
  { icon: 'i-lucide-list', label: 'List', value: 'list' },
]

function setViewMode(mode: PageCharacterListViewMode) {
  viewMode.value = mode
}
</script>

<template>
  <div class="flex gap-2">
    <UButton
      v-for="mode in modes"
      :key="mode.value"
      :icon="mode.icon"
      :disabled="viewMode === mode.value"
      class="transition-all duration-200"
      @click="setViewMode(mode.value)"
    >
      {{ mode.label }}
    </UButton>
  </div>
</template>
