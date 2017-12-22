<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 text-xs-center>
        <v-form v-on:submit.prevent="createTodo">
          <v-text-field
            single-line
            label="Description"
            v-model="description"
            required
          />
          <v-btn type="submit">Create</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import config from '../../conf'

export default {
  name: 'add-todo',
  data () {
    return {
      description: ''
    }
  },
  methods: {
    createTodo: function (evt) {
      let url = config.api_url + '/api/todos'
      let body = { description: this.description }
      axios.post(url, body)
        .then((res) => {
          console.log(res)
          location.reload()
        })
        .catch((err) => {
          console.error('Failed To Create Todo', err)
        })
    }
  }
}
</script>

<style scoped>
</style>
