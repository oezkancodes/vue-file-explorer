<template>
  <header
    class="bg-gray-800 space-y-2 border-b border-gray-700 rounded-t-md"
  >
    <!-- Primary Row -->
    <div>
      <div class="flex justify-between space-x-2">
        <div
          class="pl-2 pt-2 flex items-center space-x-1 flex-nowrap"
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
          <HeaderTabManagement />
        </div>

        <div class="flex self-start space-x-1">
          <button
            class="px-3.5 py-2.5 hover:bg-gray-700 transition duration-100 cursor-pointer"
            @click="onClickMinimize"
          >
            <MinusIcon class="w-5 h-5" />
          </button>
          <button
            class="px-3.5 py-2.5 hover:bg-red-500 rounded-tr-md transition duration-100 cursor-pointer"
            @click="onClickMinimize"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Secondary Row -->
    <div
      class="pl-2 pr-2 pb-2 flex space-x-2 items-center justify-between"
    >
      <section class="space-x-1">
        <HeaderButton disabled>
          <ArrowLeftIcon />
        </HeaderButton>
        <HeaderButton disabled>
          <ArrowRightIcon />
        </HeaderButton>
        <HeaderButton
          :disabled="currentTab.label === 'Home'"
          @click="
            $store.dispatch('updateTab', {
              label: 'Home',
              view: 'home-view',
            })
          "
        >
          <ArrowUpIcon />
        </HeaderButton>
        <HeaderButton disabled>
          <RefreshIcon />
        </HeaderButton>
      </section>

      <div class="relative">
        <header-search />
      </div>
    </div>
  </header>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid';

  import { mapGetters } from 'vuex';

  import HeaderButton from './HeaderButton.vue';
  import HeaderTabItem from './HeaderTabItem.vue';
  import HeaderSearch from './HeaderSearch.vue';
  import HeaderTabManagement from './HeaderTabManagement.vue';

  import {
    PlusIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    RefreshIcon,
    MinusIcon,
    XIcon,
  } from '@vue-hero-icons/outline';

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
      HeaderSearch,
      HeaderTabManagement,
    },

    computed: {
      ...mapGetters(['tabs', 'activeTab', 'currentTab']),
    },

    methods: {
      onClickAddTab() {
        this.$store.commit('SET_TAB', {
          uid: uuidv4(),
          label: 'Home',
          view: 'home-view',
        });
      },

      onClickMinimize() {
        this.$store.commit('SET_MINIMIZED', true);
      },
    },
  };
</script>
