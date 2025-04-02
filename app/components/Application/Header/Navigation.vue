<script setup lang="ts">
import { HEADER_LINKS } from './headerLinks'
</script>

<template>
  <nav>
    <ul class="flex gap-2">
      <li v-for="link in HEADER_LINKS" :key="link.to">
        <ApplicationHeaderLink
          :to="link.to"
          :icon="link.icon"
          :label="link.label"
          :avatar="link.avatar"
        />
      </li>
    </ul>
  </nav>
</template>
