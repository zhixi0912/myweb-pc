<template>
  <div class="fullpage-main">
    <ul id="menu" class="menu" style="display: none">
      <li data-anchor="page1" class="active"><a href="#page1">Section 1</a></li>
      <li data-anchor="page2"><a href="#page2">Section 2</a></li>
      <li data-anchor="page3"><a href="#page3">Section 3</a></li>
    </ul>

    <full-page ref="fullpage" :options="options"  id="fullpage">
      <div class="section section-1">

        <div class="index-main  clearfix">





          <div class="web-title">
            <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
            <div  v-show="page1Title1" class="text-center">GITHUB</div>
            </transition>
          </div>

            <!--<h3 id="page1-tiele-h1" class="text-center" :class="{animated:page1Title,fadeInUpBig:page1Title}">标题1</h3>-->
          <el-row :gutter="20">
            <el-col :span="12" class="text-right web-title-2">
              <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
                <div v-show="page1Title2">Subscribe to our newsletter</div>
              </transition>

            </el-col>
            <el-col :span="12" class="web-title-2">
              <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
                <div v-show="page1Title2">Get product updates, company news, and more.</div>
              </transition>
            </el-col>
          </el-row>
        </div>
        <div class="pen-anim-box">
          <el-row :gutter="20">
            <el-col :span="8" class=" ">
              <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
                <div class="pen-box" v-show="page1pen1"><img src="../../static/images/index/pen.png" /></div>
              </transition>

            </el-col>
            <el-col :span="8" class="">
              <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
                <div class="pen-box" v-show="page1pen2"><img src="../../static/images/index/pen.png" /></div>
              </transition>
            </el-col>
            <el-col :span="8" class="">
              <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
                <div class="pen-box" v-show="page1pen3"><img src="../../static/images/index/pen.png" /></div>
              </transition>
            </el-col>
          </el-row>
        </div>
      </div>



      <div class="section section-2">
        <div class="index-main page-2 clearfix">
          <el-row :gutter="20">
            <el-col :span="8" class="text-right web-title-3">
              <transition name="" mode="" enter-active-class="animated fadeInRight" leave-active-class="animated zoomOutRight">
                <div v-show="page2Title2">Subscribe to our newsletter</div>
              </transition>
            </el-col>
            <el-col :span="8" :offset="8" class="web-title-3">
              <transition name="" mode="" enter-active-class="animated fadeInLeft" leave-active-class="animated zoomOutRight">
                <div v-show="page2Title2">Subscribe to our newsletter</div>
              </transition>
            </el-col>
          </el-row>
            <div class="anim-1">
              <div><img class="anim-img" src="../../static/images/index/anim-1.png" /></div>
              <div class="anim-img-box-2"><img class="anim-img-2" src="../../static/images/index/anim-1.png" /></div>


            </div>

        </div>
      </div>
      <div class="section section-3">
        <!--<el-header class="animated faedOutUp"><Header></Header></el-header>-->
        <div class="index-main  clearfix">
          3333
        </div>
      </div>

    </full-page>
  </div>
</template>

<script>
  // import 'swiper/dist/css/swiper.css'
  export default {
    data() {
      return {
        options: {
          afterLoad: this.afterLoad,
          scrollBar: false,
          menu: '#menu',
          navigation: true,
          anchors: ['page1', 'page2', 'page3'],
          sectionsColor: ['#ffffff', '#add5a2', '#ffffff'],

        },





        page1Title1:false,
        page1Title2:false,
        page2Title2:false,
        page1pen1:false,
        page1pen2:false,
        page1pen3:false,
      }
    },
    methods: {
      afterLoad(anchorLink,index ) {
        var pageA = index.index+1;
          if(pageA==1){
            // this.page1pen = true;
            this.page1Title1 = true;
            setTimeout(()=>{
              this.page1Title2 = true;
              setTimeout(()=>{
                this.page1pen1 = true;
                setTimeout(()=>{
                  this.page1pen2 = true;
                  setTimeout(()=>{
                    this.page1pen3 = true;
                  },600)
                },600)
              },600)
            },600)
            this.page2Title2 = false


















          }else if(pageA==2){



            this.page1Title1 = false;
            this.page1Title2 = false;

            this.page2Title2 = true

            this.page1pen1 = false;
            this.page1pen2 = false;
            this.page1pen3 = false;





        }else if(pageA==3){

            this.page1Title1 = false;
            this.page1Title2 = false;
            this.page2Title2 = false
            this.page1pen1 = false;
            this.page1pen2 = false;
            this.page1pen3 = false;


          }
      },

    },
    components:{
      // moveTo(section, slide)	//滚动到
    },
    computed:{

    },
    mounted() {
    }
  }



</script>

<style scoped>

.web-title{
  height: 80px;
  line-height: 80px;
}
.web-title div{
  font-size: 60px;
  font-family: "Microsoft YaHei";
}
.web-title-2{
  height: 80px;
}
.web-title-3{
  color: #ffffff;
}
.pen-anim-box{
  position: absolute;
  bottom: 0;
  right: 5%;
  width: 200px;
}
.pen-box{
  width: 200px;
  height: 280px;
}
.pen-box img{
  height: 100%;
  width: auto;
}
.page-2 .anim-1{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -100px 0 0 -100px;
}
.page-2 .anim-1 .anim-img{
  width: 160px;
  height: 160px;
  margin: 20px 20px;
  animation: App-logo-spin infinite 20s linear;
}
.page-2 .anim-1 .anim-img-2{
  width: 200px;
  height: 200px;
  opacity: 0.1;
  animation: App-logo-spin-2 infinite 30s linear;
}
.anim-img-box-2{
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
}










.page1-tiele-h1{
  margin: 0;
}

.bg-purple-left{
  background-color: #67C23A;
}
.bg-purple-right{
  text-align: right;
  background-color: #F56C6C;
}

.section{
  /*color: #ffffff;*/
  /*position: relative;*/
}

.section-1{
  background-image: url("../../static/images/index/page-1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.section-2{
  /*background-image: url("../../static/images/index/400130960.jpg");*/
  /*background-position: center center;*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
}
.section-3{
  /*background-image: url("../../static/images/index/D8F807DF.jpg");*/
  /*background-position: center center;*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
}
.menu{
  position: absolute;
  right: 60px;
  top: 30%;
  background-color: #ffffff;
  width: 100px;
  min-height: 200px;
  z-index: 9999;
}

</style>
