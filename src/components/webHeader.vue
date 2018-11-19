<template>
  <div class="header">
    <div class="webHeader web-w" id="webHeader">
      <div class="header-logo-box">
        <image class="header-logo" :scr="logo"></image>
      </div>
      <el-menu :default-active="activeIndex" class="l-nav" mode="horizontal" @select="handleSelect">
        <!--<el-menu-item><router-link to="/page/home/Home"><image class="header-logo" :scr="logo"></image></router-link></el-menu-item>-->
        <el-menu-item index="1"><router-link to="/page/home/Home">首页</router-link></el-menu-item>
        <el-submenu index="2">
          <template slot="title">活动</template>
          <el-menu-item index="2-1"><a :plain="true" @click="open">选项1</a></el-menu-item>
          <el-menu-item index="2-2"><a :plain="true" @click="open">选项2</a></el-menu-item>
          <el-menu-item index="2-3"><a :plain="true" @click="open">选项3</a></el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a :plain="true" @click="open">消息</a></el-menu-item>
        <el-menu-item index="4"><a :plain="true" @click="open">管理</a></el-menu-item>
      </el-menu>
      <div class="r-nav">
        <button type="button" class="el-button el-button--text">
          <span><router-link to="/page/login/Login">登录</router-link></span>
        </button>
        <button type="button" class="el-button el-button--text">
          <span><router-link to="/page/register/Register">注册</router-link></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "webHeader",
        data() {
          return {
            activeIndex: '',
            logo:"../../static/images/index/logo-mj.png",
          };
        },
        methods: {
          handleSelect(key, keyPath) {
            // console.log(key, keyPath);
          },
          open() {
            this.$message('页面正在建设中');
          },
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
