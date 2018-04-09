<template>
  <li>
    <div class="tree-title" @click="toggle" @dblclick="changeType">
      {{model.name}}
      <span v-if="isFolder" :class="[open]">[ {{open ? '合' : '开'}} ]</span>
    </div>
    <ul v-show="open">
      <tree :model="model" v-for="model in model.children" :key="model.$index">
      </tree>
      <li @click="addChild"> + 新增</li>
    </ul>
  </li>
</template>
<script>
  import Vue from 'vue';

  export default {
    name: 'tree',
    data() {
      return {
        open: false,
      };
    },
    props: {
      model: Object,
    },
    computed: {
      isFolder() {
        return this.model.children && this.model.children.length;
      },
    },
    methods: {
      toggle() {
        if (this.isFolder) {
          this.open = !this.open;
        }
      },
      changeType() {
        if (!this.isFolder) {
          Vue.set(this.model, 'children', []);
          this.addChild();
          this.open = true;
        }
      },
      addChild() {
        this.model.children.push({name: 'new staff'});
      },
    },
  };
</script>

<style scoped>
  .tree-title {
    text-align: left;
    color: #333;
  }

  li ul {
    text-align: left;
    color: #999;
    border-left: 1px solid #ccc;
    box-sizing: border-box;
  }

  li ul li {
    padding-left: 15px;
    padding-top: 10px;
  }

</style>