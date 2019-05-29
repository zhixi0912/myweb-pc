<template>
  <div class="web-w">
    <div class="register-box">
      <el-card class="box-card">
        <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
          <el-tab-pane label="手机注册" name="first"><MobileRegister></MobileRegister></el-tab-pane>
          <el-tab-pane label="普通注册" name="second"><AccountsRegister></AccountsRegister></el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
  import AccountsRegister from './AccountsRegister'  //引用帐号登录组件
  import MobileRegister from './MobileRegister'  //引用手机登录组件
  export default {
    name: "register",
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
      MobileRegister,
      AccountsRegister,
    }
  };
</script>

<style scoped>
.register-box{
  width: 670px;
  /*padding: 15px 50px;*/
  margin: 0 auto;
}
</style>
