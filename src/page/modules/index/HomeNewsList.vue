<template>
  <el-card class="box-card">
    <el-tabs :before-leave="moreState" v-model="newsType" @tab-click="handleClick">
      <el-tab-pane :name="list.newsType" :label="list.label"  v-for="(list,index) in tabTitle" :key="index">
        <el-row type="flex" class="row-bg" justify="space-between" v-for="(item,index) in data" :key="index">
          <el-col ><div class="grid-content bg-purple"><router-link :to="'/details/'+item.news.key">{{item.news.title}}</router-link></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple text-right">{{item.dateTime}}</div></el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane name="more" class="more-btn"><span slot="label"><router-link to="/page/wholeList/index">更多+</router-link></span></el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
    export default {
      name: "HomeNewsList",
      data(){
          return{
            // moreState:false,
            newsType:'sports',
            tabTitle:[
              {newsType:'sports',label:'运动'},
              {newsType:'military',label:'军事'},
              {newsType:'finance',label:'财经'},
              {newsType:'entertainment',label:'娱乐'},
              ],
            data:[]
          }
      },
      methods:{
        moreState(tab, event){
          if(tab == 'more'){
            console.log("/////",tab, event );
            return false;
          }

        },
        handleClick(tab, event){
          this.newsType = tab.name
          this.fetch ()
        },
        fetch (page=1,pageSize=10) {
          this.$axios.get('5cf097e8a4ce5245170031eb/myweb/newList', {page:page,pageSize:pageSize,newsType:this.newsType}, res => {
            console.log("res--->",res.data)
            this.data = res.data
          })
        }
      },
      created() {
        this.fetch()
      },
      mounted() {
      }
    }
</script>

<style scoped>
.box-card{
  width: 600px;
}
.box-card .el-tabs__item.is-top:last-child{
  color: #ff4949;
}
.grid-content{
  font-size: 12px;
  height: 30px;
  line-height: 30px;
}
.grid-content a{
  color: #000000;
}
</style>
