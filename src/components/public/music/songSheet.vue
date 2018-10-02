<template>
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>{{songSheetTitle}}</span>
          <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
        </div>
        <div v-for="(item,index) in songSheet" v-if="index<=10" class="text item">
          <div class="music-name">{{item.name }}</div>
          <div class="music-author" v-for="(author,index) in item.artists" v-if="index==0">{{author.name }}</div>
        </div>
      </el-card>
</template>

<script>
    export default {
        name: "songSheet",  //歌单组件
        data(){
          return{
            songSheetTitle:'',
            songSheet:[]
          }
        },
        created () {
          this.$axios.get('/api/playlist/detail', {id: 37880978,updateTime: -1}, res => {

            this.songSheetTitle = res.result.name;
            this.songSheet = res.result.tracks;
            // console.log("111111",res.result.tracks);
          })
        },
    }
</script>

<style scoped>
.list-line-top .box-card{
  width: 300px;
  float: right;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
.item{
  border-bottom: 1px solid #ebeef5;
  display: flex;
  margin-bottom: 0;
  padding:  18px 20px;
  margin-left: -20px;
  margin-right: -20px;
}
.music-name{
  flex: 1;
}
</style>
