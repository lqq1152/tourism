<template>
    <section>
        <z-header title="语音导游"/>
        <div class="list-item" v-for="(item,index) of list" :key="'shoplist' + index" @click="audioPlay(item.url)">
            <div class="list-item-content">
                <img class="list-item-img" :src="item.img">
                <div class="list-item-title">
                    {{item.title}}
                </div>
            </div>
        </div>
        <audio :arc="playing" id="audioPlayer" ref="audioPlayer" controls></audio>
    </section>
</template>

<script>
    export default {
        name: "ShopList",
        data() {
            return {
                list: [],
                playing: ""
            }
        },

        methods: {
            getList() {
                this.$axios.get('static/mock/audio.json').then(res => {
                    this.list = res.data;
                })
            },

            audioPlay(url) {
                let audio = this.$refs.audioPlayer;
                audio.pause();
                audio.src = url;
                audio.play();
            }
        },

        mounted() {
            this.getList()
        }
    }
</script>

<style scoped>
    .list-item-content {
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        display: flex;
        padding: 10px 5px 10px 5px;
        border-bottom: 1px solid #eeeeee;
    }

    .list-item-title {
        line-height: 40px;
        padding-left: 15px;
        font-size: 16px;
        color: #333;
    }

    .list-item-img {
        height: 80px;
        width: 80px;
    }

    #audioPlayer {
        position: fixed;
        width: 100%;
        bottom: 0;
    }
</style>