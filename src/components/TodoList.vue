<template>
  <v-container elevation-12>
    <p class="header">Total Completed: {{ numDone }}</p>
    <hr class="mb-3"/>
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
      return JSON.parse(JSON.stringify(this.$store.state.todos)).sort((a, b) => a.id - b.id)
    },
    numDone: function () {
      return this.$store.getters.doneCount
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
