<template>
  <div>
      <span class="svgIcon" :style="colorFill">
        <svg width="29" height="29" class="svgIcon-use">
          <path fill-rule="evenodd" d="M21 8.1l-6.5 5.6L9 8.1l-.8.8 5.6 5.6-5.6 5.6.8.8 5.6-5.6 5.6 5.6.8-.8-5.6-5.6L21 9.4"/>
        </svg>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    color: String
  },
  computed: {
    colorFill() {
      return {
        fill: this.color || "#0edfee"
      };
    }
  }
};
</script>

<style scoped>
.svgIcon {
  fill: #0edfee;
  display: inline-block;
  width: 31px;
  height: 31px;
  border: 1px solid transparent;
  box-sizing: border-box;
}
.svgIcon:hover {
  fill: #000000;
}
</style>