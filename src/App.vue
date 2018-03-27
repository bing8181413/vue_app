<template>
    <div id="app">
        <AhaHeader class="header"></AhaHeader>
        <div class="main">
            <AhaAside class="aside"></AhaAside>
            <AhaBody class="body"></AhaBody>
        </div>
    </div>
</template>

<script>
    import AhaHeader from '@/page/container/header';
    import AhaBody from '@/page/container/body';
    import AhaAside from '@/page/container/aside';

    export default {
        name: 'App',
        components: {
            AhaHeader,
            AhaBody,
            AhaAside
        }
    }
</script>

<style>
    * {
        outline: none;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    html, body {
        margin: 0;
        padding: 0;
        border: 0;
        height: 100%;
        width: 100%;
    }

    .main {
        width: 100%;
        position: absolute;
        top: 56px;
        bottom: 0px;
        left: 0px;
        display: flex;
        flex-flow:row;
    }

    .aside {
        width: 200px;
        background-color: #cc85d9;
    }

    .body {
        width: 100%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
        border: 0;
        height: 100%;
        width: 100%;
    }
</style>
