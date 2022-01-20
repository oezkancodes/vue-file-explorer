<template>
  <div class="flex space-x-2">
    <div class="relative">
      <input
        v-click-outside="blur"
        v-model="input"
        ref="input"
        class="pl-3 pr-8 bg-gray-700 focus:bg-gray-900 placeholder-gray-400 border-b border-gray-400 rounded-md h-8 transition duration-100 outline-none"
        type="input"
        placeholder="Search"
        @click="focus = true"
      />
      <SearchIcon
        class="absolute right-3 top-2 w-4 h-4"
        @click="
          $refs.input.focus();
          focus = true;
        "
      />
      <div
        class="absolute top-9 right-0 left-0 p-4 bg-gray-800 bg-opacity-20 border border-gray-700 backdrop-filter backdrop-blur-xl z-40 rounded-md"
        v-if="focus && results.length > 0"
      >
        <component
          :is="result.to ? 'a' : 'div'"
          v-for="result in results"
          :key="result.to"
          class="px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 hover:bg-opacity-50 rounded-md cursor-pointer"
          :href="result.to"
          :target="result.to ? '_blank' : null"
          @click="onClickResult(result)"
        >
          <img class="h-3.5 w-3.5" :src="result.icon" />
          <span
            class="text-sm whitespace-nowrap overflow-hidden"
            v-text="result.name"
          ></span>
        </component>
      </div>
    </div>

    <button
      class="p-2 rounded-md transition duration-100 hover:bg-gray-600 hover:bg-opacity-25 focus:opacity-70"
      @click="onClickKalmiya"
    >
      <MicrophoneIcon
        class="w-4 h-4"
        :class="{ 'animate-pulse text-blue-400': kalmiya }"
      />
    </button>
  </div>
</template>

<script>
  import ClickOutside from 'vue-click-outside';

  import {
    SearchIcon,
    MicrophoneIcon,
  } from '@vue-hero-icons/outline';
  import { mapGetters } from 'vuex';

  export default {
    directives: {
      ClickOutside,
    },

    components: {
      SearchIcon,
      MicrophoneIcon,
    },

    data() {
      return {
        focus: false,
        input: '',
        items: [
          {
            name: 'Desktop',
            icon: '/folder.png',
            command: () => {
              this.$store.dispatch('updateTab', {
                label: 'Desktop',
                view: 'desktop-view',
              });
            },
          },
          {
            name: 'OneDrive',
            icon: '/folder.png',
            command: () => {
              this.$store.dispatch('updateTab', {
                label: 'OneDrive',
                view: 'cloud-view',
              });
            },
          },
          {
            name: '01.1 Themenvorschlag Interaktive Datenvisualisierung',
            icon: '/pdf.png',
            to: 'https://github.com/oezkancodes/IFD/blob/main/Aufgaben/01-User_Experience_Design/Themenvorschlag.pdf',
          },
          {
            name: '01.2 Moodboard Interaktive Datenvisualisierung',
            icon: '/pdf.png',
            to: 'https://github.com/oezkancodes/IFD/blob/main/Aufgaben/01-User_Experience_Design/Moodboard.pdf',
          },
          {
            name: '02 Low-Fid Prototype',
            icon: '/image.png',
            to: 'https://github.com/oezkancodes/IFD/blob/main/Aufgaben/02-Prototyping/low-fid-prototype.png',
          },
          {
            name: 'Wallpaper',
            icon: '/image.png',
            to: '/background.jpg',
          },
          {
            name: '07 User Test',
            icon: '/pdf.png',
            to: 'https://github.com/oezkancodes/IFD/blob/main/Aufgaben/07-User_Testing/User_Testing.pdf',
          },
          {
            name: '08 Dokumentation',
            icon: '/pdf.png',
            to: 'https://github.com/oezkancodes/IFD/blob/main/Aufgaben/08-Prototype_Enhancement/Dokumentation.pdf',
          },
        ],
      };
    },

    computed: {
      ...mapGetters(['kalmiya']),

      results() {
        return this.items.filter((item) => {
          return item.name
            .toLowerCase()
            .includes(this.input.toLowerCase());
        });
      },
    },

    mounted() {
      // prevent click outside event with popupItem.
      this.popupItem = this.$el;
    },

    methods: {
      playSound() {
        const audio = new Audio('/kalmiya-sound.mp3');
        audio.play();
      },

      async onClickKalmiya() {
        if (!this.kalmiya) {
          this.input = '';
          this.focus = false;
          this.$refs.input.blur();

          let timeout;

          this.playSound();
          this.$store.commit('SET_KALMIYA', true);
          const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

          const recognition = new SpeechRecognition();
          recognition.lang = 'de-DE';

          recognition.start();

          timeout = setTimeout(() => {
            if (this.kalmiya) {
              this.kalmiyaSeech(
                'Leider habe ich dich nicht verstanden.'
              );
              this.$store.commit('SET_KALMIYA', false);
              recognition.stop();
            }
          }, 5000);

          recognition.onresult = (event) => {
            const transcript =
              event.results[0][0].transcript;
            const results = this.items.filter((item) =>
              item.name
                .toLowerCase()
                .includes(transcript.toLowerCase())
            );
            if (results.length > 0) {
              this.kalmiyaSeech('Suche nach ' + transcript);
              this.input = transcript;
              this.$refs.input.click();
            } else {
              this.kalmiyaSeech(
                'Keine Ergebnisse für ' + transcript
              );
            }
          };

          recognition.onspeechend = () => {
            this.playSound();
            clearTimeout(timeout);
            this.$store.commit('SET_KALMIYA', false);
            recognition.stop();
          };
        }
      },

      kalmiyaSeech(text) {
        const speech = new SpeechSynthesisUtterance();
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        speech.text = text;

        window.speechSynthesis.speak(speech);
      },

      onClickResult(result) {
        this.input = '';
        this.blur();
        if (result.command) {
          result.command();
        }
      },

      blur() {
        this.$refs.input.blur();
        this.focus = false;
      },
    },
  };
</script>
