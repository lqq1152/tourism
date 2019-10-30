<template>

    <section>
        <z-header title="详细列表"/>
        <div class="list-item" v-for="(item,index) of list" :key="'shoplist' + index">
<!--            <a :href="item.url || '#'">-->
                <div class="list-item-content">
                    <img class="list-item-img" :src="item.img">
                    <div class="list-item-title" style="font-weight: bold">
                        {{item.title}}
                        <a :href="'https://uri.amap.com/marker?position=' + item.sw[0] + ',' + item.sw[1]"><img src="../assets/img/去这里.png" alt=""></a>
                    </div>

                </div>
            <a :href="item.url || '#'" class="into"><img src="../assets/img/into.png" alt="" style="width: 20px;height: 20px"></a>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ShopList",
        data() {
            return {
                list: []
            }
        },

        watch: {
            $route(to, from) {
                if (to.name === 'ShopList') {
                    this.getList()
                }
            }
        },

        methods: {
            getList() {
                this.$axios.get('static/mock/shop.json').then(res => {
                    let query = this.$route.params.query;
                    this.list = res.data[query]
                })
            },
        },

        mounted() {
            this.getList()
        }
    }
</script>

<style scoped>
    body{
        background-color: #aaaaaa;
    }
            .list-item{
                box-sizing: border-box;
                width: 100%;
                height: 100px;
                display: flex;
                border-bottom: 1px solid #eeeeee;
                flex-direction: row;
                justify-content: space-between;
                margin: 5px;
            }
    .list-item-content {

        box-sizing: border-box;
        display: flex;

        padding: 10px 5px 10px 5px;
    }

    .list-item-title {
        line-height: 40px;
        padding-left: 15px;
        font-size: 16px;
        color: #333;
        display: flex;
        font-family: Georgia;
        flex-direction: column;
    }

    .list-item-img {
        border-radius: 5px;
        height: 80px;
        width: 120px;
    }
    .item-button{
        box-sizing: border-box;
        margin-top: 45px;
        margin-right: 45px;
        height: 25px;
        background: #ff9300;
        padding:  5px;
        border-radius: .06rem;
        z-index: 10;
        color: #fff
    }
.list-item .into{
    display: flex;
    align-items: center;
    width: 30px;
}

section section div{
    background-image: linear-gradient(to right,#FF4921,#FE7B13,#FFC102);
}
            .header[data-v-14216a47]{
       background-image: linear-gradient(to right,#FF4921,#FE7B13,#FFC102);
   }
</style>