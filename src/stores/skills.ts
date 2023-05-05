import { ref } from 'vue'
import { defineStore } from 'pinia'
import { skillsParser, type Skill } from '@/models/skill';

import json_skill from '@/assets/skills.json' assert { type: 'JSON' };

export const useSkillsStore = defineStore('skills', {
  state: () => ({
    skills: ref<Skill[]>(skillsParser(json_skill)),
  }),
  getters: {
    skillsByCategory: (state) => {
      return state.skills.reduce((acc: any, el: Skill) => {
        if(!acc[el.category]) {
          acc[el.category] = []
        }
        acc[el.category].push(el)
        return acc;
      }, {}) as Record<string, Skill[]>
    },
  }
})
