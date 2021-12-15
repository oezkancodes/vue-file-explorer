<template>
  <header
    class="p-2 bg-gray-800 space-y-2 border-b border-gray-700"
  >
    <!-- Primary Row -->
    <div>
      <div
        class="flex items-center justify-between space-x-2"
      >
        <div
          class="flex items-center space-x-1 flex-nowrap"
          style="max-width: 80%"
        >
          <!-- Tabs -->
          <div class="flex space-x-1 overflow-x-auto">
            <HeaderTabItem
              v-for="tab in tabs"
              :key="tab.uid"
              :tab="tab"
            />
          </div>

          <!-- Add Tab Button -->
          <HeaderButton @click="onClickAddTab">
            <PlusIcon />
          </HeaderButton>

          <!-- Tab Dropdown -->
          <HeaderButton>
            <CollectionIcon />
          </HeaderButton>
        </div>

        <div class="flex items-center space-x-1">
          <button
            class="px-3.5 py-2.5 hover:bg-gray-700 rounded-md transition duration-100 cursor-pointer"
            @click="onClickMinimize"
          >
            <MinusIcon class="w-5 h-5" />
          </button>
          <button
            class="px-3.5 py-2.5 hover:bg-red-500 rounded-md transition duration-100 cursor-pointer"
            @click="onClickMinimize"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Secondary Row -->
    <div class="space-x-1">
      <HeaderButton>
        <ArrowLeftIcon />
      </HeaderButton>
      <HeaderButton>
        <ArrowRightIcon />
      </HeaderButton>
      <HeaderButton>
        <ArrowUpIcon />
      </HeaderButton>
      <HeaderButton>
        <RefreshIcon />
      </HeaderButton>
    </div>
  </header>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid';

  import { mapGetters } from 'vuex';

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

    computed: {
      ...mapGetters(['tabs', 'activeTab']),
    },

    methods: {
      onClickAddTab() {
        this.$store.commit('SET_TAB', {
          uid: uuidv4(),
          label: 'Home',
          folders: [],
        });
      },

      onClickMinimize() {
        this.$store.commit('SET_MINIMIZED', true);
      },
    },
  };
</script>
