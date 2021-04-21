<template>
  <div>
    <Header/>
    <ContentDig/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ContentDig from "@/components/ContentDig";
import Footer from "@/components/Footer";
export default {
name: "Dig",
  components: {Footer, ContentDig, Header}
}
</script>

<style scoped>

</style>
