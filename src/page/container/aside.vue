<template>
  <div class="aside fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="24" style="min-height: 100%;">
        <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
        <!--<el-button icon="el-icon-menu" @click="isCollapse = !isCollapse"></el-button>-->
        <!--</el-radio-group>-->
        <!--@click="isCollapse = !isCollapse"-->
        <el-menu default-active="defaultActive" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse">
        </el-menu>
        <el-menu :default-active="defaultActive" style="min-height: 100%;" router
                 background-color="#324057"
                 text-color="#bfcbd9"
                 active-text-color="#20a0ff">
          <el-menu-item index=""><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-location"></i>导航一</template>
            <el-menu-item-group>
              <!--<span slot="title">分组一</span>-->
              <el-menu-item index="/main/table">table</el-menu-item>
              <el-menu-item index="/main/HelloWorld">HelloWorld</el-menu-item>
              <el-menu-item index="/main/ChangeColor" router="false">ChangeColor</el-menu-item>
              <el-menu-item index="/main/md" router="false">md</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
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

<style lang="less" scoped>
  @import '../../style/mixin';

  .aside {
    min-height: 100%;
  }

  /*.el-menu-vertical-demo:not(.el-menu--collapse) {*/
  /*width: 200px;*/
  /*min-height: 400px;*/
  /*}*/
</style>