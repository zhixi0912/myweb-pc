import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/components/Index'
import Index from '@/page/Index'
import Content from '@/page/Content'
import ContentList from '@/page/ContentList'

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
      component: Index,
      children:[
        {
          path: '../components/Content',
          name: 'Content',
          component: Content,
        },
        {
          path: '../components/ContentList/:id',
          name: 'ContentList',
          component: ContentList,
        }
      ]
    }
  ]
})
