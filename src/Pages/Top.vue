<template>
  <v-app>
    <Header></Header>
    <Content></Content>
  </v-app>
</template>

<script>
import Header from './../Organisms/Header'
import Content from './../Templates/Content'

export default {
  name: 'Top',
  components: {
    Content,
    Header
  }
}
</script>
