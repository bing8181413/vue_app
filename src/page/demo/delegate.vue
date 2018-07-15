<template>
    <div>
        <h4>delegate 事件委托 </h4>
        <ul @click="handler">
            <li v-for="item in data" :data-index="item.key" v-text="item.value"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "delegate",
        data: function () {
            return {
                data: [
                    { key: 1, value: 1111 },
                    { key: 2, value: 2222 },
                    { key: 3, value: 3333 }
                ]
            }
        },
        methods: {
            handler: function (event) {
                // console.log(event);
                let e = event.target;
                if (e.nodeName.toLocaleLowerCase() === 'li') {
                    this.doSomething(e.outerText);
                }
            },
            doSomething(e) {
                console.log(`文本信息：${e}`);
            }
        }

    }
</script>

<style scoped>
    ul {
        width: 250px;
        line-height: 30px;
    }

    li {
        margin: 1px 0;
        border: 1px silver solid;
    }
</style>