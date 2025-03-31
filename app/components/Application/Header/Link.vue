<script setup lang="ts">
import type { AvatarProps } from '#ui/components/Avatar.vue'

const props = defineProps<{
  to: string
  label?: string
  avatar?: AvatarProps
  icon?: string
}>()
</script>

<template>
  <UButton
    :icon="props.icon"
    :avatar="props.avatar"
    :to="props.to"
    :label="props.label"
    variant="ghost"
  />
</template>
