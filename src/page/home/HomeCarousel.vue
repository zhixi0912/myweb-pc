<template>
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="(item,index) in tracks" v-if="index<=6" :key="index">
        <image class="carousel-img" :src="item.album.blurPicUrl"></image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default {
      name: "HomeCarousel",
      data(){
        return{
          tracks:[]
        }
      },
      created () {
        this.$axios.get('/api/playlist/detail', {id: 37880978,updateTime: -1}, res => {
          this.tracks = res.result.tracks;
          console.log("111111",this.tracks);
        })
      },
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
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
