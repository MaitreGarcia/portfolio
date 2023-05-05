import { ref } from 'vue'
import { defineStore } from 'pinia'
import { educationsParser, type Education } from '@/models/education';

import json_education from '@/assets/education.json' assert { type: 'JSON' };

export const useEducationsStore = defineStore('educations', {
  state: () => ({
    educations: ref<Education[]>(educationsParser(json_education)),
  }),
})
