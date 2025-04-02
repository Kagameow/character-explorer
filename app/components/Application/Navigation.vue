<script setup lang="ts">
import type { NavigationLink } from '~/types'

const { links } = defineProps<{
  links: NavigationLink[]
}>()
</script>

<template>
  <nav>
    <ul class="flex gap-2">
      <li v-for="link in links" :key="link.to">
        <ApplicationLink
          :to="link.to"
          :icon="link.icon"
          :label="link.label"
          :avatar="link.avatar"
        />
      </li>
    </ul>
  </nav>
</template>
