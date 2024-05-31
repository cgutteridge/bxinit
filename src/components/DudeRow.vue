<script setup lang="ts">
import DiceFace from '@/components/DiceFace.vue'
import DudeName from '@/components/DudeName.vue'
import DudeAc from '@/components/DudeAc.vue'
import { getDudeStore } from '@/stores/dude'
import DudeMod from '@/components/DudeMod.vue'
import DudeFriend from '@/components/DudeFriend.vue'
const props = defineProps(['dudeInRound'])
</script>

<template>
  <tr>
    <td style="text-align: right; min-width: 3em">{{ dudeInRound.init }}</td>
    <td><DudeFriend v-bind:id="dudeInRound.dude.id"></DudeFriend></td>
    <td><DudeName v-bind:id="dudeInRound.dude.id"></DudeName></td>
    <td>
      <DiceFace  v-bind:side="dudeInRound.roll"></DiceFace>
    </td>
    <td><DudeMod v-bind:id="dudeInRound.dude.id"></DudeMod></td>

    <td><DudeAc v-bind:id="dudeInRound.dude.id"></DudeAc></td>
    <td><div class="remove" @click="$emit('remove-dude',dudeInRound.dude.id)">❌</div></td>
  </tr>
</template>

<style scoped>
td {
  text-align: left
}
.remove {
  position: relative;
  left: -10000px
}
tr:hover .remove {
  left: 0px;
  cursor: pointer;
}
tr td {
  border-bottom: solid 1px #c0c0c0;
  padding-right: 1em;
}
tr:first-child td {
  border-top: solid 1px #c0c0c0;
}
</style>