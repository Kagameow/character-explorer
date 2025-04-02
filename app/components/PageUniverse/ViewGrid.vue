<script setup lang="ts">
import type { PageCharacterShortInfo } from '~/types/PageCharacterList'

defineProps<{
  characters: PageCharacterShortInfo[]
  universe: string
}>()
</script>

<template>
  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <UCard
      v-for="character in characters"
      :key="character.id"
      variant="soft"
    >
      <template #header>
        <div class="text-lg font-semibold mb-2 capitalize">
          {{ character.name }}
        </div>
      </template>

      <div class="flex-1 flex flex-col items-center justify-center">
        <img
          :src="character.image"
          alt="Character image"
          class="w-28 h-28 object-cover"
        >
      </div>

      <template #footer>
        <div class="flex items-center justify-between mt-auto pt-2">
          <div class="text-sm text-neutral-500 capitalize">
            {{ character.gridViewText }}
          </div>

          <UButton
            trailing-icon="i-lucide-arrow-right"
            :to="{ name: 'universe-id', params: { universe, id: character.id } }"
          >
            Details
          </UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>
