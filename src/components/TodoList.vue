<template>
  <v-container>
    <template v-for="todo in todos">
      <todo-line-item :todo="todo" :key="JSON.stringify(todo)"/>
    </template>
  </v-container>
</template>

<script>
import TodoLineItem from './TodoLineItem'

export default {
  name: 'todo-list',
  computed: {
    todos: function () {
      return this.$store.state.todos
    }
  },
  created () {
    this.$store.dispatch('fetchTodos')
  },
  components: {
    TodoLineItem
  }
}
</script>

<style scoped>
</style>
