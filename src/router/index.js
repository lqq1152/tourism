import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'
import detailPic from '@/pages/detailPic/Detail'
import List from '@/pages/list/List'
import Map from '@/pages/Map'
import Flow from '@/pages/Flow'
import LineWay from '@/pages/line/Line'
import Call from '@/pages/Call'
import Navigation from '@/pages/Navigation'
import Feedback from '@/pages/Feedback'
import ShopList from '@/pages/ShopList'
import Audio from '@/pages/Audio'
import Suggest from "../pages/Suggest";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail
        },
        {
            path: '/detailPic/:id',
            name: 'DetailPic',
            component: detailPic
        },
        {
            path: '/list/:id',
            name: 'List',
            component: List
        },
        {
            path: '/map/:query',
            name: 'Map',
            component: Map
        },
        {
            path: '/flow',
            name: 'Flow',
            component: Flow
        },
        {
            path: '/line',
            name: 'LineWay',
            component: LineWay
        },
        {
            path: '/call',
            name: 'Call',
            component: Call
        },
        {
            path: '/navigation',
            name: 'Navigation',
            component: Navigation
        },
        {
            path: '/feedback',
            name: 'Feedback',
            component: Feedback
        },
        {
            path: '/shop/:query',
            name: 'ShopList',
            component: ShopList
        },
        {
            path: '/audio',
            name: 'Audio',
            component: Audio
        },
        {
            path: '/suggest',
            name: 'Suggest',
            component: Suggest
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})
