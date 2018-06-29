<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
    };
</script>

<style lang="less">
    @import './style/common';

    * {
        outline: none;
    }

    /*.fade-enter-active, .fade-leave-active {*/
    /*transition: opacity .5s;*/
    /*}*/

    /*.fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *!*/
    /*{*/
    /*opacity: 0;*/
    /*}*/

    html, body {
        margin: 0;
        padding: 0;
        border: 0;
        height: 100%;
        width: 100%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        margin: 0;
        border: 0;
        height: 100%;
        width: 100%;
    }
</style>
