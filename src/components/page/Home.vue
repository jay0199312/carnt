<template>
  <div class="Home">
    <el-row type="flex" class="banner" justify="center">
      <el-col :span="20">
        <img src="http://www.qzcarnet.com/carnet/images/index_section1_bg.png" alt="">
          <el-row class="show_Pic">
            <el-col :span="12">
              <div class="box_l">
                <div class="tt">
                  <img src="http://www.qzcarnet.com/carnet/images/download_bg.png" alt="">
                </div>
                <div class="bb">
                  <img src="http://www.qzcarnet.com/carnet/images/download_code.png" alt="">
                  <img src="http://www.qzcarnet.com/carnet/images/android_btn.png" alt="">
                  <img src="http://www.qzcarnet.com/carnet/images/apple_btn.png" alt="">
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <img class="phone" src="http://www.qzcarnet.com/carnet/images/index_phone.png" alt="">
            </el-col>
          </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .banner{
    position: relative;
    background: #0f2c3f;
    img{
      max-width: 100%;
    }
    .show_Pic{
      position: absolute;
      top:0;
      .box_l{
        top:150px;
        position: relative;
        left:150px;
        .bb{
          top:15px;
          position:relative;
          img:nth-child(1){
            float: left;
            margin-right:20px;
            margin-left:40px;
          }
          img:nth-child(2){
            display: block;
            margin-bottom:20px;
            padding-top:20px;
          }
        }
      }
      .phone{
        position: absolute;
        width:25%;
        top:0;
        right:250px;
      }
    }
  }
</style>
