<template>
    <div class="container">
        <div class="button" @click="listVisible = !listVisible">列表</div>
        <transition name="toggle">
            <div id="panel" v-show="listVisible">
                <div v-for="item in showData" @click="going(item.location)" class="list-item">
                    <div class="list-text">
                        <div style="font-size: 16px">{{item.name}}</div>

                        <div style="color: #aaaaaa">{{item.address}}</div>
                    </div>
                    <div class="list-button">去这里</div>
                </div>
                <div class="list-pagination">
                    <div class="list-button" @click="prev" v-if="listPageIndex !== 1">上一页</div>
                    <div>{{listPageIndex}} / {{parseInt(listPageCount / 10)}}</div>
                    <div class="list-button" @click="next" v-if="listPageCount - listPageIndex * 10 >= 10">下一页
                    </div>
                </div>
            </div>
        </transition>
        <div id="amap"></div>
        <!--<div class="button" @click="search" style="right:200px">搜索</div>-->
        <div class="button" @click="toggle" style="right:60px" :class="{'button-active': isVisible}">{{isVisible ? '隐藏'
            : '显示'}}交通情况
        </div>
    </div>
</template>

<script>
    let map;
    let trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
    });
    var placeSearch;

    export default {
        name: "Map",
        data() {
            return {
                isVisible: true,
                listVisible: false,
                listPageIndex: 1,
                listPageCount: 1,
                tableData: [],
                walking: null,
                placeSearch: null,
                onLoading: false
            }
        },

        computed: {
            showData: function () {
                return this.tableData
            }
        },

        watch: {
            $route(to, from) {
                if(to.name === 'Map'){
                    map = new AMap.Map('amap', {
                        resizeEnable: true,
                        center: [106.3033, 31.26998],
                        zoom: 16
                    });

                    trafficLayer.setMap(map);
                    this.search(this.$route.params.query);
                }

            }
        },

        methods: {
            toggle() {
                if (this.isVisible) {
                    trafficLayer.hide();
                    this.isVisible = false;
                } else {
                    trafficLayer.show();
                    this.isVisible = true;
                }
            },

            toggleList() {

            },
            prev() {
                if (this.onLoading) return;
                this.listPageIndex -= 1;
                this.search(this.$route.params.query);
            },
            next() {
                if (this.onLoading) return;
                this.listPageIndex += 1;
                this.search(this.$route.params.query);
            },

            search(str) {
                let _this = this;
                _this.onLoading = true;

                AMap.service(["AMap.PlaceSearch"], function () {
                    let option = {
                        city: "仪陇县",
                        citylimit: true,
                        map: map,
                        pageIndex: _this.listPageIndex,
                        autoFitView: false
                    };
                    placeSearch = new AMap.PlaceSearch(option);
                    placeSearch.search('仪陇县' + str, function (status, result) {
                        _this.onLoading = false;
                        if (status === 'complete') {
                            _this.listPageCount = result.poiList.count;
                            _this.tableData = result.poiList.pois;
                        }
                    })
                })
            },

            going(poi) {
                let _this = this;
                AMap.plugin('AMap.Walking', function () {
                    if (_this.walking) _this.walking.clear();
                    _this.walking = new AMap.Walking({
                        map: map
                    });
                    _this.walking.search(new AMap.LngLat(106.3033, 31.26998), new AMap.LngLat(poi.lng, poi.lat), function (status, result) {
                        if (status === 'complete') {
                            _this.listVisible = false;
                        }
                    });
                })

            }
        },
        mounted() {
            map = new AMap.Map('amap', {
                resizeEnable: true,
                center: [106.3033, 31.26998],
                zoom: 16
            });

            trafficLayer.setMap(map);
            // map.add(trafficLayer);
            this.search(this.$route.params.query);
        }
    }
</script>

<style scoped>
    .toggle-enter-active, .toggle-leave-active {
        transition: opacity .5s;
    }

    .toggle-enter, .toggle-leave-to {
        opacity: 0;
    }

    .container {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    #amap {
        width: 100%;
        height: 100%;
    }

    #panel {
        z-index: 500;
        position: absolute;
        top: 48px;
        left: 0;
        width: 100%;
        max-height: 95%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        background-color: white;
        box-sizing: border-box;
        padding: 10px 0;
        border: 1px solid #eeeeee;
        border-radius: 15px;
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

    .list-item {
        width: 100%;
        box-sizing: border-box;
        height: 50px;
        display: flex;
        padding: 0 10px;
        /*margin:0 10px;*/
        border-bottom: 1px solid #eeeeee;
    }

    .list-text {
        flex: auto;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }

    .list-button {
        flex: 0 0 60px;
        height: 30px;
        margin: 5px;
        padding: 0 5px;
        background-color: #ffffff;
        color: #25A5F7;
        border: 1px solid #25A5F7;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
    }

    .list-button:hover {
        color: #ffffff;
        background-color: #25A5F7;
    }

    .list-pagination {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 10px;
    }
</style>
