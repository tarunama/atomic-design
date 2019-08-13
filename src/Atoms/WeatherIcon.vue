<template>
  <img :src="iconPath" />
</template>

<script>
export default {
  name: 'WeatherIcon',
  props: {
    wData: {
      type: Object,
      required: false
    }
  },
  computed: {
    iconPath () {
      if (!this.wData) return

      const iconName = this.wData.data.daily.icon
      const iconPath = require(`@/assets/img/icon/${iconName}.png`)
      return iconPath
    }
  }
}
</script>
