<template>
  <v-app>
    <Header></Header>
    <Content :wData="wData"></Content>
    <Loading :loading="loading"></Loading>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "@/Templates/Header.vue";
import Content from "@/Templates/Content.vue";
import Loading from "@/Templates/Loading.vue";
import axios from "axios";

@Component({
  components: {
    Content,
    Header,
    Loading
  }
})
@Component
export default class Top extends Vue {
  wData: Object = {};
  loading: Boolean = true;

  mounted() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(this.getWeatherInfo);
    } else {
      // HACKME: richなdialogを出す
      alert("このブラウザでは位置情報を取得できません");
    }
  }

  async getWeatherInfo(position: any) {
    // TODO: envごと対応
    const apiURL = "http://127.0.0.1:3000";
    const param = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    try {
      const { data } = await axios.post(`${apiURL}/weather`, param);
      this.loading = false;
      this.wData = data;
    } catch (err) {
      console.error(err);
      alert("情報を取得できませんでした");
    }
  }
}
</script>
