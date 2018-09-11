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
    <full-page ref="fullpage" :options="options">
      <div class="section section-1">
        <el-header class="animated faedOutUp"><myHeader></myHeader></el-header>
        First section ...
      </div>
      <div class="section section-2">
        Second section ...
      </div>
      <div class="section section-3">
        Second3 section ...
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
          anchors: ['page1', 'page2', 'page3'],
        },

      }
    },

    methods: {
      afterLoad() {
        let that = this
        console.log("Emitted 'after load' event.");
        console.log(that);
        // if(that.setAttribute("data-anchor") == page2){
        //     alert("1");
        // }
      }
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
