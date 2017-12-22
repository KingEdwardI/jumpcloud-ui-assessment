import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import config from '../../conf'
import createLogger from './logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  todos: []
}

const getters = {
}

const actions = {
  fetchTodos (ctx) {
    let url = config.api_url + '/api/todos'
    axios.get(url)
      .then(res => {
        ctx.commit('setTodos', res.data)
      })
      .catch((err) => {
        console.error('Failed To Get All Todos', err)
      })
  },
  createTodo (ctx, todo) {
    let url = config.api_url + '/api/todos'
    axios.post(url, todo)
      .then((res) => {
        ctx.commit('addTodo', res.data)
      })
      .catch((err) => {
        console.error('Failed To Create Todo', err)
      })
  },
  changeTodo (ctx, todo) {
    let url = config.api_url + '/api/todos/' + todo.id
    axios.put(url, todo)
      .then((res) => {
        ctx.commit('updateTodo', res.data)
      })
  },
  deleteTodo (ctx, id) {
    let url = config.api_url + '/api/todos/' + id
    axios.delete(url)
      .then((res) => {
        ctx.commit('removeTodo', id)
      })
  }
}

const mutations = {
  setTodos (state, todos) {
    state.todos = todos
  },
  addTodo (state, todo) {
    state.todos.push(todo)
  },
  updateTodo (state, newTodo) {
    let prevIndex = state.todos.findIndex(t => t.id === newTodo.id)
    let newState = [
      ...state.slice(0, prevIndex),
      newTodo,
      ...state.slice(prevIndex + 1)
    ]
    state = newState
  },
  removeTodo (state, id) {
    state = state.todos.filter(t => t.id !== id)
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
