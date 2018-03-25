<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <router-link to="/ChangeColor" class="btn btn-primary">Go to ChangeColor</router-link>
        <router-link to="/md" class="btn btn-primary">Go to Markdown</router-link>
        <router-link to="/" class="btn btn-primary">Go index</router-link>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
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

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
