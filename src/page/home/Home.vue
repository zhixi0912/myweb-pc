<template>
  <div>
    <el-header class="animated faedOutUp"><myHeader></myHeader></el-header>
    <!--<webHeaderVue-vue></webHeaderVue-vue>-->
    <!--<router-view class="animated faedOutUp" name="Header"></router-view>-->

    <el-main>

      <router-view></router-view>
      <div class="main">
        <div class="list-line-top">
        </div>
        <!--<div class="list-line" v-for="item in topics">-->
            <!--<div v-html="item.content"></div>-->
        <!--</div>-->
      </div>
      <!--<router-view name="HomeCarousel"></router-view>-->
      <router-view name="HomeNewsList"></router-view>
    </el-main>
    <el-footer><myFooter></myFooter></el-footer>
  </div>
</template>

<script>
    import myHeader from '../../components/webHeader'
    import myFooter from '../../components/webFooter'
    export default {
     name: "home",
      data() {
        // topics:[],
        return {
          activeIndex: '1',
          topics:[],
        };
      },
      created () {
       var topics;
        this.$axios.get('playlist/detail', {id: 37880978,updateTime: -1}, r => {
        //     this.$axios.get('topics', null, r => {
        // this.$axios.get('/5baf32fda508d460ae6c42b7/example/searchList', null, r => {
        // this.$axios.get('playlist/detail',{id: 37880978,updateTime: -1}, r => {
          console.log(r)
        //       this.topics = r.data;
        //       topics.push(res.data);
              // console.log(topics[0].content)
        })
      },
      components:{
        myHeader,
        myFooter
      }
    }
</script>

<style scoped>
.main{
  width: 1000px;
  margin: 20px auto;
  overflow: hidden;
  min-height: 300px;
}
.list-line-top{
  margin: 20px auto;
  border: 1px solid #2d2f33;
  min-height: 300px;
  background-color: rgb(131, 203, 172);
}
.list-line{
  margin: 20px auto;
  border: 1px solid #2d2f33;
  background-color: rgb(230, 210, 213);
}
</style>
