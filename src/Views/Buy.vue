<template>
  <div>
    <Header/>
    <ContentTwo/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ContentTwo from "@/components/ContentTwo";
import Footer from "@/components/Footer";
export default {
  name: "Buy",
  components: {Footer, ContentTwo, Header}
}
</script>

<style scoped>

</style>
