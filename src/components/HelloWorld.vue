<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <tree :model="model"></tree>
    </div>
</template>

<script>
    import tree from './tree'
    var data = {
        name: 'My Tree',
        children: [
            { name: 'hello' },
            { name: 'wat' },
            {
                name: 'child folder',
                children: [
                    {
                        name: 'child folder',
                        children: [
                            { name: 'hello' },
                            { name: 'wat' }
                        ]
                    }
                ]
            }
        ]
    }

    export default {
        name: 'HelloWorld',
        components: {
            tree: tree
        },
        data() {
            return {
                msg: '欢迎 vue tree 组件',
                model: data
                // {
                //     name: 'model-name',
                //     children:[]
                // }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
