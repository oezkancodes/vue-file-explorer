<template>
  <div
    class="z-50 text-gray-50 rounded-md border border-gray-700 shadow-xl w-full max-w-4xl grid grid-cols-1 transition-all duration-200"
    :class="{
      'transform translate-y-full scale-x-0 opacity-0 invisible':
        minimized,
    }"
  >
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import Footer from './Footer/Footer.vue';
  import Header from './Header/Header.vue';
  import Main from './Main/Main.vue';

  export default {
    name: 'Explorer',

    components: { Main, Header, Footer },

    computed: {
      ...mapGetters(['minimized']),
    },
  };
</script>
