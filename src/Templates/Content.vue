<template>
  <v-content>
    <WeatherIcon :wData="wData"></WeatherIcon>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import WeatherIcon from "@/Atoms/WeatherIcon.vue";

@Component({
  components: {
    WeatherIcon
  }
})
@Component
export default class Content extends Vue {
  @Prop()
  wData!: Object;
}
</script>
