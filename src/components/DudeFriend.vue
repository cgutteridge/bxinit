<script setup lang="ts">
import { getDudeStore } from '@/stores/dude'
import { computed } from 'vue'

const dudeStore = getDudeStore()
const props = defineProps(['id'])
const dude = computed(() => dudeStore.get(props.id))
</script>

<template>
  <div>
    <div class="emoji" v-if="dude.friendly" @click="dude.friendly=false">🛡️</div>
    <div class="emoji" v-if="!dude.friendly" @click="dude.friendly=true">⚔️</div>

  </div>
</template>

<style scoped>
.emoji {
  cursor: pointer;
}
.dark .emoji {
  border: solid 1px var(--color-border);
  background-color: #666;
  text-align: center;
  min-width: 1.5em;
  border-radius: 0.25em;
}
</style>