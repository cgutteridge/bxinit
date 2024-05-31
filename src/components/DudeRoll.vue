<script setup lang="ts">
import { computed, ref, type Ref, watch } from 'vue'
import DiceFace from '@/components/DiceFace.vue'
import { getRoundStore } from '@/stores/round'
import { getDudeStore } from '@/stores/dude'

const roundStore = getRoundStore()
const dudeStore = getDudeStore()

const props = defineProps(['id'])
const dude = computed(() => dudeStore.get(props.id))
const roll = computed(() => roundStore.getRoll(props.id))
let showing :Ref<number|undefined>= ref(roundStore.getRoll(props.id))

function inc() {
  showing.value = ((showing.value??0) % 6)+1
}

function set() {
  roundStore.setRoll( dude.value.id, showing.value)
}

// when the roll changes, change what is showing on the dice face
watch( roll, (to) => showing.value = to )

</script>

<template>
  <div v-if="dude.autoRoll">
    <DiceFace v-bind:side="roll"></DiceFace>
  </div>
  <div v-else >
    <DiceFace @click="inc()" @mouseleave="set()" style="cursor:pointer" v-bind:side="showing"></DiceFace>
  </div>
</template>

<style scoped>
.emoji {
  cursor: pointer;
}

</style>