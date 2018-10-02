<template>
    <div class="audio-main">
      <el-header class="animated faedOutUp"><Header></Header></el-header>
      <div class="audio-box">
          <div class="audio-operation">

          </div>
        <el-row>
          <el-col :span="6">
            <div class="grid-content audio-operation">
              <el-row>
                <el-col :span="8">
                  <div class="grid-content">
                    <i class="fa fa-backward"></i>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content">
                    <i class="fa fa-play"></i>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content">
                    <i class="fa fa-forward"></i>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <div class="block">
                <span class="demonstration">默认</span>
                <el-slider v-model="value1"></el-slider>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <el-row>
                <el-col :span="8">
                  <div class="grid-content">
                    <el-switch
                      v-model="value3"
                      active-text="高品质"
                      >
                    </el-switch>
                  </div>
                </el-col>
                <el-col :span="16">
                  <div class="grid-content grid-content-volume">
                    <i class="fa fa-volume-up"></i>
                    <div class="block">
                      <span class="demonstration">默认</span>
                      <el-slider v-model="value2"></el-slider>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
    export default {
      name: "AudioBox", //音乐组件
      data() {
        return {
          value1: 0,
          value2: 16,
          value3: true,
        }
      },
      methods: {
        formatTooltip(val) {
          return val / 100;
        }
      }
    }
</script>

<style scoped>
.audio-box{
  padding: 20px 0;
  background-image: -webkit-linear-gradient(left, rgb(226, 225, 228), rgb(186, 204, 217) 50%, rgb(205, 209, 211));
  background-image: linear-gradient(to right, rgb(226, 225, 228), rgb(186, 204, 217) 50%, rgb(205, 209, 211));
  background-repeat: no-repeat;
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='rgb(226, 225, 228)', endColorstr='rgb(205, 209, 211)', GradientType=1);
}
.grid-content-volume{
  display: flex;
}
.grid-content-volume i{
  vertical-align: middle;
}
.grid-content-volume .block{
  flex: 1;
}
.audio-operation .grid-content{
  border: 1px solid #ffffff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #ffffff;
  cursor: pointer;
  font-size: 30px;
}
</style>
