<template>
  <footer
    class="bg-gray-800 p-2 border-t border-gray-700 flex justify-between rounded-b-md"
  >
    <section></section>
    <section class="flex space-x-1">
      <FooterButton>
        <img class="h-4 w-4" src="/git.svg" alt="Git" />

        <p
          class="text-sm flex items-center space-x-1 w-32"
          slot="menu"
        >
          This folder contains no git data.
        </p>
      </FooterButton>
      <FooterButton>
        <img
          class="h-4 w-4"
          src="/onedrive.svg"
          alt="OneDrive"
          slot="default"
        />

        <div slot="menu">
          <p
            class="text-sm mb-2 flex items-center space-x-1"
          >
            <svg
              class="h-4 w-4 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <span> Not connected</span>
          </p>
          <a
            class="px-4 py-2 border border-gray-700 bg-gray-500 bg-opacity-20 hover:bg-opacity-30 focus:bg-opacity-25 rounded-md transition duration-100 text-sm flex items-center space-x-1.5 flex-nowrap whitespace-nowrap"
            href="https://onedrive.live.com/about/de-de/signin/"
            target="_blank"
          >
            <span>Connect OneDrive</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
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
