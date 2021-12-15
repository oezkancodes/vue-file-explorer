<template>
  <div
    class="w-48 rounded-md flex items-center group cursor-pointer transition duration-100"
    :class="[
      { 'bg-gray-700': active },
      { 'hover:bg-gray-700 hover:bg-opacity-50': !active },
    ]"
  >
    <div
      class="px-3 py-2 flex items-center space-x-2 w-full"
      @click="onClickTab"
    >
      <!-- Icon -->
      <FolderIcon class="w-5 h-5" />

      <!-- Label -->
      <span class="text-xs">
        <span v-text="tab.label" />
      </span>
    </div>

    <!-- Close Tab -->
    <div
      v-if="tabs.length > 1"
      class="p-2"
      @click="onClickClose"
    >
      <XIcon
        class="w-4 h-4 opacity-0 group-hover:opacity-100 transition duration-100"
      />
    </div>
  </div>
</template>

<script>
  import { XIcon } from '@vue-hero-icons/outline';
  import { FolderIcon } from '@vue-hero-icons/solid';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      FolderIcon,
      XIcon,
    },

    props: {
      tab: {
        type: Object,
        required: true,
      },
    },

    computed: {
      ...mapGetters(['tabs', 'activeTab']),

      index() {
        return this.tabs.findIndex(
          (tab) => tab.uid === this.tab.uid
        );
      },

      active() {
        return this.index === this.activeTab;
      },
    },

    methods: {
      onClickTab() {
        const index = this.tabs.findIndex(
          (tab) => tab.uid === this.tab.uid
        );
        this.$store.commit('SET_ACTIVE_TAB', index);
      },

      onClickClose() {
        const tabs = this.tabs.filter(
          (tab) => tab.uid !== this.tab.uid
        );
        this.$store.commit('SET_TABS', tabs);
        this.$store.commit('SET_ACTIVE_TAB', 0);
      },
    },
  };
</script>
