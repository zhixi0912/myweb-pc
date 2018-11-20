import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Content from '@/page/Content'
import Home from '@/page/home/Home'
import HomeNewsList from '@/page/home/HomeNewsList'
import Login from '@/page/login/Login'
import AccountsLogin from '@/page/login/AccountsLogin'
import MobileLogin from '@/page/login/MobileLogin'
import Register from '@/page/register/Register'
import AccountsRegister from '@/page/register/AccountsRegister'
import MobileRegister from '@/page/register/MobileRegister'
import wholeList from '@/page/wholeList/wholeList'
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
      children:[
        // {
        //   path: '/',
        //   name: 'HomeCarousel',
        //   component: HomeCarousel,
        // },
        {
          path: '/HomeNewsList/',
          name: 'HomeNewsList',
          component: {
            HomeNewsList:HomeNewsList
          },
        },
      ]
    },
    {
      path:'/page/login/Login',
      name:'Login',
      component:Login,
      children:[
        {
          path: '/AccountsLogin',
          name: 'AccountsLogin',
          component: AccountsLogin,
        },
        {
          path: '/MobileLogin',
          name: 'MobileLogin',
          component: MobileLogin,
        },
      ]
    },
    {
      path:'/page/register/Register',
      name:'Register',
      component:Register,
      children:[
        {
          path: '/AccountsRegister',
          name: 'AccountsRegister',
          component: AccountsRegister,
        },
        {
          path: '/MobileRegister',
          name: 'MobileRegister',
          component: MobileRegister,
        },
      ]
    },
    {
      path:'/page/wholeList/wholeList',
      name:'wholeList',
      component:wholeList,
    },
    {
      path:'/components/public/music/audio',
      name:'Audio',
      component:Audio,
    }

  ]
})
