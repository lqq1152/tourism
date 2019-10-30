<template>
    <div class="list">
            <div class="list-item" v-for="(item,index) of list" :key="index">
                        <img class="list-item-img" :src="item.img">
                        <div class="list-item-title">
                            {{item.title}}
                        </div>
               <div class="list-item-icon">
                   <a :href="'https://uri.amap.com/marker?position='"><img src="../../../assets/img/到这里2.png" alt="" ></a>
                   <a :href="item.url || '#'" class="item-button">查看详情 </a>
               </div>

            </div>

    </div>

</template>

<script>
    export default {
        name: "DetailPicList",
        props: {
            list: Array
        }
    }
</script>

<style scoped>
    .item-button{
        box-sizing: border-box;
        position: absolute;
        right: 15px;
        height: 25px;
        background: #ff9300;
        padding:  5px 20px;
        border-radius: .3rem;
        z-index: 10;
        color: #fff
    }
    .list-item {
        width: 47%;
        display: flex;
        margin: 10px 5px 0 5px;
        background-color: white;
        flex-direction: column;
        border-radius: 5px;
        justify-content: center;

    }

    .list-item-title {
        display: flex;
        justify-content: left;
        line-height: 0.8rem;
        padding: 0 3px;
        font-size: 0.32rem;
        color: #333;
    }
    .list-item-icon{
        padding: 5px 5px 10px 5px;
        width: 100%;
        position: relative;
    }
    .list-item-img {
        border-radius: 5px 5px 0 0;
        height: 130px;
        width: 100%;
        margin: 0 auto;
    }
    .list{
        margin-top: 10px;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-around;
        background-color: #f5f5f5;
    }



</style>