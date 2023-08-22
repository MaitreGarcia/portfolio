<script setup lang="ts">
import { GlobeEuropeAfricaIcon } from '@heroicons/vue/24/solid'


</script>
<template>
  <div class="flex flex-row gap-1 item-center cursor-pointer" @click="emit('displayMenu')">
    <GlobeEuropeAfricaIcon class="w-7 h-7" />
    FR
  </div>
</template>
