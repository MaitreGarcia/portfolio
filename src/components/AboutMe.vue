<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import CommonContainer from './CommonContainer.vue';
</script>
<template>
  <CommonContainer>
    <SubTitle>
      <template #icon>
        <UserCircleIcon class="h-6 w-6"/>
      </template>
      A propos de moi
    </SubTitle>
    Développeur, mentor et motard.
    J'aime construire des projets techniques innovants tout autant que j'aime aider mes équipes à grandir.
    Conscient des enjeux de demain, j'essaie de concilier ma passion pour le code avec une approche plus écologique et efficiente de la tech.
 </CommonContainer>
</template>
