<template>
  <el-container>
    <el-header class="animated faedOutUp"><Header></Header></el-header>
    <el-main>
      <router-view></router-view>11122
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
