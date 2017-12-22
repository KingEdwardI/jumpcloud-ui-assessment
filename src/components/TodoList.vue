<template>
  <v-container>
    <template v-for="todo in todos">
      <todo-line-item :todo="todo" :key="JSON.stringify(todo)"/>
    </template>
  </v-container>
</template>

<script>
import request from 'request'
import config from '../../config'
import TodoLineItem from './TodoLineItem'

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
    getTodos () {
      let url = config.api_url + '/api/todos'
      try {
        request(url, (err, res, body) => {
          if (err) {
            console.error(err)
          }
          this.todos = JSON.parse(body)
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    TodoLineItem
  }
}
</script>

<style scoped>
</style>
