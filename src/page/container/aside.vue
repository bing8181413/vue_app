<template>
  <div class="aside fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="24" style="min-height: 100%; background-color: #324057;">
        <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
        <!--<el-button icon="el-icon-menu" @click="isCollapse = !isCollapse"></el-button>-->
        <!--</el-radio-group>-->
        <!--<el-menu default-active="defaultActive" @open="handleOpen" @close="handleClose"-->
        <!--:collapse="isCollapse" router theme="dark">-->
        <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
          <el-menu-item index="/main/table"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="1" router="false">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <!--<span slot="title">分组一</span>-->
              <el-menu-item index="/main/table">table</el-menu-item>
              <el-menu-item index="/main/HelloWorld">HelloWorld</el-menu-item>
              <el-menu-item index="/main/ChangeColor" router="false">ChangeColor</el-menu-item>
              <el-menu-item index="/main/md" router="false">md</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
      };
    },
    computed: {
      defaultActive: function() {
        return this.$route.path.replace('/', '');
      },
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>

<style scoped>
  .aside {
    min-height: 100%;
  }

  /*.el-menu-vertical-demo:not(.el-menu--collapse) {*/
  /*width: 200px;*/
  /*min-height: 400px;*/
  /*}*/
</style>