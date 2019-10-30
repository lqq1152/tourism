<template>
    <div class="container">
        <div id="amap"></div>
        <!--<input id="lnglat" style="z-index:200;position: absolute;top:0;width:100%" value="0">-->
    </div>
</template>

<script>
    let map;
    import invisible_button from '../../static/invisible_button.png'

    export default {
        name: "Navigation",
        data() {
            return {
                areaList: []
            }
        },

        methods: {
            navTo(lng, lat){
                // let link = 'https://uri.amap.com/marker?position=' + lng + ',' + lat + '&name=成都市';
                window.location.href = 'https://uri.amap.com/marker?position=' + lng + ',' + lat;
            },

            mapInit() {
                let _this = this;
                map = new AMap.Map('amap', {
                    resizeEnable: true,
                    center: [106.3033, 31.26998],
                    zoom: 12
                });

                let sw = new AMap.LngLat(106.176857, 31.185715);
                let ne = new AMap.LngLat(106.916405, 31.693694);

                let imageLayer = new AMap.ImageLayer({
                    bounds: new AMap.Bounds(sw, ne),
                    url: 'static/swiper/map.jpg', // 图片 Url
                    zIndex: 100,
                    zooms: [3, 18] // 设置可见级别，[最小级别，最大级别]
                });

                map.add(imageLayer);

                for (let item of this.areaList) {
                    let bounds = new AMap.Bounds(new AMap.LngLat(...item.sw), new AMap.LngLat(...item.ne));
                    let point = new AMap.GroundImage(invisible_button, bounds, {
                        map: map,
                        clickable: true
                    });

                    point.on('click', function (e) {
                        // console.log(item.name);
                        let msg = '是否导航到' + item.name + '?';
                        if(confirm(msg)){
                            _this.navTo(item.position[0], item.position[1]);
                        }
                    });
                }

                // map.on('click', function (e) {
                //     let inputElement =  document.getElementById("lnglat");
                //     inputElement.value = e.lnglat.getLng() + ', ' + e.lnglat.getLat();
                //     inputElement.select();
                //     document.execCommand("Copy");
                //     console.log('已复制：' +  e.lnglat.getLng() + ', ' + e.lnglat.getLat());
                // });
            },
        },

        mounted() {
            this.$axios.get('static/mock/navi.json').then(res => {
                this.areaList = res.data.areaList;
                this.mapInit();
            })
        }
    }
</script>

<style scoped>

    .container {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    #amap {
        width: 100%;
        height: 100%;
    }

    .button {
        z-index: 490;
        position: fixed;
        right: 0;
        top: 0;
        /*width: 120px;*/
        height: 30px;
        margin: 10px;
        padding: 0 10px;
        background-color: #ffffff;
        color: #25A5F7;
        border: 1px solid #25A5F7;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
    }

    .button-active {
        color: #ffffff;
        background-color: #25A5F7;
    }
</style>
