<template>
  <el-container>
    <el-header class="animated faedOutUp"><Header></Header></el-header>
    <el-main>
      <div class="web-w">
        <div class="img-box">
          <Carousel :carousel-list="carouselList"></Carousel>
        </div>
        <div class="login-box-bg"></div>
        <div class="login-box">
          <el-card class="box-card" >
            <template>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="普通登录" name="first"><AccountsLogin></AccountsLogin></el-tab-pane>
                <el-tab-pane label="手机登录" name="second"><MobileLogin></MobileLogin></el-tab-pane>
              </el-tabs>
            </template>
            <el-row>
              <el-col :span="12">
                <div class="grid-content">
                  <el-tooltip class="item" effect="dark" content="QQ登录" placement="top">
                    <el-button icon="fa fa-qq" circle></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="微信登录" placement="top">
                    <el-button icon="fa fa-weixin" circle></el-button>
                  </el-tooltip>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content">
                  <el-button type="text">忘记密码</el-button>
                  <el-button type="text">立即注册</el-button>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </div>
    </el-main>
    <el-footer><Footer></Footer></el-footer>
  </el-container>
</template>

<script>
  import Carousel from './../home/HomeCarousel'  //引用幻灯片组件
  import AccountsLogin from './AccountsLogin'  //引用帐号登录组件
  import MobileLogin from './MobileLogin'  //引用手机登录组件
  export default {
    name: "login",
    data() {
      return {
        activeName: 'first',
        carouselList:[
          {imgUrl:'./../../static/images/login/login-ban-01.jpg'},
          {imgUrl:'./../../static/images/login/login-ban-02.jpg'},
          {imgUrl:'./../../static/images/login/login-ban-03.jpg'},
        ],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log('////////',tab, event);
        console.log(tab.el);
      }
    },
    created(){
      // this.activeName = first;
    },
    components:{
      Carousel,
      AccountsLogin,
      MobileLogin
    }
  }
</script>

<style lang="scss" scoped>
  .el-main{
    background:#e8e8e8;
    .web-w{
      position: relative;
      .login-box{
        position: absolute;
        right: 78px;
        top: 58px;
        z-index: 999;
        .demo-ruleForm{
          width: 300px;
        }
      }
      .login-box-bg{
        content: " ";
        position: absolute;
        width: 500px;
        height: 500px;
        right: 0;
        top: 0;
        right: 0;
        z-index: 998;
        background: url("./../../../static/images/login/login-box-bg-2.png") no-repeat center center;
      }
    }
  }


  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
