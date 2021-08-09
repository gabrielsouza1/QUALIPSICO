<template>
  <div class="w-screen flex flex-col justify-between sessions">
    <Header />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/partials/Header.vue';
import Footer from '@/components/partials/Footer.vue';

export default {
  name: 'sessoes',
  components: {
    Header,
    Footer,
  },
};
</script>
