<script setup lang="ts">
import { CommandLineIcon } from '@heroicons/vue/24/solid'


import { useEducationsStore } from '@/stores/educations';
const educationStore = useEducationsStore();
</script>
<template>
    <div class="flex flex-col gap-2">
      <SubTitle>
        <template #icon>
          <CommandLineIcon class="h-6 w-6"/>
        </template>
        Formation
      </SubTitle>
      <div v-for="education in educationStore.educations" :key="education.title + '-title'">
        <span class="text-stone-600 font-thin">
          {{ education.graduated_year }}
        </span> 
        - {{ education.title }}
      </div>
    </div>
</template>
