<template>
  <div
    class="absolute top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300"
    :class="
      kalmiya
        ? 'opacity-100 visible'
        : 'opacity-0 invisible'
    "
  >
    <div
      class="rounded-full h-16 w-16 bg-gradient-to-br from-pink-600 to-blue-500 filter blur-sm animate-spin border-2 border-white"
    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['kalmiya']),
    },
  };
</script>
