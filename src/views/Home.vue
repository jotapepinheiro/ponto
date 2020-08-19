<template>
  <section class="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <div class="px-2 mt-6">
        <div class="flex -mx-2">
          <div class="w-1/2 px-2">
            <div class="h-12">
              <div class="rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <Counter
                    :year="2020"
                    :month="7"
                    :date="9"
                    :hour="18"
                    :minute="27"
                    :second="10"
                    :millisecond="10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/2 px-2">
            <div class="h-12">
              <PontoGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
    <VueTailwindPicker
      :theme="{
        background: '#1A202C',
        text: 'text-white',
        border: 'border-gray-700',
        currentColor: 'text-gray-200',
        navigation: {
          background: 'bg-gray-800',
          hover: 'hover:bg-gray-700',
          focus: 'bg-gray-700',
        },
        picker: {
          rounded: 'rounded-md',
          selected: {
            background: 'bg-teal-400',
            border: 'border-teal-400',
            hover: 'hover:border-teal-400',
          },
          holiday: 'text-red-400',
          weekend: 'text-green-400',
          event: 'bg-blue-500',
        },
        event: {
          border: 'border-gray-700',
        },
      }"
      @change="v => (checkin = v)"
    >
      <input type="text" v-model="checkin" />
    </VueTailwindPicker>

    <vue-timepicker
      v-model="yourTimeValue"
      format="HH:mm"
      :hour-range="[[7, 23]]"
      hide-disabled-hours
      autocomplete="on"
      manual-input
      auto-scroll
      @input="inputHandler"
    ></vue-timepicker>
  </section>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue'
import PontoGrid from '@/components/PontoGrid.vue'
import VueTailwindPicker from 'vue-tailwind-picker'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'

export default {
  name: 'Home',
  components: {
    Counter,
    PontoGrid,
    VueTailwindPicker,
    VueTimepicker,
  },
  data() {
    return {
      checkin: '',
      yourTimeValue: '',
    }
  },
  methods: {
    inputHandler(eventData) {
      console.log(eventData)
    },
  },
}
</script>

<style scoped></style>
