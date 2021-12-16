<template>
  <aside
    class="absolute bottom-4 left-0 right-0 flex justify-center"
  >
    <div
      class="bg-gray-500 bg-opacity-20 backdrop-filter backdrop-blur-2xl px-6 py-4 rounded-xl shadow-2xl flex space-x-4"
    >
      <!-- Explorer -->
      <div
        class="relative group flex flex-col items-center justify-center"
      >
        <div
          class="absolute -top-14 transform -translate-x-3 px-3 py-1 rounded-md bg-gray-500 bg-opacity-20 backdrop-filter backdrop-blur-2xl text-white text-sm hidden group-hover:block"
        >
          Explorer
        </div>
        <img
          class="h-10 cursor-pointer transform hover:scale-105 transition-transform duration-100"
          src="/explorer.png"
          alt="Explorer Logo"
          @click="onClickExplorer"
        />
      </div>

      <!-- Divider -->
      <div class="border-l border-gray-700"></div>

      <!-- GitHub -->
      <div class="relative group">
        <div
          class="absolute -top-14 transform -translate-x-4 px-3 py-1 rounded-md bg-gray-500 bg-opacity-20 backdrop-filter backdrop-blur-2xl text-white text-sm hidden group-hover:block"
        >
          Repository
        </div>
        <img
          class="h-12 cursor-pointer transform hover:scale-105 transition-transform duration-100"
          src="/github.png"
          alt="Explorer Logo"
          @click="onClickRepository"
        />
      </div>
    </div>
  </aside>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['minimized']),
    },

    methods: {
      onClickExplorer() {
        this.$store.commit(
          'SET_MINIMIZED',
          !this.minimized
        );
      },

      onClickRepository() {
        window.open(
          'https://github.com/oezkancodes/vue-file-explorer',
          '_blank'
        );
      },
    },
  };
</script>
