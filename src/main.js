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
import store from './store'
// 引用API文件
import axios from './api/index.js'
import utils from './utils/index.js'
import Header from './components/webHeader.vue'; //注册头部为全局组件
import Footer from './components/webFooter.vue'; //注册脚部为全局组件
// import AudioBox from './components/public/music/audio.vue'; //注册音乐播放器为全局组件

Vue.use(ElementUI)
Vue.use(VueFullPage)
Vue.config.productionTip = false
Vue.config.devtools = true
// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.prototype.$utils = utils
Vue.component('Header',Header);
Vue.component('Footer',Footer);
// Vue.component('AudioBox',AudioBox);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
