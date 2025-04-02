<script setup lang="ts">
import type { PageCharacterField } from '~/types/PageCharacterDetails'

defineProps<{
  characterFields: PageCharacterField[]
}>()
</script>

<template>
  <div class="flex flex-col sm:items-center">
    <ul class="space-y-2">
      <li
        v-for="field in characterFields || []"
        :key="field.label"
        class="flex items-start"
      >
        <div class="space-x-2">
          <h6 class="text-sm text-gray-500 capitalize inline-block md:block">
            {{ field?.label }}
          </h6>
          <p class="font-medium capitalize inline-block md:block">
            {{ field?.value || 'Unknown' }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
