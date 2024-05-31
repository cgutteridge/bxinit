<script setup lang="ts">
import { RouterView } from 'vue-router'
import initialiseStores from '@/stores/initialiseStores'

initialiseStores()
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
