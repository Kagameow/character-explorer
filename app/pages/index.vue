<script setup lang="ts">
import { KNOWN_UNIVERSES_CONFIG } from '~/constants'

definePageMeta({
  middleware: 'validate-universe',
})

const universes = KNOWN_UNIVERSES_CONFIG
</script>

<template>
  <div class="min-h-screen py-16">
    <UContainer>
      <header class="pb-12 text-center">
        <h1 class="text-4xl font-extrabold text-[var(--ui-text-highlighted)]">
          Universe Explorer
        </h1>
        <p class="pt-4 text-xl">
          Journey through the worlds you love.
        </p>
      </header>
      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="[key, universe] in universes"
          :key="key"
          class="rounded-lg border border-[var(--ui-border-muted)]
          shadow-md overflow-hidden
          transform transition duration-300 hover:scale-105"
        >
          <UButton
            :to="`${key}`"
            variant="ghost"
            class="block w-full text-left"
          >
            <div class="p-4 flex flex-col items-center">
              <div class="w-24 h-24 mb-4">
                <img
                  v-if="universe.logo"
                  :src="universe.logo"
                  :alt="universe.name"
                  class="w-full h-full object-contain"
                >
                <div
                  v-else
                  class="flex items-center justify-center w-full h-full text-2xl font-bold"
                >
                  {{ universe.name.charAt(0) }}
                </div>
              </div>
              <h2 class="text-xl font-semibold">
                {{ universe.name }}
              </h2>
            </div>
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
