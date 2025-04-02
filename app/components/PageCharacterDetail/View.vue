<script setup lang="ts">
import type { CharacterDetails } from '~/types/PageCharacterDetails'

defineProps<{
  character: CharacterDetails
}>()
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="text-xl font-semibold">
        {{ character.name }}
      </h2>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <PageCharacterDetailViewImages
        v-if="character.images?.length"
        :images="character.images"
      />
      <PageCharacterDetailViewFields
        v-if="character.fields?.length"
        :character-fields="character.fields"
      />
    </div>
  </UCard>
</template>
