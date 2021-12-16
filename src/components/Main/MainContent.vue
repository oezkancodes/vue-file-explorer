<template>
  <div class="w-full flex flex-col">
    <MainContentHeader />
    <Component :is="tabs[activeTab].view" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import MainContentHeader from './MainContentHeader.vue';
  import HomeView from '../Views/HomeView.vue';
  import CloudView from '../Views/CloudView.vue';
  import DesktopView from '../Views/DesktopView.vue';

  export default {
    components: {
      MainContentHeader,
      HomeView,
      CloudView,
      DesktopView,
    },

    computed: {
      ...mapGetters(['tabs', 'activeTab']),
    },
  };
</script>
