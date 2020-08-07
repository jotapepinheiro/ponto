<template>
  <nav
    class="bg-background-primary content-wrapper flex fixed w-full items-center justify-between px-6 h-16 text-gray-700 border-b border-border-color-primary z-10"
    :class="theme"
  >
    <div class="flex items-center">
      <button class="mr-2" aria-label="Open Menu" @click="drawer">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <img src="../assets/logos/fox-hub.png" alt="Logo" class="h-auto w-24" />
    </div>
    <div class="flex items-center">
      <div class="hidden md:block md:flex md:justify-between md:bg-transparent">
        <button
          title="Wishlist"
          class="text-copy-primary flex items-center p-3 font-medium mr-2 text-center bg-background-secondary rounded hover:bg-background-tertiary focus:outline-none focus:bg-background-tertiary"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6 mr-2"
          >
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
          <router-link to="/">Home</router-link>
        </button>

        <theme-switcher :theme="theme" @themeChanged="updateTheme" />

        <button
          class="text-copy-primary flex items-center p-3 font-medium mr-2 text-center bg-background-secondary rounded hover:bg-background-tertiary focus:outline-none focus:bg-background-tertiary"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>
        <button
          class="text-copy-primary flex items-cente p-3 font-medium mr-2 text-center bg-background-secondary rounded hover:bg-background-tertiary focus:outline-none focus:bg-background-tertiary"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
        <a
          rel="noopener"
          href="https://www.buymeacoffee.com/fayazahmed"
          target="_blank"
          title="Help me keep this site alive"
          class="flex items-center px-3 py-3 font-medium mr-2 text-center bg-orange-600 rounded text-white hover:bg-orange-700 focus:outline-none focus:bg-orange-400"
        >
          <img
            class="mr-2 h-6 w-auto"
            src="../assets/sidebar/bmc.svg"
            alt="Buy Me Coffee"
          />
          <p class="font-bold">
            <router-link to="/about">About</router-link>
          </p></a
        >
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="bg-background-secondary transform top-0 left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'theme translate-x-0' : 'theme -translate-x-full'"
    >
      <span
        @click="isOpen = false"
        class="flex w-full items-center p-4 border-b border-border-color-primary"
      >
        <img
          v-if="theme === 'theme-light'"
          src="../assets/logos/fox-hub.png"
          alt="Logo"
          class="h-auto w-32 mx-auto"
        />
        <img
          v-else
          src="../assets/logos/fox-hub.png"
          alt="Logo"
          class="h-auto w-32 mx-auto"
        />
      </span>
      <span
        @click="isOpen = false"
        class="text-copy-primary flex items-center p-4 hover:bg-background-tertiary hover:text-copy-hover"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
        </span>
        <span>Home</span></span
      >
      <span
        @click="isOpen = false"
        class="text-copy-primary flex items-center p-4 hover:bg-background-tertiary hover:text-copy-hover"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </span>
        <span>Trending Globally</span></span
      >
      <span
        @click="isOpen = false"
        class="text-copy-primary flex items-center p-4 hover:bg-background-tertiary hover:text-copy-hover"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </span>
        <span>Wishlist</span></span
      >
      <span
        @click="isOpen = false"
        class="text-copy-primary flex items-center p-4 hover:bg-background-tertiary hover:text-copy-hover"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </span>
        <span>About</span></span
      >
      <span
        @click="isOpen = false"
        class="text-copy-primary flex items-center p-4 hover:bg-background-tertiary hover:text-copy-hover"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </span>
        <span>Contact</span></span
      >
      <div class="fixed bottom-0 w-full">
        <button
          class="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="h-6 w-6 mr-2"
          >
            <path
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            ></path>
          </svg>
          <span>Share</span>
        </button>
        <a
          rel="noopener"
          class="flex items-center p-4 bg-orange-700 text-white "
          href="https://www.buymeacoffee.com/fayazahmed"
          target="_blank"
        >
          <img
            class="mr-2 h-8 w-auto"
            src="../assets/sidebar/bmc.svg"
            alt="Buy Me Coffee"
          />
          <p>
            <span class="font-bold">Buy me a Coffee</span>
            <br />
            <span class="text-sm text-white">Help me keep this site alive</span>
          </p>
        </a>
      </div>
    </aside>
  </nav>
</template>

<script>
import ThemeSwitcher from '../components/ThemeSwitcher'

export default {
  name: 'BavBar',
  components: {
    ThemeSwitcher,
  },
  data() {
    return {
      isOpen: false,
      theme: '',
    }
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
    updateTheme(theme) {
      this.theme = theme
      this.$emit('newTheme', theme)
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
    document.addEventListener('keydown', e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false
    })
  },
}
</script>

<style scoped></style>
