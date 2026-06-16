<script lang="ts" setup>

const { href, reverse = false } = defineProps<{
  href?: string,
  reverse?: boolean
}>()
</script>
<template>
  <a  
    :href="href ?? ''"
    :target="href ? '_blank' : ''"
    class="cursor-pointer flex flex-col items-center p-5 border border-default rounded-md shadow-xs md:flex-row w-full"
    :class="[{
      'md:flex-row-reverse': reverse
    }]"
  >
    <slot />
  </a>
</template>
