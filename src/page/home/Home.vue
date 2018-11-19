<template>
  <el-container>
    <el-header class="animated faedOutUp"><Header></Header></el-header>

    <el-main>
      <div class="web-w">
        <div class="carousel-box">
          <Carousel></Carousel>
        </div>

        <div class="list-line-top">
          <div class="link-url">
            <router-link :to="{name:'Audio'}">这是一首歌</router-link>
          </div>

          <songSheet></songSheet>
        </div>
        <div class="audio-box">
          <!--<AudioBox></AudioBox>-->
        </div>
      </div>
    </el-main>
    <el-footer><Footer></Footer></el-footer>
    </el-container>
</template>

<script>
  import Carousel from './HomeCarousel'  //引用幻灯片组件
  import songSheet from '../../components/public/music/songSheet' //引用歌单组件
    export default {
     name: "home",
      data() {
        return {
          activeIndex: '1',
          topics:[],
          logo:require("../../../static/images/index/logo-mj.png"),
        };
      },
      components:{
        Carousel,
        songSheet
      }
    }
</script>

<style scoped>

.list-line-top{
  margin: 20px 0;
}
.link-url{
  float: left;
}
.list-line-top:after {
  content: "";
  display: block;
  clear: both;
}
.list-line{
  margin: 20px auto;
  border: 1px solid #2d2f33;
  background-color: rgb(230, 210, 213);
}
</style>
