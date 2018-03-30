<template>
  <el-row>
    <el-col :span="24">
      <el-menu :default-active="activeIndex" class="header-operations" mode="horizontal"
               @select="handleSelect"
               router
               background-color="#409eff"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item index="/">回到首页</el-menu-item>
        <!--<el-menu-item index="/main/ChangeColor">改变颜色</el-menu-item>-->
        <el-menu-item index="/main/md">Markdown</el-menu-item>
        <el-menu-item index="/main/table">table</el-menu-item>
        <el-submenu index="" popper-class="l_h_80">
          <template slot="title">我的工作台</template>
          <el-menu-item index="/main/ChangeColor">改变颜色</el-menu-item>
          <el-menu-item index="/main/md">Markdown</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '',
      };
    },
    watch: {
      "$route": "watchRouter"
    },
    methods: {
      watchRouter() {
        this.activeIndex = this.$route.path;
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>

<style scoped>
  .header-operations {
    font-weight: bolder;
    display: inline-block;
    float: right;
    padding-right: 30px;
    height: 100%;
    /*background-color:  !important;*/
  }

  .header-operations li {
    color: #fff;
    font-size: 15px;
    background-color: transparent !important;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    margin: 0 10px;
    height: 80px;
    line-height: 80px;
    cursor: pointer;
  }

  .header-operations li:not(.is-disabled):focus,
  .header-operations li:not(.is-disabled):hover {
    color: #ffd04b !important;
    border-bottom: 2px solid #ffd04b !important;
    box-sizing: border-box;
  }

</style>
<style>
  .header-operations li.el-submenu div {
    background-color: transparent;
    line-height: 80px !important;
    height: 80px !important;
  }

  .header-operations li.el-submenu div:focus,
  .header-operations li.el-submenu div:hover {
    border-bottom: 2px solid #409eff;
    background-color: transparent !important;
  }

  .header-operations li .el-submenu__title i {
    color: #fff;
  }

  .l_h_80 > ul > li {
    text-align: center;
    line-height: 40px !important;
    height: 40px !important;
  }

  .l_h_80 > ul > li:not(.is-disabled):focus,
  .l_h_80 > ul > li:not(.is-disabled):hover {
    color: #ffd04b !important;
    border-bottom: 2px solid #ffd04b !important;
    box-sizing: border-box;
  }
</style>