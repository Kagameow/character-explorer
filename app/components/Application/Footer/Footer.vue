<script setup lang="ts">
import { FOOTER_LINKS } from './footer-links'
</script>

<template>
  <footer
    class="h-[var(--application-footer-height)] bg-neutral-100 dark:bg-neutral-900
   border-t border-t-neutral-100 dark:border-t-neutral-800 flex items-center"
  >
    <UContainer class="flex items-center justify-between w-full">
      <span class="text-sm text-gray-500"> ©2025 — One app to rule them all. </span>
      <ApplicationNavigation :links="FOOTER_LINKS" />
    </UContainer>
  </footer>
</template>
