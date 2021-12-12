<template>
  <button
    class="px-3 py-2 rounded-md flex items-center space-x-2 text-xs hover:bg-gray-500 hover:bg-opacity-25 transition duration-100"
    :class="{
      'bg-gray-500 bg-opacity-25 font-medium': active,
    }"
  >
    <FolderIcon />
    <span v-if="label">{{ label }} </span>
    <slot v-else name="default" />
  </button>
</template>

<script>
  import { FolderIcon } from '@vue-hero-icons/solid';

  export default {
    components: {
      FolderIcon,
    },

    props: {
      active: {
        type: Boolean,
        default: null,
      },
      label: {
        type: String,
        default: null,
      },
    },
  };
</script>
