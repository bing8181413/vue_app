<template>
    <div>
        <h1 v-text="haha"></h1>
        <button @click="changeColor()">变色</button>
        <h2 :class="{red:color===1,blue:color===2}">我会变色</h2>
    </div>
</template>

<script>
    export default {
        name: "ha",
        data: function () {
            return {
                haha: 'test message',
                color: 1
            }
        },
        methods: {
            changeColor: function () {
                this.color = (this.color === 1 ? 2 : 1)
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }

    .red {
        color: red;
    }

    .blue {
        color: green;
    }

    button {
        line-height: 40px;
        height: 40px;
        font-size: 18px;
        min-width: 120px;
        margin-bottom: 5px 20px;
        text-align: center;
        border: 1px solid green;
        color: #000;
        font-weight: bolder;
        background: #fff;
        border-radius: 5px;

    }
</style>