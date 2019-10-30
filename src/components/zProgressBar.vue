<template>
    <section style="display: flex;height:60px;">
        <div class="z-progress-bar-title">
            {{title}}
        </div>
        <div class="z-progress-bar">
            <div class="z-progress-bar-back"></div>
            <div class="z-progress-bar-front" :style="{'width': (value / max) * 100 + '%'}"></div>
            <div class="z-progress-bar-text">
                <span style="color:#fe7a13">{{value}}人</span>
                <span>/</span>
                <span style="color:gainsboro">{{max}}人</span>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "zProgressBar",

        props: {
            value: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            title: {
                type: String,
                default: "景区"
            }
        }
    }
</script>

<style scoped>
    .z-progress-bar-title {
        color: #ffffff;
        flex: 0 0 2rem;
        padding-right: 10px;
        font-size: 0.32rem;
    }

    .z-progress-bar {
        position: relative;
        height: 24px;
        flex: auto;
    }

    .z-progress-bar-front {
        position: absolute;
        top: 1px;
        width: 100%;
        height: 15px;
        background-image: linear-gradient(to right, #3fecff, #6149f6);
        transition: width 0.2s ease;
        border-radius: 8px;
    }

    .z-progress-bar-back {
        position: absolute;
        width: 100%;
        height: 15px;
        background-color: transparent;
        border: 1px solid rgba(200, 200, 200, 0.5);
        border-radius: 8px;
    }

    .z-progress-bar-text {
        position: absolute;
        top: 24px;
        width: 100%;
        text-align: right;
        color: #ffffff;
    }

</style>