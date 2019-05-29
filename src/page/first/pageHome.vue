<template>
  <div class="index-wrap">
    <el-container>
      <!--<el-aside><navMenu></navMenu></el-aside>-->
      <el-container id="el-container">
        <!--<el-header><myHeader></myHeader></el-header>-->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!--<el-footer><myFooter></myFooter></el-footer>-->
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "page-home"
    }
</script>

<style scoped>
.el-main{
  padding: 0;
}
</style>
