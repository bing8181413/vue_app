<template>
    <div>
        <h1 v-text="haha"></h1>
        <button @click="changeColor()">变色</button>
        <h2 :class="{red:color%2==1,blue:color%2==0}">我会变色</h2>
    </div>
</template>

<script>
    export default {
        name: "ChangeColor",
        data() {
            return {
                haha: 'test message',
                color: 1
            }
        },
        methods: {
            changeColor() {
                this.color++
            }
        },
        created() {
            console.log(1111);
        },
        computed: {
            validation() {
                return {
                    name: !!this.newUser.name.trim(),
                    email: emailRE.test(this.newUser.email)
                }
            },
            isValid() {
                const validation = this.validation
                return Object.keys(validation).every(key => validation[key])
            }
        },
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
        border: 2px solid green;
        color: #000;
        font-weight: bolder;
        background: #fff;
        border-radius: 5px;
    }

    button:focus, button:hover {
        color: #333;
        border-color: #3dd431;
    }
</style>