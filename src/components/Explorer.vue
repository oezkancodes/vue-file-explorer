<template>
  <div
    class="text-gray-50 rounded-md border border-gray-700 shadow-xl overflow-hidden w-full max-w-4xl select-none grid grid-cols-1"
  >
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
  import Footer from './Footer/Footer.vue';
  import Header from './Header/Header.vue';
  import Main from './Main/Main.vue';

  export default {
    components: { Main, Header, Footer },
    name: 'Explorer',
  };
</script>
