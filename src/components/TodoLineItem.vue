<template>
  <edit-todo :todo="todo" @cancel="editing = false" v-if="editing"/>
  <v-layout row v-else>
    <v-flex xs10>
      <p class="title" v-text="todo.description"/>
    </v-flex>
    <v-flex xs1>
      <i class="fa fa-2x fa-pencil" @click="editing = true"/>
    </v-flex>
    <v-flex xs1>
      <v-checkbox v-model="todo.done" @click="toggleTodo"/>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import config from '../../conf'
import EditTodo from './EditTodo'

export default {
  name: 'todo-line-item',
  data () {
    return {
      editing: false
    }
  },
  methods: {
    toggleTodo () {
      let url = config.api_url + '/api/todos/' + this.todo.id
      let body = this.todo
      body.done = !body.done
      axios.put(url, body)
        .then((res) => {
          console.log(res)
        })
    }
  },
  components: { EditTodo },
  props: ['todo']
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
