<template>
  <div class="w-screen flex flex-col justify-between home">
    <WhiteHeader />

    <section class="flex flex-col items-center h-screen md:flex-row ">
      <div class="hidden w-full h-screen bg-white lg:block md:w-1/3 lg:w-2/3">
        <img
          src="@/assets/images/login.jpg"
          alt=""
          class="object-cover w-full h-full"
        />
      </div>
      <div
        class="flex items-center justify-center w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12"
      >
        <div class="w-full h-100">
          <a
            class="flex items-center w-32 mb-4 font-medium text-blueGray-900 title-font md:mb-0"
          >
            <div
              class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-300 to-blue-600"
            ></div>
            <h2
              class="text-lg font-bold tracking-tighter text-black uppercase duration-500 ease-in-out transform ttransition hover:text-lightBlue-500 dark:text-blueGray-400"
            >
              QualiPsico
            </h2>
          </a>
          <h1
            class="mt-12 text-2xl font-semibold text-black tracking-ringtighter sm:text-3xl title-font"
          >
            Recuperação de Conta
          </h1>

          <form class="mt-6" @submit.prevent="submit">
            <div data-children-count="1">
              <label
                class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700"
                >Email</label
              >
              <input
                type="email"
                name="email"
                v-model="email"
                placeholder="Seu Email "
                class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
              />
            </div>
            <button
              type="submit"
              class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
            >
              Enviar Link de Recuperação de Senha
            </button>
          </form>
          <hr class="w-full my-6 border-blueGray-300" />
          <p class="mt-8 text-center">
            Deseja realizar login?
            <NuxtLink
              :to="{ name: 'login' }"
              class="font-semibold text-blue-500 hover:text-blue-700"
            >
              Entre aqui
            </NuxtLink>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import WhiteHeader from "@/components/website/partials/WhiteHeader.vue";

export default {
  name: "ResetEmail",
  components: {
    WhiteHeader
  },

  middleware: "guest",

  data() {
    return {
      email: ""
    };
  },

  methods: {
    async submit() {
      try {
        await fetch("http://localhost/api/password/email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            email: this.email
          })
        });

        alert("Email de redefinição de senha enviado com sucesso!");

        await this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
