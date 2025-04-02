<script setup lang="ts">
import type { AvatarProps } from '#ui/components/Avatar.vue'

const props = defineProps<{
  to: string
  label?: string
  avatar?: AvatarProps
  icon?: string
}>()

const route = useRoute()

// Workaround to avoid query params being reset when navigating to the same route
function getNavLink(targetPath: string) {
  return route.path === targetPath
    ? { path: targetPath, query: route.query }
    : { path: targetPath }
}
</script>

<template>
  <UButton
    active-class="bg-neutral-200 dark:bg-neutral-800"
    :icon="props.icon"
    :avatar="props.avatar"
    :to="getNavLink(props.to)"
    :label="props.label"
    variant="ghost"
  />
</template>
