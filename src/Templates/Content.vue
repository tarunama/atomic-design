<template>
  <v-content>
    <WeatherIcon
      :wData="wData"
    ></WeatherIcon>
  </v-content>
</template>

<script>
import WeatherIcon from '@/Atoms/WeatherIcon'

export default {
  name: 'Content',
  components: {
    WeatherIcon
  },
  props: {
    wData: {
      type: Object,
      required: false
    }
  }
}
</script>
