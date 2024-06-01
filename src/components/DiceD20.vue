<script setup lang="ts">
defineProps(['side'])
</script>

<template>
  <svg width="2em" height="2em" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="var(--vt-c-white-mute)" stroke="#000" stroke-width="2" />
    <polygon points="100,40 150,130 50,130" fill="var(--vt-c-white-soft)" stroke="#000" stroke-width="2" />

    <line x1="100" y1="40" x2="100" y2="20" stroke="#333" stroke-width="2" />
    <line x1="100" y1="40" x2="170" y2="60" stroke="#333" stroke-width="2" />
    <line x1="100" y1="40" x2="30" y2="60" stroke="#333" stroke-width="2" />

    <line x1="50" y1="130" x2="30" y2="60" stroke="#333" stroke-width="2" />
    <line x1="50" y1="130" x2="30" y2="140" stroke="#333" stroke-width="2" />
    <line x1="50" y1="130" x2="100" y2="180" stroke="#333" stroke-width="2" />

    <line x1="150" y1="130" x2="170" y2="60" stroke="#333" stroke-width="2" />
    <line x1="150" y1="130" x2="170" y2="140" stroke="#333" stroke-width="2" />
    <line x1="150" y1="130" x2="100" y2="180" stroke="#333" stroke-width="2" />
    <text x="100" y="120" font-family="Verdana" font-size="50" font-weight="bold" fill="#000" text-anchor="middle"
          alignment-baseline="middle">{{ side }}
    </text>
  </svg>
</template>

<style scoped>
svg {
  position: relative;
  top: 3px;
}
</style>