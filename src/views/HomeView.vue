<script setup lang="ts">
import MyExperiences from '@/components/MyExperiences.vue';
import MySkills from '@/components/MySkills.vue';
import MyEducation from '@/components/MyEducation.vue';
import AboutMe from '@/components/AboutMe.vue';
import ToolBar from '@/components/ToolBar.vue';

import { ComputerDesktopIcon } from '@heroicons/vue/24/solid'


const downloadCV = () => {
  window.open('/CV_Leo_Garcia_Canelo_fr.pdf', '_blank');
}

</script>
<template>
  <header class="flex flex-col bg-blue-600 p-4 w-full justify-center items-center h-[600px] gap-2">
      <img src="@/assets/profile.webp" alt="Léo Garcia Canelo" class="rounded-full h-40 w-40 mx-auto"/>
      <div class="smooth-enter-top flex flex-col justify-center items-center">
        <h1 class="text-white text-3xl"><b>Léo</b> Garcia Canelo</h1>
        <div class="text-white flex flex-row items-center justify-center gap-1">
          <ComputerDesktopIcon class="w-6 h-6"/>
          <h2 class="text-2x">
            Ingénieur développement logiciel
          </h2>
        </div>
      </div>
  </header>
  <div class="bg-blue-600 w-full sticky top-0 text-white">
    <ToolBar @download-cv="downloadCV" />
  </div>
  <main class="flex flex-col gap-4 p-4 max-w-screen-lg mx-auto">
    <AboutMe />
    <MyExperiences />
    <MySkills />
    <MyEducation />
  </main>
</template>
