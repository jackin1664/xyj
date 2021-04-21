<template>
    <div id="app">
        <!--    头部-->
        <Header/>
        <Picture/>
        <Content/>
        <Footer/>
    </div>
</template>
<script>
    import Header from "@/components/Header";
    import Swiper from 'swiper'
    import Picture from "@/components/Picture";
    import Content from "@/components/Content";
    import Footer from "@/components/Footer";
    // import Footer from "@/components/Footer";

    export default {
        components: {
          Footer,
          Content,
          Picture,
            // Footer,
            Header,
        },
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                changeWX: false
            }
        },
        methods: {
            actionWX() {
                this.changeWX = true
            },
            actionCancel() {
                this.changeWX = false
            },
            slide(data) {
                console.log(data)
            },
            onTap(data) {
                console.log(data)
            },
            onInit(data) {
                console.log(data)
            },
            async getInviteLink() {
                let invite = this.$route.params.invite
                if (invite) {
                    window.localStorage.setItem(`inviteID`, invite)
                }
            },
            actionCloseTab() {
                this.dialoglist = false
                var mos = function (e) {
                    e.preventDefault();
                };
                document.body.style.overflow = '';//出现滚动条
                document.removeEventListener("touchmove", mos, false);
            },
            onSwiper(swiper) {
                console.log(swiper);
            },
            onSlideChange() {
                console.log('slide change');
            },
            goP() {
                let routeUrl = this.$router.resolve({
                    path: "/plante",
                });
                window.open(routeUrl.href, '_blank');
                // this.$router.push('plante')
            },
            actiondialog() {
                console.log(1)
                this.dialoglist = !this.dialoglist
                if (this.dialoglist == true) {
                    var mo = function (e) {
                        e.preventDefault();
                    };
                    document.body.style.overflow = 'hidden';
                    document.addEventListener("touchmove", mo, false);//禁止页面滑动
                } else {
                    var mos = function (e) {
                        e.preventDefault();
                    };
                    document.body.style.overflow = '';//出现滚动条
                    document.removeEventListener("touchmove", mos, false);
                }
                console.log(this.dialoglist)
            },
        },
        mounted() {
            this.getInviteLink()
            new Swiper('.swiper-container', {
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                // 如果需要滚动条
                // scrollbar: '.swiper-scrollbar',
                //如果需要自动切换海报
                autoplay: 3000
            })

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
<style scoped lang="less">

</style>
