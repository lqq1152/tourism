<template>
    <div>
        <z-header title="景区客流量" color="#34394f" />
        <div class="box">
            <div class="title">
                <span>仪陇实时客流量</span>
            </div>
            <div class="content">
                <div style="display: flex;margin-bottom:15px;align-items: center;justify-content: flex-end">
                    <div style="background-color: #fe7a13;width:10px;height:10px;margin-right: 5px"></div>
                    <span style="color: #fe7a13;margin-right: 10px">实时客流量</span>
                    <div style="background-color: gainsboro;width:10px;height:10px;margin-right: 5px"></div>
                    <span style="color: gainsboro;margin-right: 10px">最大承载量</span>
                </div>
                <z-progress-bar
                    v-for="(item, index) of areaData"
                    v-bind="item"
                    :key="'progressbar' + index"
                >

                </z-progress-bar>
            </div>
        </div>

        <div class="box-background" v-for="(item, index) of areaData" :style="{'background-image': 'url('+ item.backgroundImage +')'}">
            <div class="single-box">
                <div style="text-align: center;color: #ffffff;font-size:20px;margin:20px 0">
                    <span>{{item.title}}</span>
                </div>
                <div style="color:#fe7a13;font-size: 15px;margin:10px 0">当前客流量：{{item.value}}</div>

                <van-circle
                    v-model="item.currentRate"
                    :rate="item.value / item.max * 100"
                    :color="item.gradientColor"
                    :size="180"
                    :stroke-width="60"
                >
                    <div style="color:#ffffff;height: 100%;align-items: center;display: flex;justify-content: center;font-weight: bold;font-size: 20px">
                        {{(item.value / item.max * 100).toFixed(2)}} %
                    </div>
                </van-circle>
                <div style="color:gainsboro;font-size: 16px;margin:10px 0">最大客流量：{{item.max}}</div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: "Flow",

        data() {
            return {
                areaData: [
                    {title: "朱德故里", value: 32456, max: 50000, backgroundImage: "../../static/zdgl.jpg", currentRate: 0, gradientColor: {
                            '0%': '#fabb24',
                            '100%': '#ff7008'
                        },},
                    {title: "张思德纪念馆", value: 8647, max: 20000, backgroundImage: "../../static/zsdjny.jpg", currentRate: 0,gradientColor: {
                            '0%': '#b7f991',
                            '100%': '#63ddb3'
                        }},
                    {title: "丁氏庄园", value: 1205, max: 5000, backgroundImage: "../../static/dszy.jpg", currentRate: 0,gradientColor: {
                            '0%': '#ffaa8e',
                            '100%': '#fabb24'
                        }},
                    {title: "客家民俗街", value: 645, max: 5000, backgroundImage: "../../static/kjmsj.jpg", currentRate: 0,gradientColor: {
                            '0%': '#ff5d5e',
                            '100%': '#639bf2'
                        }}
                ],

                currentRate: 0
            }
        },

        mounted() {
        }
    }
</script>

<style scoped>
    .box {
        box-sizing: border-box;
        width: 96%;
        height: 340px;
        margin: 10px 2% 10px 2%;
        border-radius: 16px;
        background-color: #25283a;
    }

    .single-box {
        box-sizing: border-box;
        border-radius: 16px;
        height: 340px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .box-background {
        box-sizing: border-box;
        width: 96%;
        height: 340px;
        margin: 10px 2%;
        border-radius: 16px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .title {
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-radius: 16px 16px 0 0;
        background-color: #34394f;
        padding-left: 10px;
        font-size: 16px;
        color: #dddddd
    }

    .content {
        padding: 20px 10px 10px 10px;
        display: flex;
        flex-direction: column;
    }
    .content .z-progress-bar .z-progress-bar-text span:first-child{
        color:#fe7a13 !important;
    }
</style>