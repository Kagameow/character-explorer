<script setup lang="ts">
const { data, status } = usePokemonData('/api/v2/pokemon/')
</script>

<template>
  <ExampleApiResponseContainer :status="status" :data="data" />
</template>
