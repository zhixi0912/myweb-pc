<template>
  <div class="webHeader web-w" id="webHeader">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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


  </div>
</template>

<script>
    export default {
        name: "webHeader",
        data() {
          return {
            activeIndex: '',
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
.el-menu--horizontal{
  height: 59px;
}
</style>
