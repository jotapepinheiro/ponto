<template>
  <section class="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <Counter
        :year="2020"
        :month="7"
        :date="9"
        :hour="18"
        :minute="27"
        :second="10"
        :millisecond="10"
      />
      <PontoGrid />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue'
import PontoGrid from '@/components/PontoGrid.vue'

export default {
  name: 'Home',
  components: {
    Counter,
    PontoGrid,
  },
}
</script>

<style scoped></style>
