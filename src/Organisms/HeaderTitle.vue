<template>
  <v-toolbar-title class="headline text-uppercase">
    <Label
      :class="'font-weight-light'"
      :text="'tenki-beta'"
    ></Label>
  </v-toolbar-title>
</template>

<script>
import Label from '@/Atoms/Label'

export default {
  name: 'HeaderTitle',
  components: {
    Label
  }
}
</script>
