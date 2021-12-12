<template>
  <div
    class="px-3 py-2 w-48 hover:bg-gray-700 hover:bg-opacity-50 rounded-md flex items-center justify-between group cursor-pointer transition duration-100"
    :class="{ 'bg-gray-700': active }"
  >
    <div class="flex items-center space-x-2">
      <!-- Icon -->
      <FolderIcon class="w-5 h-5" />

      <!-- Label -->
      <span class="text-xs">
        <span v-if="label" v-text="label" />
        <slot v-else name="default" />
      </span>
    </div>

    <!-- Close Tab -->
    <XIcon
      class="w-4 h-4 opacity-0 group-hover:opacity-100 transition duration-100"
    />
  </div>
</template>

<script>
  import { XIcon } from '@vue-hero-icons/outline';
  import { FolderIcon } from '@vue-hero-icons/solid';

  export default {
    components: {
      FolderIcon,
      XIcon,
    },

    props: {
      active: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: 'Folder',
      },
    },
  };
</script>
