<template>
  <v-btn
    text
    href="https://github.com/vuetifyjs/vuetify/releases/latest"
    target="_blank"
  >
    <Label :classList="'mr-2'" :text="'Latest Release'"> </Label>
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Label from "@/Atoms/Label.vue";

@Component({
  components: {
    Label
  }
})
@Component
export default class LatestButton extends Vue {}
</script>
