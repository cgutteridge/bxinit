<script setup lang="ts">
import DiceFace from '@/components/DiceD6.vue'
import DudeName from '@/components/DudeName.vue'
import DudeAc from '@/components/DudeAc.vue'
import DudeMod from '@/components/DudeMod.vue'
import DudeFriend from '@/components/DudeFriend.vue'
import DudeAuto from '@/components/DudeAuto.vue'
import DudeRoll from '@/components/DudeRoll.vue'

defineProps(['dudeInRound'])
defineEmits(['remove-dude'])
</script>

<template>
  <tr v-bind:class="dudeInRound.lastInGroup?'last-in-group':''">
    <td style="text-align: right; min-width: 3em">{{ dudeInRound.init }}</td>
    <td>
      <DudeFriend v-bind:id="dudeInRound.dude.id"></DudeFriend>
    </td>
    <td>
      <DudeName v-bind:id="dudeInRound.dude.id"></DudeName>
    </td>
    <td>
      <DudeAuto v-bind:id="dudeInRound.dude.id"></DudeAuto>
    </td>
    <td>
      <DudeRoll v-bind:id="dudeInRound.dude.id"></DudeRoll>
    </td>
    <td>
      <DudeMod v-bind:id="dudeInRound.dude.id"></DudeMod>
    </td>
    <td>
      <DudeAc v-bind:id="dudeInRound.dude.id"></DudeAc>
    </td>
    <td>
      <div class="remove" @click="$emit('remove-dude',dudeInRound.dude.id)">❌</div>
    </td>
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
  left: 0;
  cursor: pointer;
}

tr td {
  border-bottom: dashed 2px var(--color-border);
  padding-right: 2em;
  padding-bottom: 3px;
}

tr.last-in-group td {
  border-bottom: solid 2px var(--color-border-hover);
}

tr:first-child td {
  border-top: dashed 2px var(--color-border);
}

</style>