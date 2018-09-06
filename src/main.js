// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'
import App from './App'
import router from './router'

Vue.use(ElementUI)
Vue.use(VueFullPage)
Vue.config.productionTip = false
Vue.config.devtools = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
