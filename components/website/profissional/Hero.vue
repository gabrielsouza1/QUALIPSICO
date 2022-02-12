<template>
  <section class="text-black bg-purple-700">
      <div class="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
        <div class="h-full flex flex-col items-start text-left md:w-1/2 lg:pl-24 md:pl-16">
        <h2 class="mb-8 text-lg font-semibold tracking-widest text-white uppercase title-font">Conheça os benefícios de fazer parte da rede de especialistas QualiPsico</h2>
        <h1 class="mb-8 text-2xl font-bold tracking-tighter text-left text-white lg:text-3xl title-font">Faça parte da maior comunidade de especialistas do Brasil</h1>
      </div>
      <company-form />
    </div>
  </section>
</template>

<script>
import CompanyForm from './CompanyForm.vue';

export default {
  name: 'Hero',
  components: {
    CompanyForm
  },
};
</script>

</script>
