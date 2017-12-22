<template>
  <v-container>
    <v-layout row v-for="todo in todos" :key="JSON.stringify(todo)">
      <v-flex xs11>
        <v-list-tile-title v-text="todo.description"/>
      </v-flex>
      <v-flex xs1>
        <v-checkbox v-model="todo.done"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import config from '../../config'

export default {
  name: 'todo-list',
  data () {
    return {
      todos: []
    }
  },
  created () {
    this.getTodos()
  },
  methods: {
    getTodos: function () {
      let url = config.api_url + '/api/todos'
      try {
        fetch(url).then((res) => res.json()).then((data) => { this.todos = data })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
