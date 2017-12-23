<template>
    <v-layout row full-width>
      <v-flex xs12>
        <v-alert color="error" icon="warning" value="true" v-if="isShowing" v-html="errorMessage"/>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'message-box',
  computed: {
    isShowing () {
      return this.$store.state.error.isShowing
    },
    errorMessage () {
      return this.$store.state.error.message
    }
  }
}
</script>

<style scoped>
</style>
