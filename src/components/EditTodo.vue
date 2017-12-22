<template>
  <v-layout row>
    <v-flex xs9 @keyup.enter="updateTodo">
      <v-text-field
        single-line
        required
        v-model="todo_.description"
        append-icon="fa-floppy-o"
        :append-icon-cb="updateTodo"
        name="edit"
        label="Todo..."
      />
    </v-flex>
    <v-flex xs1 offset-xs1>
      <i class="fa fa-2x fa-pencil" @click="cancel"/>
    </v-flex>
    <v-flex xs1>
      <i class="fa fa-2x fa-times-circle" @click="deleteTodo(todo.id)"/>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import config from '../../conf'

export default {
  name: 'edit-todo',
  data () {
    return {
      todo_: JSON.parse(JSON.stringify(this.todo))
    }
  },
  methods: {
    log (msg, evt) {
      console.log(msg)
      console.log(evt)
    },
    updateTodo () {
      let url = config.api_url + '/api/todos/' + this.todo.id
      let body = this.todo_
      axios.put(url, body)
        .then((res) => {
          console.log(res)
          this.$emit('cancel')
        })
    },
    deleteTodo (id) {
      let url = config.api_url + '/api/todos/' + id
      axios.delete(url)
        .then((res) => {
          console.log(res)
          location.reload()
        })
    },
    cancel () {
      this.$emit('cancel')
    }
  },
  props: ['todo']
}
</script>

<style scoped>
</style>
