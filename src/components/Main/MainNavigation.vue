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
            label: 'Favourites',
            iconComponent: 'StarIcon',
            folders: [
              { label: 'Home' },
              { label: 'Desktop' },
            ],
          },
          {
            label: 'Cloud',
            iconComponent: 'CloudIcon',
            folders: [{ label: 'OneDrive' }],
          },
        ],
      };
    },
  };
</script>
