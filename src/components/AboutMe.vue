<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import CommonContainer from './CommonContainer.vue';
</script>
<template>
  <CommonContainer>
    <SubTitle>
      <template #icon>
        <UserCircleIcon class="h-6 w-6" />
      </template>
      A propos de moi
    </SubTitle>
    Construire des projets techniques de pointe est une passion qui m'habite au quotidien. J'aime
    également accompagner mes équipes dans leur croissance. Face aux défis de demain, je cherche à
    allier mon amour du code à une approche plus verte et efficace de la technologie.
  </CommonContainer>
</template>
