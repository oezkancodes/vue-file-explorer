<template>
  <div class="overflow-y-auto">
    <table class="table-auto w-full">
      <thead class="border-b border-gray-700">
        <tr class="text-left text-xs">
          <th class="p-2 pl-6">Name</th>
          <th class="p-2">Status</th>
          <th class="p-2 pr-6">Type</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
          :key="row.name"
          class="hover:bg-gray-600 hover:bg-opacity-25 focus:opacity-70 rounded-md m-2 text-sm cursor-pointer"
          @click="onClickRow(row)"
        >
          <td
            class="p-2 pl-6 flex items-center space-x-1.5"
          >
            <component :is="row.iconComponent" />
            <span v-text="row.name" />
          </td>
          <td class="p-2">
            <CloudIcon
              v-if="row.stream"
              class="text-blue-400"
            />
            <CheckCircleIcon
              v-else
              class="text-green-400"
            />
          </td>
          <td class="p-2 pr-6" v-text="row.type" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {
    PhotographIcon,
    CheckCircleIcon,
    DocumentIcon,
    CloudIcon,
  } from '@vue-hero-icons/solid';

  export default {
    components: {
      PhotographIcon,
      CheckCircleIcon,
      DocumentIcon,
      CloudIcon,
    },

    data() {
      return {
        rows: [
          {
            name: '#01.1 Themenvorschlag Interaktive Datenvisualisierung',
            type: 'PDF',
            stream: true,
            iconComponent: 'DocumentIcon',
            to: 'https://github.com/oezkancodes/IFD/blob/main/Aufgaben/01-User_Experience_Design/Themenvorschlag.pdf',
          },
          {
            name: '#01.2 Moodboard Interaktive Datenvisualisierung',
            type: 'PDF',
            stream: true,
            iconComponent: 'DocumentIcon',
            to: 'https://github.com/oezkancodes/IFD/blob/main/Aufgaben/01-User_Experience_Design/Moodboard.pdf',
          },
          {
            name: '#02 Low-Fid Prototype',
            type: 'PNG',
            stream: true,
            iconComponent: 'PhotographIcon',
            to: 'https://github.com/oezkancodes/IFD/blob/main/Aufgaben/02-Prototyping/low-fid-prototype.png',
          },
          {
            name: 'Wallpaper',
            type: 'JPEG',
            stream: false,
            iconComponent: 'PhotographIcon',
            to: '/background.jpg',
          },
          {
            name: '#07 User Test',
            type: 'PDF',
            stream: true,
            iconComponent: 'DocumentIcon',
            to: 'https://github.com/oezkancodes/IFD/blob/main/Aufgaben/07-User_Testing/User_Testing.pdf',
          },
        ],
      };
    },

    methods: {
      onClickRow({ to }) {
        window.open(to, '_blank');
      },
    },
  };
</script>

<style scoped>
  svg {
    @apply w-5 h-5;
  }
</style>
