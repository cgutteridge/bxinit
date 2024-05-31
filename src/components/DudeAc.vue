<script setup lang="ts">
import { getDudeStore } from '@/stores/dude'
import { computed } from 'vue'

const dudeStore = getDudeStore()
const props = defineProps(['id'])
const dude = computed(() => dudeStore.get(props.id))
</script>

<template>
  <div class="input">
    <span v-if="dude.ac !== undefined">AC</span>
    <span v-if="dude.ac === undefined" style="position:relative;left:-10000px">AC</span>
    <input class='not-hover' v-model="dude.ac" type="" size="3" />
    <input class='hover' v-model="dude.ac" type="number" size="3" />
  </div>
</template>

<style scoped>
.input .not-hover {
  border: solid 1px transparent;
  width: 3em;
}

.input .hover {
  border: solid 1px black;
  width: 3em;
  display: none;
}

.input:hover .hover {
  display: inline-block
}

.input:hover .not-hover {
  display: none
}
</style>