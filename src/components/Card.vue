<script lang="ts" setup>

const { href, reverse = false } = defineProps<{
  href?: string,
  reverse?: boolean
}>()
</script>
<template>
  <a :href="href ?? ''"
    :target="href ? '_blank' : ''"
    class="cursor-pointer flex flex-col items-center border border-default rounded-xl shadow-md w-full relative"
    :class="[{
      'md:flex-row-reverse': reverse
    }]">
    <slot />
  </a>
</template>
