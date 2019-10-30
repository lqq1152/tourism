<template>
    <div class="icons">
        <div  class="icon-item">
            <div class="icon" v-for="item of list" :key="item.id">
                <div class="icon-img">
                    <a :href="item.url" v-if="item.url">
                        <img class="icon-img-content" style="height: 64px;width: 64px" :src="item.imgUrl"/>
                    </a>
                    <img class="icon-img-content" style="height: 64px;width: 64px" :src="item.imgUrl" v-else>
                </div>
                <p class="desc">{{item.desc}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HomeIcon',
        props: {
            list: Array
        },
    }
</script>

<style scoped lang="stylus">
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';
    .icons
        background: #fff

    .icons >>> .icon-item
        height: 0
        padding-bottom: 75%

        .icon
            position: relative
            overflow: hidden
            width: 25%
            padding-bottom: 25%
            float: left
            height: 0

            .icon-img
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                box-sizing: border-box
                padding: .1rem

                .icon-img-content
                    display: block
                    margin: 0 auto
                    height: 100%

            .desc
                position: absolute
                left: 0
                right: 0
                bottom: 0
                height: .44rem
                line-height: .44rem
                text-align: center
                color: $darkTextColor
                ellipsis()
    .icon-item .icon-item-img {
        padding 5px !important
    }
</style>
