<template>
  <div>
    <Header/>
    <ContentRecond/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ContentRecond from "@/components/ContentRecond";
import Footer from "@/components/Footer";
export default {
name: "ReCond",
  components: {Footer, ContentRecond, Header}
}
</script>

<style scoped>

</style>
