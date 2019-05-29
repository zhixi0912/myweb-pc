<template>
  <div class="web-w">
    <div class="carousel-box">
      <Carousel :carousel-list="carouselList"></Carousel>
    </div>
    <div class="list-line-top">
      <div class="link-url">
        <HomeNewsList></HomeNewsList>
        <!--<router-link :to="{name:'Audio'}">这是一首歌</router-link>-->
      </div>
      <!--<songSheet></songSheet>-->
    </div>
    <div class="audio-box">
      <!--<AudioBox></AudioBox>-->
    </div>
  </div>
</template>

<script>
  import Carousel from './HomeCarousel'  //引用幻灯片组件
  import HomeNewsList from './HomeNewsList'  //引用新闻组件
  // import songSheet from '../../components/public/music/songSheet' //引用歌单组件
    export default {
     name: "home",
      data: function () {
        return {
          activeIndex: '1',
          carouselList: [
            {imgUrl:'./../../static/images/login/login-ban-01.jpg'},
            {imgUrl:'./../../static/images/login/login-ban-02.jpg'},
            {imgUrl:'./../../static/images/login/login-ban-03.jpg'},
          ],
          // logo: require("../../../../../static/images/index/logo-mj.png"),
        };
      },
      components:{
        Carousel,
        HomeNewsList
      }
    }
</script>

<style>

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
.link-url .el-tabs__nav{
  float: none;
}
.link-url .el-tabs--top .el-tabs__item.is-top:last-child{
  float: right;
  display: block;
}
</style>
