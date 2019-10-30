<template>
    <div class="header">
        <img src="../../../assets/img/logo.png" style="height:100%;" alt="">
        <div class="header-title">掌游仪陇</div>
        <div style="flex: auto"></div>
        <div class="header-weather" v-if="weather.length > 0">
            <span>仪陇 {{weather[0].wea}}</span>
            <img width="24" height="24" :src="'static/weather/' + weather[0].wea_img + '.png'" alt="">
             温度:{{weather[0].tem}} {{weather[0].air_level}}
        </div>
        <!--<iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tm&skin=sogou&city=仪陇" frameborder="0" width="240" height="24" allowtransparency="true" style="margin-top:8px;float: right"></iframe>-->
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                weather: [],

            }
        },

        methods: {
            getNowWeather() {
                let weatherConfig = {
                    appid: "67819758",
                    appsecret: "k2sQ3Kmo",
                    cityid: "101270505"
                };
                this.$axios.get('https://www.tianqiapi.com/api/', {params: weatherConfig}).then(res => {
                    this.weather = res.data.data;
                })
            }
        },

        mounted() {
            this.getNowWeather();
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        height: 40px;
        line-height: 40px;
        background-image: linear-gradient(to right,#FF4921,#FE7B13,#FFC102);
    }

    .header-title {
        margin: 0 5px;
        color: white;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 2px;
        white-space: nowrap;
    }

    .header-weather {
        margin: 0 5px;
        font-size: 16px;
        color: #eeeeee;
    }
</style>
