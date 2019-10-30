<template>
    <div>
        <detail-header></detail-header>
        <detail-banner
                :sightName="sightName"
                :bannerImg="bannerImg"
                :gallaryImgs="gallaryImgs"
        >
        </detail-banner>
        <div class="center">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Banner from './components/Banner'
    import List from './components/List'
    import axios from 'axios'

    export default {
        name: "DetailPic",
        data() {
            return {
                sightName: "",
                bannerImg: "",
                gallaryImgs: [],
                list: []
            }
        },

        watch:{
            $route(to, from) {
                if (to.name === 'DetailPic') {
                    this.getDetail()
                }
            }
        },
        methods: {
            getDetail() {
                axios.get('static/mock/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then(this.handleDetail)
            },

            handleDetail(res) {
                res = res.data;
                if (res.ret && res.data) {
                    const data = res.data[this.$route.params.id];
                    this.sightName = data.sightName;
                    this.bannerImg = data.bannerImg;
                    this.gallaryImgs = data.gallaryImgs;
                    this.list = data.categoryList
                }
            }
        },
        mounted() {
            this.getDetail()
        },
        components: {
            "detail-banner": Banner,
            "detail-header": Header,
            "detail-list": List
        }
    }
</script>

<style scoped>
    .center {
        margin-top: 15px;
    }
</style>
