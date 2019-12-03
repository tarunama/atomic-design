<template>
  <span :class="classList">{{ text }}</span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Label extends Vue {
  @Prop()
  classList!: string;

  @Prop()
  text!: string;
}
</script>
