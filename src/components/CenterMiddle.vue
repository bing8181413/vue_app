<template>
    <div class="hello">
        <h1>水平垂直居中</h1>
        <label>Height:</label>
        <input id="input" class="input" v-model="height"
               @keyup.stop.prevent="upDown">

        <label for="styleMethod1"><input type="radio" id="styleMethod1" name="styleMethod" v-model="styleMethod"
                                         v-bind:value="1"> position absolute</label>
        <label for="styleMethod2"><input type="radio" id="styleMethod2" name="styleMethod" v-model="styleMethod"
                                         v-bind:value="2"> table table-cell </label>
        <label for="styleMethod3"><input type="radio" id="styleMethod3" name="styleMethod" v-model="styleMethod"
                                         v-bind:value="3"> flex justify-content , align-content 都是center </label>
        <label for="styleMethod4"><input type="radio" id="styleMethod4" name="styleMethod" v-model="styleMethod"
                                         v-bind:value="4"> inline 布局 sup height = line-height </label>

        <div class="event">
            <a class="handle" @click.stop.prevent="trigger_box"><span>切换 父级 box-sizing:border {{boxSizing}}</span></a>
        </div>
        <div class="sup" ref="sup" :style="{height:height+'px'}"
             :class="{border:boxSizing,content:!boxSizing,sup1:styleMethod===1,sup2:styleMethod===2,sup3:styleMethod===3,sup4:styleMethod===4}">
            <!--<div class="sup_content">父级</div>-->
            <div class="son" ref="sup"
                 :class="{son1:styleMethod===1,son2:styleMethod===2,son3:styleMethod===3,son4:styleMethod===4}">
                子级
            </div>
        </div>
        <div v-text="supStyle"></div>
        <textarea class="txt">
            子级设置为 absolute 是子级的 margin 相对于父级的 border 的内 边界位置
        </textarea>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                styleMethod: 1,
                boxSizing: false,
                height: 300
            }
        },
        methods: {
            trigger_box(e) {
                this.boxSizing = !this.boxSizing;
            },
            upDown(e) {
                let keyCode = e.keyCode;
                if (keyCode === 38) {
                    this.height = parseInt(this.height) + 10;
                } else if (keyCode === 40) {
                    this.height = parseInt(this.height) - 10;
                }
            }
        },
        computed: {
            supStyle: function () {
                let sup = document.getElementsByClassName('sup')[0];
                return sup;
            }
        }
    }
</script>

<style scoped>
    .hello {
        text-align: left;
        background: #e4e4e4;
        padding: 5px 20px;
    }

    .input {
        width: 100px;
        padding: 5px 15px;
        border-radius: 7px;
    }

    [name=styleMethod] {
        margin-left: 20px;
        display: inline-block;
        width: 20px;
    }

    .event {
        display: block;
        margin: 10px auto;
    }

    .handle {
        display: inline-block;
        /*margin: auto;*/
        line-height: 25px;
        text-align: center;
        border-radius: 10px;
        padding: 5px 15px;
        background: #666;
        color: #fff;
    }

    .handle:hover {
        background: #111;
        color: #fff;
        cursor: pointer;
    }

    .border {
        box-sizing: border-box
    }

    .content {
        box-sizing: content-box
    }

    .sup1 {
        position: relative;
    }

    .son1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .sup2 {
        display: table;
        text-align: center;
    }

    .son2 {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }

    .sup3 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sup4 {
        text-align: center;
        line-height: 300px;
    }

    .son4 {
        display: inline;
        vertical-align: middle;
    }

    .sup {
        margin: 20px auto;
        width: 400px;
        height: 300px;
        border: 30px #8dc9ff solid;
        padding: 20px;
        background: #3190e8;
        color: #fff;
        font-size: 24px;
        font-weight: bolder;
        transition: all 1s;
    }

    .sup:hover {
        color: #d45db9;
    }

    .sup_content {
        position: absolute;
        top: 0;
        left: 0;

    }

    .transform {

    }

    .son {
        border: 10px #8dc9ff solid;
        width: 100px;
        height: 100px;
        background: #99eccf;

    }

    .son:hover {
        color: #3a3dff;
    }

    .txt {
        /*max-width: 100%;*/
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        height: 100px;
        padding: 5px;
        font-size: 16px;
        resize: none;
        /*border: 1px #555555 solid;*/
    }
</style>
