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
export default {
  name: 'edit-todo',
  data () {
    return {
      // make a copy of the todo passed to the component so it doesn't poke the parent component and cause an unecessary re-render
      todo_: JSON.parse(JSON.stringify(this.todo))
    }
  },
  methods: {
    updateTodo () {
      this.$store.dispatch('changeTodo', this.todo_)
      this.cancel()
    },
    deleteTodo (id) {
      this.$store.dispatch('deleteTodo', id)
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
