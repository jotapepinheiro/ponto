<template>
  <div
    id="app"
    class="bg-background-secondary h-screen content-wrapper"
    :class="theme"
  >
    <app-navbar @newTheme="updateTheme" />
    <router-view class="pt-20" />
  </div>
</template>

<script>
import appNavbar from '@/components/NavBar'

export default {
  name: 'MinhasHoras',
  components: {
    appNavbar,
  },
  data() {
    return {
      theme: localStorage.getItem('theme') || 'theme-light',
    }
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme
    },
  },
  computed: {
    // store getters
    alwaysOnTop() {
      return this.$store.getters.alwaysOnTop
    },
    notifications() {
      return this.$store.getters.notifications
    },
    os() {
      return this.$store.getters.os
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
