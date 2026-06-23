<script setup lang="ts">
import { CommandLineIcon } from '@heroicons/vue/24/solid'
import CommonContainer from '@/components/CommonContainer.vue';
import { useEducationsStore } from '@/stores/educations';
import ContentList from './ContentList.vue';
const educationStore = useEducationsStore();
</script>
<template>
  <CommonContainer>
    <SubTitle>
      <template #icon>
        <CommandLineIcon class="h-6 w-6" />
      </template>
      Formation
    </SubTitle>
    <ContentList
      :items="educationStore.educations.map((el) => ({ prepend: el.graduated_year.toString(), label: el.title }))" />
  </CommonContainer>
</template>
