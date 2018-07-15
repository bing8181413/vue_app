<template>
    <el-container>
        <el-header style="height: 80px;background-color: #409eff;">
            <aha-top></aha-top>
        </el-header>
        <el-container>
            <el-aside class="aside" width="250px" style="background-color: rgb(238, 241, 246)">
                <aha-aside></aha-aside>
            </el-aside>
            <el-main>
                <aha-main></aha-main>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import AhaHeader from '@/page/container/header';
    import AhaAside from '@/page/container/aside';
    import AhaBody from '@/page/container/body';

    export default {
        name: 'App',
        components: {
            'aha-top': AhaHeader,
            'aha-aside': AhaAside,
            'aha-main': AhaBody
        }
    };
</script>

<style scoped>
    .el-container {
        min-height: 100%;
    }
</style>