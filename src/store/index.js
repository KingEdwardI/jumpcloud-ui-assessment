import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import config from '../../conf'
import createLogger from './logger'

Vue.use(Vuex)

const generateError = (error) => {
  return `${error.response.data}. <br/> 
          Reason: ${error.message}. <br/>
          Error: ${error.response.statusText}`
}

const debug = process.env.NODE_ENV !== 'production'

const state = {
  todos: [],
  error: {
    isShowing: false,
    message: ''
  }
}

const getters = {
  doneCount (state) {
    return state.todos.filter(todo => todo.done).length
  }
}

const actions = {
  fetchTodos (ctx) {
    let url = config.api_url + '/api/todos'
    axios.get(url)
      .then(res => {
        ctx.commit('setTodos', res.data)
      })
      .catch((error) => {
        console.error('Failed To Get All Todos', error.response)
        ctx.commit('displayError', generateError(error))
      })
  },
  createTodo (ctx, todo) {
    let url = config.api_url + '/api/todos'
    axios.post(url, todo)
      .then((res) => {
        ctx.commit('addTodo', res.data)
      })
      .catch((error) => {
        console.error('Failed To Create Todo', error.message)
        ctx.commit('displayError', generateError(error))
      })
  },
  changeTodo (ctx, todo) {
    let url = config.api_url + '/api/todos/' + todo.id
    axios.put(url, todo)
      .then((res) => {
        ctx.commit('updateTodo', res.data)
      })
      .catch((error) => {
        console.error('Failed To Update Todo', error)
        ctx.commit('displayError', generateError(error))
      })
  },
  deleteTodo (ctx, id) {
    let url = config.api_url + '/api/todos/' + id
    axios.delete(url)
      .then((res) => {
        ctx.commit('removeTodo', id)
      })
      .catch((error) => {
        console.error('Failed To Delete Todo', error)
        ctx.commit('displayError', generateError(error))
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
    state.todos = state.todos.filter(t => t.id !== newTodo.id)
    state.todos.push(newTodo)
  },
  removeTodo (state, id) {
    state.todos = state.todos.filter(t => t.id !== id)
  },
  displayError (state, message) {
    state.error.isShowing = true
    state.error.message = message
  },
  hideError (state, message) {
    state.error.isShowing = false
    state.error.message = ''
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
