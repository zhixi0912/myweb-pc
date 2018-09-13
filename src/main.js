// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'
import App from './App'
import router from './router'
// 引用API文件
import api from './api/index.js'
import utils from './utils/index.js'
// import Header from './components/webHeader.vue'; //注册头部为全局组件时没有成功，待下次处理


Vue.use(ElementUI)
Vue.use(VueFullPage)
Vue.config.productionTip = false
Vue.config.devtools = true
// 将API方法绑定到全局
Vue.prototype.$api = api
Vue.prototype.$utils = utils
// Vue.component('webHeaderVue',Header);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
