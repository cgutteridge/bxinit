<script setup lang="ts">
import { getDudeStore } from '@/stores/dude'
import { computed } from 'vue'

const dudeStore = getDudeStore()
const props = defineProps(['id'])
const dude = computed(() => dudeStore.get(props.id))
</script>

<template>
  <div class="input">
    <input class="hover" v-model="dude.name" placeholder="combatant" />
    <input class="not-hover" v-model="dude.name" placeholder="combatant" />
  </div>
</template>

<style scoped>
.input .not-hover {
  border: solid 1px transparent;
}
.input .hover {
  border: solid 1px black;
  display: none;
}
.input:hover .hover {
  display:block
}
.input:hover .not-hover {
  display:none
}

</style>