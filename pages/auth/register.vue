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
            Crie sua conta
          </h1>
          <form class="mt-6" @submit.prevent="submit">
            <!-- <alert-success :form="form">
            Nós enviamos um email para ativar sua conta
          </alert-success> -->

            <input type="hidden" v-model="role_id" name="role_id" />

            <div data-children-count="1">
              <label
                class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700"
                >Primeiro Nome</label
              >
              <input
                type="text"
                v-model="first_name"
                name="first_name"
                placeholder="Seu Primeiro Nome "
                class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
              />
            </div>

            <div data-children-count="1">
              <label
                class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700"
                >Sobrenome</label
              >
              <input
                type="text"
                v-model="last_name"
                name="last_name"
                placeholder="Seu Sobrenome "
                class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
              />
            </div>

            <div data-children-count="1">
              <label
                class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700"
                >Email</label
              >
              <input
                type="email"
                v-model="email"
                name="email"
                placeholder="Seu Email "
                class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
              />
            </div>
            <div class="mt-4" data-children-count="1">
              <label
                class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700"
                >Senha</label
              >
              <input
                type="password"
                v-model="password"
                name="password"
                placeholder="Sua Senha "
                minlength="6"
                class="w-full px-4 py-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
              />
            </div>

            <div class="mt-4" data-children-count="1">
              <label
                class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700"
                >Confirmar Senha</label
              >
              <input
                type="password"
                v-model="password_confirmation"
                name="password_confirmation"
                placeholder="Sua Senha Novamente"
                minlength="6"
                class="w-full px-4 py-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
              />
            </div>

            <div class="mt-2 text-right">
              <!-- <a href="#" class="text-sm font-semibold leading-relaxed text-blueGray-700 hover:text-black focus:text-blue-700">Esqueceu sua senha?</a> -->
            </div>
            <button
              type="submit"
              class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
            >
              Criar Conta
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

    <!-- <WhiteFooter /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import WhiteHeader from "@/components/website/partials/WhiteHeader.vue";
//import WhiteFooter from '@/components/partials/WhiteFooter.vue';

export default {
  name: "Register",

  components: {
    WhiteHeader
  },

  middleware: "guest",

  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      role_id: 3
    };
  },

  methods: {
    async submit() {
      try {
        const response = await fetch("http://localhost/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          mode: "no-cors",
          body: JSON.stringify({
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
            role_id: this.role_id
          })
        });

        console.log(response);

        await alert("Foi enviado um email para você ativar sua conta!");

        // await this.$router.push("/login");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
