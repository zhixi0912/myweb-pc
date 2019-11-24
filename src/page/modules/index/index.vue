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
      <div class="echarts-box">
        <v-chart theme="ovilia-green" :options="polar"/>
      </div>
      <!--<songSheet></songSheet>-->
    </div>
    <div class="audio-box">
      <!--<AudioBox></AudioBox>-->
    </div>
  </div>
</template>

<script>
  import Carousel from '../../../components/public/HomeCarousel'  //引用幻灯片组件
  import HomeNewsList from './HomeNewsList'  //引用新闻组件
  // import songSheet from '../../components/public/music/songSheet' //引用歌单组件
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'

    export default {
     name: "home",
     components: {
        'v-chart': ECharts
      },
      data: function () {
        let data = []

        for (let i = 0; i <= 360; i++) {
            let t = i / 180 * Math.PI
            let r = Math.sin(2 * t) * Math.cos(2 * t)
            data.push([r, i])
        }
        return {
          activeIndex: '1',
          carouselList: [
            {imgUrl:'./../../static/images/login/login-ban-01.jpg'},
            {imgUrl:'./../../static/images/login/login-ban-02.jpg'},
            {imgUrl:'./../../static/images/login/login-ban-03.jpg'},
          ],
          // logo: require("../../../../../static/images/index/logo-mj.png"),


        polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
    


        };
      },
      components:{
        Carousel,
        HomeNewsList
      }
    }
</script>

<style>
  .carousel-box .el-carousel__container{
    height: 300px;
  }
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
.echarts-box{
  float: left;
}
</style>
