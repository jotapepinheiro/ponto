<template>
  <div>
    <Counter
      :year="2020"
      :month="7"
      :date="5"
      :hour="18"
      :minute="27"
      :second="10"
      :millisecond="10"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue'

export default {
  name: 'Home',
  components: {
    Counter,
  },
}
</script>

<style lang="scss" scoped></style>
