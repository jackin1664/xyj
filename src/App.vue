<template>
    <div id="root">
        <router-view></router-view>
    </div>
</template>

<script>
    import bus from './bus.js'

    export default {
        name: 'App',
        components: {
            // Home
        },
        methods: {
            scanMetaMaskAccount() {
                let v = this
                setTimeout(function () {
                    window.ethereum.enable()
                    v.action.scanMetaMaskAccount()
                }, 1000)
            },
        },
        created() {
            bus.appvue = this
            bus.$store = this.$store
        },
        mounted() {
            this.scanMetaMaskAccount()
            this.action.listenMetaMask()
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #root {
        min-height: 100vh;
        /*background-position: 50% center;*/
        /*background-size: 100%;*/
        /*background-repeat: no-repeat;*/
        background-attachment: fixed;
        /*background-image: url("../src/media/bg-main.13b7b0cd.png");*/
    }

    @media (max-width: 1200px) {
        #root {
            width: 100%;
            height: 100%;
        }
    }

</style>
