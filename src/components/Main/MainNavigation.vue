<template>
  <aside
    class="flex-shrink-0 p-2 w-52 border-r border-gray-700 flex flex-col space-y-1 overflow-y-auto"
  >
    <MainNavigationButton label="Desktop" active />
    <MainNavigationButton label="Downloads" />
  </aside>
</template>

<script>
  import MainNavigationButton from './MainNavigationButton.vue';

  export default {
    components: {
      MainNavigationButton,
    },
  };
</script>
