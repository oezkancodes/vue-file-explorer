<template>
  <div
    class="p-2 border-b border-gray-700 flex items-center space-x-1"
  >
    <MainContentHeaderButton>
      <PlusCircleIcon />
      <span>New</span>
    </MainContentHeaderButton>

    <MainContentHeaderButton>
      <ScissorsIcon />
    </MainContentHeaderButton>

    <MainContentHeaderButton>
      <ClipboardIcon />
    </MainContentHeaderButton>

    <MainContentHeaderButton>
      <TrashIcon />
    </MainContentHeaderButton>
  </div>
</template>

<script>
  import {
    PlusCircleIcon,
    ScissorsIcon,
    ClipboardIcon,
    TrashIcon,
  } from '@vue-hero-icons/outline';
  import MainContentHeaderButton from './MainContentHeaderButton.vue';

  export default {
    components: {
      PlusCircleIcon,
      ScissorsIcon,
      ClipboardIcon,
      TrashIcon,
      MainContentHeaderButton,
    },
  };
</script>
