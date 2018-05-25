import Vue from 'vue'
import Vuex from 'vuex'
import {app} from './app.store'
import {user} from './user.store'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    app,
    user
  }
})
