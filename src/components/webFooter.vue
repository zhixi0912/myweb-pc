<template>
  <div class="footer">
    <div class="webFooter" id="webFooter">
      <div class="foot-nav">
        <div class="l-logo"></div>
        <div class="r-nav">
          <a class="el-button el-button--text" href="">我是1</a>|
          <a class="el-button el-button--text" href="">我是2</a>|
          <a class="el-button el-button--text" href="">我是3</a>|
          <a class="el-button el-button--text" href="">我是4</a>|
          <a class="el-button el-button--text" href="">我是5</a>

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
