<template>
  <div class="p-4">
    <section class="mb-6">
      <p class="mb-2 text-sm font-medium">Folder</p>
      <div class="flex">
        <div
          ref="button"
          tabindex="0"
          class="px-8 py-3 border border-gray-700 bg-gray-500 bg-opacity-20 hover:bg-opacity-30 focus:bg-opacity-25 rounded-md transition duration-100 flex flex-col items-center space-y-2"
          @click="
            $refs.button.blur();
            onClickDesktop();
          "
        >
          <img class="h-8" src="/folder.png" />
          <span class="text-sm">Desktop</span>
        </div>
      </div>
    </section>
    <section>
      <p class="mb-2 text-sm font-medium">Used last</p>
      <div class="flex space-x-2">
        <div
          ref="button"
          tabindex="0"
          class="px-8 py-3 border border-gray-700 bg-gray-500 bg-opacity-20 hover:bg-opacity-30 focus:bg-opacity-25 rounded-md transition duration-100 flex flex-col items-center space-y-1"
          @click="
            $refs.button.blur();
            onClickDesktop();
          "
        >
          <img class="h-8" src="/folder.png" />
          <span class="text-sm">Desktop</span>
        </div>
        <div
          ref="button"
          tabindex="0"
          class="px-8 py-3 border border-gray-700 bg-gray-500 bg-opacity-20 hover:bg-opacity-30 focus:bg-opacity-25 rounded-md transition duration-100 flex flex-col items-center space-y-1"
          @click="
            $refs.button.blur();
            onClickCloud();
          "
        >
          <img class="h-8" src="/folder.png" />
          <span class="text-sm">OneDrive</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['tabs', 'activeTab']),
    },

    methods: {
      onClickDesktop() {
        this.$store.dispatch('updateTab', {
          label: 'Desktop',
          view: 'desktop-view',
        });
      },

      onClickCloud() {
        this.$store.dispatch('updateTab', {
          label: 'OneDrive',
          view: 'cloud-view',
        });
      },
    },
  };
</script>
