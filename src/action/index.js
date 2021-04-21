import bus from '../bus.js'
import Vue from "vue";

export default {
    async getAddress() {
        if (window.ethereum) {
            let address = await window.ethereum.selectedAddress
            if (address) {
                return address
            }
        }
    },
    async getSortAddress() {
        if (window.ethereum) {
            let address = await window.ethereum.selectedAddress
            if (address) {
                return address.substr(0, 6) + '...' + address.substr(38)
            }
        }
    },
    // 读取metamask，更新账号等
    async scanMetaMaskAccount() {
        //以太坊web3
        const Web3 = require('web3');
        if (window.web3 && window.ethereum && (window.ethereum.chainId == '0x80' || window.ethereum.chainId == '128')){
            Vue.prototype.myWeb3 =  new Web3(window.web3.currentProvider);
        }
        if (window.ethereum) {
            let address = await window.ethereum.selectedAddress
            // console.log(2222222, address)
            // 收集账号状态
            let account_json = {
                default_address: address
            };
            // 提交账号状态给全局
            bus.appvue.$store.commit("setAccountKey", account_json);
        }
    },

    listenMetaMask() {
        let me = this
        window.addEventListener("message", function (e) {
            let d = e.data
            //检测到是有修改以后
            if (d.target == 'metamask-inpage') {
                // 重新读取账号
                me.scanMetaMaskAccount()
            }
        });
    }
}
