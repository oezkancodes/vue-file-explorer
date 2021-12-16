<template>
  <aside
    class="flex-shrink-0 p-2 w-52 border-r border-gray-700 flex flex-col space-y-1 overflow-y-auto"
  >
    <MainNavigationButton
      v-for="item in items"
      :key="item.label"
      :item="item"
    />
  </aside>
</template>

<script>
  import MainNavigationButton from './MainNavigationButton.vue';

  export default {
    components: {
      MainNavigationButton,
    },

    data() {
      return {
        items: [
          {
            label: 'Home',
            iconComponent: 'HomeIcon',
            toView: 'home-view',
            icon: '/folder.png',
          },
          {
            label: 'Favourites',
            iconComponent: 'StarIcon',
            icon: '/star.png',
            subItems: [
              {
                label: 'Desktop',
                toView: 'desktop-view',
                icon: '/folder.png',
              },
            ],
          },
          {
            label: 'Cloud',
            icon: '/cloud.png',
            iconComponent: 'CloudIcon',
            subItems: [
              {
                label: 'OneDrive',
                toView: 'cloud-view',
                icon: '/folder.png',
              },
            ],
          },
        ],
      };
    },
  };
</script>
