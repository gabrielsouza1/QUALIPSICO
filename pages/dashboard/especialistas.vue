<template>
  <div class="w-screen flex flex-col justify-between specialists">
    <Header />
    <Hero />
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/partials/Header.vue';
import Hero from '@/components/especialistas/Hero.vue';
import Footer from '@/components/partials/Footer.vue';

export default {
  name: 'especialistas',
  components: {
    Header,
    Hero,
    Footer,
  },
};
</script>
