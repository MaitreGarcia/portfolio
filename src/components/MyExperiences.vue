<script setup lang="ts">
import { useExperiencesStore } from '@/stores/experiences';
import { WindowIcon, CalendarIcon } from '@heroicons/vue/24/solid'
import CommonContainer from './CommonContainer.vue';
import ContentList from './ContentList.vue';

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
      <div class="flex flex-col md:flex-row gap-2">
        <SubHeader v-if="experience.year_ended"
          class="flex flex-row gap-2 font-thin">
          <CalendarIcon class="h-6 w-6" />
          {{ experience.year_started }}
          -
          {{ experience.year_ended }}:
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
      <ContentList :items="experience.tasks.map((el) => ({ label: el }))" />
    </div>
  </CommonContainer>
</template>
