<script setup lang="ts">
  import { BriefcaseIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
  import { useSkillsStore } from '@/stores/skills';
  const skillsStore = useSkillsStore();
  
</script>
<template>
  <div class="flex flex-col gap-2">
      <SubTitle>
        <template #icon>
          <BriefcaseIcon class="h-6 w-6" />
        </template>
        Compétences
      </SubTitle>
      <div 
        v-for="(skills, category) in skillsStore.skillsByCategory" 
        :key="category + '-title'"
        class="flex flex-col gap-2"
      >
         <SubHeader>{{ category }}</SubHeader>
         <div 
          v-for="skill in skills"
          :key="`${skill.title}`" 
          class="flex flex-row gap-4 items-center justify-between"
        >
          <div class="flex flex-row gap-4 items-center">
            <ChevronRightIcon class="h-5 w-5" />
            {{ skill.title }}
          </div>
          <div class="text-stone-600 font-thin">
            <template v-if="skill.grade">
              {{ skill.exam }}: {{ skill.grade }} / {{ skill.maxGrade }}
            </template>
            <template v-else>
              <template v-if="skill.isInLearning">
                Debutant
              </template>
              <template v-if="skill.level === 2">
                Confirmé
              </template>
            </template>
          </div>
        </div>
      </div>
  </div>
</template>
