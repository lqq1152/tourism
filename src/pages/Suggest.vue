<template>
    <div>
        <z-header title="互动社区"/>

        <z-dialog :show="show" :title="title1"  @hideModal="hideModal" @submit="submit"/>
        <z-dialog2 :show2="show2" :title="title2" @hideModal1="hideModal1" @submit1="submit1" />
        <div class="main">
            <div class="main-body">
                <div class="img-box">
                    <div class="box1" @click="show = true  "><img src="../assets/img/咨询.png" alt="" ></div>
                    <div class="box2" @click="show2 = !show2"><img src="../assets/img/建议.png" alt="" ></div>
                </div>

                    <div class="title" >新闻<a href="" class="more">查看更多</a></div>
                    <div class="line"></div>
                    <div  v-for="item in list" :key="item.id">
                        <a :href="item.url" class="item border-bottom border">
                            <img class="item-img" :src="item.imgUrl"  style="border-radius: 5px">
                            <div class="item-info">
                                <p class="item-title">{{item.title}}</p>
                                <p class="item-desc">{{item.desc}}</p>
                            </div>
                            <img src="../assets/img/into.png" class="item-into">

                        </a>
                        <div class="line"></div>



                </div>
            </div>

        </div>



    </div>

</template>

<script>
    export default {
        name:"Suggest",
        data() {
            return {
                list: [],
                title1:'',
                title2:'',
                show: false,
                show2: false,

            }
        },

        watch: {
            $route(to, from) {
                if (to.name === 'Suggest') {
                    this.getList()
                }
            }
        },

        methods: {
            getList() {
                this.$axios.get('static/mock/index.json').then(res => {
                    console.log(res)

                    if (res.data) {
                        const data = res.data
                        console.log(data.data.recommendList)
                        this.list = data.data.recommendList
                    }
                })
            },
            hideModal() {
                // 取消弹窗回调
                this.show = false
                window.addEventListener('touchmove', func, { passive: false })
            },

            submit() {
                // 确认弹窗回调
                this.show = false
                window.addEventListener('touchmove', func, { passive: false })
            },
            hideModal1() {
                // 取消弹窗回调
                this.show2 = false
                window.addEventListener('touchmove', func, { passive: false })
            },

            submit1() {
                // 确认弹窗回调
                this.show2 = false
                window.addEventListener('touchmove', func, { passive: false })
            }
        },

        mounted() {
            this.getList()
        }

    }
</script>

<style scoped lang="stylus">
    @import '~styles/mixins.styl';
    .line{
        width 335px
        height 1px
        background-color #E6E6E6
        margin-left 10px
    }
    .main{
        width 100%
        height 100%
        min-height 100vh
        background-color #E6E6E6

    }
    .main-body{
        display flex
        justify-content center
        flex-direction column
        padding 10px 10px
    }
    .img-box{
        display: flex;
        flex-direction row
        justify-content: space-between;}
        .box1{
            width 50%
            z-index 1
        }
        .box2{
            width 50%
            z-index 1
        }


    .title
        width 100%
        line-height: .5rem
        background: #fff
        margin-top: .2rem
        text-indent: .2rem
        color: #212121

        position relative
        font-size 16px
        font-family "Microsoft Yahei"
        font-weight bold

    .item
     display: flex
     overflow: hidden
     height: 1.9rem
     background: #fff
     color: #000
     justify-content space-between
     padding 10px

    .item-img {
        width: 142px
        height: 88px

        border-radius 5px
    }

        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
            .item-title
                width :150px
                line-height: 0.4rem;
                font-size: 0.25rem;
                white-space pre-wrap
                padding-top: .2rem;
            .item-desc
                line-height: .4rem
                color: #ccc
                ellipsis()
        .item-into{
            display: flex;
            align-items: center;
            width 20px
            height 25px;
            margin-top 30px;
        }
    .title .more{
        position: absolute;
        right: 5px;
        color: #aaaaaa
        font-size 10px
    }
</style>