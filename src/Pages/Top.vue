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
      navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const apiURL = process.env.VUE_APP_DARK_SKY_API_URL

        try {
          const res = await this.$_axios.get(`${apiURL}${lat},${lon}`)
          console.log(res)
        } catch (err) {
          // TODO: わかりやすいlogを出力するようにする
          console.error(err)
        }
      })
    } else {
      // HACKME: richなdialogを出す
      alert('このブラウザでは位置情報を取得できません')
    }
  }
}
</script>
