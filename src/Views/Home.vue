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
            }
        },
        methods: {
            async getInviteLink() {
                let invite = this.$route.params.invite
                if (invite) {
                    window.localStorage.setItem(`inviteID`, invite)
                }
            },
        },
        mounted() {
            this.getInviteLink()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
<style scoped lang="less">

</style>
