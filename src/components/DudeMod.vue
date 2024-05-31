<script setup lang="ts">
import { getDudeStore } from '@/stores/dude'
import { computed } from 'vue'

const dudeStore = getDudeStore()
const props = defineProps(['id'])
const dude = computed(() => dudeStore.get(props.id))
</script>

<template>
  <div class="input">
    <span class="not-hover" v-if="dude.initModifier !==0 ">
      <template v-if="dude.initModifier>0">+{{ dude.initModifier }}</template>
      <template v-if="dude.initModifier<0">{{ dude.initModifier }}</template>
    </span>
    <input class='hover' v-model="dude.initModifier" type="number" size="3" />
  </div>
</template>

<style scoped>
.input {
  min-width: 4em;
  min-height: 1em;
  height: max-content;
}

.input .not-hover {
  border: solid 1px transparent;
  width: 3em;
}

.input .hover {
  border: solid 1px black;
  display: none;
  width: 3em;
}

.input:hover .hover {
  display: inline-block;
}

.input:hover .not-hover {
  display: none
}
</style>
