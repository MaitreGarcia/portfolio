<script setup lang="ts">
import { useExperiencesStore } from '@/stores/experiences';
import { WindowIcon, CalendarIcon } from '@heroicons/vue/24/solid'

const experiencesStore = useExperiencesStore();

</script>
<template>
  <div class="flex flex-col gap-2">
      <SubTitle>
        <template #icon>
          <WindowIcon class="h-6 w-6" />
        </template>
        Experiences
      </SubTitle>
      <div 
        v-for="experience in experiencesStore.experiences" 
        :key="experience.title + '-title'" 
        class="flex flex-col gap-4"
      >
        <div class="flex flex-row justify-between">
          <SubHeader>
            <template v-if="experience.company">
              {{ experience.company }} : 
            </template>
            {{ experience.title }}
          </SubHeader>
          <SubHeader v-if="experience.year_ending">
            {{ experience.year_starting }}
            -
            {{ experience.year_ending }}
            <CalendarIcon class="h-6 w-6"/>
          </SubHeader>
        </div>
        <p v-if="experience.description">{{ experience.description }}</p>
        <ul class="list-disc ml-5">
          <li v-for="task in experience.tasks" :key="`${experience.title}-${task}`">
            {{ task }}
          </li>
        </ul>
      </div>
    </div>
</template>
