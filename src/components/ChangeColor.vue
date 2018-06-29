<template>
    <div>
        <close :color="colorTmp.color"></close>
        <p id="color" :style="colorTmp" @mouseenter="randomColor(1)" @mouseleave="randomColor(2)">
            移入变色 移出停止
        </p>
        <input type="text" v-model="colorTmp.color" :maxlength="7" v-focus>
        <template v-for="n in 5">
            <span v-text="rdmColors[rdmColors.length-n]||colorTmp.color" v-bind:style="{color:rdmColors[rdmColors.length-n]||colorTmp.color}"></span>
        </template>
        <div id="hook-arguments-example" v-demo:foo.a.b="colorTmp.color"></div>
    </div>
</template>

<script>
    import {demo} from '../direcitve/index';
    import close from '../components/icon/close';

    export default {
        name: 'ChangeColor',
        components: {
            close: close,
        },
        data() {
            return {
                haha: 'test message',
                colorTmp: {color: '#10a1cb', 'border-color': '#10a1cb'},
                time: null,
                getColor: '',
                message: 'helloooooooo world !!!',
                rdmColors: [],
                interval: 300,
            };
        },
        directives: {
            // 局部指令
            demo: demo,
            focus: {
                inserted: function(el) {
                    el.focus();
                },
            },
        },
        watch: {
            colorTmp: {
                handler(colorTmp) {
                    let color = colorTmp.color;
                    let haha = color.indexOf('#') === -1 ? '#' + color : color;
                    this.colorTmp['color'] = haha;
                    this.colorTmp['border-color'] = haha;
                    return haha;
                },
                // deep: true,
            },
        },
        methods: {
            randomColor(category) {
                let self = this;
                let rdm = function() {
                    // 生成随机 16进制的2位数数
                    let rdmNum = Math.floor(Math.random() * 0xffffff).toString(16);
                    // 2位数可能有空余的0会被略去 所以补0位
                    return [0, 0, 0, 0, 0, 0]
                        .map(function(v, k) {
                            return rdmNum.split('').reverse()[k] || 0;
                        })
                        .reverse()
                        .join('');
                };
                if (!this.time) {
                    this.time = setInterval(function() {
                        let sixcolor = '#' + rdm();
                        // console.log(sixcolor);
                        self.rdmColors.push(sixcolor);
                        self.colorTmp = {color: sixcolor};
                    }, this.interval);
                } else {
                    clearInterval(this.time);
                    this.time = null;
                }
            },
        },
        created() {
            // console.log(1111);
        },
        computed: {
            validation() {
                return {
                    name: !!this.newUser.name.trim(),
                    email: emailRE.test(this.newUser.email),
                };
            },
            isValid() {
                const validation = this.validation;
                return Object.keys(validation).every(function(key) {
                    return validation[key];
                });
            },
        },
    };
</script>

<style scoped>
    input {
        border: 1px solid #ccc;
        box-sizing: border-box;
        padding: 10px 15px;
        border-radius: 7px;
        text-align: center;
        font-size: x-large;
    }

    input:focus {
        border: 1px solid #f29a55;
    }

    span {
        display: inline-block;
        width: 100px;
        margin: 1px 1px;
        border: 1px solid #ccc;
        border-radius: 7px;
        padding: 10px 15px;
        text-align: center;
        font-size: x-large;
    }

    #color {
        width: 800px;
        display: block;
        text-align: center;
        box-sizing: border-box;
        margin: 25px 50px;
        padding: 15px 25px;
        border: 2px solid #a20d97;
        text-align: center;
        font-size: 48px;
        font-weight: bolder;
        border-radius: 5px;
    }
</style>