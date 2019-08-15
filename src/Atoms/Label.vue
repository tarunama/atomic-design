<template>
  <span :class="classList">{{ text }}</span>
</template>

<script>
export default {
  name: 'Label',
  props: {
    classList: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    }
  }
}
</script>
