<script setup lang="ts">
import type { PageCharacterPicture } from '~/types/PageCharacterDetails'

defineProps<{
  images: PageCharacterPicture[]
}>()
</script>

<template>
  <UCarousel
    v-if="images?.length"
    v-slot="{ item }"
    :items="images as PageCharacterPicture[]"
    class="w-full h-full max-w-xs mx-auto flex items-center justify-center"
    :arrows="images.length > 1"
  >
    <img
      :src="item.url"
      :alt="item.alt"
      loading="lazy"
      width="320"
      height="320"
      class="rounded-lg object-cover"
    >
  </UCarousel>
</template>
