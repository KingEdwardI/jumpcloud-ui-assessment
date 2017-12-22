<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs7 offset-xs2 text-xs-center>
        <v-form v-on:submit.prevent="createTodo">
          <v-text-field
            single-line
            label="New Todo..."
            v-model="description"
            required
          />
        </v-form>
      </v-flex>
      <v-flex xs1>
        <v-btn @click="createTodo">Create</v-btn>
      </v-flex>
    </v-layout>
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
