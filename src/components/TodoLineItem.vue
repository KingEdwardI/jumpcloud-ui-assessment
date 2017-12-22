<template>
  <edit-todo :todo="todo" @cancel="editing = false" v-if="editing"/>
  <v-layout row v-else>
    <v-flex xs10>
      <p class="title" v-text="todo.description"/>
    </v-flex>
    <v-flex xs1>
      <i class="fa fa-2x fa-pencil" @click="editing = !editing"/>
    </v-flex>
    <v-flex xs1>
      <v-checkbox v-model="todo.done" @change="updateTodo(todo.id, true)"/>
    </v-flex>
  </v-layout>
</template>

<script>
import config from '../../config'
import EditTodo from './EditTodo'

export default {
  name: 'todo-line-item',
  data () {
    return {
      editing: false
    }
  },
  methods: {
    deleteTodo (id) {
      let url = config.api_url + '/api/todos/' + id
      let params = {
        method: 'DELETE'
      }
      fetch(url, params)
        .then(res => res.text())
        .then(data => console.log(data))
        // .then(() => location.reload())
    }
  },
  components: {
    EditTodo
  },
  props: ['todo']
}
</script>

<style scoped>
</style>
