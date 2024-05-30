<script setup lang="ts">
import { getRoundStore } from '../stores/round'
import ReRoll from '@/components/ReRoll.vue'
import DudeRow from '@/components/DudeRow.vue'
</script>

<template>
  <main>
    <table>
      <tr>
        <th>Roll</th>
        <th>Mod</th>
        <th>Initiative</th>
        <th>Name</th>
        <th>AC</th>
      </tr>
      <dude-row v-for="dudeInRound in getRoundStore().all()" v-bind:dude-in-round="dudeInRound"></dude-row>
    </table>

    <re-roll></re-roll>
  </main>
</template>
