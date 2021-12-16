<template>
  <button
    ref="button"
    class="p-2 rounded-md opacity-30 cursor-default transition duration-100 flex items-center space-x-1.5"
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
