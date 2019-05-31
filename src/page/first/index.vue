<template>
  <div class="fullpage-main">
    <ul id="menu" class="menu">
      <li data-menuanchor="page1" class="active"><a href="#page1" class="page-btn"> 1</a></li>
      <li data-menuanchor="page2"><a href="#page2" class="page-btn">2</a></li>
      <li data-menuanchor="page3"><a href="#page3" class="page-btn">3</a></li>
      <li data-menuanchor="page4"><a href="#page4" class="page-btn">4</a></li>
      <li data-menuanchor="" class="home-box"><a href="/home" class="home-btn el-button el-button--text"><i class="fa fa-home" aria-hidden="true"></i></a></li>
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
                <div v-show="page1Title2">Get product updates, company news, and more.</div>
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
                <div class="pen-box" v-show="page1pen1"><img src="../../../static/images/index/pen.png" /></div>
              </transition>

            </el-col>
            <el-col :span="8" class="">
              <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
                <div class="pen-box" v-show="page1pen2"><img src="../../../static/images/index/pen.png" /></div>
              </transition>
            </el-col>
            <el-col :span="8" class="">
              <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
                <div class="pen-box" v-show="page1pen3"><img src="../../../static/images/index/pen.png" /></div>
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
                <div class="page2-h1" v-show="page2Title2">
                    <div class="page2-t2">Subscribe to our newsletter</div>
                  <div class="page2-t1">WELCOME</div>
                </div>
              </transition>
            </el-col>
            <el-col :span="8" :offset="8" class="web-title-3">
              <transition name="" mode="" enter-active-class="animated fadeInLeft" leave-active-class="animated zoomOutRight">
                <div class="page2-h1" v-show="page2Title2">
                  <div class="page2-t1">WELCOME</div>
                  <div class="page2-t2">Subscribe to our newsletter</div>
                </div>
              </transition>
            </el-col>
          </el-row>
            <div class="anim-1">
              <div><img class="anim-img" src="../../../static/images/index/anim-1.png" /></div>
              <div class="anim-img-box-2"><img class="anim-img-2" src="../../../static/images/index/anim-1.png" /></div>


            </div>

        </div>
      </div>
      <div class="section section-3">

        <div class="index-main  clearfix" >
          <div class="page3-h1">
              <div class="h1-t1">
              <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
                <div v-show="page3Title1">轻盈上线</div>
              </transition>
              </div>
            <div class="h1-t2">
              <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
                <div v-show="page3Title2">
                 清新、极简，呈现全新体验方式
                </div>
              </transition>
            </div>
          </div>
          <Carousel :carousel-list="carouselList"></Carousel>
        </div>
      </div>
      <div class="section section-4">
        <div class="wave-box">
          <canvas id="canvas" ref="canvas"></canvas>
        </div>
        <div class="index-main  clearfix" style="top:40%;">
          <el-row :gutter="20">
            <el-col :span="24" class="text-right web-title-4">
              <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
                <div v-show="page4Title1" class="web-title-4-h1">更多惊喜等你体验</div>
              </transition>
            </el-col>
            <el-col :span="10" class="text-right web-title-5">
              <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
                <a  v-show="page4Title2" href="/home" class="button big blue">进入首页</a>
              </transition>
            </el-col>
            <el-col :span="10" :offset="4" class="web-title-5">
              <transition name="" mode="" enter-active-class="animated fadeInUp" leave-active-class="animated zoomOutRight">
                <a v-show="page4Title2" href="/home" class="button big blue">进入首页</a>
              </transition>

            </el-col>
          </el-row>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
  import Carousel from '../../components/public/HomeCarousel'  //引用幻灯片组件
  export default {
    data() {
      return {
        options: {
          afterLoad: this.afterLoad,
          scrollBar: false,
          menu: '#menu',
          navigation: true,
          anchors: ['page1', 'page2', 'page3', 'page4'],
          sectionsColor: ['#ffffff', '#add5a2', '#ffffff', '#d8f2fc'],

        },
        carouselList:[
          {imgUrl:'./../../static/images/login/login-ban-01.jpg'},
          {imgUrl:'./../../static/images/login/login-ban-02.jpg'},
          {imgUrl:'./../../static/images/login/login-ban-03.jpg'},
        ],
        page1Title1:false,
        page1Title2:false,
        page2Title2:false,
        page1pen1:false,
        page1pen2:false,
        page1pen3:false,
        page3Title1:false,
        page3Title2:false,
        page4Title1:false,
        page4Title2:false,
        boHeight:300/10,
        posHeight:300/1.1,
        step:0,
        colors:['rgba(216, 242, 252, 0.9)', 'rgba(216, 242, 252,  0.7)', 'rgba(216, 242, 252,  0.5)']
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
            this.page3Title1 = false
            this.page3Title2 = false
            this.page4Title1 = false
            this.page4Title2 = false
          }else if(pageA==2){

            this.page1Title1 = false;
            this.page1Title2 = false;
            this.page2Title2 = true
            this.page1pen1 = false;
            this.page1pen2 = false;
            this.page1pen3 = false;
            this.page3Title1 = false
            this.page3Title2 = false
            this.page4Title1 = false
            this.page4Title2 = false

        }else if(pageA==3){
            this.page3Title1 = true
            setTimeout(()=>{
              this.page3Title2 = true;
            },600)
            this.page1Title1 = false;
            this.page1Title2 = false;
            this.page2Title2 = false
            this.page1pen1 = false;
            this.page1pen2 = false;
            this.page1pen3 = false;
            this.page4Title1 = false
            this.page4Title2 = false

          }else if(pageA==4){
            this.page4Title1 = true
            setTimeout(()=>{
              this.page4Title2 = true;
            },600)

            this.page1Title1 = false;
            this.page1Title2 = false;
            this.page2Title2 = false
            this.page1pen1 = false;
            this.page1pen2 = false;
            this.page1pen3 = false;
            this.page3Title1 = false
            this.page3Title2 = false


          }
      },
      paint () {
        let canvas = this.$refs.canvas;//指定canvas
        let ctx = canvas.getContext("2d");//设置2D渲染区域
        ctx.lineWidth = 5;//设置线的宽度
        let widths = canvas.parentNode.offsetWidth
        canvas.width = widths
        canvas.height =300
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布
        this.step += 1; // 角度

        // 遍历colors数组，进行绘制
        this.colors.forEach((item, index) => {
          ctx.fillStyle = item; // 画笔的颜色
          let angle = (this.step + index * 50) * Math.PI / 180; // 相差的角度
          let deltaHeight = Math.sin(angle) * this.boHeight; // 线条左边的起点
          let deltaHeightRight = Math.cos(angle) * this.boHeight; //线条右边的终点
          ctx.beginPath();
          ctx.moveTo(0, this.posHeight + deltaHeight);
          ctx.bezierCurveTo(canvas.width / 2, this.posHeight + deltaHeight - this.boHeight, canvas.width / 2, this.posHeight +
            deltaHeightRight - this.boHeight, canvas.width, this.posHeight + deltaHeightRight); // 绘制贝塞尔曲线
          ctx.lineTo(canvas.width, canvas.height); // 防止右侧出现空隙
          ctx.lineTo(0, canvas.height); // 防止左侧出现空隙
          ctx.closePath();
          ctx.fill();
        })
        // this.paint()
        // requestAnimationFrame(paint); // 自调
      },
      toHome(){
        console.log("11")
        // this.$router.push({name: 'Home'});
      },

    },
    components:{
      // moveTo(section, slide)	//滚动到
      Carousel,
    },
    computed:{

    },
    created(){

    },
    mounted() {
      setInterval(()=>{
        this.paint()
      }, 1000 / 60)
    },
    destroyed() {
    }
  }



