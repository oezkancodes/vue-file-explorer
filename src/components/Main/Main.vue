<template>
  <div
    class="flex flex-row flex-nowrap h-96 bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-xl"
  >
    <MainNavigation />
    <MainContent />
  </div>
</template>

<script>
  import MainNavigation from './MainNavigation.vue';
  import MainContent from './MainContent.vue';

  export default {
    components: { MainNavigation, MainContent },
  };
</script>
