<template>
    <div class="line-el">
        <div class="line-el-cube" v-if="cube">
            {{cube}}
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'lineElement',
        props: {
            cube: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .line-el {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 5px 5px;
    }

    .line-el-cube {
        flex: 0 0 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #ffffff;
        font-size: 24px;
        background-color: #a8bd58;
        margin-right: 5px;
    }
</style>