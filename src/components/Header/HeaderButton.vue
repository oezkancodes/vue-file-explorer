<template>
  <button
    ref="button"
    class="p-2 hover:bg-gray-600 hover:bg-opacity-25 focus:opacity-70 rounded-md transition duration-100"
    @click="
      $emit('click');
      $refs.button.blur();
    "
  >
    <slot name="default" />
  </button>
</template>

<style scoped>
  button svg {
    @apply w-4 h-4;
  }
</style>
