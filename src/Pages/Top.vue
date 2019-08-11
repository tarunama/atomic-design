<template>
  <v-app>
    <Header></Header>
    <Content></Content>
  </v-app>
</template>

<script>
import Header from '@/Organisms/Header'
import Content from '@/Templates/Content'

export default {
  name: 'Top',
  components: {
    Content,
    Header
  },
  mounted () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(this.getWeatherInfo)
    } else {
      // HACKME: richなdialogを出す
      alert('このブラウザでは位置情報を取得できません')
    }
  },
  methods: {
    async getWeatherInfo (position) {
      const apiURL = process.env.VUE_APP_API_URL
      const param = { lat: position.coords.latitude, lon: position.coords.longitude }
      try {
        const res = await this.$_axios.post(`${apiURL}/weather`, param)
        console.log(res)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
