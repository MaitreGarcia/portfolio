<script lang="ts" setup>
import { ArrowDownTrayIcon } from '@heroicons/vue/24/solid'
import WorkInProgress from './WorkInProgress.vue';
import LanguageSelector from './LanguageSelector.vue'

</script>
<template>
  <div class="flex flex-row px-4 py-2 max-w-screen-lg mx-auto items-center">
    <div class="grow flex flex-row items-center gap-2 text-center smooth-enter-left">
      <div class="flex flex-row gap-1 item-center">
        <LanguageSelector />
      </div>
      <WorkInProgress />
    </div>
    <button
      @click="$emit('download-cv')"
      aria-label="Download-CV"
      class="cursor-pointer border-2 rounded-full p-2 flex items-center justify-center transform-gpu hover:scale-110 transition-transform smooth-enter-right"
    >
      <ArrowDownTrayIcon class="w-7 h-7" />
    </button>
  </div>  
</template>
