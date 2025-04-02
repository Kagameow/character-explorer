<script setup lang="ts">
import { KNOWN_UNIVERSES_CONFIG } from '~/config/universes'

definePageMeta({
  middleware: 'validate-universe',
})

const universes = KNOWN_UNIVERSES_CONFIG
</script>

<template>
  <div class="pt-16">
    <UContainer>
      <PageHomeHeader />
      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <PageHomeUniverseLink
          v-for="[key, universe] in universes"
          :key="key"
          :universe-key="key"
          :name="universe.name"
          :logo="universe.logo"
        />
      </div>
    </UContainer>
  </div>
</template>
