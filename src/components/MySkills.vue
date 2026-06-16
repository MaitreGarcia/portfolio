<script setup lang="ts">
  import { BriefcaseIcon, MinusSmallIcon } from '@heroicons/vue/24/solid'
  import { useSkillsStore } from '@/stores/skills';
import Card from './Card.vue';
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <Card
        href="#"
        v-for="(skills, category) in skillsStore.skillsByCategory" 
      >
        <div class="flex flex-col w-full gap-2">
          <SubHeader>{{ category }}</SubHeader>
          <div class="flex flex-col w-full">
            <div 
              v-for="skill in skills"
              :key="`${skill.title}`" 
              class="flex flex-row gap-4 items-center justify-between w-full"
            >
              <div class="items-center">
                {{ skill.title }}
              </div>
              <div class="text-stone-600 font-thin">
                <template v-if="skill.grade">
                  {{ skill.exam }}: {{ skill.grade }} / {{ skill.maxGrade }}
                </template>
                <template v-else>
                  <template v-if="skill.level === 1">
                    Débutant
                  </template>
                  <template v-if="skill.level === 2">
                    Confirmé
                  </template>
                </template>
              </div>
            </div>
          </div>
        </div>
      </Card>
      </div>
  </div>
</template>
