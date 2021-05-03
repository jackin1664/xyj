<template>
  <div class="pack-content">
    <Header/>
    <ContentPack/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ContentPack from "@/components/ContentPack";
import Footer from "@/components/Footer";
export default {
  name: "BackPack",
  components: {Footer, ContentPack, Header}
}
</script>

<style scoped>
.pack-content{
}
</style>
