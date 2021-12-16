<template>
  <button
    ref="button"
    class="p-2 rounded-md transition duration-100"
    :class="[
      { 'opacity-30 cursor-default': disabled },
      {
        'hover:bg-gray-600 hover:bg-opacity-25 focus:opacity-70':
          !disabled,
      },
    ]"
    @click="onClickButton"
  >
    <slot name="default" />
  </button>
</template>

<script>
  export default {
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
    },

    methods: {
      onClickButton() {
        this.$emit('click');
        this.$refs.button.blur();
      },
    },
  };
</script>

<style scoped>
  button svg {
    @apply w-4 h-4;
  }
</style>
