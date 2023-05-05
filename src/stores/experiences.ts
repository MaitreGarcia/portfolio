import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import json_experiences from '@/assets/experiences.json' assert { type: 'JSON' };
import { experiencesParser, type Experiences } from '@/models/experiences';

export const useExperiencesStore = defineStore('experiences', () => {
  const experiences = ref<Experiences[]>(experiencesParser(json_experiences));
  return { experiences }
})
