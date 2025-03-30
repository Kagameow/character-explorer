<script setup lang="ts">
definePageMeta({
  middleware: 'validate-universe',
})
</script>

<template>
  <div class="py-8">
    <UContainer>
      <header class="border-b mb-8 py-2 text-xl">
        <h1>
          Welcome to the universe explorer!
        </h1>
      </header>
      <div class="grid gap-4 xl:grid-cols-2">
        <UButton to="/pokemon">
          Pokemon
        </UButton>
        <UButton to="/rick-and-morty">
          Rick and Morty
        </UButton>
      </div>
    </UContainer>
  </div>
</template>
