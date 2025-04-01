<script setup lang="ts">
const viewMode = defineModel<'grid' | 'list'>()

function setViewMode(view: 'grid' | 'list') {
  viewMode.value = view
}

const isListView = computed(() => viewMode.value === 'list')
const isGridView = computed(() => viewMode.value === 'grid')
</script>

<template>
  <UButton
    icon="i-lucide-grid"
    :disabled="isGridView"
    @click="setViewMode('grid')"
  >
    Grid
  </UButton>
  <UButton
    icon="i-lucide-list"
    :disabled="isListView"
    @click="setViewMode('list')"
  >
    List
  </UButton>
</template>
