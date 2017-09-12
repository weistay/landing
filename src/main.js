// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHead from 'vue-head'
import VueScrollTo from 'vue-scrollto'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

// Require the main Sass manifest file
require('./assets/sass/main.scss')

Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(VueScrollTo)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Icon }
})
