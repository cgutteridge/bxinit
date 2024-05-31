<script setup lang="ts">
import { getRoundStore } from '@/stores/round'
import DudeRow from '@/components/DudeRow.vue'
import { getDudeStore } from '@/stores/dude'
import $ from 'jquery'
import { nextTick, onMounted } from 'vue'

function add () {
  getDudeStore().addBlank()
  reScale()
}

function remove (id: number) {
  getDudeStore().remove(id)
  reScale()
}

function roll () {
  getRoundStore().roll()
  reScale()
}

async function reScale () {
  await nextTick()
  const container = $('.bottom')
  const scaledThing = $('.table')
  const targetH: number = (container.height() ?? 0) * 0.95
  const targetW: number = (container.width() ?? 0) * 0.95
  const h: number = scaledThing.height() ?? 0
  const w: number = scaledThing.width() ?? 0
  const scale = Math.min(targetH / h, targetW / w)

  scaledThing.css('transform', `translateY(${(targetH - h) / 2}px) scale(${scale}) `)
}

window.addEventListener('resize', function() {
  reScale()
}, true)

onMounted(() => {
  reScale()
})
</script>

<template>
  <div class="top">
    <button class='b1' @click="roll()">Roll Initiative</button>
    <button class='b2' @click="add()">Add Combatant</button>
  </div>
  <div class="bottom">
    <table class="table">
      <dude-row v-for="dudeInRound in getRoundStore().all()" v-bind:dude-in-round="dudeInRound"
                v-bind:key="dudeInRound" v-on:remove-dude="remove($event)"></dude-row>
    </table>
  </div>
</template>

<style scoped>
.top {
  height: 10vh;
}

.top button {
  font-size: 4vh;
}

.b1 {
  position: absolute;
  top: 1vh;
  left: 5vw;
}

.b2 {
  position: absolute;
  top: 1vh;
  right: 5vw;
}
.bottom {
  text-align: center;
  height: 90vh;
}


.table {
  display: inline-block;
  border-collapse: collapse;
}


th {
  text-align: left
}
</style>