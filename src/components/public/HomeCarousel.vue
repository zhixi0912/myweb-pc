<template>
  <div class="block">
    <el-carousel class="carousel-box">
      <el-carousel-item v-for="(item,index) in carouselList"  :key="index">
        <!--<image class="carousel-img" :src="item.imgUrl"></image>-->
        <img :src="item.imgUrl"/>
        {{item.imgUrl}}
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default {
      name: "HomeCarousel",
      data(){
        return{
          // carouselList:this.carouselList
        }
      },
      props:['carouselList'],
      created () {
        // console.log('this.carouselList',this.carouselList)
      },
    }
</script>

<style scoped>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }
  .carousel-img{
    width: 100%;
    height: auto;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
