// Imports
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHead from 'vue-head'
import VueScrollTo from 'vue-scrollto'
import VeeValidate from 'vee-validate';

// Require styles
require('font-awesome-sass-loader')
require('./assets/sass/main.scss')

// Config
Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(VueScrollTo)
Vue.use(VeeValidate)

// Launch
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
