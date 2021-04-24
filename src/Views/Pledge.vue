    <template>
        <div>
          <Header/>
          <ContentPledge/>
          <Footer/>
        </div>
    </template>

    <script>
    import Header from "@/components/Header";
    import ContentPledge from "@/components/ContentPledge";
    import Footer from "@/components/Footer";
    export default {
      name: "Pledge",
      components: {Footer, ContentPledge, Header}
    }
    </script>

    <style scoped>

    </style>
