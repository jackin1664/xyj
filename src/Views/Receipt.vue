    <template>
      <div>
        <Header/>
        <ContentReceipt/>
        <Footer/>
      </div>
    </template>

    <script>
    import Header from "@/components/Header";
    import ContentReceipt from "@/components/ContentReceipt";
    import Footer from "@/components/Footer";
    export default {
      name: "Receipt",
      components: {Footer, ContentReceipt, Header}
    }
    </script>

    <style scoped>

    </style>
