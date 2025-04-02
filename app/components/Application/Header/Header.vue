<script setup lang="ts">
import { HEADER_LINKS } from './header-links'
</script>

<template>
  <header
    class="z-10 fixed flex items-center left-0 right-0 top-0 bg-neutral-100 dark:bg-neutral-900
    border-b border-b-neutral-100 dark:border-b-neutral-800 h-[var(--application-header-height)]"
  >
    <UContainer class="flex items-center justify-between w-full">
      <ApplicationNavigation :links="HEADER_LINKS" />
      <ApplicationColorMode class="ml-auto" />
    </UContainer>
  </header>
</template>
