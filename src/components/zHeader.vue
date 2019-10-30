<template>
    <section>
    <div class="header" >
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
        <span>{{title}}</span>
    </div>
    <div style="height: 43px;position: relative"></div>
    </section>
</template>

<script>
    export default {
        name: "zHeader",
        props: {
            title: {
                type: String,
                default: "详情"
            },

            color:{
                type: String,
                default: "#00bcd4"
            }
        }
    }
</script>

<style scoped>
    .header {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 43px;
        line-height: 43px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        background-image: linear-gradient(to right,#FF4921,#FE7B13,#FFC102);
    }

    .header-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        text-align: center;
        font-size: 22px;
        color: #fff;
    }
</style>