<template>
  <div>
    <button
      class="w-full px-3 py-2 rounded-md flex items-center space-x-2 justify-between text-xs hover:bg-gray-500 hover:bg-opacity-25 transition duration-100"
      :class="{
        'bg-gray-500 bg-opacity-25 font-medium': active,
      }"
      @click="collapsed = !collapsed"
    >
      <div class="flex items-center space-x-2">
        <component
          :is="item.iconComponent || 'FolderIcon'"
          class="w-4 h-4"
        />
        <span v-text="item.label" />
      </div>

      <ChevronDownIcon
        class="w-4 h-4 self-end"
        :class="{ 'transform rotate-180': !collapsed }"
      />
    </button>

    <div v-if="!collapsed" class="">
      <button
        v-for="folder in item.folders"
        :key="folder.key"
        class="w-full pl-8 pr-3 py-2 rounded-md flex items-center space-x-2 text-xs hover:bg-gray-500 hover:bg-opacity-25 transition duration-100"
        :class="{
          'bg-gray-500 bg-opacity-25 font-medium': active,
        }"
      >
        <FolderIcon class="w-4 h-4" />
        <span v-text="folder.label" />
      </button>
    </div>
  </div>
</template>

<script>
  import {
    StarIcon,
    CloudIcon,
    FolderIcon,
    ChevronDownIcon,
  } from '@vue-hero-icons/solid';

  export default {
    components: {
      StarIcon,
      CloudIcon,
      FolderIcon,
      ChevronDownIcon,
    },

    props: {
      active: {
        type: Boolean,
        default: null,
      },
      item: {
        type: Object,
        required: true,
      },
    },

    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>
