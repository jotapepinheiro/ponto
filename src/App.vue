<template>
  <div
    id="app"
    class="bg-background-secondary h-screen content-wrapper"
    :class="theme"
  >
    <navbar @newTheme="updateTheme" />
    <router-view class="pt-20" />
  </div>
</template>

<script>
import navbar from '@/components/NavBar'

export default {
  components: {
    navbar,
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
