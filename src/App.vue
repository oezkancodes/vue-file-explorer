<template>
  <main
    id="app"
    class="min-h-screen p-2 overflow-hidden bg-gray-900 flex justify-center items-center bg-center bg-cover select-none"
  >
    <Explorer />
    <Dock />
  </main>
</template>

<script>
  import Dock from './components/Dock.vue';
  import Explorer from './components/Explorer.vue';

  export default {
    name: 'App',
    components: { Explorer, Dock },
  };
</script>

<style scoped>
  #app {
    background-image: url('/background.jpg');
  }
</style>
