<template>
  <button
    class="p-2 hover:bg-gray-700 rounded-md transition duration-100"
  >
    <slot name="default" />
  </button>
</template>

<style scoped>
  button svg {
    @apply w-5 h-5;
  }
</style>
