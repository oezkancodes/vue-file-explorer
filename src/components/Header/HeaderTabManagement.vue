<template>
  <div class="relative">
    <HeaderButton @click="toggleMenu">
      <CollectionIcon />
    </HeaderButton>

    <div
      v-if="showMenu"
      v-click-outside="toggleMenu"
      class="absolute z-50 top-9 left-0 p-4 bg-gray-800 bg-opacity-20 border border-gray-700 backdrop-filter backdrop-blur-xl rounded-md flex flex-col space-y-1 cursor-pointer w-48"
    >
      <p class="mb-2 text-sm font-medium">Open Tabs</p>
      <div
        v-for="tab in tabs"
        :key="tab.uid"
        class="px-4 py-2 flex items-center justify-between space-x-2 text-xs rounded-md group"
        :class="[
          { 'bg-gray-700': tab.uid === currentTab.uid },
          {
            'hover:bg-gray-700 hover:bg-opacity-50':
              tab.uid !== currentTab.uid,
          },
        ]"
        @click="onClickTab(tab)"
      >
        <div class="flex items-center space-x-2">
          <img class="h-3.5 w-3.5" src="/folder.png" />
          <span v-text="tab.label"></span>
        </div>
        <!-- <XIcon
          v-if="tabs.length > 1"
          class="w-4 h-4 opacity-0 group-hover:opacity-100 transition duration-100 self-end"
          @click="onClickCloseTab(tab)"
        /> -->
      </div>

      <!-- New Tab -->
      <div
        class="px-4 py-2 flex items-center space-x-2 text-xs rounded-md hover:bg-gray-700 hover:bg-opacity-50"
        @click="onClickAddTab"
      >
        <PlusIcon class="w-4 h-4" />
        <span>Open new Tab</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid';

  import ClickOutside from 'vue-click-outside';

  import {
    CollectionIcon,
    PlusIcon,
    // XIcon,
  } from '@vue-hero-icons/outline';
  import HeaderButton from './HeaderButton.vue';

  import { mapGetters } from 'vuex';

  export default {
    components: {
      CollectionIcon,
      PlusIcon,
      // XIcon,
      HeaderButton,
    },

    data() {
      return {
        showMenu: false,
      };
    },

    computed: {
      ...mapGetters(['tabs', 'currentTab']),
    },

    mounted() {
      // prevent click outside event with popupItem.
      this.popupItem = this.$el;
    },

    methods: {
      toggleMenu() {
        if (this.showMenu) {
          this.showMenu = false;
        } else {
          this.showMenu = true;
        }
      },

      onClickTab({ uid }) {
        this.$store.commit(
          'SET_ACTIVE_TAB',
          this.tabs.findIndex((tab) => tab.uid === uid)
        );
        this.showMenu = false;
      },

      onClickAddTab() {
        this.$store.commit('SET_TAB', {
          uid: uuidv4(),
          label: 'Home',
          view: 'home-view',
        });
      },

      // onClickCloseTab({ uid }) {
      //   const tabs = this.tabs.filter(
      //     (tab) => tab.uid !== uid
      //   );
      //   this.$store.commit('SET_TABS', tabs);
      //   this.$store.commit('SET_ACTIVE_TAB', 0);
      // },
    },

    directives: {
      ClickOutside,
    },
  };
</script>
