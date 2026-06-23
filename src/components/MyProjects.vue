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
    <div class="grid grid-cols-1 md:grid-cols-1 md:flex-row gap-3">
      <Card v-for="(project, index) in projectsStore.projects"
        :href="project.url"
        :id="project.id"
        :reverse="index % 2 === 0"
        class="gap-4">
        <img class="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
          :src="project.image"
          :alt="project.title"
          async>
        <div class="flex flex-col justify-between leading-normal">
          <SubHeader>
            {{ project.title }}
          </SubHeader>
          <p class="mb-6 text-body">
            {{ project.description }}
          </p>
          <ContentList :items="project.features.map((el) => ({ label: el }))" />
        </div>
      </Card>
    </div>
  </CommonContainer>
</template>
