<script lang="ts" setup>
import { useProjectsStore } from '@/stores/projects';
import { PresentationChartBarIcon } from '@heroicons/vue/24/solid';
import Card from './Card.vue';
import SubHeader from './SubHeader.vue';
import CommonContainer from './CommonContainer.vue';
import ContentList from './ContentList.vue';

const projectsStore = useProjectsStore()
</script>
<template>
  <CommonContainer>
    <SubTitle>
      <template #icon>
        <PresentationChartBarIcon class="h-6 w-6" />
      </template>
      Projects
    </SubTitle>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <Card v-for="project in projectsStore.projects"
        :href="project.url"
        :id="project.id"
        class="gap-4">
        <img class="object-cover w-full rounded-base h-64 rounded-xl"
          :src="project.image"
          v-if="project.image"
          :alt="project.title"
          async>
        <SubHeader class="absolute top-[220px] left-4 text-white">
          {{ project.title }}
        </SubHeader>
        <div class="flex flex-col justify-between leading-normal p-5 gap-5">
          <p class="text-body">
            {{ project.description }}
          </p>
          <ContentList :items="project.features.map((el) => ({ label: el }))" />
        </div>
      </Card>
    </div>
  </CommonContainer>
</template>
