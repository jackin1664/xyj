<template>
  <div>
    <Header/>
    <ContentInvite/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ContentInvite from "@/components/ContentInvite";
import Footer from "@/components/Footer";
export default {
name: "Invite",
  components: {Footer, ContentInvite, Header}
}
</script>

<style scoped>

</style>
