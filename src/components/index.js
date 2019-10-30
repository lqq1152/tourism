import Vue from 'vue'
import zHeader from './zHeader'
import zProgressBar from './zProgressBar'
import zDialog from './zDialog'

import zDialog2 from './zDialog2'
export default {
    install(Vue){
        Vue.mixin({
            components:{
                zHeader,
                zProgressBar,
                zDialog,
                zDialog2
            }
        })
    }
}