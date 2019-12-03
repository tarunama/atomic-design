<template>
  <v-app-bar app>
    <VHeaderTitle></VHeaderTitle>
    <v-spacer></v-spacer>
    <LatestButton></LatestButton>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import VHeaderTitle from "@/Organisms/VHeaderTitle.vue";
import LatestButton from "@/Atoms/LatestButton.vue";

@Component({
  components: {
    LatestButton,
    VHeaderTitle
  }
})
@Component
export default class Header extends Vue {}
</script>
