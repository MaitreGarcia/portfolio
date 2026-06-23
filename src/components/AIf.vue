<script lang="ts" setup>
const { href } = defineProps<{
  href?: string
}>()
</script>
<template>
  <template v-if="href">
    <a :href="href">
      <slot />
    </a>
  </template>
  <template v-else>
    <slot />
  </template>
</template>
