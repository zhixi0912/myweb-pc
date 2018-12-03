<template>
  <div class="header">
    <div class="webHeader web-w" id="webHeader">
      <div class="header-logo-box">
        <!--<image class="header-logo" :scr="logo"></image>-->
        <img class="header-logo" :src="logo"/>
      </div>
      <el-menu :default-active="this.$store.state.activeIndex" class="l-nav" mode="horizontal" @select="handleSelect">
        <!--<el-menu-item><router-link to="/page/home/Home"><image class="header-logo" :scr="logo"></image></router-link></el-menu-item>-->
        <el-menu-item index="1" @click="onMenuChange('Home')">首页</el-menu-item>
        <el-menu-item index="2" @click="onMenuChange('Server')">活动</el-menu-item>
        <el-menu-item index="3" @click="onMenuChange('Web')">消息</el-menu-item>
        <el-menu-item index="4" @click="onMenuChange('About')">管理</el-menu-item>
      </el-menu>
      <div class="r-nav">
        <button type="button" class="el-button el-button--text" index="0-0" @click="onMenuChange('Login')">登录
          <!--<span><router-link to="/page/login/Login">登录</router-link></span>-->
        </button>
        <button type="button" class="el-button el-button--text" index="0-1" @click="onMenuChange('Register')">注册
          <!--<span><router-link to="/page/register/Register">注册</router-link></span>-->
        </button>
      </div>
    </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "webHeader",
        data() {
          return {
            logo:"../../static/images/index/logo-mj.png",
          };
        },
        methods: {
          onMenuChange(page, fromHook) {
            const indexs = [
              {
                'index': '0-0',
                'pages': ['Login',]
              },
              {
                'index': '0-1',
                'pages': ['Register',]
              },
              {
                'index': '1',
                'pages': ['Home',]
              },
              {
                'index': '2',
                'pages': ['Server', ]
              },
              {
                'index': '3',
                'pages': ['Web']
              },
              {
                'index': '4',
                'pages': ['About',]
              }
            ]

          for (var i = 0; i < indexs.length; i++) {
            // const dic = indexs[i]
            // if (common.isInArray(dic['pages'], page)) {
            //   this.$store.commit('webheadernav', dic['index'])
            //   break
            // }
          }
          if (!fromHook) {
            this.$router.push({name: page});
          }
          // console.log(page, fromHook);
          },
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
            let value = key;
            this.$store.commit("webheadernav", value);
          },
          open() {
            this.$message('页面正在建设中');
          },
        },
        computed:{
          activeIndex(){
            return this.$store.state.activeIndex
          }
        },
      created:function () {
        // 全局路由钩子，监听浏览器前进后退
        this.$router.beforeEach((to, from, next) => {
          next()
          this.onMenuChange(to.name, true)
        })
        this.$router.afterEach((to, from) => {
          this.onMenuChange(to.name, true)
        })

      },
      beforeRouteEnter: (to, from, next) => { // 监听刷新页面
        next(vm => {
          vm.onMenuChange(to.name, true)
        })
      },
      watch:{

      }

    }
</script>

<style scoped>
.header-logo-box{
  float: left;
  height: 60px;
  width: 60px;
}
.header-logo{
  height: 60px;
  width: 60px;
  display: block;
}
.header{
  background-color: #ffffff;
  margin: 0 -20px;
  border-bottom: solid 1px #e6e6e6;
}
.el-menu--horizontal{
  border-bottom: none;
}
.web-w:after {
  content: "";
  display: block;
  clear: both;
}
.l-nav{
  float: left;
}
.r-nav{
  float: right;
  padding-top: 10px;
}
.r-nav button{
  vertical-align: middle;
}
</style>
