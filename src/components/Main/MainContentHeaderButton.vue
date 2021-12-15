<template>
  <button
    ref="button"
    class="p-2 rounded-md hover:bg-gray-600 hover:bg-opacity-25 focus:opacity-70 transition duration-100 flex items-center space-x-1.5"
    @click="$refs.button.blur()"
  >
    <slot name="default" />
  </button>
</template>

<style scoped>
  svg {
    @apply w-4 h-4;
  }
  span {
    @apply text-xs;
  }
</style>
