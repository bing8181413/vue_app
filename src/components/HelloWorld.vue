<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <tree :model="model"></tree>
  </div>
</template>

<script>
  import tree from './tree';

  var data = {
    children: [
      {name: 'hello'},
      {name: 'world'},
      {
        name: 'child 111',
        children: [
          {name: '~这~'},
          {name: '~就~'},
          {name: '~是~'},
          {name: '~街~'},
          {name: '~舞~'},
        ],
      },
    ],
  };

  export default {
    name: 'HelloWorld',
    components: {
      tree: tree,
    },
    data() {
      return {
        msg: 'vue tree components',
        model: data,
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    text-align: left;
  }

  h1, h2 {
    margin-top: 20px;
    font-weight: normal;
    text-align: center;
  }

  li {
    display: inline-block;
    margin: 20px 10px;
  }
</style>
