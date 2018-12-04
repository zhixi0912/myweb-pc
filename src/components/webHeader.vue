<template>
  <div class="header">
    <div class="webHeader web-w" id="webHeader">
      <div class="header-logo-box">
        <router-link to="/"><img class="header-logo" :src="logo"/></router-link>
      </div>
      <el-menu :default-active="activeIndex" class="l-nav" mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="(item, index) in navList" index='item.indexs' @click="onMenuChange(item.path,item.indexs)" :key="index">{{item.title}}</el-menu-item>
        <!--<el-menu-item index="2" @click="onMenuChange('Server')" data-path="Server">活动</el-menu-item>-->
        <!--<el-menu-item index="3" @click="onMenuChange('Web')" data-path="Web">消息</el-menu-item>-->
        <!--<el-menu-item index="4" @click="onMenuChange('About')" data-path="About">管理</el-menu-item>-->
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
            navList:[
              {
                indexs:"1",
                path:"Home",
                title:"首页"
              },
              {
                indexs:"2",
                path:"Server",
                title:"活动"
              },
              {
                indexs:"3",
                path:"Web",
                title:"消息"
              },
              {
                indexs:"4",
                path:"About",
                title:"管理"
              }
            ],
            activeIndex:"1",
            logo:"../../static/images/index/logo-mj.png",

          };
        },
        methods: {
          onMenuChange(page,index) {

            this.$router.push({name: page});
            this.activeIndex = index;
            console.log(page,index);
          },
          handleSelect(key, keyPath,route) {
            // console.log(key, keyPath);
            // // console.log(route);
            // let value = key;
            // this.activeIndex = toString(value)
          },
          open() {
            this.$message('页面正在建设中');
          },
          getActiveNav(href) {
            let key = href.split('/root/')[1];
            return navConfig[key];
          }
        },
        mounted(){

        },
        computed:{
            // activeIndex(){
            //   return this.$store.state.activeIndex
            // }
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
  height: 50px;
  width: 40px;
  display: block;
  vertical-align: middle;
  margin-top: 5px;
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
