<template>
  <v-layout row>
    <v-flex xs9>
      <v-text-field
        single-line
        required
        v-model="todo.description"
        append-icon="fa-floppy-o"
        :append-icon-cb="updateTodo"
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
import config from '../../config'

export default {
  name: 'edit-todo',
  methods: {
    updateTodo () {
      let todo = this.todo
      let url = config.api_url + '/api/todos/' + todo.id
      let params = {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
      }
      fetch(url, params)
        .then(res => res.json())
        .then(data => console.log(data))
        // .then(() => location.reload())
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
