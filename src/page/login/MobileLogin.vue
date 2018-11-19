<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="0" class="demo-ruleForm">
    <el-form-item  prop="age">
      <el-input placeholder="请输入手机号" v-model.number="ruleForm2.age">
        <template slot="prepend"><i class="fa fa-mobile" style="font-size: 18px;" aria-hidden="true"></i></template>
      </el-input>
    </el-form-item>
    <el-form-item label="" prop="pass">
      <el-input placeholder="请输入短信验证码" v-model="ruleForm2.pass" autocomplete="off">
        <template slot="prepend"><i class="fa fa-unlock-alt" aria-hidden="true"></i></template>
        <el-button slot="append">获取验证码</el-button>
      </el-input>
    </el-form-item>
    <el-form-item label="" prop="pass" v-if="false">
      <el-input placeholder="请输入图片验证码" v-model="ruleForm2.pass" autocomplete="off">
        <template slot="prepend"><i class="fa fa-unlock-alt" aria-hidden="true"></i></template>
        <el-button slot="append">A68G</el-button>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="sub-btn" type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
      name: "mobile-login",
      data() {
        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('年龄不能为空'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }
          }, 1000);
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else {
            callback();
          }
        };
        return {
          ruleForm2: {
            pass: '',
            checkPass: '',
            age: ''
          },
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
              { validator: checkAge, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
      }
    }
</script>

<style scoped>
  .sub-btn{
    width: 100%;
  }
</style>
