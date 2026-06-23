<script lang="ts" setup>
const { items } = defineProps<{
  items: {
    prepend?: string,
    label: string
  }[]
}>();
</script>
<template>
  <ul>
    <li v-for="item in items"
      class="line-clamp-1">
      <span v-if="item.prepend" class="text-stone-600 font-thin">
        {{ item.prepend }}
      </span>
      - {{ item?.label }}
    </li>
  </ul>
</template>
