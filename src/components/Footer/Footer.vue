<template>
  <footer
    class="bg-gray-800 p-2 border-t border-gray-700 flex justify-between"
  >
    <section></section>
    <section class="flex space-x-1">
      <FooterButton>
        <img class="h-4 w-4" src="/git.svg" alt="Git" />
      </FooterButton>
      <FooterButton>
        <img
          class="h-4 w-4"
          src="/onedrive.svg"
          alt="OneDrive"
        />
      </FooterButton>
    </section>
  </footer>
</template>

<script>
  import FooterButton from './FooterButton.vue';

  export default {
    components: { FooterButton },
  };
</script>
