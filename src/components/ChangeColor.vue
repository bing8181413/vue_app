<template>
  <div>
    <!--<h1 v-text="haha"></h1>-->
    <!--<input type="text" v-model="haha">-->
    <p id="color" :style="colortmp" @mouseenter="randomColor" @mouseleave="randomColor">移入移出 我会变色</p>
  </div>
</template>

<script>
  export default {
    name: 'ChangeColor',
    data() {
      return {
        haha: 'test message',
        colortmp: {},
      };
    },
    methods: {
      randomColor() {
        let sixcolor = '';
        const orderNum = '0123456789ABCDEF';
        let rdm = function() {
          return orderNum[Math.floor(Math.random() * 16)];
        };
        sixcolor = '#' + rdm() + rdm() + rdm() + rdm() + rdm() + rdm();
        this.colortmp = {color: sixcolor};
        return sixcolor;
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
  #color {
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