<template>
  <header
    class="p-2 bg-gray-800 space-y-2 border-b border-gray-700"
  >
    <!-- Primary Row -->
    <div>
      <div
        class="flex items-center justify-between space-x-2"
      >
        <div class="flex items-center space-x-1">
          <!-- Tabs -->
          <HeaderTabItem label="Desktop" active />
          <HeaderTabItem label="Downloads" />

          <!-- Tab Dropdown -->
          <HeaderButton>
            <PlusIcon />
          </HeaderButton>
        </div>

        <div class="flex items-center space-x-1">
          <HeaderButton>
            <CollectionIcon class="w-5 h-5" />
          </HeaderButton>
          <button
            class="px-3.5 py-2.5 hover:bg-gray-700 rounded-md transition duration-100 cursor-pointer"
          >
            <MinusIcon class="w-5 h-5" />
          </button>
          <button
            class="px-3.5 py-2.5 hover:bg-red-500 rounded-md transition duration-100 cursor-pointer"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Secondary Row -->
    <div class="space-x-1">
      <HeaderButton>
        <ArrowLeftIcon class="w-5 h-5" />
      </HeaderButton>
      <HeaderButton>
        <ArrowRightIcon class="w-5 h-5" />
      </HeaderButton>
      <HeaderButton>
        <ArrowUpIcon class="w-5 h-5" />
      </HeaderButton>
      <HeaderButton>
        <RefreshIcon class="w-5 h-5" />
      </HeaderButton>
    </div>
  </header>
</template>

<script>
  import HeaderButton from './HeaderButton.vue';
  import HeaderTabItem from './HeaderTabItem.vue';

  import {
    PlusIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    RefreshIcon,
    MinusIcon,
    XIcon,
  } from '@vue-hero-icons/outline';
  import { CollectionIcon } from '@vue-hero-icons/solid';

  export default {
    components: {
      HeaderTabItem,
      HeaderButton,
      PlusIcon,
      ArrowLeftIcon,
      ArrowRightIcon,
      ArrowUpIcon,
      RefreshIcon,
      MinusIcon,
      XIcon,
      CollectionIcon,
    },
  };
</script>
