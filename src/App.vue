<script setup lang="ts">
import { RouterView } from 'vue-router'
import initialiseStores from '@/stores/initialiseStores'
import BattleView from '@/views/BattleView.vue'

initialiseStores()
</script>

<template>
  <BattleView />
</template>

<style scoped>

</style>
