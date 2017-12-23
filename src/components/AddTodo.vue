<template>
  <v-container>
      <v-card light>
    <v-layout row wrap>
      <v-flex xs12 md7 offset-md2 text-xs-center>
        <v-form v-on:submit.prevent="createTodo">
          <v-text-field
            light
            single-line
            label="New Todo..."
            v-model="description"
            required
          />
        </v-form>
      </v-flex>
      <v-flex xs12 md1 text-xs-center pt-2>
        <v-btn @click="createTodo">Create</v-btn>
      </v-flex>
    </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'add-todo',
  data () {
    return {
      description: ''
    }
  },
  methods: {
    createTodo: function () {
      this.$store.dispatch('createTodo', { description: this.description })
    }
  }
}
</script>

<style scoped>
</style>
