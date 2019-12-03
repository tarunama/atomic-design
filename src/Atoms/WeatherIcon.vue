<template>
  <div class="weather">
    <img class="weather__icon" :src="iconPath" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class WeatherIcon extends Vue {
  @Prop()
  wData!: any;

  get iconPath() {
    if (!this.wData) return "";

    const iconName = this.wData.data.daily.icon;
    const iconPath = require(`@/assets/img/icon/${iconName}.png`);
    return iconPath;
  }
}
</script>

<style scoped>
/* TODO: sass */

.weather {
  display: flex;
  justify-content: center;
  padding-top: 33px;
}

.weather__icon {
  width: 33vw;
  height: 33vh;
}
</style>
