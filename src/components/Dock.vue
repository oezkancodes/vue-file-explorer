<template>
  <aside
    class="absolute bottom-4 left-0 right-0 flex justify-center"
  >
    <div
      class="bg-gray-500 bg-opacity-20 backdrop-filter backdrop-blur-2xl p-4 rounded-xl shadow-2xl"
    >
      <img
        ref="explorer"
        class="w-14 h-14 cursor-pointer transform hover:scale-105 transition-transform duration-100"
        src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png"
        alt="Explorer Logo"
        @click="onClickExplorer"
      />
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
    },
  };
</script>
