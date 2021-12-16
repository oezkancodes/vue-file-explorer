<template>
  <div>
    <button
      ref="item"
      class="w-full px-3 py-2 rounded-md flex items-center space-x-2 justify-between text-xs hover:bg-gray-600 hover:bg-opacity-25 focus:opacity-70 transition duration-100"
      :class="{
        'bg-gray-500 bg-opacity-25 font-medium': active,
      }"
      @click="onClickItem(item)"
    >
      <div class="flex items-center space-x-2">
        <img :src="item.icon" class="h-3.5 w-3.5" />
        <span v-text="item.label" />
      </div>

      <ChevronDownIcon
        v-if="item.subItems"
        class="w-4 h-4 self-end"
        :class="{ 'transform rotate-180': !collapsed }"
      />
    </button>

    <div v-if="!collapsed" class="">
      <button
        v-for="(subItem, index) in item.subItems"
        :key="subItem.key"
        ref="subItem"
        class="w-full pl-8 pr-3 py-2 rounded-md flex items-center space-x-2 text-xs hover:bg-gray-600 hover:bg-opacity-25 focus:opacity-70 transition duration-100"
        :class="{
          'bg-gray-500 bg-opacity-25 font-medium': active,
        }"
        @click="onClickSubItem(subItem, index)"
      >
        <img :src="subItem.icon" class="h-3.5 w-3.5" />
        <span v-text="subItem.label" />
      </button>
    </div>
  </div>
</template>

<script>
  import { ChevronDownIcon } from '@vue-hero-icons/solid';

  export default {
    components: {
      ChevronDownIcon,
    },

    props: {
      active: {
        type: Boolean,
        default: null,
      },
      item: {
        type: Object,
        required: true,
      },
    },

    data() {
      return {
        collapsed: false,
      };
    },

    methods: {
      onClickItem(item) {
        this.collapsed = !this.collapsed;
        this.$refs.item.blur();
        if (item.toView) {
          this.$store.dispatch('updateTab', {
            label: item.label,
            view: item.toView,
          });
        }
      },

      onClickSubItem(item, index) {
        this.$refs.subItem[index].blur();
        if (item.toView) {
          this.$store.dispatch('updateTab', {
            label: item.label,
            view: item.toView,
          });
        }
      },
    },
  };
</script>
