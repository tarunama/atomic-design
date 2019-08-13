<template>
  <v-app>
    <Header></Header>
    <Content></Content>
    <Loading
      :loading="loading"
    ></Loading>
  </v-app>
</template>

<script>
import Header from '@/Organisms/Header'
import Content from '@/Templates/Content'
import Loading from '@/Templates/Loading'

export default {
  name: 'Top',
  components: {
    Content,
    Header,
    Loading
  },
  data () {
    return {
      wData: null,
      loading: true
    }
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
        const { data } = await this.$_axios.post(`${apiURL}/weather`, param)
        this.loading = false
        this.wData = data
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
