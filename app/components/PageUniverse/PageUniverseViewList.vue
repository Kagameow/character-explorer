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
  <div class="space-y-3">
    <UCard
      v-for="(character, index) in characters"
      :key="index"
      variant="soft"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <UAvatar
            :src="character.image"
            :alt="`${character.name} image`"
            size="3xl"
          />
          <span class="capitalize">{{ character.name }}</span>
        </div>
        <UButton
          trailing-icon="i-lucide-arrow-right"
          :to="{ name: 'universe-id', params: { universe: universeRoute, id: character.id } }"
        >
          Details
        </UButton>
      </div>
    </UCard>
  </div>
</template>
