<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <UApp>
    <Application>
      <ApplicationHeader />
      <NuxtPage class="min-h-[calc(100vh-var(--application-footer-height)-4rem)]" />
      <ApplicationFooter />
    </Application>
  </UApp>
</template>
