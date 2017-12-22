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

const actions = {
  createTodo (ctx, todo) {
    let url = config.api_url + '/api/todos'
    axios.post(url, todo)
      .then((res) => {
        console.log(res)
        location.reload()
      })
      .catch((err) => {
        console.error('Failed To Create Todo', err)
      })
  }
}

const mutations = {
  addTodo (state, todo) {

  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
