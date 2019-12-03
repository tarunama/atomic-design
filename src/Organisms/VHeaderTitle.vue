<template>
  <v-toolbar-title class="headline text-uppercase">
    <Label :class="'font-weight-light'" :text="'tenki-beta'"></Label>
  </v-toolbar-title>
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
export default class VHeaderTitle extends Vue {}
</script>
