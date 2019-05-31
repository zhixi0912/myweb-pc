import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/first'
import Home from '@/page/home'
import ModulesIndex from '@/page/modules/index'
import Login from '@/page/modules/login'
import Register from '@/page/modules/register'
import Server from '@/page/modules/server'
import Web from '@/page/modules/web'
import About from '@/page/modules/about'
import Details from '@/page/modules/details'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      title:'首页',
      name: 'Index',
      component: Index,
    },
    {
      path: '/home',
      title:'首页',
      name: 'home',
      component: Home,
      children:[
          {
            path:'/',
            name:'modulesIndex',
            component:ModulesIndex,
            title:'主页',
          },
          {
            path:'/login',
            name:'login',
            component:Login,
            title:'登录',
          },
          {
            path:'/register',
            name:'register',
            component:Register,
            title:'注册',
          },
          {
            path:'/about',
            name:'about',
            component:About,
            title:'关于',
          },
          {
            path:'/server',
            name:'server',
            component:Server,
            title:'服务',
          },
          {
            path:'/web',
            name:'web',
            component:Web,
            title:'网站',
          },
          {
            path:'/details/:key',
            name:'details',
            component:Details,
            title:'详情',
          },
        ]
    }
    // {
    //   path: '/page/index',
    //   title:'主页',
    //   name: '',
    //   component: Index,
    //   children:[
    //     {
    //       path:'/',
    //       name:'Home',
    //       component:Home,
    //       title:'',
    //       children:[
    //         {
    //           path: '/HomeNewsList/',
    //           name: 'HomeNewsList',
    //           component: {
    //             HomeNewsList:HomeNewsList
    //           },
    //         },
    //       ]
    //     },
    //     {
    //       path:'/page/about/index',
    //       name:'About',
    //       component:About,
    //     },
    //     {
    //       path:'/page/server/index',
    //       name:'Server',
    //       component:Server,
    //     },
    //     {
    //       path:'/page/web/index',
    //       name:'Web',
    //       component:Web,
    //     },
    //   ]
    // },
    //
    //
    //
    // {
    //   path:'/page/login/index',
    //   name:'Login',
    //   component:Login,
    //   children:[
    //     {
    //       path: '/AccountsLogin',
    //       name: 'AccountsLogin',
    //       component: AccountsLogin,
    //     },
    //     {
    //       path: '/MobileLogin',
    //       name: 'MobileLogin',
    //       component: MobileLogin,
    //     },
    //   ]
    // },
    // {
    //   path:'/page/register/index',
    //   name:'Register',
    //   component:Register,
    //   children:[
    //     {
    //       path: '/AccountsRegister',
    //       name: 'AccountsRegister',
    //       component: AccountsRegister,
    //     },
    //     {
    //       path: '/MobileRegister',
    //       name: 'MobileRegister',
    //       component: MobileRegister,
    //     },
    //   ]
    // },
    // {
    //   path:'/page/wholeList/index',
    //   name:'wholeList',
    //   component:wholeList,
    // },
    // {
    //   path:'/components/public/music/audio',
    //   name:'Audio',
    //   component:Audio,
    // }

  ]
})
