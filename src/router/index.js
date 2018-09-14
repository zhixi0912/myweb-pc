import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/components/Index'
import Index from '@/page/Index'
import Content from '@/page/Content'
// import ContentList from '@/page/ContentList'
import Home from '@/page/home/Home'
import HomeCarousel from '@/page/home/HomeCarousel'
import HomeNewsList from '@/page/home/HomeNewsList'




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
      name: '',
      component: Index,
      children:[
        {
          path: '/',
          name: 'Content',
          component: Content,
        },
        // {
        //   path: '/ContentList/:id',
        //   name: 'ContentList',
        //   component: ContentList,
        // }
      ]
    },
    {
      path:'/page/home/Home',
      //name:'Home',
      component:Home,
      //   {
      //   default:Home,
        // Header: Header,
      // },
      children:[
        {
          path: '/',
          name: 'HomeCarousel',
          component: HomeCarousel,
        },
        // {
        //   path: '/HomeNewsList/',
        //   name: 'HomeNewsList',
        //   component: {
        //     HomeNewsList:HomeNewsList
        //   },
        // },
      ]
    }

  ]
})
