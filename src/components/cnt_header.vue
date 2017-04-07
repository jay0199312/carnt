<template>
  <div class="header">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="18">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6">
            <img src="http://www.qzcarnet.com/carnet/images/logo.png" alt="车网通,让您养车更轻松" class="auto">
          </el-col>
          <el-col :span="18">
            <ul class="nav">
              <li><router-link to="/home" active-class="active">首页</router-link>|</li>
              <li><router-link to="/user" active-class="active">用户端</router-link>|</li>
              <li><router-link to="/seller" active-class="active">商家端</router-link>|</li>
              <li><router-link to="/adviser" active-class="active"> 顾问端</router-link>|</li>
              <li><router-link to="/coffee" active-class="active">4S Café</router-link>|</li>
              <li><router-link to="/about" active-class="active">关于车网通</router-link></li>
            </ul>
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
  .header{
    margin-top:40px;
  }
  .auto{
    width:100%;
  }
  .nav{
    float: right;
    margin-top:30px;
    height: 31px;
    list-style: none;
    li{
      display: inline;
      a{
        text-decoration: none;
        color: #000;
        margin: 0 5px;
        padding:10px 15px;
        &.active{
           color: #06affd;
           border-bottom:3px solid #06affd;
         }
      }
    }
  }
</style>
