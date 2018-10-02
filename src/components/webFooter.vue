<template>
  <div class="footer">
    <div class="webFooter" id="webFooter">
      <div class="foot-nav">
        <div class="l-logo"></div>
        <div class="r-nav">
          <a class="el-button el-button--text" href="">关于我们</a>|
          <a class="el-button el-button--text" href="">服务协议</a>|
          <a class="el-button el-button--text" href="">客服中心</a>|
          <a class="el-button el-button--text" href="">诚聘英才</a>|
          <a class="el-button el-button--text" href="">版权所有</a>

        </div>
      </div>
      <el-row>

      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "webFooter"
    }
</script>

<style scoped>
.footer{
  margin: 0 -20px;
}
.webFooter{
  width: 1200px;
  margin: 0 auto;
}
.foot-nav{

}
.l-logo{
  display: inline-block;
}
.r-nav{
  display: inline-block;
}
.el-button--text{
  margin-right: 10px;
  color: #666;
  text-decoration: none;
}
</style>
