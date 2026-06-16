import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import json_experiences from '@/assets/experiences.json' with { type: 'JSON' };
import { type Experiences } from '@/models/experiences';

export const useExperiencesStore = defineStore('experiences', () => {
  const experiences = ref<Experiences[]>(json_experiences);
  return { experiences }
})
