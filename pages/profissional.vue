<template>
  <div class="w-screen flex flex-col justify-between home">
    <Header />
    <Hero />
    <DigitalClinic />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/partials/Header.vue';
import Footer from '@/components/partials/Footer.vue';
import Hero from '@/components/profissional/Hero.vue';
import DigitalClinic from '@/components/profissional/DigitalClinic.vue';

export default {
  name: 'Profissional',
  components: {
    Header,
    Footer,
    Hero,
    DigitalClinic
  },
};
</script>
