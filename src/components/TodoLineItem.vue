<template>
  <edit-todo :todo="todo" @cancel="editing = false" v-if="editing"/>
  <v-layout row v-else>
    <v-flex xs9>
      <p class="title" v-text="todo.description"/>
    </v-flex>
    <v-flex xs1>
      <i class="fa fa-2x fa-pencil" @click="editing = true"/>
    </v-flex>
    <v-flex xs1/>
    <v-flex xs1>
      <v-checkbox v-model="todo.done" @click="toggleTodo"/>
    </v-flex>
  </v-layout>
</template>

<script>
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
      let td = this.todo
      td.done = !td.done
      this.$store.dispatch('changeTodo', td)
    }
  },
  components: { EditTodo },
  props: ['todo']
}
</script>

<style scoped>
</style>
