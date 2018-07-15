<template>
    <div class="aside fillcontain">
        <el-row style="height: 100%;">
            <el-col :span="24" style="min-height: 100%;">
                <el-menu :default-active="defaultActive" style="min-height: 100%;" router
                         :default-openeds="['1']"
                         class="borderRight"
                         background-color="#324057"
                         text-color="#bfcbd9"
                         active-text-color="#20a0ff">
                    <el-menu-item index=""><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-location"></i>菜单</template>
                        <el-menu-item-group >
                            <el-menu-item index="/main/table">table</el-menu-item>
                            <el-menu-item index="/main/HelloWorld">HelloWorld</el-menu-item>
                            <el-menu-item index="/main/ChangeColor" router="false">ChangeColor</el-menu-item>
                            <el-menu-item index="/main/md" router="false">md</el-menu-item>
                            <el-menu-item index="/main/cm" router="false">水平垂直居中</el-menu-item>
                            <el-menu-item index="/main/delegate" router="false">事件委托</el-menu-item>
                            <el-menu-item index="/main/inlineBlock" router="false">inlineBlock</el-menu-item>
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
                isCollapse: true
            };
        },
        computed: {
            defaultActive: function () {
                return this.$route.path.replace('/', '');
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>

<style lang="less" scoped>
    @import '../../style/mixin';

    .aside {
        background-color: #324057;
        min-height: 100%;
        /*border: 2px #ffd04b solid;*/
        box-sizing: border-box;
    }

    .borderRight{
        border-right: 0;
    }
    /*.el-menu-vertical-demo:not(.el-menu--collapse) {*/
    /*width: 200px;*/
    /*min-height: 400px;*/
    /*}*/
</style>