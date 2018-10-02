import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Content from '@/page/Content'
import Home from '@/page/home/Home'
import Audio from '@/components/public/music/audio'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
      // children:[
        // {
        //   path: '/',
        //   name: 'HomeCarousel',
        //   component: HomeCarousel,
        // },
        // {
        //   path: '/HomeNewsList/',
        //   name: 'HomeNewsList',
        //   component: {
        //     HomeNewsList:HomeNewsList
        //   },
        // },
      // ]
    },
    {
      path:'/components/public/music/audio',
      name:'Audio',
      component:Audio,
    }

  ]
})
