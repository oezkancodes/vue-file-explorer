<template>
  <button
    class="p-2 rounded-md hover:bg-gray-600 hover:bg-opacity-25 transition duration-100 flex items-center space-x-1"
  >
    <slot name="default" />
  </button>
</template>

<script>
  export default {};
</script>

<style scoped>
  svg {
    @apply w-4 h-4;
  }

  span {
    @apply text-xs;
  }
</style>
