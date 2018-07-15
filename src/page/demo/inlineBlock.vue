<template>
    <div class="demo">
        <div class="sup">
            <div class="sub sub1"></div>
            <div class="sub sub2"></div>
        </div>
        <div class="parent">
            <a class="son">aaa</a><!--
        --><a class="son">bbb</a><!--
        --><a class="son">ccc</a><!--
        --><a class="son">ddd</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inline-block"
    }
</script>

<style scoped>
    * {
        /*margin: 0;*/
        /*padding: 0;*/
        /*border: 0;*/
    }

    .sup {
        display: block;
        background: #555555;
        height: 100px;
        width: 100%;
        letter-spacing: -1000px;
    }

    .sub {
        display: inline-block;
        width: 50%;
        height: 70%;
        /*letter-spacing: 0;*/

    }

    .sub1 {
        background: #ff7788;
    }

    .sub2 {
        background: #3190e8;
    }

    .parent {
        display: block;
    }

    .son {
        display: inline-block;
        border: 1px #e5e5e5 solid;
    }
</style>