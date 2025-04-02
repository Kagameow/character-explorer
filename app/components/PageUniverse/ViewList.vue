<script setup lang="ts">
import type { PageCharacterShortInfo } from '~/types/PageCharacterList'

defineProps<{
  characters: PageCharacterShortInfo[]
  universe: string
}>()
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
          :to="{ name: 'universe-id', params: { universe, id: character.id } }"
        >
          Details
        </UButton>
      </div>
    </UCard>
  </div>
</template>
