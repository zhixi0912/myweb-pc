import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/page/pageHome'
import Index from '@/page/index'
import Content from '@/page/Content'
import Home from '@/page/home/index'
import HomeNewsList from '@/page/home/HomeNewsList'
import Server from '@/page/server/index'
import Web from '@/page/web/index'
import About from '@/page/about/index'
import Login from '@/page/login/index'
import AccountsLogin from '@/page/login/AccountsLogin'
import MobileLogin from '@/page/login/MobileLogin'
import Register from '@/page/register/index'
import AccountsRegister from '@/page/register/AccountsRegister'
import MobileRegister from '@/page/register/MobileRegister'
import wholeList from '@/page/wholeList/index'
import Audio from '@/components/public/music/audio'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      title:'首页',
      name: '',
      component: PageHome,
      children:[
        {
          path: '/',
          name: 'Content',
          component: Content,
        },
      ]
    },
    {
      path: '/page/index',
      title:'主页',
      name: '',
      component: Index,
      children:[
        {
          path:'/',
          name:'Home',
          component:Home,
          title:'',
          children:[
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
          path:'/page/about/index',
          name:'About',
          component:About,
        },
        {
          path:'/page/server/index',
          name:'Server',
          component:Server,
        },
        {
          path:'/page/web/index',
          name:'Web',
          component:Web,
        },
      ]
    },



    {
      path:'/page/login/index',
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
      path:'/page/register/index',
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
      path:'/page/wholeList/index',
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
