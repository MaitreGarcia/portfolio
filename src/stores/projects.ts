import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { IProject } from '@/models/projects'
import json_project from '@/assets/projects.json' with { type: 'JSON' };

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: ref<IProject[]>(json_project),
  }),
})
