<template>
  <div>
    <el-header class="animated faedOutUp"><myHeader></myHeader></el-header>
    <!--<webHeaderVue-vue></webHeaderVue-vue>-->
    <!--<router-view class="animated faedOutUp" name="Header"></router-view>-->

    <el-main>

      <router-view></router-view>
      <!--<router-view name="HomeCarousel"></router-view>-->
      <router-view name="HomeNewsList"></router-view>
    </el-main>
    <el-footer><myFooter></myFooter></el-footer>
  </div>
</template>

<script>
    import myHeader from '../../components/webHeader'
    import myFooter from '../../components/webFooter'
    export default {
     name: "home",
      data() {
        return {
          activeIndex: '1',
        };
      },
      components:{
        myHeader,
        myFooter
      }
    }
</script>

<style scoped>

</style>
