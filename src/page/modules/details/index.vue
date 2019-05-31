<template>
    <div>
      <el-page-header @back="goBack" :content="this.data.title">
      </el-page-header>
      <div v-html="this.data.news"></div>
    </div>
</template>

<script>
    export default {
      name: "index",
      data(){
        return{
          key: this.$route.params.key,
          data:{}
        }
      },
      methods:{
        fetch (page=1,pageSize=10) {
          this.$axios.post('5cf097e8a4ce5245170031eb/myweb/upload', {key:this.key}, res => {
            console.log("data--22->",res.data)
            res.data[0].news.map(item=>{
              console.log("----------->",item.key,this.key)
              if(item.key=this.key){
                item.dateTime = res.data[0].dateTime
                this.data = item ;
                // this.data.time = res.data.dateTime
              }

            })
            console.log("data-33->",this.data)
          })
        },
        goBack() {
          console.log('go back');
        }
      },
      created() {
        console.log("key--11->",this.key)
        this.fetch()
      }
    }
</script>

<style scoped>

</style>
