<template>
  <div class="w-screen flex flex-col justify-between home">
    <WhiteHeader />
    <Register />
    <!-- <WhiteFooter /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import WhiteHeader from '@/components/partials/WhiteHeader.vue';
//import WhiteFooter from '@/components/partials/WhiteFooter.vue';
import Register from '@/components/register/Register.vue';

export default {
  name: 'Home',
  components: {
    WhiteHeader,
    Register,
  },
};
</script>