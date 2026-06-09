<script lang="ts" setup>
import { MinusSmallIcon } from '@heroicons/vue/24/solid'
import { useProjectsStore } from '@/stores/projects';
import { PresentationChartBarIcon } from '@heroicons/vue/24/solid';

const projectsStore = useProjectsStore()
</script>
<template>
  <div>
    <SubTitle>
      <template #icon>
        <PresentationChartBarIcon class="h-6 w-6"/>
      </template>
      Projects
    </SubTitle>
    <div 
      v-for="project in projectsStore.projects" 
      class="flex flex-col gap-2"
    >
      <SubHeader>
        {{ project.title }}
      </SubHeader>
      <p>{{ project.description }}</p>
      <ul>
        <li
          class="flex flex-row items-center gap-2"
          v-for="feature in project.features"
        >
          <MinusSmallIcon class="h-5 w-5" />
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>