</script>

<style scoped>
  .carousel-box .el-carousel__container{
    height: 500px;
  }
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
  line-height: 80px;
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
.page2-h1 .page2-t1{
  font-size: 30px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 350px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.page3-h1{
  text-align: center;
  margin-bottom: 50px;
}
.page3-h1 .h1-t1{
  height: 60px;
  line-height: 60px;
  font-size: 36px;
}
.page3-h1 .h1-t2{
  color: #999999;
  height: 60px;
  line-height: 60px;
}
.wave-box{
  position: absolute;
  top: 0;
  left: 0;
  height: 300px;
  width: 100%;
  background-color: #FFffff;
}

.green.button {
  color: #345903 !important;
  border: 1px solid #96a37b !important;
  background-color: #79be1e;
  background-image: url(../../../static/images/index/button_bg.png), url(../../../static/images/index/button_bg.png), -moz-radial-gradient(center bottom, circle, rgba(162,211,30,1) 0,rgba(162,211,30,0) 100px),-moz-linear-gradient(#82cc27, #74b317);
  background-image: url(../../../static/images/index/button_bg.png), url(../../../static/images/index/button_bg.png), -webkit-gradient(radial, 50% 100%, 0, 50% 100%, 100, from(rgba(162,211,30,1)), to(rgba(162,211,30,0))),-webkit-gradient(linear, 0% 0%, 0% 100%, from(#82cc27), to(#74b317));
}
.blue.button {
  color: #0f4b6d !important;
  border: 1px solid #84acc3 !important;
  background-color: #48b5f2;
  background-image: url(../../../static/images/index/button_bg.png), url(../../../static/images/index/button_bg.png), -moz-radial-gradient(	center bottom, circle, rgba(89,208,244,1) 0,rgba(89,208,244,0) 100px), -moz-linear-gradient(#4fbbf7, #3faeeb);
  background-image: url(../../../static/images/index/button_bg.png), url(../../../static/images/index/button_bg.png), -webkit-gradient(	radial, 50% 100%, 0, 50% 100%, 100, from(rgba(89,208,244,1)), to(rgba(89,208,244,0))), -webkit-gradient(linear, 0% 0%, 0% 100%, from(#4fbbf7), to(#3faeeb));
}
.button {
  font:15px Calibri, Arial, sans-serif;

  /* A semi-transparent text shadow */
  text-shadow:1px 1px 0 rgba(255,255,255,0.4);

  /* Overriding the default underline styling of the links */
  text-decoration:none !important;
  white-space:nowrap;

  display:inline-block;
  vertical-align:baseline;
  position:relative;
  cursor:pointer;
  padding:10px 20px;

  background-repeat:no-repeat;

  /* The following two rules are fallbacks, in case
       the browser does not support multiple backgrounds. */

  background-position:bottom left;
  background-image:url('../../../static/images/index/button_bg.png');

  /* Multiple backgrounds version. The background images
       are defined individually in color classes */

  background-position:bottom left, top right, 0 0, 0 0;
  background-clip:border-box;

  /* Applying a default border raidus of 8px */

  -moz-border-radius:8px;
  -webkit-border-radius:8px;
  border-radius:8px;

  /* A 1px highlight inside of the button */

  -moz-box-shadow:0 0 1px #fff inset;
  -webkit-box-shadow:0 0 1px #fff inset;
  box-shadow:0 0 1px #fff inset;

  /* Animating the background positions with CSS3 */
  /* Currently works only in Safari/Chrome */

  -webkit-transition:background-position 1s;
  -moz-transition:background-position 1s;
  transition:background-position 1s;
}
.green.button:hover {
  background-color: #89d228;
  background-image: url(../../../static/images/index/button_bg.png), url(../../../static/images/index/button_bg.png), -moz-radial-gradient(center bottom, circle, rgba(183,229,45,1) 0,rgba(183,229,45,0) 100px),-moz-linear-gradient(#90de31, #7fc01e);
  background-image: url(../../../static/images/index/button_bg.png), url(../../../static/images/index/button_bg.png), -webkit-gradient(radial, 50% 100%, 0, 50% 100%, 100, from(rgba(183,229,45,1)), to(rgba(183,229,45,0))),-webkit-gradient(linear, 0% 0%, 0% 100%, from(#90de31), to(#7fc01e));
}


.button:hover{

  /* The first rule is a fallback, in case the browser
       does not support multiple backgrounds
    */

  background-position:top left;
  background-position:top left, bottom right, 0 0, 0 0;
}

.button:active{
  /* Moving the button 1px to the bottom when clicked */
  bottom:-1px;
}

.web-title-4{
  height: 80px;
  line-height: 80px;
  text-align: center;
  margin-bottom: 150px;
}
.web-title-4 .web-title-4-h1{
  font-size: 30px;
}
.web-title-5{
  height: 60px;
}














.section{
  /*color: #ffffff;*/
  /*position: relative;*/
}

.section-1{
  background-image: url("../../../static/images/index/page-1.jpg");
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
  background-image: url("../../../static/images/index/xfe-layer-bg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.menu{
  position: absolute;
  right: 60px;
  top: 30%;
  /*background-color: #ffffff;*/
  width: 100px;
  min-height: 200px;
  z-index: 9999;
}
.menu li{
  list-style-type:none;
  text-align: center;
}
.menu li a.page-btn{
  text-indent: 200px;
  display: block;
  width: 8px;
  height: 8px;
  margin: 20px auto;
  background-color: #000;
  cursor: pointer;
  transform:rotate(45deg);
  opacity: 0.6;
  position: relative;
}
.menu li a.page-btn:after{
  content: " ";
  display: inline-block;
  height: 10px;
  width: 10px;
  border-width: 1px;
  border-color: #000;
  border-style: solid;
  /*-webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);*/
  /*transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);*/
  position: relative;
  top: -2px;
  position: absolute;
  left: -2px;
}
.menu li.active a.page-btn{
  width: 10px;
  height: 10px;
}
.menu li.active a.page-btn:after{
  content: " ";
  display: inline-block;
  height: 12px;
  width: 12px;
  border-width: 1px;
  border-color: #000;
  border-style: solid;
  /*-webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);*/
  /*transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);*/
  position: relative;
  top: -2px;
  position: absolute;
  left: -2px;
}
.menu li.home-box a{
  font-size: 20px;
  color: #000;
  opacity: 0.6;
  padding: 0;
}
</style>
