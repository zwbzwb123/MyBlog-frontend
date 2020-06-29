<template>
  <div class="main-wrapper">
    <el-container >
      <transition name="slide-fade">
        <el-header v-if="show" height="80px">
          <router-view name="header"></router-view>
        </el-header>
      </transition>

      <el-container>
        <el-aside width="75%">
          <router-view name="content"></router-view>
        </el-aside>
        <el-container>
          <el-main>
            <introduction-view></introduction-view>
            <label-view></label-view>
          </el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import labelView from '../aside/LabelView'
  import IntroductionView from '../aside/IntroductionView'

  export default {
    data() {
      return {
        show:true,
        percentage:20
      }
    },
    created(){
      for (let i = 1; i<= 400;i++)
        this.percentage = this.percentage +0.1;
    },
    components:{
      IntroductionView,
      labelView
    },
    mounted: function () {
      // 给页面绑定滑轮滚动事件
      if (document.addEventListener) { // firefox
        document.addEventListener('DOMMouseScroll', this.watchScroll, false)
      }
      // 滚动滑轮触发scrollFunc方法
      window.onmousewheel = document.onmousewheel = this.watchScroll
    },
    methods: {
      watchScroll(e) {
        e = e || window.event
        if (e.wheelDelta) {
          if (e.wheelDelta > 0 && this.show === false) { // 当滑轮向上滚动
            this.show = true
          }
          if (e.wheelDelta < 0 && this.show === true) { // 当滑轮向下滚动
            this.show = false
          }
        } else if (e.detail) {
          if (e.detail < 0 && this.show === false) { // 当滑轮向上滚动
            this.show = true
          }
          if (e.detail > 0 && this.show === true) { // 当滑轮向下滚动
            this.show = false
          }
        }
      }
    },
    created() {
      // window.onbeforeunload = function(event){
      //   //监听页面刷新，防止刷新页面 sessionStore 还存储 user 信息
      //   sessionStorage.removeItem("user")
      // };
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">


  .main-wrapper
    background-color #fff
    width 100%
    margin 0 auto

  .el-header, .el-footer {
    text-align: center;
  }

  .el-header{
    background white;
    width:100%;
    position fixed;
    top:0;
  }

  .el-aside {
    color: #333;
    margin-top 80px;
  }

  .el-main {
    margin-top 60px;
    color: #333;
  }

  .el-footer{
      margin-top:50px;
  }

  body > .el-container {
       margin-bottom: 40px;
     }


  .slide-fade-enter-active ,.slide-fade-leave-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-to ,.slide-fade-enter {
    /* .slide-fade-leave-active for below version 2.1.8 */
    transform: translateY(-70px);
    opacity: 0;
  }

</style>
