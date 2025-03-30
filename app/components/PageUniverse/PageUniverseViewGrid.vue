<script setup lang="ts">
defineProps({
  characters: {
    type: Object,
    required: true,
  },
  universeRoute: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <UCard
      v-for="(character, index) in characters"
      :key="character.id + index"
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
          <div class="text-sm text-gray-500">
            Some extra info lines
          </div>

          <UButton
            trailing-icon="i-lucide-arrow-right"
            :to="{ name: 'universe-id', params: { universe: universeRoute, id: character.id } }"
          >
            Details
          </UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>
