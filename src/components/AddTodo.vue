<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 text-xs-center>
        <v-form v-on:submit="createTodo">
          <v-text-field
            label="Description"
            v-model="description"
            required
          ></v-text-field>
          <v-btn type="submit">Create</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import config from '../../config'
export default {
  name: 'add-todo',
  data () {
    return {
      description: ''
    }
  },
  methods: {
    createTodo: function (evt) {
      evt.preventDefault()
      let data = {
        description: this.description
      }
      let url = config.api_url + '/api/todos'
      let params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
      fetch(url, params).then((res) => res.text()).then((data) => console.log(data))
    }
  }
}
</script>

<style scoped>
</style>
