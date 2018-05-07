<template>
  <div>
    <!--<h1 v-text="haha"></h1>-->
    <!--<input type="text" v-model="haha">-->
    <p id="color" :style="colortmp" @mouseenter="randomColor(1)" @mouseleave="randomColor(2)">{{colortmp.color}} 移入变色
      移出静止</p>
    <input type="text" v-model="colortmp.color" :maxlength="7" v-focus>
    <close :color="colortmp.color"></close>
    <div id="hook-arguments-example" v-demo:foo.a.b="colortmp.color"></div>
  </div>
</template>

<script>
import { demo } from "../direcitve/index";
import close from "../components/icon/close";

export default {
  name: "ChangeColor",
  components: {
    close: close
  },
  data() {
    return {
      haha: "test message",
      colortmp: { color: "red" },
      time: null,
      getColor: "",
      message: "helloooooooo world !!!"
    };
  },
  directives: {
    // 局部指令
    demo: demo,
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  watch: {
    colortmp: {
      handler(colortmp) {
        let color = colortmp.color;
        let haha = color.indexOf("#") == -1 ? "#" + color : color;
        this.colortmp["color"] = haha;
        return haha;
      }
      // deep: true,
    }
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
            return rdmNum.split("").reverse()[k] || 0;
          })
          .reverse()
          .join("");
      };
      if (!this.time) {
        this.time = setInterval(function() {
          let sixcolor = "#" + rdm();
          // console.log(sixcolor);
          self.colortmp = { color: sixcolor };
        }, 500);
      } else {
        clearInterval(this.time);
        this.time = null;
      }
    }
  },
  created() {
    // console.log(1111);
  },
  computed: {
    validation() {
      return {
        name: !!this.newUser.name.trim(),
        email: emailRE.test(this.newUser.email)
      };
    },
    isValid() {
      const validation = this.validation;
      return Object.keys(validation).every(function(key) {
        return validation[key];
      });
    }
  }
};
</script>

<style scoped>
input {
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 10px 15px;
}

input:focus {
  border: 1px solid red;
}

#color {
  width: 800px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: 25px 50px;
  padding: 15px 25px;
  border: 5px solid #409eff;
  text-align: center;
  font-size: 48px;
  font-weight: bolder;
  border-radius: 5px;
}
</style>