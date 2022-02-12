<template>
  <div class="w-screen flex flex-col justify-between home">
    <Header />
    <Hero />
    <DigitalClinic />
    <Benefits />
    <QualiOffice />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/website/partials/Header.vue";
import Footer from "@/components/website/partials/Footer.vue";
import Hero from "@/components/website/profissional/Hero.vue";
import DigitalClinic from "@/components/website/profissional/DigitalClinic.vue";
import Benefits from "@/components/website/profissional/Benefits.vue";
import QualiOffice from "@/components/website/profissional/QualiOffice.vue";

export default {
  name: "Profissional",
  components: {
    Header,
    Footer,
    Hero,
    DigitalClinic,
    Benefits,
    QualiOffice
  }
};
</script>
