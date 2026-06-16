<template>
  <div class="flex flex-row border-b-2 border-blue-900 gap-2 text-blue-900 items-center text-lg mb-3">
    <slot name="icon" />
    <h3 class="text-2xl font-bold tracking-tight text-heading">
      <slot />
    </h3>
  </div>
</template>
