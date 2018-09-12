<template>
  <div>
    <!--<ul style="display: none">-->
      <!--<li v-for="item in list">-->
        <!--<time v-text="item.create_at"></time>-->
        <!--<time v-text="$utils.goodTime(item.create_at)"></time>-->
        <!--<router-link :to="'/ContentList/' + item.id">-->
          <!--{{ item.title }}-->
        <!--</router-link>-->
      <!--</li>-->
    <!--</ul>-->
    <full-page ref="fullpage" :options="options"  id="fullpage">
      <div class="section section-1">
        <el-header class="animated faedOutUp"><myHeader></myHeader></el-header>
        <div class="main web-w clearfix">
            <h3 id="page1-tiele-h1" class="text-center" >标题1</h3>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple bg-purple-left" id="page1-left" >left</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple bg-purple-right" id="page1-right" >right</div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="section section-2">
        <div class="main web-w clearfix">
          <h3 id="page2-tiele-h1" class="text-center">标题2</h3>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple bg-purple-left" id="page2-left" @click='fade'>left</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple bg-purple-right" id="page2-right" :class="{bgBlue:pages,bgBlue:pages}">right</div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="section section-3">
        <div class="main web-w clearfix">
          <h3 id="page3-tiele-h1" class="text-center">标题3</h3>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple bg-purple-left" id="page3-left">left</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple bg-purple-right" id="page3-right">right</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
  import myHeader from '../components/webHeader'
  export default {
    data() {
      return {
        options: {
          afterLoad: this.afterLoad,
        },
        pages: false,
      }
    },
    methods: {
      afterLoad(anchorLink,index ) {
        var pageA = index.index+1;
          if(pageA==1){
            console.log("aa")

            // document.getElementById('page1-tiele-h1').setAttribute('class','flip')
            // document.getElementById('page1-tiele-h1').setAttribute('class','animated')
          }else if(pageA==2){
            console.log(pageA);
            this.pages = true
            // document.getElementById('page2-tiele-h1').setAttribute('class','flip')
            // document.getElementById('page2-tiele-h1').setAttribute('class','animated')
        }
      }
      ,
      fade:function(){
        document.getElementById('page2-left').setAttribute('class','flip')
        // document.getElementById('page2-left').setAttribute('class','animated')
      }
      ,addSection: function(e) {
        e.preventDefault();
        var newSectionNumber = document.querySelectorAll('.fp-section').length + 1;
        console.log(newSectionNumber);
      },


    },
    components:{
      myHeader
    }
  }



  // export default {
  //   name: "Content",
  //   data(){
  //     return {
  //       list: []
  //     }
  //   },
  //   created () {
  //     this.getData()
  //   },
  //   methods: {
  //     getData () {
  //       let that = this
  //       this.$api.get('topics', null, res => {
  //         that.list = res.data
  //         console.log(res);
  //       })
  //     }
  //   }
  // }
</script>

<style scoped>
.el-header{
  border-bottom: solid 1px #e6e6e6;
}
.bgBlue{
  background-color: #ff0000!important;
}
.text-center{
  text-align: center;
  background-color: #409EFF;
}
.bg-purple-left{
  background-color: #67C23A;
}
.bg-purple-right{
  text-align: right;
  background-color: #F56C6C;
}
.page1{
  background-color: #41b883;
}
.page2{
  background-color: #ff5f45;
}
.page3{
  background-color: #0798ec;
}
.section{
  /*color: #ffffff;*/
}
.section-1{
  /*background-image: url("../../static/images/index/400130960.jpg");*/
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.section-2{
  /*background-image: url("../../static/images/index/D8F807DF.jpg");*/
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
