<template>
  <v-app>
    <Header></Header>
    <Content
      :wData="wData"
    ></Content>
    <Loading
      :loading="loading"
    ></Loading>
  </v-app>
</template>

<script>
import Header from '@/Templates/Header'
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
      // TODO: envごと対応
      const apiURL = 'http://127.0.0.1:3000'
      const param = { lat: position.coords.latitude, lon: position.coords.longitude }
      try {
        const { data } = await this.$_axios.post(`${apiURL}/weather`, param)
        this.loading = false
        this.wData = data
      } catch (err) {
        console.error(err)
        alert('情報を取得できませんでした')
      }
    }
  }
}
</script>
