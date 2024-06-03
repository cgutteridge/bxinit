<script setup lang="ts">
import { getRoundStore } from '@/stores/round'
import DudeRow from '@/components/DudeRow.vue'
import { getDudeStore } from '@/stores/dude'
import $ from 'jquery'
import { nextTick, onMounted } from 'vue'
import { getOptionStore } from '@/stores/option'

const optionStore = getOptionStore()

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

function removeFriendlies () {
  getDudeStore().removeFriendlies()
  reScale()
}

function removeHostiles () {
  getDudeStore().removeHostiles()
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
  const scale = Math.min(targetH / (h + 1), targetW / (w + 1))
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
    <div class="top-left">
      <button title="ROLL INITIATIVE" @click="roll()">🎲</button>
      <button @click="add()" title="ADD COMBATANT">✚</button>
    </div>
    <div class="top-middle">
      <button @click="removeHostiles()" title="REMOVE HOSTILES">❌⚔</button>
      <button @click="removeFriendlies()" title="REMOVE FRIENDS">❌🛡</button>
    </div>
    <div class="top-right">
      <button v-if="optionStore.diceSize==20" @click="optionStore.diceSize=6" title="TOGGLE DICE SIZE">D20</button>
      <button v-if="optionStore.diceSize==6" @click="optionStore.diceSize=20" title="TOGGLE DICE SIZE">D6</button>
      <button v-if="optionStore.darkMode" @click="optionStore.setLight()" title="LIGHT MODE"
              style="background-color:#000">🌙
      </button>
      <button v-if="!optionStore.darkMode" @click="optionStore.setDark()" title="DARK MODE">☀️</button>
    </div>
  </div>
  <div class="bottom">
    <table class="table">
      <dude-row v-for="dudeInRound in getRoundStore().all()" v-bind:dude-in-round="dudeInRound"
                v-bind:key="dudeInRound.dude.id" v-on:remove-dude="remove($event)"></dude-row>
    </table>
  </div>
</template>

<style scoped>
.top {
  height: 10vh;
}

.top button {
  font-size: 4vh;
  min-height: 5vh;
  margin-left: 0.2em;
  margin-right: 0.2em;
}

.top-left {
  position: absolute;
  top: 2.5vh;
  display: inline-block;
  left: 2.5vh;
  max-width: 33%;
}

.top-middle {
  display: inline-block;
  position: absolute;
  top: 2.5vh;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 33%;
}

.top-right {
  position: absolute;
  top: 2.5vh;
  display: inline-block;
  right: 2.5vh;
  max-width: 33%;
}

@media only screen and (min-width: 1024px) {
  .top button {
    min-width: 3em;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}

.bottom {
  text-align: center;
  height: 90vh;
}


.table {
  display: inline-block;
  border-collapse: collapse;
  transition: transform 0.2s;
}


th {
  text-align: left
}
</style>