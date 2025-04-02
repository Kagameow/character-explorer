<script setup lang="ts">
defineProps<{
  name: string
  logo?: string
  universeKey: string
}>()
</script>

<template>
  <div
    class="rounded-lg border border-[var(--ui-border-muted)] shadow-md
    overflow-hidden transform transition duration-300 hover:scale-105"
  >
    <UButton
      :to="`/${universeKey}`"
      variant="ghost"
      class="block w-full text-left"
    >
      <div class="p-4 flex flex-col items-center">
        <div class="w-24 h-24 mb-4">
          <img
            v-if="logo"
            :src="logo"
            :alt="name"
            class="w-full h-full object-contain"
          >
          <div
            v-else
            class="flex items-center justify-center w-full h-full text-2xl font-bold"
          >
            {{ name.charAt(0) }}
          </div>
        </div>
        <h2 class="text-xl font-semibold">
          {{ name }}
        </h2>
      </div>
    </UButton>
  </div>
</template>
