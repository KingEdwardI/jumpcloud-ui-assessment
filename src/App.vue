<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12 text-xs-center>
            <p class="display-4"> Hello JumpCloud </p>
          </v-flex>
        </v-layout>
      </v-container>
      <add-todo/>
      <todo-list/>
    </v-content>
  </v-app>
</template>

<script>
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    AddTodo,
    TodoList
  }
}
</script>

<style>
* {
  font-family: 'Exo', sans-serif;
}
</style>
