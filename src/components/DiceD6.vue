<script setup lang="ts">
defineProps(['side'])
</script>

<template>
  <svg width="1.5em" height="1.5em" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="90" rx="15" ry="15" fill="var(--vt-c-white-soft)" stroke="var(--vt-c-black-soft)" stroke-width="5" />
    <circle v-if="side==4 || side==5 || side==6" cx="25" cy="25" r="8" fill="var(--vt-c-black-soft)" />
    <circle v-if="side==6" cx="25" cy="50" r="8" fill="var(--vt-c-black-soft)" />
    <circle v-if="side==2 || side==3 || side==4 || side==5 || side==6" cx="25" cy="75" r="8" fill="var(--vt-c-black-soft)" />

    <circle v-if="side==1 || side==3 || side==5" cx="50" cy="50" r="8" fill="var(--vt-c-black-soft)" />

    <circle v-if="side==2 || side==3 || side==4 || side==5 || side==6" cx="75" cy="25" r="8" fill="var(--vt-c-black-soft)" />
    <circle v-if="side==6" cx="75" cy="50" r="8" fill="var(--vt-c-black-soft)" />
    <circle v-if="side==4 || side==5 || side==6" cx="75" cy="75" r="8" fill="var(--vt-c-black-soft)" />
  </svg>
</template>

<style scoped>
svg {
  position: relative;
  top: 3px;
}
</style>