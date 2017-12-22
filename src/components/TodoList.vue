<template>
  <v-container>
    <template v-for="todo in todos">
      <todo-line-item :todo="todo" :key="JSON.stringify(todo)"/>
    </template>
  </v-container>
</template>

<script>
import axios from 'axios'
import config from '../../conf'
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
      axios.get(url)
        .then((res) => {
          this.todos = res.data
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
  components: {
    TodoLineItem
  }
}
</script>

<style scoped>
</style>
