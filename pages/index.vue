<template>
  <div class="w-screen flex flex-col justify-between home">
    <Header />
    <Hero />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/website/partials/Header.vue";
import Footer from "@/components/website/partials/Footer.vue";
import Hero from "@/components/website/home/Hero.vue";
import Section1 from "@/components/website/home/Section1.vue";
import Section2 from "@/components/website/home/Section2.vue";
import Section3 from "@/components/website/home/Section3.vue";
import Section4 from "@/components/website/home/Section4.vue";
import Section5 from "@/components/website/home/Section5.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Hero,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5
  }
};
</script>
