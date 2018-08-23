<template>
    <div class="container">
        <div class="from">
            来自：
            <a class="btn" href="https://blog.csdn.net/afeiqiang/article/details/8441618" target="_blank">
                <span> https://blog.csdn.net/afeiqiang/article/details/8441618</span>
            </a>
        </div>
        <div class="flex">
            <div class="warp">
                <img class="img" src="http://resource.bucket.ahaschool.com/5b1e3a1b49973nHH99rqAyI.jpeg" title="倒影 title" ref="倒影" alt="倒影"/>
            </div>

            <div class="wrap">
                <div class="image">
                    <img class="img2" src="http://resource.bucket.ahaschool.com/5b1e3a1b49973nHH99rqAyI.jpeg"/>
                </div>
                <div class="down">
                    <div class="reflection"></div>
                    <div class="overlay"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // export default {
    //     name: 'reflect',
    // };
</script>

<style scoped>
    .img {
        width: 650px;
        height: 501px;
        -webkit-box-reflect: below 5px url(http://resource.bucket.ahaschool.com/5b1e3a1b49973nHH99rqAyI.jpeg);
    }

    .btn {
        margin: 5px auto 15px auto;
        display: inline-block;
        padding: 5px 10px;
        background: #3190e8;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
    }

    .container {

    }

    .from {
        width: 100%;
    }
    .flex{
        display: flex;
    }
    .wrap {
        flex: 1;
    }

    .image {
        width: 650px;
        height: 501px;
        margin-bottom: 3px;
    }

    .img2 {
        width: 650px;
        height: 501px;
    }

    .down {
        position: relative;
    }

    .reflection {
        width: 650px;
        height: 501px;
        background-size: cover;
        background: url(http://resource.bucket.ahaschool.com/5b1e3a1b49973nHH99rqAyI.jpeg) bottom center no-repeat;
        -webkit-transform: scaleY(-1);
        -moz-transform: scaleY(-1);
        -ms-transform: scaleY(-1);
        -o-transform: scaleY(-1);
        transform: scaleY(-1);
        opacity: 0.5;
        filter: alpha(opacity=50);
    }

    .overlay {
        position: relative;
        width: 650px;
        height: 501px;
        bottom: 149px;
        /*background-image: -moz-linear-gradient(center bottom, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 90%);*/
        /*background-image: -o-linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 30%);*/
        background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.20, rgb(0, 0, 0)), color-stop(0.90, rgba(0, 0, 0, 0)));
        filter: progid:DXImageTransform.Microsoft.Gradient(gradientType=0, startColor=0, EndColorStr=#000000);
    }
</style>