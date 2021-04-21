    <template>
      <div>
        <Header/>
        <ContentStop/>
        <Footer/>
      </div>
    </template>

    <script>
    import Header from "@/components/Header";
    import ContentStop from "@/components/ContentStop";
    import Footer from "@/components/Footer";
    export default {
    name: "Stop",
      components: {Footer, ContentStop, Header}
    }
    </script>

    <style scoped>

    </style>
