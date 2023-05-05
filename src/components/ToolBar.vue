<script lang="ts" setup>
import { ArrowDownTrayIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/solid'

</script>
<template>
  <div class="flex flex-row px-4 py-2 max-w-screen-lg mx-auto items-center">
    <div class="grow flex flex-row items-center text-orange-200 gap-2 animate-pulse duration-500">
      <ExclamationTriangleIcon class="w-7 h-7" />
      Work in progress
    </div>
    <button class="cursor-pointer border-2 rounded-full p-2 flex items-center justify-center transform-gpu hover:scale-110 hover:animate-pulse transition-transform">
      <ArrowDownTrayIcon class="w-7 h-7" />
    </button>
  </div>  
</template>
