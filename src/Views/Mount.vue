<template>
  <div>
    <Header/>
    <ContentMount/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ContentMount from "@/components/ContentMount";
import Footer from "@/components/Footer";

export default {
  name: "Mount",
  components: {Footer, ContentMount, Header}
}
</script>

<style scoped>

</style>
