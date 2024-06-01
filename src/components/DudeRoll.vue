<script setup lang="ts">
import { computed, ref, type Ref, watch } from 'vue'
import DiceFace from '@/components/DiceD6.vue'
import { getRoundStore } from '@/stores/round'
import { getDudeStore } from '@/stores/dude'
import { getOptionStore } from '@/stores/option'
import D6 from '@/components/DiceD6.vue'
import D20 from '@/components/DiceD20.vue'
import DiceD6 from '@/components/DiceD6.vue'
import DiceD20 from '@/components/DiceD20.vue'

const roundStore = getRoundStore()
const dudeStore = getDudeStore()
const optionStore = getOptionStore()

const props = defineProps(['id'])
const dude = computed(() => dudeStore.get(props.id))
const roll = computed(() => roundStore.getRoll(props.id))
let showing: Ref<number | undefined> = ref(roundStore.getRoll(props.id))
let lastClick: number
const BOUNCE_FACTOR = 500

function inc () {

  showing.value = ((showing.value ?? 0) % optionStore.diceSize) + 1
  lastClick = Date.now()
  setTimeout(
    () => {
      if (lastClick < Date.now() - BOUNCE_FACTOR*0.9) {
        set()
      }
    },
    BOUNCE_FACTOR
  )
}

function set () {
  roundStore.setRoll(dude.value.id, showing.value)
}

// when the roll changes, change what is showing on the dice face
watch(roll, (to) => showing.value = to)

</script>

<template>
  <DiceD6 v-if="optionStore.diceSize==6" @click="inc()" @mouseleave="set()" style="cursor:pointer" v-bind:side="showing"></DiceD6>
  <DiceD20 v-if="optionStore.diceSize==20" @click="inc()" @mouseleave="set()" style="cursor:pointer" v-bind:side="showing"></DiceD20>
</template>

<style scoped>
.emoji {
  cursor: pointer;
}

</style>