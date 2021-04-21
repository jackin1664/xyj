import Vue from 'vue'
import App from './App.vue'
import router from './router/index' //引入路由
import i18n from '@/locale/index'
import VueClipboard from 'vue-clipboard2'

import store from './store'
import api from './api/api'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'

//以太坊web3
const Web3 = require('web3');

if (window.web3 && (window.ethereum.chainId == '0x80' || window.ethereum.chainId == '128')) {
    Vue.prototype.myWeb3 = new Web3(window.web3.currentProvider);
}

// 挂载action
import action from "./action/index"

Vue.prototype.action = action

// Vue.use(VueAwesomeSwiper)
Vue.use(VueClipboard)

Vue.config.productionTip = false

import toastRegistry from './vendor/toast/index'

Vue.use(toastRegistry)

new Vue({
    i18n,
    api,
    router,
    store,
    render: h => h(App),
}).$mount('#root')
