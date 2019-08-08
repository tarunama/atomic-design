<template>
  <v-app-bar app>
    <HeaderTitle></HeaderTitle>
    <v-spacer></v-spacer>
    <LatestButton></LatestButton>
  </v-app-bar>
</template>

<script>
import HeaderTitle from '@/Atoms/HeaderTitle'
import LatestButton from '@/Atoms/LatestButton'

export default {
  name: 'Header',
  components: {
    LatestButton,
    HeaderTitle
  }
}
</script>
