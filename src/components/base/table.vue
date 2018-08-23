<template>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
            prop="date"
            label="声明方式"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="变量提升"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="作用域">
        </el-table-column>
        <el-table-column
            prop="address"
            label="初始值">
        </el-table-column>
        <el-table-column
            prop="address"
            label="重复定义">
        </el-table-column>
    </el-table>
</template>

<script>
    import config from '@/config/import';

    console.log(config);

    export default {
        name: '',
        data() {
            return {
                tableData: [
                    {
                        name: 'const',
                        variable: '否',
                        scope: '块级',
                        needInit: '需要',
                        duplicateDefinition: '不允许',
                    },
                    {
                        name: 'let',
                        variable: '否',
                        scope: '块级',
                        needInit: '不需要',
                        duplicateDefinition: '不允许',
                    },
                    {
                        name: 'var',
                        variable: '是',
                        scope: '函数级',
                        needInit: '不需要',
                        duplicateDefinition: '允许',
                    },
                ],
            };
        },
    };
</script>

<style scoped>

</style>