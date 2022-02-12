<template>
  <div class="w-screen flex flex-col justify-between specialists">
    <Header />
    <Hero />

    <div class="flex items-center w-full">
      <Filters />
    </div>

    <div
      class="w-full flex flex-col place-center justify-center items-center h-auto"
    >
      <div class="my-4 flex justify-center" v-for="index in 10" :key="index">
        <SpecialistCard />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/website/partials/Header.vue";
import Hero from "@/components/website/patient/especialistas/Hero.vue";
import Filters from "@/components/website/patient/especialistas/Filters.vue";
import SpecialistCard from "@/components/website/patient/especialistas/SpecialistCard.vue";
import Footer from "@/components/website/partials/Footer.vue";

export default {
  name: "especialistas",
  components: {
    Header,
    Hero,
    Filters,
    SpecialistCard,
    Footer
  }
};
</script>
