<template>
  <div class="body">
    <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
      <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>活动管理</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
    <!--</el-breadcrumb>-->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {};
</script>

<style>
.body {
  /*border: 2px #409eff solid;*/
  margin: -2px;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>