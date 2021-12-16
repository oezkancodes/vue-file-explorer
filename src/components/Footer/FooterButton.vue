<template>
  <div class="relative">
    <button
      class="p-2.5 hover:bg-gray-700 rounded-md transition duration-100 text-xs"
      @click="toggleMenu"
    >
      <slot name="default" />
    </button>

    <div
      v-if="showMenu"
      class="absolute top-9 right-0 p-4 bg-gray-800 bg-opacity-30 border border-gray-800 backdrop-filter backdrop-blur-xl rounded-md"
      v-click-outside="toggleMenu"
    >
      <slot name="menu" />
    </div>
  </div>
</template>

<script>
  import ClickOutside from 'vue-click-outside';

  export default {
    directives: {
      ClickOutside,
    },

    data() {
      return {
        showMenu: false,
      };
    },

    methods: {
      toggleMenu() {
        if (this.showMenu) {
          this.showMenu = false;
        } else {
          this.showMenu = true;
        }
      },
    },

    mounted() {
      // prevent click outside event with popupItem.
      this.popupItem = this.$el;
    },
  };
</script>
