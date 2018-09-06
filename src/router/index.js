import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/components/Index'
import Index from '@/components/public/index/Index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path:'/index',
    //   name:'Index',
    //   component:Index
    // }
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
