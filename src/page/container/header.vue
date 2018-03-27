<template>
    <div class="">
        <nav class="navbar-dark bg-primary navbar navbar-expand-lg ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Aha</a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="btn btn-primary">回到首页</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/ChangeColor" class="btn btn-primary">改变颜色</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/md" class="btn btn-primary">Markdown</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
    };
</script>

<style scoped>

</style>