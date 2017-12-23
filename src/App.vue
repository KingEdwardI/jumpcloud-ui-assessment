<template>
  <v-app dark>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12 text-xs-center>
            <p class="display-3"> Hello JumpCloud </p>
          </v-flex>
        </v-layout>
      </v-container>
      <message-box/>
      <add-todo/>
      <todo-list/>
    </v-content>
  </v-app>
</template>

<script>
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import MessageBox from './components/MessageBox'

export default {
  name: 'app',
  components: {
    AddTodo,
    TodoList,
    MessageBox
  }
}
</script>

<style>
* {
  font-family: 'Exo', sans-serif;
}
</style>
