<template>
  <v-btn
    text
    href="https://github.com/vuetifyjs/vuetify/releases/latest"
    target="_blank"
  >
    <Label
      :classList="'mr-2'"
      :text="'Latest Release'"
    >
    </Label>
  </v-btn>
</template>

<script>
import Label from '@/Atoms/Label'

export default {
  name: 'LatestButton',
  components: {
    Label
  }
}
</script>
