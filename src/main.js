// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import {store} from './stores'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueLocalStorage from 'vue-localstorage'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueLocalStorage)
Vue.use(VueResource)
Vue.component('icon', Icon)

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
  created () {
    this.$store.dispatch('user/init')
  }
})
