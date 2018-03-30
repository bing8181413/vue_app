<template>
  <el-row>
    <el-col :span="24">
      <el-menu :default-active="activeIndex" class="header-operations el-menu-demo Success" mode="horizontal"
               @select="handleSelect">
        <!--background-color="#545c64"-->
        <!--text-color="#fff"-->
        <!--active-text-color="#ffd04b">-->
        <el-menu-item index="1">
          <router-link :to="{ path: '/' }" class="btn btn-primary">回到首页</router-link>
        </el-menu-item>
        <!--<el-submenu index="2">-->
        <!--<template slot="title">我的工作台</template>-->
        <!--<el-menu-item index="2-1">-->
        <!--<router-link to="/main/ChangeColor" class="btn btn-primary">改变颜色</router-link>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="2-2">-->
        <!--<router-link to="/main/md" class="btn btn-primary">Markdown</router-link>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
        <!--<el-submenu index="2-4">-->
        <!--<template slot="title">选项4</template>-->
        <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
        <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
        <!--</el-submenu>-->
        <!--</el-submenu>-->
        <el-menu-item index="3">
          <router-link to="/main/ChangeColor" class="btn btn-primary">改变颜色</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/main/md" class="btn btn-primary">Markdown</router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link to="/main/table" class="btn btn-primary">table</router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>

<style scoped>
  .header-operations {
    display: inline-block;
    float: right;
    padding-right: 30px;
    height: 100%;
  }

  .header-operations li {
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    margin: 0 10px;
    line-height: 80px;
    cursor: pointer;
  }
</style>