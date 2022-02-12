<template>
  <div class="w-screen flex flex-col justify-between plans">
    <Header />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/website/partials/Header.vue";
import Footer from "@/components/website/partials/Footer.vue";

export default {
  name: "planos",
  components: {
    Header,
    Footer
  }
};
</script>
