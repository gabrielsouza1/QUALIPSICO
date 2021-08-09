<template>
  <div class="w-screen flex flex-col justify-between home">
    <WhiteHeader />
    <Login />
    <!-- <WhiteFooter /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import WhiteHeader from '@/components/partials/WhiteHeader.vue';
//import WhiteFooter from '@/components/partials/WhiteFooter.vue';
import Login from '@/components/login/Login.vue';

export default {
  name: 'Home',
  components: {
    WhiteHeader,
    Login,
  },
};
</script>