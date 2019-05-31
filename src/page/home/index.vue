<template>
  <el-container>
    <el-header class="animated faedOutUp"><Header></Header></el-header>
    <el-main class="main-box web-w">
      <router-view></router-view>
    </el-main>
    <el-footer><Footer></Footer></el-footer>
  </el-container>
</template>

<script>
  export default {
    name: "Index" ,
  }
</script>

<style scoped>
</style>
