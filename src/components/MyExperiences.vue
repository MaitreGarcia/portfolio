<script setup lang="ts">
import { useExperiencesStore } from '@/stores/experiences';
import DiscoverProjectButton from './DiscoverProjectButton.vue';
import { WindowIcon, CalendarIcon, MinusSmallIcon } from '@heroicons/vue/24/solid'
import CommonContainer from './CommonContainer.vue';

const experiencesStore = useExperiencesStore();

</script>
<template>
  <CommonContainer>
    <SubTitle>
      <template #icon>
        <WindowIcon class="h-6 w-6" />
      </template>
      Experiences
    </SubTitle>
    <div v-for="experience in experiencesStore.experiences"
      :key="experience.title + '-title'"
      class="flex flex-col gap-4">
      <div class="flex flex-row gap-2">
        <SubHeader v-if="experience.year_ending">
          <CalendarIcon class="h-6 w-6" />
          {{ experience.year_starting }}
          -
          {{ experience.year_ending }} :
        </SubHeader>
        <SubHeader>
          <template v-if="experience.company">
            {{ experience.company }} :
          </template>
          <a :href="`#${experience.project}`">
            {{ experience.title }}
          </a>
        </SubHeader>
      </div>
      <p v-if="experience.description">{{ experience.description }}</p>
      <ul class="">
        <li v-for="task in experience.tasks"
          :key="`${experience.title}-${task}`"
          class="flex flex-row gap-4 items-center">
          <MinusSmallIcon class="h-5 w-5" /> {{ task }}
        </li>
      </ul>
    </div>
  </CommonContainer>
</template>
