<template>
    <div class="home">
        <app-header></app-header>

        <van-swipe :autoplay="3000" indicator-color="white" v-if="swiperList.length > 0">
            <van-swipe-item v-for="(item, index) in swiperList" :key="'swiper' + index">
                <a :href="item.url"><img v-lazy="item.thumb" style="width: 100%;height:180px"/></a>
            </van-swipe-item>
        </van-swipe>

        <!--<app-icons :list="iconList"></app-icons>-->

        <div class="icon">
            <a class="icon-item" v-for="item of iconList" :key="'icon' + item.id" :href="item.url">
                <div class="icon-item-img">
                    <img :src="item.imgUrl">
                </div>
                <div class="icon-item-text">{{item.desc}}</div>
            </a>
        </div>

        <!--<app-notice></app-notice>-->
        <app-recommend :recommend="recommend"></app-recommend>
        <app-weekend :list="weekend"></app-weekend>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Icons from './components/Icons'
    import Recommend from './components/Recommend'
    import Weekend from './components/Weekend'
    import Notice from './components/Notice'
    import axios from 'axios'

    export default {
        name: 'Home',
        data() {
            return {
                swiperList: [],  //轮播图
                iconList: [], //icon图标
                recommend: [], //热销推荐
                weekend: []     //周末去哪
            }
        },
        components: {
            "app-header": Header,
            "app-icons": Icons,
            "app-recommend": Recommend,
            "app-weekend": Weekend,
            "app-notice": Notice
        },
        methods: {
            getHomeInfo() {
                axios.get('static/mock/index.json').then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                res = res.data;
                if (res.ret && res.data) {
                    const data = res.data;
                    // this.city = data.data.city;
                    this.swiperList = data.swiperList;
                    this.iconList = data.iconList;
                    this.recommend = data.recommendList;
                    this.weekend = data.weekendList
                }
            }
        },
        mounted() {
            this.getHomeInfo();
        }
    }
</script>

<style scoped>
    .home {
        background: #f5f5f5;
    }

    .icon {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: #ffffff;
        padding-bottom: 10px;
    }

    .icon-item {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
    }

    .icon-item-img {
        box-sizing: border-box;
        width: 100%;
        padding: 5px 10px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .icon-item-img img{
        width: 64px;
        height: 64px;
    }

    .icon-item-text {
        text-align: center;
        color: #333333;
        overflow: visible;
    }
</style>
