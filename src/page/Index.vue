<template>
  <div class="index-wrap">
    <el-container>
      <el-aside><navMenu></navMenu></el-aside>
      <el-container id="el-container">
        <el-header><myHeader></myHeader></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer><myFooter></myFooter></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import myHeader from '../components/webHeader'
  import myFooter from '../components/webFooter'
  import navMenu from '../components/NavMenu'
  export default {
    name: "Index" ,
    components: {
      myHeader,
      myFooter,
      navMenu
    }
  }
</script>

<style scoped>

</style>
