<template>
  <v-container
    style="height: 400px;"
    v-if="loading"
  >
    <v-row
      class="fill-height"
      align-content="center"
      justify="center"
    >
      <v-col
        class="subtitle-1 text-center"
        cols="12"
      >
        Loading
      </v-col>
      <v-col cols="6">
        <v-progress-linear
          color="deep-purple accent-4"
          :active="loading"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loading: {
      type: Boolean,
      required: true,
      default: true
    }
  }
}
</script>
