<script setup lang="ts">
import { getRoundStore } from '@/stores/round'
</script>

<template>
  <button @click="getRoundStore().roll()">Roll</button>
</template>

<style>

</style>