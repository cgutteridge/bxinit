<script setup lang="ts">
import DiceFace from '@/components/DiceFace.vue'
const props = defineProps(['dudeInRound'])
</script>

<template>
  <tr>
    <td><DiceFace v-if="dudeInRound.roll !== undefined" v-bind:side="dudeInRound.roll"></DiceFace></td>
    <td>{{ dudeInRound.dude.initModifier }}</td>
    <td>{{ dudeInRound.init }}</td>
    <td>{{ dudeInRound.dude.name }}</td>
    <td>{{ dudeInRound.dude.ac }}</td>
  </tr>
</template>

<style scoped>
td {
  text-align: center
}
</style>